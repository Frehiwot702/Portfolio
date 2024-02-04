import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects'
import { Box, ImageList, Typography, ImageListItem, Button } from '@mui/material'
import {motion} from 'framer-motion' 

const transition = {duration: 1.4, ease: [0.6, 0.01, -0.23, 0.9]}

const ProjectDetail = () => {

    const imageDetails= {
        width: '60%',
        height: '40%',
       }

    const param = useParams()
 console.log(param.id)
    const project = projects.filter( (proj) => proj.id == param.id)
    console.log(project[0].subImg[0].img1)

   
  return (
    <Box
        component={motion.div} 
        sx={{backgroundColor:'#111827', color:'#ffffff'}}
    >
        <Typography
            fontSize='1.2em'
            fontWeight='bold'
            sx={{p:5}}
        ><Link to='/'> BACK</Link></Typography> 
          
        <Box component={motion.div} 
            initial={{opacity:0, y:0}} 
            animate={{
                opacity:1, 
                y:40, 
            }}
            transition={{delay: 1.2}}>
                
           
            <Typography
                fontSize='8em'
                fontWeight='bold'
                textTransform='uppercase'
                sx={{fontFamily: 'Oswald, sans-serif' }}
                textAlign='center'
            >
                {project[0].title}
            </Typography>
        </Box>
        {/* <Box component={motion.div} 
            initial={{y:"-50%", width: imageDetails.width, height: imageDetails.height}}
            animate={{
                y:0,
                width: '100%',
                transition: {delay: .2, ...transition}
            }}
            className='mx-auto'> 
            <motion.img 
                initial={{scale:1.1}}
                animate={{
                    transition: {delay: .2, ...transition}
                }}
                
            src={project[0].image} width='80%' height='10%' className='mx-auto mt-16'/>
         </Box> */}

         {/* <Typography
            fontSize='8em'
            fontWeight='bold'
            textTransform='uppercase'
            sx={{fontFamily: 'Oswald, sans-serif', marginTop: '5%' }}
            textAlign='center'
        >
            {project[0].title}
        </Typography> */}
        <Box component={motion.div} 
            initial={{opacity:0, y:0}} 
            animate={{
                opacity:1, 
                y:40, 
            }}
            transition={{delay: 1.2}} sx={{paddingLeft: '10%', paddingRight:'10%', marginTop:'5%'}}>
            <Typography
                fontSize='1.5em'
                sx={{fontFamily: 'Oswald, sans-serif', paddingBottom:'3%' }}
            >
                {project[0].description}
            </Typography>
        </Box>
        <Box component={motion.div} 
            initial={{opacity:0, y:0}} 
            animate={{
                opacity:1, 
                y:40, 
            }}
            transition={{delay: 1.2}} sx={{p:5}}>
            <ImageList
                sx={{ width: '100%', height: '70%' }}
                variant="woven"
                cols={2}
                rowHeight={721}
                gap={20}
                >
                
                    <ImageListItem cols={1} rows={2}>
                        <img
                            src={project[0].subImg[0].img1}
                            // alt={item.title}
                            loading="lazy"
                        /> 
                    </ImageListItem>
                    <ImageListItem cols={1} rows={1}>
                        <img
                            src={project[0].subImg[0].img2}
                            // alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
              
           
            </ImageList>
        </Box>

        <Button 
            component={motion.div} 
            initial={{opacity:0, y:0}} 
            animate={{
                opacity:1, 
                y:40, 
            }}
            transition={{delay: 1.2}}
            variant="outlined"
            size='large'
            align='center'
            className='mx-auto'
            sx={{color:'#ffffff', borderColor:'#FF1D48', m:5}}
        >
           <Link to={project[0].link}> Live Preview</Link>
        </Button>
    </Box>
  )
}

export default ProjectDetail