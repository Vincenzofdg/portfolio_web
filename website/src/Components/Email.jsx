import { useState } from "react";

import "../Style/Email.css"

function Email() {
  const [name, SetName] = useState('');
  const [email, SetEmail] = useState('');
  const [message, SetMessage] = useState('');

  return (
    <div className="email-container">
      <div className="email-text">
        <h1 id="email-title">Contact</h1>
        <p id="email-subtitle">Get in touch to discuss your ideas and projects.</p>
      </div>
      <div className="email-forms">
        <label className="input-format" htmlFor="input-name">
          Name
          <input 
            type="text" 
            name="name"
            value={name}
            id="input-name"
            onChange={({target: {value}}) => SetName(value)}
            placeholder="Your name"
          />
        </label>
        <label className="input-format" htmlFor="input-email">
          Your Email
          <input 
            type="text" 
            name="email"
            value={email}
            id="input-email"
            onChange={({target: {value}}) => SetEmail(value)}
            placeholder="Your email address"
          />
        </label>
        <label className="input-format" htmlFor="input-message">
          Message
          <textarea
            type="text" 
            name="message"
            value={message}
            id="input-message"
            onChange={({target: {value}}) => SetMessage(value)}
            placeholder="Enter your message"
          />
        </label>

        <button 
          type="button"
          id="email-btn"
          onClick={() => {
            window.alert("tks")
          }}
          disabled={!(name && email && message)}
        >
          Submit
        </button>
      </div>
    </div>
  )
}

export default Email;