import { useState } from 'react';

import './Navbar.scss'

import { images } from '../../constants'

import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { motion } from 'framer-motion';

const Navbar = () => {

    const [toggle, setToggle] = useState(false)
    return (
    <nav className='app__navbar'>
        <ul className='app__navbar-links'>
            {['home', 'about','work','skills', 'contact'].map((item)=>(
                <li className='app__flex p-text' key={`link-${item}`}>
                    <div />
                    <a href={`#${item}`}>{item}</a>
                </li>
            ))}
        </ul>

        <div className='app__navbar-menu'>
            <HiMenuAlt4 onClick={()=>setToggle(true)} />
            {toggle && (
                <motion.div
                whileInView={{ x: [300, 0] }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                >
                <HiX onClick={() => setToggle(false)} />
                <ul>
                    {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                    <li key={item}>
                        <a href={`#${item}`} onClick={() => setToggle(false)}>
                        {item}
                        </a>
                    </li>
                    ))}
                </ul>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                </motion.div>
            )}
        </div>
    </nav>
  )
}

export default Navbar