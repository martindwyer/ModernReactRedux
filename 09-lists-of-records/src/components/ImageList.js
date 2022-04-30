import React from "react";

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return <img src={image.urls.regular} key={image.id} />;
  });
  return <div>{images}</div>;
};

export default ImageList;
