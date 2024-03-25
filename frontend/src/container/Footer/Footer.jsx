import React, { useState } from 'react';

import { images } from '../../constants'
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';

import './Footer.scss'

const Footer = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <footer className="footer">
      <div className="footer__addr">
        <h1 className="footer__logo">Anuj Khurana</h1>
        <h2>Contact</h2>
        <address>
          Brisbane, Queensland. Australia. 4214<br />
          <a className="footer__btn" href="mailto:aanujkhurana@gmail.com">Email Me</a>
        </address>
      </div>

      <motion.div
        whileInView={{ x: [300, 0] }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        >
        <div className="legal">
          <p>&copy; 2024 aanujkhurana. All rights reserved.</p>
          <div className="legal__links">
            <span>Made with <span className="heart">♥</span> remotely from Anywhere</span>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;