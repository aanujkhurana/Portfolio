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
        <img src={images.logo} alt='logo' />
        <h2>Find me at</h2>
        <address>
          Brisbane, Queensland. Australia. 4214
        </address>
        <motion.div className='footer__action'>
        <a className="footer__btn" href="mailto:aanujkhurana@gmail.com">Email Me</a>
        <a className="footer__btn" href="mailto:aanujkhurana@gmail.com">Download Resume</a>
        </motion.div>
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