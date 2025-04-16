

import React from 'react';
import {
    Box,
    Card,
    CardContent,
    TextField,
    Typography,
    Grid, CardMedia,
    Stack,
    Avatar,
    IconButton,
    Button,
    Container,
    InputAdornment
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { List, ListItem, ListItemText, Divider } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPinterestP } from 'react-icons/fa';
const categories = ['Manufacturing', 'Chemical', 'Construction', 'Energy', 'Materials'];





const tags = [
    'Future', 'Science', 'Factory', 'Industrial',
    'Construction', 'Glass', 'Helmet', 'Wind Energy', 'Gloves'
];
 




export default function NewsOV() {



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
                justifyContent: "center",
                alignItems: "center",
                my: 10,
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
                    gap: { xs: 5, md: 0 },
                }}>

                    <Box sx={{
                        // flexBasis: { md: '80%' },
                        // border: "2px solid blue",

                        maxWidth: {
                            xs: '100%',
                            md: '610px',
                            lg: '850px',
                        },
                        px: 2,

                    }}>
                        {/* <Card sx={{ mb: 2 }}>
                            <CardContent>
                                <Typography variant="h5">Card 1</Typography>
                                <Typography variant="body2" color="text.secondary">
                             HERO SECTION WILL BE PLACSUHED HERE 
                                </Typography>
                            </CardContent>
                        </Card> */}
                        {/* 
                        <Card>
                            <CardContent>
                                <Typography variant="h5">Card 2</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    HERO SECTION WILL BE PLACSUHED HERE 
                                </Typography>
                            </CardContent>
                        </Card> */}




                        <Grid container sx={{
                            display: "flex",
                            width: "100%",
                            // border:"2px solid yellow",
                            justifyContent: { xs: "center", md: "space-between" },
                            alignItems: "center",
                        }} >



                            <Box sx={{ maxWidth: 'lg', mx: 'auto', p: 0 }}>
                                <Box component="img" src="https://lazeapostolski.com/industrial2/img/news-big2.jpg" width="100%" mb={2} />

                                <Typography variant="h4" fontWeight="bold" gutterBottom>
                                    Our Outstanding Services
                                </Typography>

                                <Typography variant="body2" color="text.secondary" gutterBottom sx={{ 
                                    color:"#fbae19",
                                    fontSize:"0.8rem",
                                    fontWeight:600,
                                    '&:hover': {
                                        cursor:"pointer",
                                    },

                                }}>
                                    📅 March 02, 2016 | 👤 Mark Vaugan | 🛠️ Mechanical, 🎨 Design | 💬 05 Comments
                                </Typography>

                                <Typography paragraph>
                                    Benenatis mauris Vestibulum ante ipsum primis in industry, logistics, finance, business orci ultrices venenatis mauris. It is a long established fact that a reader will be distracted.
                                </Typography>
                                <Typography paragraph>
                                    Quisque ligulas ipsum, euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nunc dui, tristique in semper vel, congue sed ligula. Nam dolor ligula, faucibus id sodales in, auctor fringilla libero. Pellentesque pellentesque tempor tellus eget hendrerit. Morbi id aliquam ligula. Aliquam id dui sem. Proin rhoncus consequat nisl, eu ornare mauris tincidunt vitae. Vestibulum sodales ante a purus volutpat euismod. Proin sodales quam nec ante sollicitudin lacinia. Ut egestas bibendum tempor. Morbi non nibh sit amet ligula blandit ullamcorper in nec risus. Pellentesque fringilla diam faucibus tortor bibendum vulputate. Etiam turpis urna, rhoncus et mattis ut, dapibus eu nunc. Nunc sed aliquet nisi. Nullam ut magna non lacus adipiscing volutpat. Aenean odio mauris, consectetur quis consequat quis, blandit a nunc. Sed orci erat, placerat ac interdum ut, suscipit eu augue. Nunc vitae mi tortor. Ut vel justo quis lectus elementum ullamcorper volutpat vel libero.
                                </Typography>

                                <Box
                                    sx={{
                                        backgroundColor: '#e3f2fd ',
                                        color: 'white',
                                        p: 2,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        flexWrap: 'wrap',
                                        mt: 4,
                                        borderRadius: 1,
                                    }}
                                >
                                    <Typography color='black' fontWeight={300}
                                    sx={{pl:3,
                                        fontSize:"0.9rem",
                                    }}>Share This Story, Choose Your Platform!</Typography>
                                    <Box>
                                        {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPinterestP].map((Icon, i) => (
                                            <IconButton
                                                key={i}
                                                sx={{
                                                    fontSize:"0.8rem",
                                                    color: '#007bff',
                                                    bgcolor:"#ddd",
                                                    borderRadius:1,
                                                    mx: 1,
                                                    '&:hover': {
                                                        color: '#fbae19',
                                                        bgcolor: '#007bff',

                                                    },
                                                }}
                                            >
                                                <Icon />
                                            </IconButton>
                                        ))}
                                    </Box>
                                </Box>

                                <Box mt={6}>
                                    <Typography variant="h5" fontWeight="bold" gutterBottom sx={{mb:4,}}>
                                        About the Author:
                                    </Typography>
                                    <Box display="flex" gap={2} alignItems="center" mb={2}>
                                        <Avatar src="https://i.pravatar.cc/100?img=12" sx={{ width: 100, height: 100 }} />
                                        <Box>
                                            <Typography fontWeight="bold">Robert Davison</Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim ornare nisi vitae.
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>


                                <Typography variant="h5" fontWeight="bold" gutterBottom sx={{mt:6,mb:3,}}>
                                    Comments
                                </Typography>
                                {[1, 2, 3].map((c, i) => (
                                    <>    
                                    <Box key={i} display="flex" gap={2} mb={3}>
                                            <Avatar
                                                variant="square"
                                            src={`https://lazeapostolski.com/industrial2/img/customer.jpg`} 
                                                sx={{ width: 64, height: 64 }}/>
                                        <Box>
                                            <Typography fontWeight="bold">Simona Shkrtel</Typography>
                                            <Typography variant="body2" color="text.secondary" gutterBottom>
                                                Duis aute irure dolor in reprehenderit in vol uptate velit esse cillum dolore eu fugiat nulla pari atur. Excepteur sint occaecat cupidatat non proid pent.
                                            </Typography>
                                            <Typography variant="caption">Dec 09 2015 | reply</Typography>
                                        </Box>
                                    </Box>
                                      { i<2 &&  <Divider sx={{mt:-1, mb: 3 }} />}
                                    </>
                                ))}


                                <Typography variant="h5" fontWeight="bold" gutterBottom sx={{mt:10,}}>
                                    Leave a Comment
                                </Typography>


                                <Grid container spacing={2} sx={{
                                    // border:"1px solid red",
                                    display:"flex",
                                    flexDirection:"column",
                                    gap: { xs: 3},

                                }}>
                                   <Box>
                                        <Grid container spacing={0} sx={{
                                            width: "100%",
                                            display: "flex",
                                            gap: { xs: 3, md: 0 },

                                            justifyContent: "space-between",
                                            // border:"1px solid red",
                                        }}>
                                            <Grid item xs={12} md={6} lg={12} sx={{
                                                width: { xs: '100%', md: '49%' },
                                            }}>
                                                <TextField
                                                    label="Your Name"
                                                    variant="outlined"
                                                    fullWidth
                                                />
                                            </Grid>
                                            <Grid item xs={12} md={6} lg={12} sx={{
                                                width: { xs: '100%', md: '49%' },
                                            }}>
                                                <TextField
                                                    label="Your Email"
                                                    variant="outlined"
                                                    fullWidth
                                                    type="email"
                                                />
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12} sx={{   
                                            mt: 3,
                                        }}>
                                            <TextField fullWidth multiline rows={4} label="Your Message" variant="outlined" sx={{
                                                width: "100%",
                                            }} />
                                        </Grid>
                                   </Box>





                                    <Grid item xs={12}>
                                        <Button
                                            variant="contained"
                                            sx={{
                                                width: '120px',
                                                borderRadius: 0,
                                                background: '#fbae19',
                                                color: 'white',
                                                fontWeight: 'bold',
                                                px: 2,
                                                py: 1,
                                                backgroundSize: '200% auto',
                                                transition: '0.4s',
                                                backgroundImage: 'linear-gradient(to left, #fbae19 50%, #062d4c 50%)',
                                                backgroundPosition: 'right center',
                                                '&:hover': {
                                                    backgroundPosition: 'left center',
                                                },
                                            }}
                                        >
                                            See More
                                        </Button>
                                    </Grid>
                                </Grid>



                            </Box>



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
                            pl: { xs: 0, md: 1 },
                            px: { xs: 2, md: 0 },
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

                        <Box sx={{
                            width: '100%',
                            bgcolor: 'background.paper',
                            // border: '1px solid #ddd', 
                            mt: 4,
                        }}>
                            <Typography variant="h6" sx={{
                                px: 2,
                                py: 2,
                                fontWeight: 500
                            }}>
                                Categories
                            </Typography>
                            <List sx={{

                            }}>
                                {categories.map((cat, idx) => (
                                    <React.Fragment key={cat}>
                                        <ListItem
                                            secondaryAction={<ArrowForwardIosIcon sx={{
                                                fontSize: 14,
                                                color: 'text.secondary',
                                            }} />}
                                            sx={{
                                                px: 2, py: 1,
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

                                                }} />
                                        </ListItem>
                                        {idx < categories.length - 1 && <Divider />}
                                    </React.Fragment>
                                ))}
                            </List>
                        </Box>



                        <Box sx={{ maxWidth: '100%', p: 2 }}>
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
                                                    fontSize: { xs: "1rem", md: "0.8rem" },
                                                    '&:hover': {
                                                        cursor: "pointer",
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
                                            width: "95%",
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
                                pr: 2,
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
                                            borderRadius: 0,
                                            fontSize: "0.8rem",
                                            color: '#ccc',
                                            border: "1px solid #ddd",
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