import React from 'react';
import './AboutUS.css'; // You can create a separate CSS file for styling
import Slide from '../common/Slide/Slide';
import InsideCard from '../common/Card/InsideCard';
// import paintImage1 from '../common/images/busniess_model.png';

const AboutUS = (props) => {

  return (
    <div className="AboutUS">
        <Slide title="Our Mission and Vision">
      <div style={{display:"flex",justifyContent:'space-around'}}>
        <InsideCard title="Mission">Empower our customers to express themselves through fashion and offer them a seamless and personalized experience.</InsideCard>
        <InsideCard title="Vision">To revolutionize the fashion industry by providing accessible, sustainable, and innovative fashion solutions.</InsideCard>
      </div>
      </Slide>

      <Slide title="Our Business Model" 
      // leftImageSrc={paintImage1}
      >
      <div style={{display:"flex",justifyContent:'flex-start'}}>
        <div className='index bold' >1</div>
        <div><div style={{fontSize:"1.5em"}} className='inside-card-title bold'>Subscription-Based</div><div>Customers pay a monthly fee and get access to our personalized styling and wardrobe Styling services.</div></div></div>
        <div style={{display:"flex",justifyContent:'flex-start'}}>
          <div className='index bold'>2</div>
          <div><div style={{fontSize:"1.5em"}} className='inside-card-title bold'>Wardrobe Styling</div>
          <div>We help you declutter and organize your wardrobe, and provide tips on how to maintain it. A clean wardrobe equals a clear mind!</div>
          </div></div>
        
        <div style={{display:"flex",justifyContent:'flex-start'}}>
        <div className='index bold'>3</div>
        <div><div style={{fontSize:"1.5em"}} className='inside-card-title bold'>Clothing Rental</div>
        <div>For special events or just because, rent designer outfits at an affordable price and make a statement.</div>
        </div>
      </div>
      </Slide>
    </div>
  );
};

export default AboutUS;
