import React, { useState, useEffect, useRef } from "react";
import AWS from "aws-sdk";
import styled from "styled-components";


AWS.config.update({
  accessKeyId: process.env.REACT_APP_ACCESS_KEY,
  secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY
});

const s3 = new AWS.S3();

const params = {
  Bucket: "our-gallery",
  Delimiter: "",
  Prefix: ""
};

const BucketUrl = "https://our-gallery.s3.eu-central-1.amazonaws.com/";
export default function Gallery  ()  {
  const [listFiles, setListFiles] = useState(null);
  const [loading, setLoading] = useState(true);

  // const imageRef = useRef()
  // console.log (imageRef)

  useEffect(() => {
    
    s3.listObjectsV2(params, (err, data) => {
      if (err) {
        console.log(err, err.stack);
      } else {
        setListFiles(data.Contents);
      }
    });
  }, []);

  console.log(listFiles)         
  return (
    <Styles className="card">

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
    </Styles>
  );
};


const Styles = styled.div`
    grid-column-gap: 40px;
    grid-row-gap:40px;
    align-items: start;
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );

    img{
        object-fit:cover;
    }
`;
