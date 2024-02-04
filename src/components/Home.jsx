import {useState} from 'react'
import Header from './Header'
import HeroSection from './HeroSection'
import Social from './Social'
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Designs from './Designs';
import Footer from './Footer';
import Banner from './Banner';
import { Box } from '@mui/material';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import Language from './Languages';

function Home() {
  const imageDetails= {
    width: '60%',
    height: '40%',
   }

  return (
   <div className=''>
      <Box fullWidth display='flex'>
      
        {/* <Social className='w-[70px]' /> */}
      
        <Box fullWidth sx={{flex:1}} className='w-full' >
        
          {/* <Header/> */}
          <main>
            <HeroSection className=''/>
          </main>
          <About/>
          <Education/>
          <Experience/>
          <Skills/>
          <Language/>
          <Projects imageDetails={imageDetails}/>
          <Designs/>
          <Contact/>
          <Footer/>
        
        </Box>
        
      </Box>
      
    </div>
  );
}

export default Home;
