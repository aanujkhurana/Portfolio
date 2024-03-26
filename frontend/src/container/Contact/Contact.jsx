import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { motion } from 'framer-motion';

import { client } from '../../client';

import './Contact.scss';


const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & <span>chat with me</span></h2>
      <div className="app__contact-cards">
        <motion.div
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className="app__contact-card"
        >
          <img src={images.email} alt="email" />
          <a href="mailto:aanujkhurana@gmail.com" className="p-text">aanujkhurana@gmail.com</a>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className="app__contact-card"
        >
          <img src={images.mobile} alt="phone" />
          <a href="tel:+61 (481) 25-0988" className="p-text">(+61)  48-125-0988</a>
        </motion.div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__contact-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </>
  )
}

export default AppWrap(
  MotionWrap(Contact, 'app__contact'),
  'contact',
  'app__primarybg',
);