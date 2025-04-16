import { Box, Typography, Grid, Card, CardContent, Avatar, ListItem, ListItemText } from "@mui/material";
import { style } from '@mui/system';
import { List,  ListItemIcon,   } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight'; 
import ScienceIcon from '@mui/icons-material/Science';
import EngineeringIcon from '@mui/icons-material/PrecisionManufacturing';
import BoltIcon from '@mui/icons-material/Bolt';
import RecyclingIcon from '@mui/icons-material/Autorenew';
import Slider from "./Slider";

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
    {
        name: "George Simons",
        position: "Chief Engineer",
        phone: "800-700-6202",
        email: "simons@industrial.com",
        image: "https://lazeapostolski.com/industrial2/img/member4.jpg", 
    },
];

 

export default function About() {











 

















    return (
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
                    About Us
                </Typography>
            </Box>


            <Box
                sx={{
                    // my:2,
                    py:2,
                    bgcolor:"white",
                    borderBottom:"1px solid black",
                }}>
                <Typography 
                sx={{
                    color:"black",
                    textAlign:"center",
                    fontSize:"0.8rem"
                }}>
                    Home  &gt;  <span style={{ color:"#fbae19"}}>About Us</span>
                </Typography>
            </Box>














          
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    justifyContent: "center",
                    alignItems:{ 
                        sm: "center",
                        md:"flex-start",
                    },
                    // alignItems:"center",
                    maxWidth: "850px",
                    mx: "auto",
                    mt:5,
                    mb:10,
                    gap:{xs:0,
                        sm:3},
                    // border: "1px solid red",
                }}
            >
                 
                <Box
                    sx={{
                        width: { xs: "80%", md: "45%" },
                        display: "flex",
                        flexDirection: "column",
                        alignItems:"center",
                        alignSelf:{xs:"center",
                            sm:"initial",
                        },
                    py:1,
                        gap: 2,
                        mb:{xs:-4,
                            sm:""
                        },
                        // border: "1px solid blue",
                    }}
                >
                    <Box
                        component="img"
                        src="https://lazeapostolski.com/industrial2/img/about.jpg"
                        alt="Company Overview"
                        sx={{
                            width: "100%",
                            height: "auto",
                            // border: "1px solid red",
                        }}
                    />

                    <Box
                        sx={{
                            display: "flex",
                            gap: 2,
                            width: "100%",
                            // border: "1px solid black",
                            // alignSelf: "center",
                            justifyContent:{xs:"center",
                                sm:"initial",
                            },

                        }}
                    >
                        <Box
                            component="img"
                            src="https://lazeapostolski.com/industrial2/img/about-small.jpg"
                            alt="Small Overview 1"
                            sx={{
                                width:{xs:"46.8%" ,
                                    sm:"50%"},
                                // border: "1px solid red",
                            }}
                        />
                        <Box
                            component="img"
                            src="https://lazeapostolski.com/industrial2/img/about-small.jpg"
                            alt="Small Overview 2"
                            sx={{
                                width: {
                                    xs: "46.8%",
                                    sm: "50%"
                                },
                                // border: "1px solid red",
                            }}
                        />
                    </Box>
                </Box>

                 
                <Box
                    sx={{
                        width: { xs: "75%", md: "55%" },
                        // border: "1px solid blue",
                        alignSelf: {
                            xs: "center",
                            sm: "initial",
                        },
                        px: 1,
                        mt: { xs: 4, md: 0 },
                    }}
                >
                    <Box sx={{ position: "relative", display: "inline-block", mb: 2 }}>
                        <Typography variant="h5" fontWeight="800" gutterBottom>
                            <Box component="span" sx={{ position: "relative", pr: 0.5 }}>
                                <Box
                                    component="span"
                                    sx={{
                                        position: "absolute",
                                        top:30,
                                        width:"40px",
                                        borderBottom: "3.5px solid #fbae19",  
                                        display: "inline-block",
                                        pb: "12px",
                                    }}
                                >
                                    
                                </Box>
                                Company Overview
                            </Box>
                        </Typography>
                    </Box>

                    <Typography sx={{
                        fontSize: "0.7rem",
                        lineHeight: 1.5,
                        wordSpacing: "0.1rem",
                        mb: 2,
                    }} >
                        Fusce non faucibus lorem. Cras eu velit id diam cursus tincidunt in ut dui. Quisque quis augue placerat, pulvinar dui aliquam, convallis sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla feugiat cursus egestas.
                    </Typography>


                    <Typography sx={{
                        fontSize: "0.7rem",
                        lineHeight: 1.5,
                        wordSpacing: "0px",
                        mb: 2,
                        fontWeight: 700,
                    }} >
                        Vestibulum tincidunt neque id quam tristique pulvinar non in nulla. Tincidunt neque id quam tristique pulvinar non in nulla. Curabitur sem dolor, ultricies nec purus eu, convallis cursus leo.
                    </Typography>

                    <Typography sx={{
                        fontSize: "0.7rem",
                        lineHeight: 1.5,
                        wordSpacing: "0.1rem",
                        mb: 2,
                    }} >
                        Fusce non faucibus lorem. Cras eu velit id diam cursus tincidunt in ut dui. Quisque quis augue placerat, pulvinar dui aliquam, convallis sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla feugiat cursus egestas.
                    </Typography>



                    <Typography sx={{
                        fontSize: "0.7rem",
                        lineHeight: 1.5,
                        wordSpacing: "0.1rem",
                        // mb: 2,
                    }} >
                        <ChevronRightIcon sx={{ fontSize: "0.7rem" }} />
                        Cras eu velit id diam cursus tincidunt in ut dui.
                        <br />
                        <ChevronRightIcon sx={{ fontSize: "0.7rem" }} />
                        Quisque quis augue placerat, pulvinar dui aliquam, convallis sapien.
                        <br />
                        <ChevronRightIcon sx={{ fontSize: "0.7rem" }} />
                        Orci varius natoque penatibus et magnis dis
                        <br />
                        <ChevronRightIcon sx={{ fontSize: "0.7rem" }} />
                        Parturient montes, nascetur ridiculus mus. Nulla feugiat cursus egestas.
                    </Typography>

                   


                </Box>
            </Box>



































 

            
            <Box sx={{ backgroundImage: "url(https://lazeapostolski.com/industrial2/img/slide1.jpg)", backgroundSize: "cover", backgroundPosition: "center", 
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                 py: 8,
             }}>
               <Box sx={{
                    p:2,
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    // width: "100%",
                    backdropFilter:"blur(1px)",
                    backgroundColor:"hsla(10,10%,10%,0.4)",
               }}>
                    <Grid container spacing={4} justifyContent="center" sx={{
                        maxWidth: "1170px",
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        // border:"2px solid red",
                        justifyContent: "center",
                    }}>
                        {[
                            {
                                title: "Chemical Research",
                                description: "Morbi tincidunt iaculis ipsum eget laoreet. Cras at finibus ante, posuere ornare ex.",
                                icon: <ScienceIcon sx={{ color: 'goldenrod', fontSize: 50 }} />,
                            },
                            {
                                title: "Mechanical Engineering",
                                description: "Morbi tincidunt iaculis ipsum eget laoreet. Cras at finibus ante, posuere ornare ex. Mauris sollicitudin .",
                                icon: <EngineeringIcon sx={{ color: 'goldenrod', fontSize: 50 }} />,
                            },
                            {
                                title: "Power and Energy",
                                description: "Morbi tincidunt iaculis ipsum eget laoreet. Cras at finibus antetudin ornare ullamcorper. Donec in.",
                                icon: <BoltIcon sx={{ color: 'goldenrod', fontSize: 50 }} />,
                            },
                            {
                                title: "Facture Process",
                                description: "Cras at finibus ante, posuere ornare ex. Mauris sollicitudin ornare ullamcorper. Donec in arcu purus.",
                                icon: <RecyclingIcon sx={{ color: 'goldenrod', fontSize: 50 }} />,
                            },
                        ].map((service, i) => (
                            <Grid item xs={12} sm={6} md={3} key={i} sx={{
                                // width: "100%",
                                display: "flex",
                                alignItems: "center",
                                // flexDirection:"column",
                                justifyContent: "center",
                            }}>
                                <Card sx={{ height: 150, 
                                
                                
                                // width: "190px",
                                    maxWidth: {
                                        // xs: "90%",   
                                        xs: "410px",
                                        sm: "410px",
                                        md: "350px",
                                        lg: "190px",
                                        // xl: "40%",
                                    },
                                
                                
                                display: "flex", 
                                flexDirection: "column", 
                                alignItems:{ xs:"center",sm:"flex-start"}, 
                                justifyContent: "center",
                                 backgroundColor: "white", 
                                 p: 2, borderRadius: 0,
                                    textAlign: { xs: "center", sm: "flex-start" }, }}>
                                    <Box sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "inherit", justifyContent: "center", }}>
                                        {service.icon}
                                    </Box>
                                    <Typography align="inherit" fontWeight={"bold"} mt={0} sx={{ fontSize: "1rem" }}>
                                        {service.title}
                                    </Typography>
                                    <Typography  mt={1} sx={{ fontSize: "0.7rem",
                                        textAlign:{xs:"center", sm:"start"}
                                     }}>
                                        {service.description}
                                    </Typography>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
               </Box>
            </Box>










            <Box sx={{ px: 4, my: 6 ,
    
            }}>
                <Box sx={{ position: "relative",
                //  display: "inline-block", 
                //  mb: 2,
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                 }}>
                    <Typography variant="h5" fontWeight="800" gutterBottom>
                        <Box component="span" sx={{ position: "relative", pr: 0.5 }}>
                            <Box
                                component="span"
                                sx={{
                                    position: "absolute",
                                    top: 30,
                                    width: "30px",
                                    borderBottom: "3.5px solid #fbae19",
                                    display: "inline-block",
                                    pb: "12px",
                                }}
                            >

                            </Box>
                            Our Team
                        </Box>
                    </Typography>
                </Box>




                <Grid container spacing={4} sx={{
                    // border:"2px solid red",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    // height: "100%",
                    py: 8,

                }}>
                    {team.map((member, i) => (
                        <Grid item xs={12} sm={6} md={4} key={i}>
                            <Card sx={{ display: "flex", flexDirection: "column", alignItems: "start", borderRadius:0,  }}>
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
                                <Box sx={{
                                    px:2,
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








            <Box sx={{
                width: "100%",
                display:"flex",
                // display: "flex",
                alignItems: "center",
                mb:8,
                flexDirection:"column",
                justifyContent: "center",
            }}>
                <Box sx={{
                    position: "relative",
                    //  display: "inline-block", 
                     mb: 6,
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <Typography variant="h5" fontWeight="800" gutterBottom>
                        <Box component="span" sx={{ position: "relative", pr: 0.5 }}>
                            <Box
                                component="span"
                                sx={{
                                    position: "absolute",
                                    top: 30,
                                    width: "30px",
                                    borderBottom: "3.5px solid #fbae19",
                                    display: "inline-block",
                                    pb: "12px",
                                }}
                            >

                            </Box>
                            Our Achievements
                        </Box>
                    </Typography>
                </Box>

                <Box sx={{
                    maxWidth:{
                        xs:"50%",
                        sm:"80%",
                        md:"80%",
                        lg:"60%",
                        xl:"70%"
                    }

                }}>

                    <Slider></Slider>

                </Box>
</Box>




             


        </Box>
    );
}
