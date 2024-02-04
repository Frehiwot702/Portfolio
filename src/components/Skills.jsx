import React from 'react'
import {FaCode} from 'react-icons/fa'
import {BiHappyBeaming} from 'react-icons/bi'
import {BsTools} from 'react-icons/bs'
import {RiSketching} from 'react-icons/ri'
import Experience from './Experience'
import { Box, Typography } from '@mui/material'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        width:'100%',
        backgroundColor: '#ffffff',
        justifyContent: 'space-evenly',
        display: 'flex',
        flexDirection: 'row',
        marginTop:'5%',
        [theme.breakpoints.down('sm')]:{
            display: 'flex',
            flexDirection: 'column',
        },
      
    },
    lists:{
        textAlign:'center',
    }
    
  }));


const Skills = () => {

    const classes = useStyles();
    return ( 
        <Box className={classes.root} >
            <Box className='mt-5'>
                <BiHappyBeaming className='text-center w-full text-5xl mb-5 text-rose-600'/>
                <Typography variant='h1' justifyContent='center' align='center' fontSize='1.7em' fontWeight='bold' className='' sx={{marginBottom:'3%'}}>Things I Enjoy</Typography>
                {/* <Typography className='mb-5 text-[15px]'>I enjoy being creative and designing small things that has clean design pattern</Typography> */}
                <ul className={classes.lists}>
                    <li className='text-[1.3em]'>UI</li>
                    <li className='text-[1.3em]'>Mobile App</li>
                    <li className='text-[1.3em]'>Web App</li>
                    <li className='text-[1.3em]'>Logo Design</li>
                    <li className='text-[1.3em]'>Character Design</li>
                </ul>
            </Box>
            
            <Box className='mt-5'>
                <BsTools className='text-center w-full text-5xl mb-5 text-rose-600'/>
                <Typography variant='h1' justifyContent='center' align='center' fontSize='1.7em' fontWeight='bold' className='' sx={{marginBottom:'3%'}}>Design Tools</Typography>
                <ul className={classes.lists}>
                    <li className='text-[1.3em]'>Figma</li>
                    <li className='text-[1.3em]'>Spline</li>
                    <li className='text-[1.3em]'>Blender</li>
                    <li className='text-[1.3em]'>Photoshop</li>
                    <li className='text-[1.3em]'>Webflow</li>
                </ul>
            </Box>
            <Box className='mt-5'>
                <RiSketching className='text-center w-full text-5xl mb-5 text-rose-600'/>
                <Typography variant='h1' justifyContent='center' align='center' fontSize='1.7em' fontWeight='bold' className='' sx={{marginBottom:'3%'}}> Development Tools</Typography>
                <ul className={classes.lists}>
                    <li className='text-[1.3em]'>Code Pen</li>
                    <li className='text-[1.3em]'>Visual Studio Code</li>
                    <li className='text-[1.3em]'>Android Studio</li>
                </ul>
            </Box>
            
        </Box>

        );
    };
    
export default Skills;