import React from 'react';
import './ContactUs.css'; // You can create a separate CSS file for styling
import Slide from '../common/Slide/Slide';

const ContactUs = (props) => {
  const sendEmail = ()=> {
    // Get form values
    var email = document.getElementById('email').value;

    // You would typically send this data to a server-side script using AJAX
    // Here, we're just logging the data to the console for demonstration purposes
    var mailtoUri = 'mailto:' + encodeURIComponent(email) + '?subject=Message%20from%20Contact%20Form&body=' + encodeURIComponent("");

    // Open the default email client
    window.location.href = mailtoUri;

    // In a real-world scenario, you would make an AJAX request to a server-side script
    // that sends the email. The following is just a placeholder.

    // Example using fetch API (replace 'your_server_script_url' with the actual URL):
    /*
    fetch('your_server_script_url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email, message: message }),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Server response:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
    */
  }

  return (
    <div className="ContactUs">
        <Slide title="Contact us">
          <div>
          <Slide title=""  blue>
      <form id="emailForm">
        <div> <h1 className='text-center pt-4 bold'>Find your style with WARdrobe</h1> </div>
        <h4 className='text-center p-4'>Personal Styling, Wardrobe Styling, Clothing Rental</h4>
        <div className='flex demo-section'>
          <input type="email" id="email" name="email" placeholder='Enter your email' required/>
          <button type="submit" onClick={()=>{
          sendEmail()
        }} > Book a demo</button>
        </div>
        

        
      </form>
      </Slide>
          </div>
      {/* <div style={{display:"flex", flexWrap:'wrap'}}>
        <InsideCard cildClass="contact-card" title="Address"><div>HiTech City,</div><div>Hyderabad,India</div></InsideCard>
        <InsideCard cildClass="contact-card" title="Details"><div>Email:mohankumar.uppu@gmail.com</div><div>Phone no:9840411367</div></InsideCard>
      </div> */}
      </Slide>
    </div>
  );
};

export default ContactUs;
