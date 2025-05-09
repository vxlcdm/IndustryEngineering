

import React from 'react';
import {
    Box,
    Card,
    CardContent,
    TextField,
    Typography,
    Grid, CardMedia, 
    Stack,
    Button,
    Container,
    InputAdornment
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {  List, ListItem, ListItemText, Divider } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const categories = ['Manufacturing', 'Chemical', 'Construction', 'Energy', 'Materials'];





const tags = [
    'Future', 'Science', 'Factory', 'Industrial',
    'Construction', 'Glass', 'Helmet', 'Wind Energy', 'Gloves'
];
const cardData = [
    {
        img: 'https://lazeapostolski.com/industrial2/img/news-thumb1.jpg',
        title: 'How Advanced Manufactoring is Transforming the FACTORY',
        date: 'Nov 14, 2016',
        desc: 'Etiam porta, leo sit amet faucibus consectetur, nunc tortor facilisis elit, quis viverra turpis ligula eget purus. Mauris tempor congue ligula et euismod. gna.',
    },
    {
        img: 'https://lazeapostolski.com/industrial2/img/news-thumb2.jpg',
        title: 'Solar Power becoming cheap enough to compete with Fuels',
        date: 'Nov 14, 2016',
        desc: 'Etiam porta, leo sit amet faucibus consectetur, nunc tortor facilisis elit, quis viverra turpis ligula eget purus. Mauris tempor congue ligula et euismod. gna.',
    },
    {
        img: 'https://lazeapostolski.com/industrial2/img/news-thumb3.jpg',
        title: 'How Advanced Manufactoring is Transforming the FACTORY',
        date: 'Nov 14, 2016',
        desc: 'Etiam porta, leo sit amet faucibus consectetur, nunc tortor facilisis elit, quis viverra turpis ligula eget purus. Mauris tempor congue ligula et euismod. gna.',
    },
    {
        img: 'https://lazeapostolski.com/industrial2/img/news-thumb4.jpg',
        title: 'Solar Power becoming cheap enough to compete with Fuels',
        date: 'Nov 14, 2016',
        desc: 'Etiam porta, leo sit amet faucibus consectetur, nunc tortor facilisis elit, quis viverra turpis ligula eget purus. Mauris tempor congue ligula et euismod. gna.',
    },
    {
        img: 'https://lazeapostolski.com/industrial2/img/news-thumb5.jpg',
        title: 'How Advanced Manufactoring is Transforming the FACTORY',
        date: 'Nov 14, 2016',
        desc: 'Etiam porta, leo sit amet faucibus consectetur, nunc tortor facilisis elit, quis viverra turpis ligula eget purus. Mauris tempor congue ligula et euismod. gna.',
    },
    {
        img: 'https://lazeapostolski.com/industrial2/img/news-thumb6.jpg',
        title: 'Solar Power becoming cheap enough to compete with Fuels',
        date: 'Nov 14, 2016',
        desc: 'Etiam porta, leo sit amet faucibus consectetur, nunc tortor facilisis elit, quis viverra turpis ligula eget purus. Mauris tempor congue ligula et euismod. gna.',
    },
];




export default function News() {



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
                    News
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
                    Home  &gt;  <span style={{ color: "#fbae19" }}>  News</span>
                </Typography>
            </Box>



























                <Box sx={{
                        display: 'flex',
                        // border:"1px solid red",
                        justifyContent:"center",
                        alignItems:"center",
                        my:10,
                }}>

                <Box sx={{
                    display: 'flex',
                    // border: "1px solid red",
                    maxWidth: '1200px',
                    // margin: '0 auto',
                    flexDirection: { xs: 'column-reverse', md: 'row' },
                    // width:{xs:"90%"},
                    width: {
                        xs: '95%',
                        md: '890px',
                        lg: '1180px',
                    },
                    gap:{ xs:5, md:0},
                }}>
                     
                    <Box sx={{
                        // flexBasis: { md: '80%' },
                        // border: "2px solid blue",

                        maxWidth: {
                            xs: '100%',
                            md: '610px', 
                            lg: '850px', 
                        },
                        px:2,

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
                            display:"flex",
                            width:"100%",
                            // border:"2px solid yellow",
                            justifyContent:{xs:"center", md:"space-between"},
                            alignItems:"center",
                        }} >
                            {cardData.map((card, index) => (
                                <Grid item xs={12} md={6} key={index} sx={{
                                    width:{xs:"100%",sm:"70%" ,md:"295px", lg:"410px"},

                                    // border: "2px solid yellow",

                                    // mx:1,
                                    mb:3,
                                }}>
                                    <Card sx={{
                                        height: { xs: "100%", sm: "100%", md: "550px", lg: "450px" },
                                        borderRadius:0,
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
                                            <Divider sx={{ my: 2 }} />
                                            <Typography variant="body2" color="text.secondary" paragraph>
                                                {card.desc}
                                            </Typography>
                                            <Button
                                                sx={{
                                                    color: 'black',
                                                    borderRadius: 0,
                                                    px: 0,
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

                    
                    <Box sx={{
                        // flexBasis: { md: '20%' },
                        // border:"2px solid green",
                        width: {
                            xs: '100%',
                            md: '320px', 
                            lg: '350px',
                        },
                        // width: '100%'
                    }}>
                        <Box sx={{
                            p: 0,
                            maxWidth: '100%',
                            m: 0,
                            px:{xs:2,md:0},
                            pl: { xs: 0, md: 1 },
                        }}>
                            <Box
                                sx={{
                                    // px:2,
                                    display: 'flex',
                                    alignItems: 'center',
                                    width: '100%',
                                    // maxWidth: 400,
                                    border: '1px solid #ccc',
                                    // borderRadius: '4px',
                                    overflow: 'hidden',
                                }}
                            >
                                <TextField
                                    fullWidth
                                    placeholder="Search..."
                                    variant="standard"
                                    InputProps={{
                                        disableUnderline: true,
                                    }}
                                    sx={{
                                        pl: 2,
                                        '& input::placeholder': {
                                            color: '#aaa',
                                        },
                                    }}
                                />
                                <Box
                                    sx={{
                                        bgcolor: '#fbae19',
                                        p: '10px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                    }}
                                >
                                    <SearchIcon sx={{ color: 'white' }} />
                                </Box>
                            </Box>

                        </Box>

                        <Box sx={{ width: '100%',
                         bgcolor: 'background.paper', 
                            // border: '1px solid #ddd', 
                            mt:4, }}>
                            <Typography variant="h6" sx={{ 
                                px: 2,
                                 py: 2,
                                  fontWeight: 500 }}>
                                Categories
                            </Typography>
                            <List sx={{
                                
                            }}>
                                {categories.map((cat, idx) => (
                                    <React.Fragment key={cat}>
                                        <ListItem
                                            secondaryAction={<ArrowForwardIosIcon sx={{ fontSize: 14,
                                             color: 'text.secondary',
                                             }} />}
                                            sx={{ px: 2, py: 1,
                                                '&:hover': {
                                                    bgcolor: '#fbae19',
                                                    color: 'white',
                                                    cursor: 'pointer',
                                                    '& svg': {
                                                        color: 'white',
                                                    },
                                                },
                                             }}
                                        >
                                            <ListItemText primary={cat} primaryTypographyProps={{ fontWeight: 100 }} 
                                            sx={{

                                            }}/>
                                        </ListItem>
                                        {idx < categories.length - 1 && <Divider />}
                                    </React.Fragment>
                                ))}
                            </List>
                        </Box>



                        <Box sx={{ maxWidth: '100%',  p: 2 }}>
                            <Typography variant="h6" gutterBottom sx={{
                                // px: 2,
                                py: 2,
                            }}>
                                Popular Post
                            </Typography>

                            <Stack spacing={2}>
                                {[1, 2, 3].map((item, i) => (
                                    <>   
                                    
                                    <Box key={i} sx={{ display: 'flex', gap: 2 }}>
                                        <Box
                                            component="img"
                                            src={`https://picsum.photos/seed/post${i}/80/80`}
                                            alt="Post thumbnail"
                                            sx={{ width: 80, height: 80, borderRadius: 1 }}
                                        />
                                        <Box>
                                            <Typography variant="body1" fontWeight={100} sx={{
                                                fontSize:{xs:"1rem",md:"0.8rem"},
                                                    '&:hover': {
                                                        cursor:"pointer",
                                                        // backgroundColor: '#fbae19',
                                                        color: '#fbae19',
                                                    },
                                            }}>
                                                How Advanced Manufacturing is Transforming the FACTORY
                                            </Typography>
                                            <Typography variant="caption" color="text.secondary">
                                                October 21, 2016
                                            </Typography>
                                        </Box>
                                    </Box>
                                        <Divider sx={{
                                            //  my: 1, 
                                        width:"95%" ,
                                        }} />
                                    </>
                                    
                                ))}
                            </Stack>

                            {/* <Divider sx={{  }} /> */}

                            <Typography variant="h6" gutterBottom sx={{
                                mt: 6
                            }}>
                                Text Widget
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{
                                pr:2,
                            }}>
                                Morbi tincidunt iaculis ipsum eget laoreet. Cras at finibus ante,
                                posuere ornare ex. Mauris sollicitudin ornare ullamcorper. Donec in arcu
                                purus. Phasellus ullamcorper.
                            </Typography>
                        </Box>







                                
                        <Box sx={{ maxWidth: '100%', px: 2, mt: 4 }}>
                            <Typography variant="h6" gutterBottom>
                                Popular Tags
                            </Typography>

                            <Stack direction="row" flexWrap="wrap" gap={1}>
                                {tags.map((tag, index) => (
                                    <Button
                                        key={index}
                                        variant="outlined"
                                        sx={{
                                            // borderColor: 'transparent',
                                            borderRadius:0,
                                            fontSize:"0.8rem",
                                            color: '#ccc',
                                            border:"1px solid #ddd",
                                            '&:hover': {
                                                backgroundColor: '#fbae19',
                                                color: 'white',
                                            },
                                        }}
                                    >
                                        {tag}
                                    </Button>
                                ))}
                            </Stack>
                        </Box>    




                    </Box>
                </Box>

</Box>
















            

            
            













        </Box>
    </>);
};