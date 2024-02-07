import React from 'react';
import './Slide.css'; // You can create a separate CSS file for styling

const Slide = ({blue, title,leftImageSrc, children }) => {
  return (
    <div className={blue?"slide-blue flex flex-space-between":"slide flex flex-space-between"}>
      <div className='slide-body'>
      <h3 >{title.split("/").map((word, index) => (
          <h1 key={index} className={blue?"slide-title-blue bold":"slide-title bold "} style={{textAlign: "center"}}>{word}</h1>
        ))}</h3>
      <p className={blue?"slide-content-blue":"slide-content"}>{children}</p>
      </div>
     {leftImageSrc && <div style={{width:"100%"}}>
      <img className='slide-image' src={leftImageSrc} alt="Cloths" />
      </div>}
    </div>
  );
};

export default Slide;
