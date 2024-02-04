import { Box, Typography } from "@mui/material";
import React from "react";
import {FaTree} from 'react-icons/fa'
import {motion} from 'framer-motion'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        width:'100%',
        backgroundColor: '#ffffff',
        justifyContent: 'space-evenly',
        display: 'flex',
        flexDirection: 'row',
        marginTop:'5%',
        padding:'2%',
        gap:'2%',
        [theme.breakpoints.down('sm')]:{
            display: 'flex',
            flexDirection: 'column',
        },
      
        alignItems: 'center',
    },
    
  }));


export default function Experience(){
    const classes = useStyles()
    return(
        <Box className="text-center " sx={{marginTop:'7%'}}>
            <Typography variant='h1' fontSize='1.7em' fontWeight='bold' className='mb-10' sx={{}}>EXPERIENCE</Typography>
            <Box className={classes.root}>
                <Box className="flex w-1/2 gap-10">
                    <div className="w-[5em] items-start justify-start text-start">
                        {/* <FaTree className="w-full h-[5em] text-[#E11D48]"/> */}
                        <div className="bg-[#E11D48] transition duration-700 hover:scale-110 mt-8 rotate-45  border border-rose-600 w-[5em] h-[5em]">
                            <div className="bg-transparent -rotate-45 bg-cover transition duration-500 hover:scale-110 border-4 border-[#F6F740] w-[5em] h-[5em]  mx-auto rhombus">.
                                <div className="bg-[#F6F740] bg-cover transition duration-500 hover:scale-110 border-8 border-[#F6F740] w-[3em] h-[3em]  mx-auto rhombus">.
                                    <div className="bg-transparent rotate-45 transition duration-500 hover:scale-110 border-4 border-rose-600 w-[1em] h-[1em]  mx-auto">.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Box className="p-4 text-start rounded-md">
                        <Typography fontSize='1.5em' fontWeight='bold' className='mb-5'>Queen's Supermarket</Typography>
                        <Typography fontSize='1.1em' fontWeight='bold' className='mb-5 mt-5'>Jul 2022 - Sept 2022</Typography>
                        <Typography fontSize='1.2em' className='mb-5'>Worked as a web designer and maintainer intern at Queen’s Supermarket for 2 months.</Typography>
                    </Box>
                    
                </Box>
                <Box className="flex w-1/2 gap-10">
                  
                    <div className="w-[5em] items-end justify-end text-end">
                        {/* <FaTree className="w-full h-[5em] text-[#E11D48]"/> */}
                        <div className="w-[5em] items-start justify-start text-start mr-8">
                        {/* <FaTree className="w-full h-[5em] text-[#E11D48]"/> */}
                            <div className="bg-[#E11D48] transition duration-700 hover:scale-110 mt-8 rotate-45  border border-rose-600 w-[5em] h-[5em]">
                                <div className="bg-transparent -rotate-45 bg-cover transition duration-500 hover:scale-110 border-4 border-[#F6F740] w-[5em] h-[5em]  mx-auto rhombus">.
                                    <div className="bg-[#F6F740] bg-cover transition duration-500 hover:scale-110 border-8 border-[#F6F740] w-[3em] h-[3em]  mx-auto rhombus">.
                                        <div className="bg-transparent rotate-45 transition duration-500 hover:scale-110 border-4 border-rose-600 w-[1em] h-[1em]  mx-auto">.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Box className="p-4 text-start">
                        <Typography fontSize='1.5em' fontWeight='bold' className='mb-5'>St.Mary's University</Typography>
                        <Typography fontSize='1.1em' fontWeight='bold' className='mb-5 mt-5'>Oct 2023 - Current date</Typography>
                        <Typography fontSize='1.2em' className='mb-5'>I am currently working as an Assistant Graduate at St.Mary's University.</Typography>
                    </Box>
                  
                </Box>
            </Box>
        </Box>
    )
}