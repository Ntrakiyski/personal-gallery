import React, { useState, useEffect, useRef } from "react";
import AWS from "aws-sdk";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import Placeholder from "./Placeholder";
import Loading from "./Loading";

AWS.config.update({
  accessKeyId: process.env.REACT_APP_ACCESS_KEY,
  secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
});

const s3 = new AWS.S3();

const BucketUrl = "https://our-gallery.s3.eu-central-1.amazonaws.com/";
export default function GalleryComponent({ prefix }) {
  const [listFiles, setListFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadMore, setLoadMore] = useState(5);

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });

  var params = {
    Bucket: "our-gallery",
    Delimiter: "",
    Prefix: prefix,
    MaxKeys: loadMore,
    StartAfter: prefix,
  };
  useEffect(() => {
    s3.listObjectsV2(params, (err, data) => {
      if (err) {
        console.log(err, err.stack);
      } else setListFiles(data.Contents);
    });
  }, [loadMore, loading, listFiles]);

  return (
    <Styles>
      {!listFiles.length && <Placeholder />}
      <div className="grid">
        {listFiles &&
          listFiles.map((name, index) => (
            <img
              key={index}
              onLoad={() => setLoading(false)}
              alt={name.key}
              src={
                loading
                  ? "https://www.russorizio.com/wp-content/uploads/2016/07/ef3-placeholder-image.jpg"
                  : BucketUrl + name.Key
              }
              width="100%"
              height="100%"
            />
          ))}
        {listFiles.length >= loadMore && (
          <div ref={ref} className="load-more">
            <Loading
              inView={inView}
              setLoadMore={setLoadMore}
              loadMore={loadMore}
            />
          </div>
        )}
      </div>
    </Styles>
  );
}

const Styles = styled.div`
  .grid {
    grid-column-gap: 40px;
    grid-row-gap: 40px;
    align-items: start;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  img {
    object-fit: cover;
  }
`;
