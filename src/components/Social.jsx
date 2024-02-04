import React from 'react'
import logo from '/ft2.png'
import {FaLinkedin, FaGithub, FaTiktok, FaTelegram, FaInstagram, FaArrowDown} from 'react-icons/fa'
import { Box } from '@mui/material';


const Social = () => {

    const social = [
        {
            id: 1,
            link: 'https://github.com/Frehiwot702',
            icon: <FaGithub/>
        },
        {
            id: 2,
            link: 'https://www.linkedin.com/in/frehiwot-tewodros-06503924b/',
            icon: <FaLinkedin/>
        },
        {
            id: 3,
            link: 'https://t.me/fruittedi',
            icon: <FaTelegram/>
        },
        {
            id: 4,
            link: 't.me/fruittedi',
            icon: <FaInstagram/>
        },
        {
            id: 5,
            link: 'https://github.com/Frehiwot702',
            icon: <FaTiktok/>
        },
    ]


    return ( 
    
        
        <Box className='flex flex-row justify-evenly py-8 lg:py-10 top-0 bottom-0 sm:static'>
            {/* <img src="/pinkTransp.png" className="w-24 h-16"/> */}
            {social.map(({id, link, icon}) => (
                <a 
                href={link} 
                key={id} 
                target = '_blank'
                rel='noopener noreferrer'
                className='cursor-pointer text-[2em] text-[#FF1D48]
                duration-300 hover:text-rose-600 hover:-translate-y-5'>| <br/>{icon} </a>  
            ))}
        </Box>                      
       
    );
};

export default Social;