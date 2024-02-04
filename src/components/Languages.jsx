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

        [theme.breakpoints.down('sm')]:{
            display: 'flex',
            flexDirection: 'column',
        },
      
        alignItems: 'center',
    },
  }));


const Language = () => {

    const classes = useStyles();
    return ( 
        <Box className='my-16'>
            <FaCode className='text-center w-full text-5xl mb-5 text-rose-600'/>
            <Typography variant='h1' justifyContent='center' align='center' fontSize='1.7em' fontWeight='bold' sx={{marginBottom:'2%'}}>Languages I Speak</Typography>
            <ul className={classes.root}>
                <li className='text-[1.5em]'>HTML</li>
                <li className='text-[1.5em]'>CSS</li>
                <li className='text-[1.5em]'>JavaScript</li>
                <li className='text-[1.5em]'>React</li>
                <li className='text-[1.5em]'>Java</li>
                <li className='text-[1.5em]'>MySQL</li>
                <li className='text-[1.5em]'>Django</li>
            </ul>
        </Box>
        );
    };
    
export default Language;