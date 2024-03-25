import React from 'react';

import { FaGithub,  FaLinkedin, FaFacebook } from "react-icons/fa";
import { motion } from 'framer-motion';

const SocialMedia = () => (
      <motion.div 
      className="app__social"
      whileInView={{ scale: [0.5, 1] }}
      transition={{ duration: 0.25, ease: 'easeIn' }}
      >
          <div>
            <FaGithub />
          </div>
          <div>
            <FaLinkedin />
          </div>
          <div>
            <FaFacebook />
          </div>
      </motion.div>
  );
  
  export default SocialMedia;