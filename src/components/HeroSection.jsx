import React, { useRef } from "react";
import logo from '/ft2.png'
import '../App.css'
import { Box, Typography } from "@mui/material";
import  {Typed} from "react-typed";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { Link } from "react-scroll";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        width:'100%',
        minHeight: '100vh',
        backgroundColor: '#321325',

        [theme.breakpoints.down('md')]:{
            display: 'flex',
            flexDirection: 'column',
        },
        [theme.breakpoints.up('md')]:{
            display: 'flex',
            flexDirection: 'row',
            justifyContent:'space-evenly'
        },
        alignItems: 'center',
        paddingTop: theme.spacing(1),
    },
    link: {
        fontSize:'1.2em',
        color: '#ffffff',
        fontFamily: 'Oswald, sans-serif',
        marginTop: '2%',
        [theme.breakpoints.down('xs')]: {
            fontSize:'1em'
        }
    },
    navBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: '#321325',
        marginLeft:'auto',
        marginRight:'auto',
        [theme.breakpoints.up('lg')]: {
            display:'none'
        },
        [theme.breakpoints.down('xs')]: {
        }
        
    },
    fre: {
        fontSize:'8em',
        color:'#ffffff',
        fontFamily: 'Oswald, sans-serif',
        [theme.breakpoints.down('xs')]: {
        fontSize:'2em',
        color:'#ffffff',
        fontWeight: 'bold'
    }
    },
    hiwot: {
        color:'#FF1D48',
        fontFamily: 'Oswald, sans-serif',
        [theme.breakpoints.down('xs')]: {
            fontSize:'-1%',
        }
    },
    cross: {
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    }
  }));


export default function HeroSection(){

    
const classes = useStyles();

    const ref = useRef(null)
    
    const { scrollYProgress } = useViewportScroll()
    const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
    // flex flex-col md:flex-row lg:flex-row sm:flex-col justify-between
    return(
        <>
            <Box >
                <ul className={classes.navBar}>
                    <li className={classes.link}> <Link to='about' smooth={true} duration={600}>  ABOUT </Link></li>
                    <li className={classes.link}> <Link to='projects' smooth={true} duration={600}>  PROJECTS </Link></li>
                    <li className={classes.link}> <Link to='contact' smooth={true} duration={600}>  CONTACT </Link></li>
                    <li className={classes.link}> <Link smooth={true} duration={600}>  RESUME </Link></li>
                </ul>
            </Box>
            <Box component={motion.div} initial={{ }} animate={{ }} transition={{}} fullWidth  gap='3%' className={classes.root} sx={{p:'5%'}}>
                
                <Box className='z-10 w-1/2'>
                    {/* <img src='/pinkTransp.png ' className='mx-auto'/> */}
                    
                    {/* <Typography fontWeight='bold' fontSize='10em' sx={{fontFamily: 'Oswald, sans-serif', gridColumn:'span 1'}}>Frehiwot <span className='font-extralight'>Tewodros</span></Typography> */}
                
                    <Box display='flex' alignItems='center'>
                        <Typography 
                            component={motion.h5} 
                            whileHover={{
                                scale: 1.2,
                                transition: { duration: 0.3 }
                            }} 
                            fontSize='2em' sx={{fontFamily: 'Oswald, sans-serif',color:'#ffffff'}}>FRE </Typography>
                        <Typography 
                            initial={{y: -350 }}
                            animate={{y:-10}}
                            transition={{delay: 0.2, type:'spring', stiffness:120}}
                            component={motion.h2} className={classes.hiwot} fontWeight='bold' fontSize='5em' sx={{fontFamily: 'Oswald, sans-serif',}} >HIWOT</Typography>
                    
                    <Typography fontWeight='light' fontSize='3em' sx={{fontFamily: 'Oswald, sans-serif', color:'#ffffff' }}>TEWODROS</Typography>
                   </Box> 
                   <hr className='w-full h-[1%] border-[#FF1D48] mb-3'/>
                   <Typography  fontSize='1.5em' sx={{fontFamily: 'Oswald, sans-serif' ,color:'#ffffff'}}>
                        Full Stack Developer | UI Designer | 3D Artist</Typography>
                    {/* <Typed strings={["'Full Stack Developer'", "'Designer'", "'Animator'"]} typeSpeed={150} backSpeed={100} loop/> */}
                    
                </Box>    
                <Box component={motion.div} fullWidth  className={classes.cross} > 
                    <Box component={motion.div}  initial={{y: -350}}
                            animate={{y:-10}}
                            transition={{delay:0.8, type: 'spring', stiffness: 120}}  fullWidth display='flex' justifyContent='center'>
                    {/* https://i.pinimg.com/564x/c6/18/3d/c6183ddd8df908bbb393b12789f42968.jpg */}
                        {/* <div className="bg-transparent z-10  transition duration-700 hover:scale-110 mx-auto rotate-45 border-2 border-rose-600 w-[15em] ">
                            <div className="bg-[url(https://i.pinimg.com/564x/c6/18/3d/c6183ddd8df908bbb393b12789f42968.jpg)] -rotate-45  bg-cover transition duration-500 hover:scale-110 border-4 border-[#F6F740] w-[13em] h-[13em] mx-auto rhombus">.</div>
                        </div> */}
                        <Box className="bg-transparent transition duration-700 hover:scale-110 mt-8 rotate-45  border border-rose-600 w-[12em] h-[12em]">
                            <Box className="bg-transparent -rotate-45 transition duration-500 hover:scale-110 border-4 border-[#F6F740] w-[12em] h-[12em]  mx-auto rhombus">.
                                <Box className="bg-[#F6F740] transition duration-500 hover:scale-110 border-8 border-[#F6F740] w-[8em] h-[8em]  mx-auto rhombus p-2">.
                                    <Box className="bg-transparent transition duration-500 rotate-45 hover:scale-110 border-4 border-rose-600 w-[3em] h-[3em]">
                                        <Typography component={motion.h3} initial={{scale:0, rotateZ:45}} animate={{scale:1, rotateZ: 315}} fontWeight='bold' fontSize='1.5em' className=' text-center items-center z-20'>
                                            <Link to='about' smooth={true} duration={600}>  ABOUT </Link>
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box component={motion.div}  initial={{y: -550}}
                            animate={{y:-10}}
                            transition={{delay:1, type: 'spring', stiffness: 120}} className="w-[32em] flex justify-between space-x-16 -my-12">
                        {/* https://i.pinimg.com/564x/76/1a/76/761a76d1e4abfe2dfd4e16b73be306fe.jpg */}
                        <Box className="bg-transparent transition duration-700 hover:scale-110 mt-8 rotate-45  border border-rose-600 w-[14em] h-[14em]">
                            <Box className="bg-transparent -rotate-45 bg-cover transition duration-500 hover:scale-110 border-4 border-[#F6F740] w-[14em] h-[14em]  mx-auto rhombus">.
                                <Box className="bg-[#F6F740] bg-cover transition duration-500 hover:scale-110 border-8 border-[#F6F740] w-[11em] h-[11em]  mx-auto rhombus pt-6 pl-4">.
                                    <Box className="bg-transparent transition duration-500 rotate-45 hover:scale-110 border-4 border-rose-600 w-[3em] h-[3em]">
                                        <Typography component={motion.h3} initial={{scale:0, rotateZ:45}} animate={{scale:1, rotateZ: 315}} fontWeight='bold' fontSize='1.5em' className=' text-center items-center z-20'>
                                            <Link to='projects' smooth={true} duration={1000}>PROJECTS</Link>
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box className="bg-transparent transition duration-700 hover:scale-110 mt-8 rotate-45  border border-rose-600 w-[14em] h-[14em]">
                            <Box className="bg-transparent -rotate-45 bg-cover transition duration-500 hover:scale-110 border-4 border-[#F6F740] w-[14em] h-[14em]  mx-auto rhombus">.
                                <Box className="bg-[#F6F740] bg-cover transition duration-500 hover:scale-110 border-8 border-[#F6F740] w-[11em] h-[11em]  mx-auto rhombus pt-6 pl-4">.
                                    <Box className="bg-transparent transition duration-500 rotate-45 hover:scale-110 border-4 border-rose-600 w-[3em] h-[3em]">
                                        <Typography component={motion.h3} initial={{scale:0, rotateZ:45}} animate={{scale:1, rotateZ: 315}} fontWeight='bold' fontSize='1.5em' className=' text-center items-center z-20'>
                                            <Link to='contact' smooth={true} duration={1000}>CONTACT</Link>
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box component={motion.div} initial={{y: -700}}
                            animate={{y:-10}}
                            transition={{delay:1.2, type: 'spring', stiffness: 120}}  fullWidth display='flex' justifyContent='center'>
                    {/* https://i.pinimg.com/564x/c6/18/3d/c6183ddd8df908bbb393b12789f42968.jpg */}
                        {/* <div className="bg-transparent z-10  transition duration-700 hover:scale-110 mx-auto rotate-45 border-2 border-rose-600 w-[15em] ">
                            <div className="bg-[url(https://i.pinimg.com/564x/c6/18/3d/c6183ddd8df908bbb393b12789f42968.jpg)] -rotate-45  bg-cover transition duration-500 hover:scale-110 border-4 border-[#F6F740] w-[13em] h-[13em] mx-auto rhombus">.</div>
                        </div> */}
                        <Box className="bg-transparent transition duration-700 hover:scale-110 mt-8 rotate-45  border border-rose-600 w-[12em] h-[12em]">
                            <Box className="bg-transparent -rotate-45 transition duration-500 hover:scale-110 border-4 border-[#F6F740] w-[12em] h-[12em]  mx-auto rhombus">.
                                <Box className="bg-[#F6F740] transition duration-500 hover:scale-110 border-8 border-[#F6F740] w-[8em] h-[8em]  mx-auto rhombus p-2">.
                                    <Box className="bg-transparent transition duration-500 rotate-45 hover:scale-110 border-4 border-rose-600 w-[3em] h-[3em]">
                                        <Typography component={motion.h3} initial={{scale:0, rotateZ:45}} animate={{scale:1, rotateZ: 315}} fontWeight='bold' fontSize='1.5em' className=' text-center items-center z-20'>RESUME</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                        
                </Box>                  
            </Box>
        </>
    )
}