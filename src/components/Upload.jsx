import styled from "styled-components";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import AWS from "aws-sdk";
require("dotenv").config();

const S3_BUCKET = "our-gallery";
const REGION = "eu-central-1";

AWS.config.update({
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
});

const myBucket = new AWS.S3({
  params: { Bucket: S3_BUCKET },
  region: REGION,
});

//-----S3 Cofnig ----

const Upload = () => {
    const [progress, setProgress] = useState(0);
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileName, setFileName] = useState(null);
  
    const handleFileInput = (e) => {
      selectedFile && setSelectedFile(e.target.files[0]);
      setFileName(e.target.files[0].name);
    };
  
    const uploadFile = (file) => {
      setFileName(null);
      const params = {
        ACL: "public-read",
        Body: file,
        Bucket: S3_BUCKET,
        Key: file.name,
      };
  
      myBucket
        .putObject(params)
        .on("httpUploadProgress", (evt) => {
          setProgress(Math.round((evt.loaded / evt.total) * 100));
        })
        .send((err) => {
          if (err) console.log(err);
        });
    };
  
    return (
      <Styles>
        <div className="flex-row">
          <label className="btn">
            <input
              className="input"
              type="file"
              multiple="multiple"
              onChange={handleFileInput}
            />
            Select files
          </label>
  
          {fileName && (
            <div className="btn" onClick={() => uploadFile(selectedFile)}>
              {" "}
              Upload to S3
            </div>
          )}
          <Link to="/" className="btn">Recents</Link>
          <Link to="/gallery" className="btn">Gallery</Link>
        </div>
  
        {fileName && (
          <div className="progress">
            Uploading image <b>{fileName}</b> : {progress}%
          </div>
        )}
      </Styles>
    );
  };
  
  export default Upload;

  const Styles = styled.div`
  padding: 5%;
  .btn {
    border: 1px solid #ccc;
    padding: 6px 12px;
    cursor: pointer;
    display: inline-block;

    :hover {
      background-color: lightgrey;
    }
  }
  .flex-row {
    gap: 30px;
    margin-bottom: 100px;
  }
  .progress {
    text-align: center;
  }
`;