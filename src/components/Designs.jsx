import React from 'react'
import {FaArrowDown} from 'react-icons/fa'
import { ImageList, ImageListItem, Typography } from '@mui/material'


const Designs = () => {
    return ( 
        <section className='bg-white dark:bg-gray-900 text-gray-900 dark:text-white
                              w-full items-center justify-center text-center p-16 space-x-5'>
            <div className='w-full m-1 text-center'>
                <Typography variant='h1' fontSize='1.7em' fontWeight='bold' className='mb-10' sx={{marginBottom:'4%'}}>Blender Designs</Typography>
                <div className=' my-16'>
                    <ImageList variant="masonry" cols={2} gap={24}>
                
                        <ImageListItem >
                            <img
                                src='/room.png'
                                alt='room design'
                                loading="lazy"
                            />
                            
                        </ImageListItem>
                        <ImageListItem>
                            <img
                                src='/cottage.png'
                                alt='Cottage design'
                                loading="lazy"
                            />
                        </ImageListItem>
                        <ImageListItem>
                            <img
                                src='/coffee.png'
                                alt='Cottage design'
                                loading="lazy"
                            />
                        </ImageListItem>
                    </ImageList>
                </div>
            </div>
            {/* <vr className='text-white border h-full'/> */}
            {/* <div className='w-1/2 m-1 text-center'>
                <h1 className='text-[25px] font-bold mb-2'>Logo Designs</h1>
                <div className='flex justify-between my-16'>
                    <h1>Character 1</h1>
                    <h1>Character 2</h1>
                    <h1>Character 3</h1>
                    <h1>Character 4</h1>
                </div>
            </div> */}

          
           
        </section>
        );
    };
    
export default Designs;