import React from 'react'
import fwms1 from '/fwms-1.png'
import { FaArrowDown, FaCode, FaHtml5, FaCss3, FaJava, FaJs} from 'react-icons/fa'
import { SiDjango, SiCsharp, SiPhp, SiMysql, SiReact} from 'react-icons/si'
import {TbBrandThreejs} from 'react-icons/tb'
import { Link, NavLink } from 'react-router-dom'
import { projects } from '../data/projects'
import {motion} from 'framer-motion'

import { Box, Typography , ImageList, ImageListItem, Card, CardContent } from '@mui/material'
import { CardCover } from '@mui/joy'

const transition = {duration: .6, ease: [.43, .13, .23, .96]}

const Projects = ({imageDetails}) => {

    return ( 
        <Box className='bg-gray-900 text-white
                            min-h-screen  w-full items-center justify-center p-16 text-center' id='projects'>

            <Typography  variant='h1' fontSize='1.7em' fontWeight='bold' className='mb-10' sx={{marginBottom:'1%', marginTop:'2%'}}>PROJECTS</Typography>
            <Typography  variant='h1' fontSize='1.3em' className='mb-10' sx={{marginBottom:'4%'}}>Projects Done</Typography>

            <Box >
                {projects.map(
                    (project) => (
                        // <Box display='flex' sx={{height:'20%', margin:'2%'}} key={project.id} className='border border-blue-200 rounded-xl p-5 hover:cursor-pointer'> 
                        //     <img src={project.image} className='rounded-lg p-3' width='30%'/>
                        //     <Box sx={{marginLeft:'2%'}}>
                        //         <Typography variant='h1' fontSize='1.5em' fontWeight='bold' className='mb-10' sx={{marginBottom:'4%'}}>{project.title}</Typography>
                        //         <NavLink to={project.link} className='text-[15px]'>Live Demo</NavLink>
                        //     </Box>
                        
                        // </Box>
                        <Link to={`project/${project.id}`}>
                            <Box fullWidth justifyContent='center' className='mx-auto' component="div" sx={{ width:imageDetails.width, height: imageDetails.height, marginBottom:'10%' }}>
                           
                                <motion.img
                                    whileHover={{scale: 1.1}}
                                    transition={transition}
                                    src={project.image}
                                    srcSet={project.image}
                                    loading="lazy"
                                    alt=""
                                />
                                <Box component={motion.div} 
                                    transition={transition}
                                >
                                    <Typography
                                        fontSize='1.5em'
                                        fontWeight="bold"
                                        // mt={{ xs: 12, sm: 18 }}
                                        sx={{marginTop:'5%', fontFamily: 'Oswald, sans-serif' }}
                                    >
                                        {project.title}
                                    </Typography>
                                </Box>
                            </Box>
                        </Link>
                    )
                )}
            </Box>
           
        </Box>
        );
    };
    
export default Projects;