import React, { useState } from 'react';
import { Box, Button, Stack, Card, CardContent, Typography, Avatar, Rating, Paper , useMediaQuery, Grid, useTheme } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

// const testimonials = [
//     { name: 'John Doe', text: 'Great service, highly recommended!' },
//     { name: 'Jane Smith', text: 'Amazing team and experience!' },
//     { name: 'Mike Johnson', text: 'Very professional and reliable.' },
//     { name: 'Lisa Ray', text: 'Couldn’t be happier with the results.' },
// ];



const testimonials = [
    {
        name: "George Simons",
        role: "Lawyer",
        text: "Fusce non faucibus lorem. Cras eu velit id diam cursus tincidunt in ut dui. Quisque quis augue placerat, pulvinar dui aliquam, convallis sapien. Orci varius natoque penatibus et magnis dis parturient montes.",
        avatar: "https://lazeapostolski.com/industrial2/img/author.jpg"
    },
    {
        name: "Jessica Lane",
        role: "Architect",
        text: "Ut pretium, sapien a sodales efficitur, justo mi congue sapien, eget rutrum neque quam a eros. Sed tincidunt, metus nec laoreet posuere, massa orci consequat elit, vel porttitor purus justo et velit.",
        avatar: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
        name: "Daniel Kim",
        role: "Project Manager",
        text: "Curabitur facilisis massa vel nulla ultricies, at hendrerit lacus fermentum. Integer dignissim felis nec elit iaculis fermentum. Nullam eu feugiat leo.",
        avatar: "https://randomuser.me/api/portraits/men/44.jpg"
    },
    {
        name: "Samantha Ray",
        role: "Civil Engineer",
        text: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed non sagittis sapien, vel pharetra tellus.",
        avatar: "https://randomuser.me/api/portraits/women/45.jpg"
    },
    {
        name: "Alex Carter",
        role: "Mechanical Engineer",
        text: "Donec pretium, lorem nec sollicitudin egestas, purus metus feugiat erat, ac vestibulum sapien lorem nec lacus. Suspendisse viverra tempor diam.",
        avatar: "https://randomuser.me/api/portraits/men/23.jpg"
    },
    {
        name: "Nina Alvarez",
        role: "Interior Designer",
        text: "Maecenas tincidunt, metus vel iaculis posuere, ex nibh placerat sapien, a convallis libero sem vel nisi. Phasellus a velit sed tellus feugiat lobortis.",
        avatar: "https://randomuser.me/api/portraits/women/12.jpg"
    }
];






const Testimonial2 = () => {
    const [index, setIndex] = useState(0);
    const theme = useTheme();
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));
    const isMd = useMediaQuery(theme.breakpoints.down('md'));
    const isLg = useMediaQuery(theme.breakpoints.down('lg'));

    const visibleCount = isSm ? 1 : isMd ? 1 : (isLg ? 2 : 2) ;

    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex + visibleCount) % testimonials.length);
    };

    const handlePrev = () => {
        setIndex((prevIndex) =>
            (prevIndex - visibleCount + testimonials.length) % testimonials.length
        );
    };

    const getVisibleTestimonials = () => {
        const items = [];
        for (let i = 0; i < visibleCount; i++) {
            items.push(testimonials[(index + i) % testimonials.length]);
        }
        return items;
    };

    return (
        <Box sx={{
             width: '100%',
              textAlign:
               'center',
            //  py: 4 ,
            py:10,
            transition: "all 0.3s ease",

            // border:"1px solid red",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",

           
                backgroundImage: 'url(https://lazeapostolski.com/industrial2/img/bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',


        }}>
           
           
           



            <Box sx={{

                mb: 1,
                width: {
                    xs: '95%',
                    sm: "600px",
                    md: '900px',
                    lg: '1200px',

                },
                display: "flex",
                justifySelf: "center",
                alignSelf: "center",

                // border:"1px solid black",
                justifyContent: "center",
                alignItems: "center",
                // bgcolor: "#f7f7f7",
                // mx: ,

            }}>
                <Typography
                    variant="h5"
                    fontWeight="800"
                    gutterBottom
                    sx={{
                        color:"white",
                        display: "inline-block",
                        position: "relative",
                        // textAlign: "center",
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
                    Testimonials
                </Typography>
            </Box>
           
           
           











           
           
            <Grid container justifyContent="center" sx={{
                // py:{xs:1, sm:4, md: 6},
                // my: 5,
                width: {
                    xs: '100%',
                    sm: "600px",
                    md: '900px',
                    lg: '1200px',
                },
                // border: "1px solid red",
                display: "flex",

                // bgcolor: "#eee",

                justifyContent: {
                    xs: "space-around",
                    sm: "space-around",
                    md: "space-around"
                },
                // alignItems:"flex-start",
                // gap: 5,
                // bgcolor: "#f7f7f7",
                // bgcolor: "white",


            }}>
                

            <Box
                sx={{
                    // border: "1px solid red",
                    display: 'flex',

                    width:"100%",
                        justifyContent: {
                            xs: "space-around",
                            sm: "space-around",
                            md: "space-around"
                        },
                    flexWrap: 'wrap',
                    alignItems:"center",
                    flexDirection:{xs:"column", md:"row"},
                    transition:"all 0.3s ease",
                    gap: 1,
                    // px: 3,
                }}
            >
                {getVisibleTestimonials().map((item, i) => (



                    <Box key={i}   sx={{
                        // bgcolor: "#f7f7f7",
                        // bgcolor: "white",
                        width: { xs: "95%", sm: "90%", md: "47%" },
                        // //  m: 2 ,

                                // border: "1px solid blue",

                    }}>



                        <Box
                            sx={{
                                // px: 2,
                                // height:"250px",
                                py: 6,
                                px:2,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                // bgcolor: "#f7f7f7",
                            }}
                        >
                            <Box
                                sx={{
                                    // maxWidth: 600,
                                    position: "relative",

                                }}
                            >

                                <Paper
                                    elevation={3}
                                    sx={{
                                        transition: "all 0.3s ease",

                                        position: "relative",
                                        p: 3,
                                        height:{xs:"100%", sm:"90px"},
                                        pb: 5,
                                        borderRadius: 2,
                                        backgroundColor: "#fff",
                                        // overflow:"hidden",

                                        fontStyle: "italic",
                                        "&::after": {
                                            content: '""',
                                            position: "absolute",
                                            bottom: -20,
                                            left: 40,
                                            width: 0,
                                            color:"white",
                                            
                                            height: 0,
                                            borderLeft: "10px solid transparent",
                                            borderRight: "10px solid transparent",
                                            borderTop: "20px solid white",
                                        },
                                    }}
                                >
                                    <Typography variant="body1">
                                       {item.text}
                                    </Typography>
                                </Paper>


                                <Box sx={{ display: "flex", alignItems: "center", mt: 4, ml: 2,
                                color:"white",
                                 }}>
                                    <Avatar
                                        src={item.avatar}
                                        // alt="George Simons"
                                        sx={{ width: 64, height: 64, mr: 2 }}
                                    />
                                    <Box>
                                        <Typography variant="subtitle1" fontWeight="bold">
                                            {item.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" mb={0.5 } 
                                        sx={{
                                            color: "white",
                                        }}>
                                            -{item.role}
                                        </Typography>
                                        <Rating value={5} readOnly size="small" />
                                    </Box>
                                </Box>
                            </Box>
                        </Box>







                    </Box>
                ))}
            </Box>

            </Grid>







            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 1 }}>




                <Stack direction="row" justifyContent="center" spacing={2}>
                    <Button
                        onClick={handlePrev}
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
                        onClick={handleNext}
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



                {/* <Button onClick={handlePrev} variant="contained">Prev</Button>
                <Button onClick={handleNext} variant="contained">Next</Button> */}
            </Box>



        </Box>
    );
};

export default Testimonial2;
