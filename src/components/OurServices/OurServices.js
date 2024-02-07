import React from 'react';
import './OurServices.css';
import Slide from '../common/Slide/Slide';
import { useLocation } from 'react-router-dom';


const OurSerices = (props) => {
    //const [currentPage,setCurrentPage]=React.useState(1)
    const location = useLocation();
    
    const currentPage=location.pathname.split("/")[2]

//     React.useEffect(()=>{
//         console.log(location)
//      let Page = location.pathname.split("/")[2];
//      setCurrentPage(Page)
//   })

  return (
    <div className="OurSerices" >
      

      {currentPage==="personal-styling" && <><Slide title="Personal Styling Plans">
      Our personal styling plans are designed to help you look and feel your best. We offer three packages to choose from, each tailored to meet your unique style and needs. Whether you're looking for a one-time styling session or ongoing support, we've got you covered. Our expert stylists will work with you to create a personalized plan that fits your budget and lifestyle. Get started today and experience the confidence that comes with looking and feeling your best!
      </Slide>
      <Slide title="Personal Styling Packages">
      <div>
      Our personal styling packages are designed to meet your unique needs and budget. Choose from our Silver, Gold, and Platinum packages to get the level of service that's right for you. Our expert stylists will work with you to create a personalized plan that fits your lifestyle and fashion goals. Get started today and experience the confidence that comes with looking and feeling your best!
      </div>
      <div className='card-title bold'>
      Pricing
      </div>
      <div className=''><table className='pricing-table'>
        <thead>
        <tr>
        <th></th>
                <th>Silver</th>
                <th>Gold</th>
                <th>Platinum</th>
            </tr>
        </thead>
        <tbody>
            {/* <tr>
            <td className='bold'>Price</td>
                <td>1499/session</td>
                <td>3499/session</td>
                <td>9999/session</td>
            </tr> */}
            <tr>
            <td className='bold'>Personal Consultation</td>
                <td>One-on-one meeting with a stylist</td>
                <td>In-depth consultation with a seasoned stylist</td>
                <td>VIP consultation with a renowned celebrity stylist</td>
            </tr>
            <tr>
            <td className='bold'>Body Analysis</td>
                <td>Assessment of body shape and proportions</td>
                <td>Comprehensive body shape and proportion analysis</td>
                <td>Advanced body shape and proportion analysis</td>
            </tr>
            <tr>
            <td className='bold'>Color Analysis</td>
                <td>Determination of the most flattering color palette</td>
                <td>Full-color analysis for clothing and makeup</td>
                <td>Full-color analysis for clothing, makeup, and hair</td>
            </tr>

            <tr>
            <td className='bold'>Style Assessment</td>
                <td>Evaluation of personal style preferences</td>
                <td>Detailed evaluation of personal style</td>
                <td>Extensive evaluation of personal style</td>
            </tr>
            <tr>
            <td className='bold'>Wardrobe Audit</td>
                <td>Recommendations for essential clothing pieces</td>
                <td>In-home assessment of current wardrobe</td>
                <td>Comprehensive assessment with closet organization</td>
            </tr>
            <tr>
            <td className='bold'>Personal Shopping</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>Exclusive personal shopping experiences</td>
            </tr>
            <tr>
            <td className='bold'>Custom Outfit Creation</td>
                <td>N/A</td>
                <td>Creation of one custom outfit tailored to you</td>
                <td>Creation of multiple custom outfits</td>
            </tr>
            <tr>
            <td className='bold'>Seasonal Updates</td>
                <td>N/A</td>
                <td>Style recommendations for each season</td>
                <td>Seasonal wardrobe updates and planning</td>
            </tr>
            <tr>
            <td className='bold'>Styling Tips</td>
                <td>Practical advice for everyday outfits</td>
                <td>N/A</td>
                <td>24/7 access to stylist for style emergencies</td>
            </tr>
            <tr>
            <td className='bold'>Red Carpet Events Styling</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>VIP styling for special events and red carpets</td>
            </tr>
        </tbody>
    </table></div>
      </Slide></>}

      {currentPage==="wardrobe-styling" && <><Slide title="Wardrobe Styling">
      <div>
      This package is designed for those looking to kickstart their style journey. 
      The stylist will assess your current wardrobe, create a personalized style book with outfit ideas, 
      take you on a shopping trip to revamp your wardrobe, and provide seasonal recommendations to keep your style fresh.
      </div>
      <div className='card-title bold'>
      Pricing
      </div>
      <div><table className='pricing-table'>
        <thead>
        <tr>
        <th></th>
                <th>Executive</th>
                <th>VIP</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td className='bold'>Price</td>
                <td>7499/session</td>
                <td>14499/session</td>
            </tr>
            <tr>
            <td className='bold'>Wardrobe Audit</td>
                <td>In-home assessment of current wardrobe</td>
                <td>Comprehensive assessment with closet organization</td>
            </tr>
            <tr>
            <td className='bold'>Style  Book</td>
                <td>Assessment of body shape and proportions</td>
                <td>Comprehensive body shape and proportion analysis</td>
            </tr>
            <tr>
            <td className='bold'>Shopping Trip with Stylist</td>
                <td>Determination of the most flattering color palette</td>
                <td>Full-color analysis for clothing and makeup</td>
            </tr>
            <tr>
            <td className='bold'>Exclusive Entry</td>
                <td>Come and pick clothes from stylists from our inhouse stylists</td>
                <td>Come and pick clothes from stylists from our inhouse stylists</td>
            </tr>

            <tr>
            <td className='bold'>Custom Outfit Creation</td>
                <td>Creation of 2 custom outfit tailored to you</td>
                <td>Creation of multiple custom outfits</td>
            </tr>
            
            <tr>
            <td className='bold'>Seasonal Updates</td>
                <td>Style recommendations for each season</td>
                <td>Seasonal wardrobe updates and planning</td>
            </tr>
            <tr>
            <td className='bold'>Styling Tips</td>
                <td>24/7 access to stylist for style emergencies  - 1 month</td>
                <td>24/7 access to stylist for style emergencies - 3 months</td>
            </tr>
            
        </tbody>
    </table></div>
      </Slide></>}

      {currentPage==="clothing-rental" && <div className='collaboration-heading'><Slide title="Collaboration with Salons and Shops">
      <div style={{display:"flex",justifyContent:'space-around'}}>
        <div><div style={{fontSize:"1.5em"}} className='card-title bold'>
        Benefits
      </div>
      <ul>
        <li>Get fashion and wardrobe advice at your nearby salon or shop</li>
        <li>Discounts and vouchers for WARdrobe services</li>
        <li>Exclusive access to designer outfits and collections</li>
      </ul>
      </div>
        <div><div style={{fontSize:"1.5em"}} className='card-title bold'>
        Subscription Plan
      </div>
      <ul>
        <li>Join our monthly subscription plan to gain access to our collaboration benefits</li>
        <li>Enjoy constant wardrobe advice and exclusive discounts</li>
        <li>An opportunity to try our newest rental collections for free</li>
      </ul>
      </div>
      </div>
      </Slide></div>}
    </div>
  );
};

export default OurSerices;