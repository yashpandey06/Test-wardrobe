import React from 'react';
import './Card.css'; // You can create a separate CSS file for styling

const Card = ({cildClass, title, topImageSrc, leftImageSrc, children }) => {
  return (
    <div className={"card flex flex-space-between "+cildClass}>
      {topImageSrc && <div style={{width:"100%",height: "260px",margin:"auto"}}>
        <img className='card-image' src={topImageSrc} alt="Cloths" />
        </div>}
      <div className='card-body'>
          <h3 className="card-title">{title.split("/").map((word, index) => (
            <div key={index}>{word}</div>
          ))}</h3>
        <p className="card-content">{children}</p>
      </div> 
      {leftImageSrc && <div style={{width:"100%"}}>
        <img className='card-image' src={leftImageSrc} alt="Cloths" />
        </div>}
    </div>
  );
};

export default Card;
