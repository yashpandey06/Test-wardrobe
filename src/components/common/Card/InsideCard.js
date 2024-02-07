import React from 'react';
import './Card.css'; // You can create a separate CSS file for styling
import { useNavigate } from "react-router-dom";


const InsideCard = ({blue,titleOnClickPath,   cildClass, title, children }) => {
  const navigate = useNavigate();

  return (
    <div className={"inside-card flex flex-space-between "+cildClass}>
      <div className='inside-card-body'>
      <h3 className={blue?"inside-card-title-blue":"inside-card-title"} onClick={()=>navigate(titleOnClickPath)}>{title.split("/").map((word, index) => (
          <h3 className={blue?"inside-card-title-blue":"inside-card-title"} key={index}>{word}</h3>
        ))}</h3>
      <p className={blue?"inside-card-content-blue":"inside-card-content"}>{children}</p>
      </div>
    </div>
  );
};

export default InsideCard;