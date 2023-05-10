import { useState } from 'react';

export default function Contact() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    function onFormSubmit(event) {
        event.preventDefault();
        const body = {
          firstName,
          lastName,
          subject,
          message,
        };

        fetch('http://www.example.com', {
      method: 'POST',
      body: JSON.stringify(body),
    });
  }

  function onTextInputChange(event) {
    const value = event.target.value;
    if (event.target.name === 'first-name') {
      setFirstName(value);
    }
    if (event.target.name === 'last-name') {
      setLastName(value);
    }
    if (event.target.name === 'subject') {
      setSubject(value);
    }
    if (event.target.name === 'message') {
        setMessage(value);
      }
  }
    
    return (
    <div>
        <form onSubmit={onFormSubmit}>
        <label htmlFor="first-name">First name</label>
        <input
          name="first-name"
          value={firstName}
          placeholder="Your first name"
          onChange={onTextInputChange}
        />
        <label htmlFor="last-name">Last name</label>
        <input
          name="last-name"
          value={lastName}
          placeholder="Your last name"
          onChange={onTextInputChange}
        />
        <label htmlFor="subject">Subject</label>
        <input
          name="subject"
          value={subject}
          placeholder="Subject"
          onChange={onTextInputChange}
        />
        <label htmlFor="message">Message</label>
        <input
          name="message"
          value={message}
          placeholder="Your message"
          onChange={onTextInputChange}
        />
        <button>Submit</button>
      </form>
    </div>
    );
}