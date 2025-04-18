import React, { useState } from 'react';
import {
    Box, Button, Typography, Stack, useTheme,
    useMediaQuery,
} from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';



// const images = [
//   'https://picsum.photos/seed/service1/400/300',
//   'https://picsum.photos/seed/service2/400/300',
//   'https://picsum.photos/seed/service3/400/300',
//   'https://picsum.photos/seed/service4/400/300',
//   'https://picsum.photos/seed/service5/400/300',
// ];
const images = [
    'https://lazeapostolski.com/industrial2/img/proj1.jpg',
    'https://lazeapostolski.com/industrial2/img/proj2.jpg',
    'https://lazeapostolski.com/industrial2/img/proj3.jpg',
    'https://lazeapostolski.com/industrial2/img/proj4.jpg',
    'https://lazeapostolski.com/industrial2/img/proj5.jpg',
    'https://lazeapostolski.com/industrial2/img/proj6.jpg',
    'https://lazeapostolski.com/industrial2/img/proj7.jpg',
    'https://lazeapostolski.com/industrial2/img/proj4.jpg',
    'https://lazeapostolski.com/industrial2/img/proj2.jpg',
];











const Services2 = () => {
    const theme = useTheme();
    const isMdDown = useMediaQuery(theme.breakpoints.down('md'));
    const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));

    const [currentIndex, setCurrentIndex] = useState(0);

    const visibleCount = isSmDown ? 1 : isMdDown ? 3 : 4;

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const getVisibleImages = () => {
        const visible = [];
        for (let i = 0; i < visibleCount; i++) {
            visible.push(images[(currentIndex + i) % images.length]);
        }
        return visible;
    };




    return (
        <>




            <Box sx={{
                py:10,
                backgroundImage: 'url(https://lazeapostolski.com/industrial2/img/bg.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                overflow:"hidden",
                
            }}>




<Box sx={{
    width:"100%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
}}>

                <Box sx={{

                    width: {
                        xs: '95%',
                        sm: '600px',
                        md: '900px',
                        lg: '1200px',
                    },
                    // width:"100%",
                    justifySelf:"center",
                    // border:"1px solid red",
                    // border: "1px solid red",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    // width: "15%",

                }}>
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        gutterBottom
                        sx={{
                            mb: 4,
                            color: "white",
                            display: "inline-block",

                            position: "relative",
                            textAlign: "start",
                            "&::after": {
                                content: '""',
                                position: "absolute",
                                left: 0,
                                bottom: -8,

                                height: "3.5px",
                                width: "40px",
                                backgroundColor: "#fbae19",
                            },
                        }}
                    >
                        Our Services
                    </Typography>


                    <Stack direction="row" justifyContent="center" spacing={2}
                        sx={{
                            // position: "absolute",
                            // top:45,
                            // right:250,
                            // border: "1px solid red",
                            display:"flex",
                            justifyContent:"end",
                            alignItems:"center",
                            // width:"15%",


                        }}>
                        <Button

                            onClick={prevSlide}
                            variant="contained"
                            sx={{
                                bgcolor: '#fbae19',
                                width: {
                                    //   xs: 50,
                                    //   sm: 60,
                                    //   md: 80,
                                    //   lg: 100,
                                },
                                minWidth: 0,
                                p: {
                                    xs: 0.5,
                                    //   sm: 1,

                                },
                                '&:hover': {
                                    bgcolor: '#062d4c',
                                },
                            }}
                        >
                            <KeyboardArrowLeftIcon
                                sx={{
                                    fontSize: {
                                        xs: 20,
                                        sm: 24,
                                        md: 28,
                                        lg: 30,
                                    },
                                }}
                            />
                        </Button>

                        <Button
                            onClick={nextSlide}
                            variant="contained"
                            sx={{
                                bgcolor: '#fbae19',
                                width: {
                                    //   xs: 50,
                                    //   sm: 60,
                                    //   md: 80,
                                    //   lg: 100,
                                },
                                minWidth: 0,
                                p: {
                                    xs: 0.5,
                                    //   sm: 1,

                                },
                                '&:hover': {
                                    bgcolor: '#062d4c',
                                },
                            }}
                        >
                            <KeyboardArrowRightIcon
                                sx={{
                                    fontSize: {
                                        xs: 20,
                                        sm: 24,
                                        md: 28,
                                        lg: 30,
                                    },
                                }}
                            />
                        </Button>
                    </Stack>


                </Box>
                </Box>












                <Box sx={{
                    // width: {
                    //     xs: '95%',
                    //     sm: '600px',
                    //     md: '900px',
                    //     lg: '1200px',
                    // },
                    // width:"100%",
                    // border:"1px solid red",
                    display: 'flex',
                    //   bgcolor: '#eee',
                    justifySelf: 'center',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',

                }}>


                    <Box sx={{ textAlign: 'start', py: 5,
                        // border: "1px solid red",
                        width: "100%",

                     }} >
                        

                        <Stack direction="row" spacing={0} justifyContent="center" mb={3}
                        sx={{
                            // border: "1px solid red",
                            width: "100%",
                            // border:"3px solid red"
                        }}>
                            {getVisibleImages().map((src, i) => (
                                <Box
                                    key={i}
                                    sx={{
                                        position: 'relative',
                                        width: { lg: 380 },
                                        height: { lg: 230 },
                                        border: "1px solid white",
                                        overflow: 'hidden',
                                        '&:hover .overlay': {
                                            opacity: 1,
                                        },
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={src}
                                        alt={`Service ${i}`}
                                        sx={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                        }}
                                    />
                                    <Box
                                        className="overlay"
                                        sx={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            bgcolor: 'rgba(0,0,0,0.5)',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            opacity: 0,
                                            transition: 'opacity 0.3s ease-in-out',
                                        }}
                                    >
                                        <LinkIcon sx={{ color: '#fbae19', fontSize: 40 }} />
                                    </Box>
                                </Box>
                            ))}
                        </Stack>

                       





                    </Box>














                </Box></Box>
            {/* <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                //   backgroundColor: '#e5e5e5 ',
                backgroundColor: '#fbae19 ',



            }}>

                <Box
                    sx={{
                        backgroundColor: '#fbae19 ',
                        // mt:1,
                        py: 6,
                        px: 0,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: { xs: 'column', md: 'row' },
                        gap: 2,
                        width: {
                            xs: "95%",
                            sm: "600px",
                            md: "880px",
                            lg: "1170px",
                        },
                    }}
                >
                    <Typography variant="h4" sx={{ color: 'white', fontWeight: 200, fontSize: "1.2rem" }} >
                        Our Industry does not respect tradition.
                        It only respect Innovation
                    </Typography>


                </Box></Box> */}



        </>
    );
};

export default Services2;
