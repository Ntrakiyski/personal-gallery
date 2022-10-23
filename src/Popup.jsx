import React from 'react'
import styled from "styled-components";

const awsUrl = "https://kipmi-first-global-bucket.s3.amazonaws.com/";
const format = ".jpg";


export default function Popup({getclassName, setPopup}) {
 
  return (
    <Styles >
        <img
    alt="image"
    src={awsUrl + getclassName + format}
  />
     <div className="close" onClick={() => setPopup(false)}>
     <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0zm0 961.008c-247.024 0-448-201.984-448-449.01 0-247.024 200.976-448 448-448s448 200.977 448 448-200.976 449.01-448 449.01zm181.008-630.016c-12.496-12.496-32.752-12.496-45.248 0L512 466.752l-135.76-135.76c-12.496-12.496-32.752-12.496-45.264 0-12.496 12.496-12.496 32.752 0 45.248L466.736 512l-135.76 135.76c-12.496 12.48-12.496 32.769 0 45.249 12.496 12.496 32.752 12.496 45.264 0L512 557.249l135.76 135.76c12.496 12.496 32.752 12.496 45.248 0 12.496-12.48 12.496-32.769 0-45.249L557.248 512l135.76-135.76c12.512-12.512 12.512-32.768 0-45.248z"></path></svg>
      </div>
  </Styles>
  )
}

const Styles = styled.div`
display: flex;
align-items: center;
justify-content: center;
position:absolute;
top:0;
left:0;
width:100vw;
height:100vh;
background:rgba(36,36,36,0.9);
z-index:100;
svg{
    padding:20px;
    font-size:38px;
    color:white;
}
.close {
    position: absolute;
    z-index: 101;
    top: 0;
    right: 0;
    cursor: pointer;
  }
  img{
    max-height:80vh;
    max-width:90vw;
  }
`