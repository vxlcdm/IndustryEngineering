
import { Typography, Box } from '@mui/material';
// import { Box } from '@mui/material/Box';
import {   IconButton, Collapse } from "@mui/material";

 
import { Grid, Card, CardContent, Avatar, ListItem, ListItemText } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


import { Accordion, AccordionSummary, AccordionDetails, TextField, Button } from "@mui/material";




const team = [
    {
        name: "George Simons",
        position: "CEO & Managing Director",
        phone: "800-700-6202",
        email: "simons@industrial.com",
        image: "https://lazeapostolski.com/industrial2/img/member1.jpg",
    },
    {
        name: "Lisa Jones",
        position: "Adviser & Business Developer",
        phone: "800-700-6202",
        email: "simons@industrial.com",
        image: "https://lazeapostolski.com/industrial2/img/member2.jpg",
    },
    {
        name: "George Simons",
        position: "Chief Engineer",
        phone: "800-700-6202",
        email: "simons@industrial.com",
        image: "https://lazeapostolski.com/industrial2/img/member3.jpg",
    },
   
];


export default function Contact() {









    return (<>
        <Box sx={{
            // border:"1px solid red"
        }}>
            {/* <Box
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
                <Typography variant="h5" color="black" fontWeight="bold" sx={{
                    textAlign:"center"
                }}>
                    Frequently Asked Questions
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
                    Home  &gt;  About Us &gt;<span style={{ color: "#fbae19" }}>  Our Faq  </span>
                </Typography>
            </Box> */}























            <Box sx={{
                display: "flex",
                // border:"1px solid black",
                justifyContent: "center",
                alignItems: "center",

                //    px:2, 
                // mx:2
            }}>

                <Grid container justifyContent="center" sx={{
                    // py:{xs:1, sm:4, md: 6},
                    my: 5,
                    width: {
                        xs: '95%',
                        sm: "600px",
                        md: '900px',
                        lg: '1200px',
                    },
                    // border: "1px solid red",
                    display: "flex",
                    bgcolor: "#eee",

                    justifyContent: {
                        xs: "space-around",
                        sm: "space-around",
                        md: "space-around",
                        // lg:"space-between",
                    },
                    // border: "1px solid red",
                    // alignItems:"flex-start",
                    // gap: 5,
                }}>





                    <Grid item sx={{
                        my: 3,
                        pt: 6,
                        // width: {xs: "99%", sm:"75%"   , md:"45%"}
                        bgcolor: "white",
                        width: {
                            xs: '95%',
                            sm: "90%",
                            md: '250px',
                            lg: '400px',
                        },
                        px: 2,
                        // border:"1px solid red",

                    }}>
                        <Box sx={{

                        }}>
                            <Typography
                                variant="h5"
                                fontWeight="800"
                                gutterBottom
                                sx={{

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
                                Our Experts
                            </Typography>
                            {/* <Typography variant="body1" color="textSecondary" sx={{
                                py: 3,
                                // display: "inline-block",
                                // position: "relative",
                                // textAlign: "center",

                            }}>
                                Lorem ipsum dolor sit amet, consectetur adi pisi cing elit, sed do eiusmod tempor exercitationemut.

                            </Typography> */}

                            <Typography variant="body1" color="textSecondary" sx={{
                                my: {xs:5,md:2,lg:5},
                                // py: 3,

                                // display: "inline-block",
                                // position: "relative",
                                // textAlign: "center",

                            }}>

                                Lorem ipsum dolor sit amet, consectetur adi pisi cing elit, sed do eiusmod tempor exercitationemut. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipis civelit sed quia non qui dolorem or phone +11 987 654 3210 ipsum quia dolor sit amet, consectetur.
                            </Typography>
                        </Box>
                        <Button
                            variant="contained"
                            sx={{
                                mb: 5,

                                borderRadius: 1,
                                backgroundColor: "white",
                                color: "#fbae19",
                                // boxShadow:0,
                                border:"1px solid #eeee",
                                position: "relative",
                                overflow: "hidden",
                                width: {md:"60%", lg:"30%"},
                                zIndex: 1,
                                "&::before": {
                                    content: '""',
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    height: "100%",
                                    width: "0%",
                                    backgroundColor: "#062d4c",
                                    zIndex: 0,
                                    transition: "width 0.4s ease",
                                },
                                "&:hover::before": {
                                    width: "100%",
                                },
                                "&:hover": {
                                    border: "1px solid #062d4c",

                                    // backgroundColor: "#fbae19",
                                },
                                "& > span": {
                                    position: "relative",
                                    zIndex: 1,
                                },
                            }}
                        >
                            <span style={{ fontSize: "0.8rem" }}>SEE MORE</span>
                        </Button>
                    </Grid>










                    <Grid item sx={{
                        // width: { xs: "99%", sm:"75%"   , md: "45%" },
                        // mt: {xs:5, md:0},

                        width: {
                            xs: '95%',
                            sm: "90%",
                            md: '620px',
                            lg: '700px',
                        },
                        bgcolor: "#eee",
                        // p: 2,
                        // px: { xs: 0.5, md: 4 },
                        // transform:"scale(0.9)",
                    }}>

                        <Box sx={{
                            // mt: 5,
                            display: "flex",
                            alignSelf: "center",
                            justifySelf: "center",
                            alignItems: "center",
                            // alignSelf: "center",
                            justifyContent: "center",
                            width: "100%",
                            // border: "1px solid red",
                            p: 0,
                            m: 0,
                            height: "100%",
                        }}>
                          


                            <Grid container spacing={0} sx={{
                                // border:"2px solid red",
                                // width: "1170px",
                                display: "flex",
                                alignSelf: "center",
                                justifySelf: "center",
                                alignItems: "center",
                                // alignSelf:"center",
                                justifyContent: "center",
                                width:"100%",
                                height:"100%",
                                gap:{xs:3, sm:4, md:1, lg:4},
                                // width: {
                                //     xs: "300px",
                                //     sm: "600px",
                                //     md: "900px",
                                //     lg: "900px",
                                //     xl: "900px",

                                // },
                                // border:"1px solid red",
                                // height: "100%",
                                // py: 4,

                            }}>
                                {team.map((member, i) => (
                                    <Grid item xs={12} sm={6} md={3} lg={3} key={i}
                                    sx={{
                                            // width:{md:"800px"}
                                        // border: "1px solid red",

                                    }}
                                    >

                                        <Card sx={{
                                            display: "flex", flexDirection: "column", alignItems: "start", borderRadius: 0,
                                            overflow: "hidden",
                                            position: "relative",
                                            "&:hover .hover-overlay": {
                                                transform: "scale(1)",
                                            },

                                        }}>




                                            <Box sx={{ position: "relative", width: "100%", height: "200px" }}>
                                                <img
                                                    src={member.image}
                                                    style={{
                                                        // width: "100px",
                                                        height: "200px",
                                                        // borderRadius: "50%",
                                                        // marginBottom: "16px",
                                                        objectFit: "cover"
                                                    }}
                                                />

                                                <Box
                                                    className="hover-overlay"
                                                    sx={{
                                                        position: "absolute",
                                                        top: 0,
                                                        left: 0,
                                                        width: "100%",
                                                        height: "100%",
                                                        bgcolor: "rgba(251, 174, 25, 0.5)",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        flexDirection: "row",
                                                        gap: 2,
                                                        transform: "scale(0)",
                                                        transition: "transform 0.3s ease",
                                                        zIndex: 2,
                                                    }}
                                                >
                                                    <Box sx={{ color: "#fff", fontSize: 24, cursor: "pointer" }}>
                                                        <FacebookIcon sx={{ color: "#fff", fontSize: 24, cursor: "pointer" }} />
                                                    </Box>
                                                    <Box sx={{ color: "#fff", fontSize: 24, cursor: "pointer" }}>
                                                        <TwitterIcon sx={{ color: "#fff", fontSize: 24, cursor: "pointer" }} />
                                                    </Box>
                                                    <Box sx={{ color: "#fff", fontSize: 24, cursor: "pointer" }}>
                                                        <LinkedInIcon sx={{ color: "#fff", fontSize: 24, cursor: "pointer" }} />

                                                    </Box>
                                                </Box>
                                            </Box>







                                            <Box sx={{
                                                px: 2,
                                            }}>
                                                <Typography variant="body1" fontWeight="bold" sx={{
                                                    mt: 1,

                                                }}>
                                                    {member.name}
                                                </Typography>


                                                <Box sx={{ width: "100%" }}>
                                                    <Typography
                                                        sx={{
                                                            color: "#fbae19",
                                                            fontSize: "0.7rem",
                                                        }}
                                                    >
                                                        {member.position}
                                                    </Typography>
                                                    <Box
                                                        sx={{
                                                            height: "0.1px",
                                                            backgroundColor: "#ddd",
                                                            my: 1,
                                                            width: "100%",
                                                        }}
                                                    />
                                                </Box>
                                                <Typography sx={{
                                                    color: "black",
                                                    fontSize: "0.75rem",
                                                }}>Tel: {member.phone}</Typography>



                                                <Typography sx={{
                                                    color: "black",
                                                    fontSize: "0.75rem",
                                                    mb: 2,
                                                }}>Mail: {member.email}</Typography>
                                            </Box>




                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>





                            








                             

                          



                        </Box>
                    </Grid>





                </Grid>
            </Box>



























        </Box>
    </>);
};