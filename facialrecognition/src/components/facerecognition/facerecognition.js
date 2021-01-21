import React from "react";

const FaceRecognition = ({ imageUrl }) => {
  console.log("check: ", imageUrl);
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img
          id="inputImage"
          alt="faceImage"
          src={imageUrl}
          width="500px"
          height="auto"
        />
      </div>
    </div>
  );
};

export default FaceRecognition;
