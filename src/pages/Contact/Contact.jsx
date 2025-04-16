import { Box, Typography, TextField, Stack, Grid, IconButton, Button } from "@mui/material";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";



export default function Contact() {



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
                    Contact Us
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
                    Home  &gt;  <span style={{ color: "#fbae19" }}>  Contact Us</span>
                </Typography>
            </Box>















            <Box  pt={10} sx={{
                px:{xs:1,sm:4, md: 4}
            }}>
                <Grid container spacing={0} sx={{
                    display:"flex",
                    flexDirection:{xs:"column", md:"row"},
                    // border: "1px solid red",
                    gap:{xs:4, sm:4, md:2, lg:4},
                    justifyContent: { xs: "flex-start", sm: "flex-start" ,md:"center"},


                }}  >
                    
                    <Grid item xs={12} md={8} sx={{
                        maxWidth: { xs: "100%",sm:"100%", md: "525px", lg: "670px" },
                        // border:"1px solid red",
                        boxShadow: 3,
                        p:3,

                    }}>
                        <Stack spacing={2}>
                            <Typography variant="h4" fontWeight="bold">
                                Contact us today
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                For more information contact Rapid Nutrition’s Investor Relations team. We value your feedback and will respond to your question as quickly as possible. Alternatively click on the ‘chat box’ at the bottom right corner of your computer.
                            </Typography>
                        </Stack>

                        <Box
                            sx={{
                                width: '100%',
                                // maxWidth: 600,
                                // mx: 'auto',
                                py: 4,
                                // px:4,
                                // border:"1px solid red",
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 3,
                            }}
                        >
                           

                            <Grid container spacing={0} sx={{
                                width:"100%",
                                display:"flex",
                                gap: { xs: 3, md: 0 },

                                justifyContent:"space-between",
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
                                        label="Subject"
                                        variant="outlined"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} md={6} lg={12} sx={{
                                    width: { xs: '100%', md: '49%' },
                                }}>
                                    <TextField
                                        label="Subject"
                                        variant="outlined"
                                        fullWidth
                                    />
                                </Grid>
                            </Grid>








                        
                          
                            <TextField
                                label="Message"
                                variant="outlined"
                                fullWidth
                                multiline
                                rows={5}
                            />

                            <Button
                                variant="contained"
                                sx={{
                                    width: '170px',
                                    alignSelf: 'flex-start',
                                    borderRadius: 0,
                                    background: '#fbae19',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    px: 2,
                                    py: 1,
                                    backgroundSize: '200% auto',
                                    transition: '0.4s',
                                    backgroundImage:
                                        'linear-gradient(to left, #fbae19 50%, #062d4c 50%)',
                                    backgroundPosition: 'right center',
                                    '&:hover': {
                                        backgroundPosition: 'left center',
                                    },
                                }}
                            >
                                Send Message
                            </Button>
                        </Box>






                    </Grid>

                     
                    <Grid item xs={12} md={4} sx={{
                        maxWidth: { xs: "100%", sm: "100%", md: "285px", lg:"430px" },

                        // border: "1px solid red",
                        boxShadow: {xs:"none", md:3},




                    }}>
                        <Stack spacing={2} sx={{
                            p: 3,
                            // pb:0,
                            // boxShadow: 3,


                        }}>
                            <Typography variant="h4" fontWeight="bold">
                                Keep In Touch!
                            </Typography>
                            <Stack direction="row" spacing={2} mt={2} sx={{
                                mb:2,
                            }}>
                                <IconButton sx={{ bgcolor: "#ccc", borderRadius: 1, p: 1.5 }}>
                                    <FaFacebookF style={{ color: '#fbae19', fontSize: "0.7rem" }} />
                                </IconButton>
                                <IconButton sx={{ bgcolor: "#ccc", borderRadius: 1, p: 1.5 }}>
                                    <FaTwitter style={{ color: '#fbae19', fontSize: "0.7rem" }} />
                                </IconButton>
                                <IconButton sx={{ bgcolor: "#ccc", borderRadius: 1, p: 1.5 }}>
                                    <FaLinkedinIn style={{ color: '#fbae19', fontSize: "0.7rem" }} />
                                </IconButton>
                                <IconButton sx={{ bgcolor: "#ccc", borderRadius: 1, p: 1.5 }}>
                                    <FaInstagram style={{ color: '#fbae19', fontSize: "0.7rem" }} />
                                </IconButton>


                            </Stack>


                            <Stack spacing={1} mt={2} sx={{
                                pt:4,
                                // mt:2,
                                // border:"1px solid red"
                            }}>

                                <Typography variant="h4" fontWeight="bold">
                                    Locations
                                </Typography>

                                {[
                                    "📍 For more information contact Rapid Nutrition’s Investor Relations team.",
                                    "📞 1-888-123-4567",
                                    "📧 info@structure.com",
                                    "🕒 Mon - Sat: 09.00am to 18.00pm"
                                ].map((text, index) => console.log(index)|| (
                                    
                                    (
                                    <Box
                                        key={index}
                                        sx={{
                                            borderBottom:index<4? "1px solid #e0e0e0" :"",
                                            py: 2,
                                            // mb: 1,
                                        }}
                                    >
                                        {
                                        //  index<=3 &&
                                          <Typography variant="body2" color="text.secondary" sx={{
                                            fontSize:"0.9rem"
                                        }}>
                                            {text}
                                        </Typography>}
                                    </Box>)
                                ))}


                            </Stack>

                           
                        </Stack>
                    </Grid>
                </Grid>



















                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        // border: "1px solid red",
                        my: 10,


                    }}
                >
                    <Box
                        sx={{
                            width: { xs: '95%', sm: "800px", md: "800px", lg:"1100px"},
                            height: 400,
                            maxWidth:"1100px%",
                            // borderRadius: 2,
                            overflow: 'hidden',
                            boxShadow: 3,
                            // px: { xs: 1, sm: 4, md: 4 },

                            p:3,
                        }}
                    >
                        <iframe
                            title="Location Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.088477166869!2d-122.4194154846817!3d37.7749292797591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809cba14a4fb%3A0xa5d9a63fcf6e6db6!2sSan%20Francisco%20City%20Hall!5e0!3m2!1sen!2sus!4v1614034475159!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        />
                    </Box>
                </Box>







            </Box>

















        </Box>
    </>);
};