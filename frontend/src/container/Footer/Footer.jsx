import { images } from '../../constants'
import { motion } from 'framer-motion';

import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__addr">
        <img src={images.logoFooter} alt='logo' />
        <h2>Find me at</h2>
        <address>
          Somewhere in; Gold Coast, Australia
        </address>
        <motion.div className='footer__action'>
        <a className="footer__btn" href="mailto:aanujkhurana@gmail.com">Email Me</a>
        <a className="footer__btn" href="https://raw.githubusercontent.com/aanujkhurana/Portfolio/master/frontend/src/assets/resume/AanujResume.pdf">Download Resume</a>
        </motion.div>
      </div>

      <motion.div
        whileInView={{ scale: [0.75, 1] }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        >
        <div className="legal">
          <p>&copy; 2024 aanujkhurana. All rights reserved.</p>
          <div className="legal__links">
            <span>Made with <span className='heart'>♥</span> remotely from anywhere</span>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;