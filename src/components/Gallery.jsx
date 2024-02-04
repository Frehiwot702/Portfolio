import { Box, ImageList, ImageListItem } from '@mui/material'
import React from 'react'
import { projects } from '../data/projects'

const Gallery = () => {
  return (
    <Box>
        <ImageList variant="masonry" cols={3} gap={8}>
            {projects.map((item) => (
                <ImageListItem key={item.img}>
                <img
                    srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.image}?w=248&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                />
                </ImageListItem>
            ))}
            </ImageList>
    </Box>
  )
}

export default Gallery