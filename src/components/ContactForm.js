import React from 'react'

import './ContactForm.css'

const ContactForm = () => (
  <div className='contact-form'>
    <form action="https://formspree.io/pokemongray27@gmail.com" method="POST">
      <div className="form-field">
        <label htmlFor="name">
          <div className="label-content">Name:</div>
          <input type="text" name="name" required />
        </label>
      </div>
      <div className="form-field">
        <label htmlFor="email">
          <div className="label-content">Email:</div>
          <input type="email" name="email" required />
        </label>
      </div>
      <div className="form-field">
        <label htmlFor="message">
          <div className="label-content">Message:</div>
          <textarea className="stretch" name="message" rows="5" required />
        </label>
      </div>
      <div className="form-button">
        <button type="submit">Send</button>
      </div>
    </form>
  </div>

)

export default ContactForm
