import React from 'react';

import { FaGithub,  FaLinkedin, FaFacebook } from "react-icons/fa";

const SocialMedia = () => (
    <div className="app__social">
      <div>
        <FaGithub />
      </div>
      <div>
        <FaLinkedin />
      </div>
      <div>
        <FaFacebook />
      </div>
    </div>
    
  );
  
  export default SocialMedia;