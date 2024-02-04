import React from 'react'
import {FaCode} from 'react-icons/fa'
import {BiHappyBeaming} from 'react-icons/bi'
import {BsTools} from 'react-icons/bs'
import {RiSketching} from 'react-icons/ri'
import Experience from './Experience'
import { Box, Typography } from '@mui/material'
import { makeStyles } from '@material-ui/core'
import { motion } from 'framer-motion'

const useStyles = makeStyles(theme => ({
    root: {
        width:'100%',
        minHeight: '100vh',
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        padding:'4rem',
        [theme.breakpoints.down('xs')]:{
            display: 'flex',
            flexDirection: 'column',
        },
        [theme.breakpoints.up('sm')]:{
            width:'100%',
            display: 'flex',
            flexDirection:'row',
            justifyContent:'space-evenly'
        },
        alignItems: 'center',
        paddingTop: theme.spacing(1),
    },
    bgCross: {
        width:'100%',
        position: 'absolute',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center'
    },
    cross:{
        width:'18em',
        height:'18em',
        [theme.breakpoints.down('xs')]:{

        }
    }
    
  }));


const About = () => {

    const classes = useStyles();
    return ( 
        <Box className={classes.root} id='about'>
        
            <Box className={classes.bgCross}>
                {/* <img src="/snap.jpg" className='-rotate-45 transition duration-500 hover:scale-110 hover:shadow-xl border border-rose-600 w-[22em] h-[25em] '/> */}
                <Box className='transition duration-700 hover:scale-110 border border-[#F6F740] h-[3em] m-5 w-[3em] text-xl animate-spin z-20'>.</Box>
                <Box component={motion.div} 
                    
                    transition={{delay:0.8, type: 'spring', stiffness: 120}} className='rotate-45 transition duration-700 hover:scale-110 border-4 border-rose-600/20 m-2 w-[18em] h-[18em]'>
                    <Box className='transition duration-700 hover:scale-110 bg-rose-600/20 m-2 w-[14em] h-[14em]'>.</Box>.
                </Box>
                <Box className='rotate-45 transition duration-700 hover:scale-110 border-4 border-rose-600/20 m-2 w-[18em] h-[18em]'>
                    <Box className='transition duration-700 hover:scale-110 bg-rose-600/20 m-2 w-[14em] h-[14em]'>.</Box>.
                </Box>
                <Box className='rotate-45 transition duration-700 hover:scale-110 border-4 border-rose-600/20 m-2 w-[18em] h-[18em]'>
                    <Box className='transition duration-700 hover:scale-110 bg-rose-600/20 m-2 w-[14em] h-[14em]'>.</Box>.
                </Box>
                
            </Box>
            <Box className='p-16 mt-24 ml-5 text-[15px]'>
                    <Typography variant='h1' fontSize='1.7em' fontWeight='bold' className='mb-10' sx={{marginBottom:'4%'}}>ABOUT ME</Typography>
                    <Typography  fontSize='1.2em' className='select-none'>Welcome to my site. My name is Frehiwot Tewodros. I am a Computer Science graduate
                    with lots of energy and motivation and love learning new things.I am fluent in
                    majority of back-end as well as frontend programming languages. I love finding solutions to problems and
                    creating dependable and approachable user interface for users.</Typography>
                    
                    <Typography fontSize='1.2em' className='mt-5 select-none'>My main focus today is building interactive, user friendly and unique systems for a variety of clients.</Typography>
                    <button className='bg-rose-600 font-bold text-[18px] p-2 rounded-lg mt-10 text-white hover:rotate-10 hover:scale-110 transition duration-500'>RESUME</button>
            </Box>
        
        </Box>
        );
    };
    
export default About;