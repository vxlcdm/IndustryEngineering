import { Box, Typography } from '@mui/material';

import React, { useState, useEffect, useCallback } from 'react';
import { Button } from '@mui/material';
 
import { Grid } from '@mui/material';
// import { styled } from '@mui/material/styles';




const categories = ['all projects', 'agriculture', 'mechanical', 'engineering', 'gas & oil'];


const projectImages = [
    {
        id: '1',
        category: 'agriculture',
        src: 'https://lazeapostolski.com/industrial2/img/proj1.jpg',
        alt: 'Agriculture Project 1',
    },
    {
        id: '2',
        category: 'mechanical',
        src: 'https://lazeapostolski.com/industrial2/img/proj2.jpg',
        alt: 'Mechanical Project 2',
    },
    {
        id: '3',
        category: 'engineering',
        src: 'https://lazeapostolski.com/industrial2/img/proj3.jpg',
        alt: 'Engineering Project 3',
    },
    {
        id: '4',
        category: 'agriculture',
        src: 'https://lazeapostolski.com/industrial2/img/proj4.jpg',
        alt: 'Agriculture Project 4',
    },
    {
        id: '5',
        category: 'mechanical',
        src: 'https://lazeapostolski.com/industrial2/img/proj5.jpg',
        alt: 'Mechanical Project 5',
    },
    {
        id: '6',
        category: 'engineering',
        src: 'https://lazeapostolski.com/industrial2/img/proj6.jpg',
        alt: 'Engineering Project 6',
    },
    {
        id: '7',
        category: 'gasandoil',
        src: 'https://lazeapostolski.com/industrial2/img/proj7.jpg',
        alt: 'Gas and Oil Project 7',
    },
    {
        id: '8',
        category: 'agriculture',
        src: 'https://lazeapostolski.com/industrial2/img/proj4.jpg',
        alt: 'Agriculture Project 4',
    },
    {
        id: '9',
        category: 'mechanical',
        src: 'https://lazeapostolski.com/industrial2/img/proj2.jpg',
        alt: 'Mechanical Project 2',
    },
];





export default function MSE() {

    const [selectedCategory, setSelectedCategory] = useState('all projects');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    
    const filteredImages = selectedCategory === 'all projects'
        ? projectImages
        : projectImages.filter((image) => image.category === selectedCategory);

   
    const handleCategorySelect = useCallback((category) => {
        setSelectedCategory(category);
    }, []);

    if (!mounted) return null;

    return (<>
        <Box>
            <Box
                sx={{
                    height: "35vh",
                    backgroundImage: "url(https://lazeapostolski.com/industrial2/img/pages-header.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Typography variant="h5" color="black" fontWeight="bold">
                    Projects
                </Typography>
            </Box>


            <Box
                sx={{
                    // my:2,
                    py: 2,
                    bgcolor: "white",
                    borderBottom: "1px solid black",
                }}>
                <Typography
                    sx={{
                        color: "black",
                        textAlign: "center",
                        fontSize: "0.8rem"
                    }}>
                    Home  &gt;  <span style={{ color: "#fbae19" }}>Projects</span>
                </Typography>
            </Box>



















<Box>
                <Box sx={{
                    padding: '64px 32px',
                    // display: 'flex',  

                    // justifyContent: 'center',
                }}>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px', marginBottom: '64px' }}>
                        {categories.map((category) => (
                            <Button
                                key={category}
                                variant={selectedCategory === category ? 'contained' : 'outlined'}
                                onClick={() => handleCategorySelect(category)}
                                sx={{
                                    // borderRadius: '32px',
                                    // paddingX: '24px',
                                    // paddingY: '8px',
                                    transition: 'all 0.3s ease',
                                    ...(selectedCategory === category
                                        ? {
                                    background: '#fbae19',
                                            backgroundColor: '#',  
                                            color: '#fff',
                                            boxShadow: '0px 4px 10px rgba(25, 118, 210, 0.4)',
                                        }
                                        : {
                                            color: 'text.secondary',
                                            '&:hover': {
                                                backgroundColor: 'rgba(0, 0, 0, 0.04)', 
                                                color: 'text.primary'
                                            },
                                        }),
                                }}
                            >
                                <Typography variant="body2" fontWeight="medium" sx={{
                                    textTransform:"uppercase",
                                }}>
                                    {category}
                                </Typography>
                            </Button>
                        ))}
                    </Box>

                    <Grid container spacing={4} sx={{
                        // border: "1px solid red",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        {filteredImages.map((image) => (
                            <Grid key={image.id} item xs={12} sm={6} md={4} sx={{
                                position: "relative",
                                // width: "100%",
                                "&:hover .overlay": {
                                    opacity: 0.8,
                                    visibility: "visible",
                                },
                            }}>

                                <img
                                    src={image.src}

                                        style={{
                                            width: '100%',
                                            
                                             
                                        }}
                                />
                                <Box className="overlay" sx={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "#fbae19",  
                                    opacity: 0,
                                    visibility: "hidden",
                                    transition: "opacity 0.3s, visibility 0.3s",
                                    zIndex: 10,
                                }}>
                                    <Typography variant="h4" sx={{ color: "white",
                                    // position:"relative",
                                    //     zIndex: -2,

                                     }}  >
                                        🔍
                                    </Typography>
                                </Box>

                            </Grid>
                        ))}
                    </Grid>
                </Box>
</Box>







        </Box>
    </>);
};
