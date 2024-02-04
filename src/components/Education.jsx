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
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
        marginTop:'5%',
        [theme.breakpoints.down('sm')]:{
            display: 'flex',
            flexDirection: 'column',
        },
      
        alignItems: 'center',
    },
    
  }));


const Education = () => {

    const classes = useStyles();
    return ( 
        <Box>

            <Typography variant='h1' justifyContent='center' align='center' fontSize='1.7em' fontWeight='bold' className='mb-[5%]'>
                        EDUCATION
            </Typography>
            <Box className={classes.root}>
                <Box display='flex' justifyContent='center'  className='mx-auto'  sx={{p:'0%', height:'5%'}}>
                    <img src="/stMary's.jpg" width='15%' className='mb-8'/>
                    <Box className='my-auto'>
                        <Typography fontSize='1.1em' fontWeight='bold' className='mb-5 mt-5' sx={{}}>
                            2019 - 2023
                        </Typography>
                        <Typography fontSize='1.5em' fontWeight='bold' className='mb-5'>
                            St.Mary’s University
                        </Typography>
                        <Typography fontSize='1.2em' fontWeight='bold' className='mb-5'>
                            BSc. Computer Science
                        </Typography>
                   </Box>

                </Box>
                <Box className='mx-auto' sx={{p:'0%', height:'5%'}}>
                    <Box display='flex' justifyContent='center'>
                        <img src="/stMary's.jpg" width='15%' className='mb-8'/>
                        <Box className='my-auto'>
                            <Typography fontSize='1.1em' fontWeight='bold' className='mb-5 ' sx={{}}>
                                Coming Soon
                            </Typography>
                            <Typography fontSize='1.5em' fontWeight='bold' className='mb-5'>
                                St.Mary’s University
                            </Typography>
                            <Typography fontSize='1.2em' fontWeight='bold' className='mb-5'>
                                MSc. Computer Science
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                
            </Box>

            

            
           
        </Box>
        );
    };
    
export default Education;