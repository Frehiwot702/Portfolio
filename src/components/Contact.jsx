import React from 'react'
import {FaArrowDown} from 'react-icons/fa'
import { Box, Typography } from '@mui/material'
import Social from './Social'

const Contact = () => {
    return ( 
        <Box className='bg-white text-gray-900 w-full items-center justify-center text-center my-16 py-16' id='contact'>

            <Typography variant='h1' fontSize='1.7em' fontWeight='bold' className='mb-10' sx={{marginBottom:'1%'}}>Contact</Typography>
            <Typography variant='h1' fontSize='1.2em' className='mb-10' sx={{marginBottom:'2%'}}>Get in touch</Typography>

            <Typography variant='h1' fontSize='1.4em' className='mb-10' sx={{marginTop:'1%'}}>Phone: +251 979006009</Typography>
            <Typography variant='h1' fontSize='1.4em' className='mb-5' sx={{marginTop:'1%'}}>Email: frehiwot.tewodros112@gmail.com</Typography>
            {/* <Typography variant='h1' fontSize='1.4em' className='mb-10' sx={{marginTop:'1%'}}>Github: Frehiwot702</Typography> */}
          
            <Social/>
        </Box>

        );
    };
    
export default Contact;