import React from 'react'
import './Contact.css'

import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "bb4cb79e-bb85-4ee5-a1c0-2ed22bceab43");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      alert(data.message)
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id='contact' className="contact">
      <div className="contact-title">
        <h1>Get In Touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Connect With Me</h1>
          <p>I am a Software Engineer currently looking for software engineering internship oppertunities!
            If you know any of any positions available, have any questions, or just want to get in touch,
            feel free to contact me. I will get back to you as soon as possible!
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <EmailIcon />
              <p>tarekibrahim3@cmail.carleton.ca</p>
            </div>
            <div className="contact-detail">
              <PhoneIcon />
              <p>+1(613) 220 7759</p>
            </div>
            <div className="contact-detail">
              <LocationOnIcon />
              <p>Ottawa, Ontario, Canada</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name='name' />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name='email' />
          <label htmlFor="">Your Message</label>
          <textarea name="message" rows="8" placeholder="Enter your message"></textarea>
          <button type='submit' className='contact-submit'>Submit Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact