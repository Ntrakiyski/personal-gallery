import styled from "styled-components";
import React, { useState, useEffect } from "react";
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
  const [isUploading, setUploading] = useState(1);

  const handleFileInput = (e) => {
    setSelectedFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const uploadFile = (file) => {
    setFileName(null);
    setUploading(2);
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
  useEffect(() => {
    if (progress === 100) {
      setUploading(3);
    }
  }, [progress]);

  return (
    <Styles className="flex-col">
      <div className="select-input">
        <label>
          <input
            className="input"
            type="file"
            multiple="multiple"
            onChange={handleFileInput}
          />
          Select files
        </label>
      </div>

      {selectedFile && (
        <div className="image-preview">
          <img
            src={URL.createObjectURL(selectedFile)}
            width="100%"
            height="100%"
          />
          {selectedFile && (
            <div className="flex-row uplaod">
              {isUploading === 1 ? (
                <div
                  className="btn cta"
                  onClick={() => uploadFile(selectedFile)}
                >
                  Upload image <b>{fileName}</b>
                </div>
              ) : isUploading === 2 ? (
                <div className="btn">Uploading: {progress}%</div>
              ) : (
                isUploading === 3 && <div>Uploaded</div>
              )}
            </div>
          )}
        </div>
      )}
    </Styles>
  );
};

export default Upload;

const Styles = styled.div`
  .flex-row {
    gap: 30px;
    margin-bottom: 100px;
  }
  gap: 40px;

  .select-input {
    label {
      border: 1px solid #ccc;
      padding: 6px 12px;
      cursor: pointer;
      padding: 6px 12px;
      :hover {
        background-color: lightgrey;
      }
    }
    width: 100px;
    text-align: center;
  }
  .image-preview {
    max-height: 400px;

    img {
      object-fit: cover;
    }
  }

  .cta {
    background-color: lightgreen;
    :hover {
      background-color: #78ca78;
    }
  }
`;
