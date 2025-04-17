import React from 'react';
import { Box, Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import BuildIcon from '@mui/icons-material/Build';
import SecurityIcon from '@mui/icons-material/Security';
import GroupsIcon from '@mui/icons-material/Groups';
import {
    
  
     
    TextField,
    List, ListItem, ListItemText, Divider ,
   
    Stack,
 
    Container,
    InputAdornment
} from '@mui/material';














const cardData = [
    {
        img: 'https://lazeapostolski.com/industrial2/img/news-thumb1.jpg',
        title: 'Here is Why Our new Factory will Change the Future',
        date: 'Nov 14, 2016',
        desc: 'Etiam porta, leo sit amet faucibus consectetur, nunc tortor facilisis elit, quis viverra turpis ligula eget purus. Mauris tempor congue ligula et euismod. gna.',
    },
    {
        img: 'https://lazeapostolski.com/industrial2/img/news-thumb2.jpg',
        title: 'Here is Why Our new Factory will Change the Future',
        date: 'Nov 14, 2016',
        desc: 'Etiam porta, leo sit amet faucibus consectetur, nunc tortor facilisis elit, quis viverra turpis ligula eget purus. Mauris tempor congue ligula et euismod. gna.',
    },
    {
        img: 'https://lazeapostolski.com/industrial2/img/news-thumb3.jpg',
        title: 'Here is Why Our new Factory will Change the Future',
        date: 'Nov 14, 2016',
        desc: 'Etiam porta, leo sit amet faucibus consectetur, nunc tortor facilisis elit, quis viverra turpis ligula eget purus. Mauris tempor congue ligula et euismod. gna.',
    }
  
];


 

const LN = () => {
  




    return (

<>  


         <Box  sx={{
                // border: "1px solid red",
                my:10
         }}>
                <Box sx={{
                    position: "relative", display: "flex",
                    // border: "1px solid red",

                    // mb: 4,
                    mb: "0  !important",

                    justifySelf: "center",
                    justifyContent: { xs: "center", sm: "flex-start" },
                    // my: 5,
                    width: {
                        xs: '95%',
                        sm: "600px",
                        md: '900px',
                        lg: '1200px',
                    },
                    // border: "1px solid red",


                }}>
                    <Typography variant="h4" fontWeight="bold" gutterBottom sx={{
                        mb: "0  !important",

                    }}>
                        <Box sx={{
                            position: "relative",
                            pr: 0.5,
                            px: 5,
                            // textAlign:"center",
                        }}>
                            Latest News
                        </Box>
                        <Box component="span" sx={{
                            position: "relative",
                            pr: 0.5,
                            px: 5,
                        }}>
                            <Box
                                component="span"
                                sx={{
                                    position: "relative",
                                    top: {
                                        xs: -20,
                                        // sm:-20
                                    },
                                    width: "40px",
                                    borderBottom: "3.5px solid #fbae19",
                                    display: "inline-block",
                                    // px:10,
                                    pb: "12px",
                                }}
                            >

                            </Box>


                        </Box>

                    </Typography>
                </Box>



                <Box sx={{
                    my: 5,
                    display: 'flex',
                    justifySelf: "center",
                    justifyContent:"center",
                    alignSelf: "center",
                    // border: "1px solid red",
                    maxWidth: '1200px',
                    // margin: '0 auto',
                    flexDirection: { xs: 'column-reverse', md: 'row' },
                    // width:{xs:"90%"},
                    width: {
                        xs: '95%',
                        sm: "600px",
                        md: '900px',
                        lg: '1200px',
                    },
                    gap: { xs: 5, md: 0 },

                }}>

                    <Box sx={{
                        // flexBasis: { md: '80%' },
                        // border: "2px solid blue",
                        // justifyContent: { xs: "center", md: "space-between" },
                        px: 2,

                    }}>
                        {/* <Card sx={{ mb: 2 }}>
                            <CardContent>
                                <Typography variant="h5">Card 1</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    This is the first card content. It contains some example text.
                                </Typography>
                            </CardContent>
                        </Card> */}
                        {/* 
                        <Card>
                            <CardContent>
                                <Typography variant="h5">Card 2</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    This is the second card content. It also contains some example text.
                                </Typography>
                            </CardContent>
                        </Card> */}




                        <Grid container sx={{
                            display: "flex",
                            width: "100%",
                            // border:"2px solid yellow",
                            justifyContent: { xs: "center", md: "space-between" },
                            alignItems: "center",
                            gap:{xs:4, sm:4, md:2, lg:4},
                        }} >
                            {cardData.map((card, index) => (
                                <Grid item xs={12} md={6} key={index} sx={{
                                    width: { xs: "100%", sm: "80%", md: "275px", lg: "365px" },
                                    transition:"all ease 0.3s",
                                    "&:hover":{
                                        // boxShadow: 6,    
                                        // boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.2)',
                                        boxShadow: '0 0 25px rgba(0, 0, 0, 0.2)'

                                        // boxShadow: '0 2px 8px rgba(0, 0, 0, 0.12), 0 6px 20px rgba(0, 0, 0, 0.08)',


                                    }
                                    // border: "2px solid yellow",
                                    // mx:1,
                                    // mb: 3,
                                }}>
                                    <Card sx={{
                                        height: { xs: "100%", sm: "120%", md: "500px", lg: "430px" },
                                        borderRadius: 0,
                                    }}>
                                        <CardMedia
                                            component="img"
                                            height="180"
                                            image={card.img}
                                            alt={card.title}
                                        />
                                        <CardContent>
                                            <Typography variant="h6" fontWeight="bold">
                                                {card.title}
                                            </Typography>
                                            <Typography variant="caption" color="text.secondary">
                                                {card.date}
                                            </Typography>
                                            {/* <Divider sx={{ my: 2 }} /> */}
                                            <Typography variant="body2" color="text.secondary" paragraph>
                                                {card.desc}
                                            </Typography>
                                            <Button
                                                sx={{
                                                    color: 'black',
                                                    borderRadius: 0,
                                                    px: 1,
                                                    '&:hover': {
                                                        backgroundColor: '#fbae19',
                                                        color: 'white',
                                                    },
                                                }}
                                            >
                                                Read More
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>






                    </Box>

                </Box>


         </Box>



</>    );
};

export default LN;
