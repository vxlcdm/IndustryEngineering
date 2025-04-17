import React from "react";
import { Box, Typography, Button } from '@mui/material';
import { List, Stack, ListItemButton, ListItemText, Divider, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
 

 
const solutions = [
    { text: "Science and Engineering", path: "/scienceengineering" },
    { text: "Chemical Research", path: "/chemicalresearch" },
    { text: "Power and Energy", path: "/powerenergy" },
    { text: "Mechanical Engineering", path: "/mechanicalengineering" },
    { text: "Petroleum and Gas", path: "/petroleumgas" },
    { text: "Facture Process", path: "/factureprocess" },
];
const newsData = [
    {
        title: "Fusce non faucibus lorem. Cras eu velit id diam cursus tincidunt in ut dui. Quisque quis augue placerat.",
        date: "July 12, 2016",
    },
    {
        title: "Fusce non faucibus lorem. Cras eu velit id diam cursus tincidunt in ut dui.",
        date: "July 12, 2016",
    },
    {
        title: "Fusce non faucibus lorem. Cras eu velit id diam cursus tincidunt int.",
        date: "July 12, 2016",
    },
];





const Footer =()=>{

    return(<>
    <Box>


            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fbae19',

            }}>
                <Box
                    sx={{
                        backgroundColor: '#fbae19',
                        py: 4,
                        px: 2,
                        display: 'flex',
                        justifyContent: 'space-between',
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
                    <Typography variant="h6" sx={{
                        color: '#fff', fontWeight: 600,
                        textAlign: { xs: 'center', md: "start" },

                    }}>
                        Looking for a quality and affordable Services for your next project?
                    </Typography>

                    <Button
                        variant="outlined"
                        sx={{
                            color: '#fff',
                            borderColor: '#fff',
                            // px: 3,
                            py: 1,
                            // width:"190px",
                            fontWeight: 600,
                            position: 'relative',
                            overflow: 'hidden',
                            backgroundImage: 'linear-gradient(to right, #002244 50%, transparent 50%)',
                            backgroundSize: '200% 100%',
                            backgroundPosition: 'right bottom',
                            transition: 'all 0.2s ease-in-out',
                            '&:hover': {
                                backgroundPosition: 'left bottom',
                                borderColor: '#002244',
                            },
                        }}
                    >
                        Request a Quote
                    </Button>
                </Box>

            </Box>


            {/* <Box
                sx={{
                    backgroundColor: '#062d4c ',
                    mt: 1,
                    py: 3,
                    px: 2,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: { xs: 'column', md: 'row' },
                    gap: 2,
                }}
            >
                <Typography variant="body2" sx={{ color: '#555555 ', fontWeight: 200, fontSize: "0.8rem" }} >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, veritatis rem? Temporibus sed doloribus dolore adipisci atque qui eveniet omnis earum maiores ipsum quisquam, odio soluta aspernatur ullam consequuntur? Veniam?
                </Typography>

                <Typography variant="body2" sx={{ color: '#555555 ', fontWeight: 200, fontSize: "0.8rem" }} >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, aliquam maxime dolores alias expedita nesciunt, et quas possimus similique laboriosam tenetur aliquid placeat natus repudiandae quisquam repellat? Ea, deleniti adipisci?
                </Typography>
            </Box> */}









<Box sx={{
                // border: "1px solid red",
                backgroundColor: '#062d4c ',
                py: 3,

}}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "stretch",
                    flexDirection: { xs: "column", md: "row" },
                    // flexWrap: "wrap",
                    gap: {xs:2, md:0,},
                    // border: "1px solid red",
                    width: {
                        xs: "95%",
                        sm: "600px",
                        md: "880px",
                        lg: "1170px",
                    },
                    mx: "auto",
                    backgroundColor: '#062d4c ',

                    // py: 3,
                }}
            >
                
                


                <Box
                    sx={{
                        flex: 1,
                        minWidth: { xs: "100%", sm: "18%", md: "20%" },
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "center",
                        textAlign: { xs: "center", md: "start" },

                        px: {xs:0, sm:2},
                        py: 4,
                        // bgcolor: "#f5f5f5",
                    }}
                >
                    <Box component="img"
                        src="https://lazeapostolski.com/industrial2/img/logo2.png"
                        alt="Logo"
                        sx={{ width:{ md:180,lg:200}, mb: 0 }}
                    />

                    <Typography variant="body2" color="text.secondary" sx={{ mb: 0,
                        px:{  md:0, lg:3.5},
                        py: { xs: 3.5, md:0, },
                        textAlign:{xs:"center",md:"start"},
                        lineHeight:2,
                        color:"white",
                        fontSize:"1rem",
                     }}>
                        Fusce non faucibus lorem. Cras eu velit id diam cursus tincidunt in ut dui.
                        Quisque quis augue placerat, pulvinar dui aliquam, convallis sapien.
                    </Typography>

                        <Stack direction="row" spacing={2}>
                            <IconButton
                                sx={{
                                    color: "white",
                                    transition: "background-color 0.3s, color 0.3s",
                                    "&:hover": {
                                        color: "black",
                                        backgroundColor: "#fbae19",
                                    },
                                }}
                            >
                                <FacebookIcon />
                            </IconButton>

                            <IconButton
                                sx={{
                                    color: "white",
                                    transition: "background-color 0.3s, color 0.3s",
                                    "&:hover": {
                                        color: "black",
                                        backgroundColor: "#fbae19",
                                    },
                                }}
                            >
                                <TwitterIcon />
                            </IconButton>

                            <IconButton
                                sx={{
                                    color: "white",
                                    transition: "background-color 0.3s, color 0.3s",
                                    "&:hover": {
                                        color: "black",
                                        backgroundColor: "#fbae19",
                                    },
                                }}
                            >
                                <InstagramIcon />
                            </IconButton>

                            <IconButton
                                sx={{
                                    color: "white",
                                    transition: "background-color 0.3s, color 0.3s",
                                    "&:hover": {
                                        color: "black",
                                        backgroundColor: "#fbae19",
                                    },
                                }}
                            >
                                <LinkedInIcon />
                            </IconButton>
                        </Stack>


                </Box>

              
              


                <Box
                    sx={{
                        flex: 1,
                        minWidth: { xs: "100%", sm: "18%", md: "20%" },
                        px: { xs: 0, sm: 2 },

                        // py: 3,
                        // border: "1px solid red",
                        // bgcolor: "#fafafa",
                        textAlign:"center",
                        display:"flex",
                        flexDirection:"column",
                        justifyContent:"center",
                        color:"white",
                        alignContent:"center",
                    }}
                >
                    <Typography variant="h6" fontWeight="bold" gutterBottom sx={{
                            // pb: 3,


                    }}>
                        Our Solutions
                    </Typography>


                    <Box sx={{
                            // border: "1px solid red",
                            my:2,
                            // pt:0,
                            height:{xs:"80%",md:"75%", lg:"72%"},
                    }}>
                            {solutions.map((item, index) => (
                                <ListItemButton
                                    key={index}
                                    component={Link}
                                    to={item.path}
                                    sx={{
                                        // border: "1px solid red",
                                        textAlign: "center",
                                        px: 0,
                                        // height:"1px",
                                        // m:-10,
                                        // py: 3,

                                        "&:hover": {
                                            color:
                                                "#fbae19",
                                            // color: "#fff",
                                        },
                                    }}
                                >
                                    <ListItemText
                                        primary={item.text}
                                        primaryTypographyProps={{
                                            fontSize: "0.9rem",
                                            // height: "1px",

                                            // m:-1,
                                        }}
                                    />
                                </ListItemButton>
                            ))}
                    </Box>
                </Box>

               
               


                <Box
                    sx={{
                        flex: 1,
                        minWidth: { xs: "100%", sm: "18%", md: "20%" },
                        px: { xs: 0, sm: 2 },

                        py: 3,
                        // bgcolor: "#f9f9f9",
                         color: "white",
                            textAlign: { xs: "center", md: "start" },


                    }}
                >
                    <Typography variant="h6" fontWeight="bold" gutterBottom sx={{
                            mb: 4,

                            // textAlign: "center",
                    }}>
                        Latest News
                    </Typography>



                        <Box sx={{
                            // border: "1px solid red",
                            // mt: 3,
                        }}>
                    {newsData.map((news, index) => (
                        <Box key={index} sx={{ mb: 2 }}>
                            <Typography  sx={{ 
                                
                                mb: 0.5,
                                fontWeight:100,
                                fontSize:"0.87rem",
                                }}>{news.title}</Typography>

                            <Typography variant="caption" color="text.secondary"
                            sx={{
                                color: "white",

                            }}>{news.date}</Typography>
                            {index < newsData.length - 0 && <Divider
                                sx={{
                                    mt: 1.5,
                                    borderColor: 'white',  
                                    backgroundColor: 'white',  
                                }}
                            />
                             
                             }
                        </Box>
                    ))}
                        </Box>
                </Box>

                   




                <Box
                    sx={{
                        flex: 1,
                        minWidth: { xs: "100%", sm: "18%", md: "20%" },
                        px: { xs: 0, sm: 2 },
                            display: "flex",
                            gap: 2,
                            flexDirection: "column",
                        py: 3,                            textAlign: { xs: "center", md: "start" },

                        // bgcolor: "#f5f5f5",
                            color: "white"
                    }}
                >
                    <Typography variant="h6" fontWeight="bold" gutterBottom sx={{

                    }}>
                        Get in Touch
                    </Typography>
                        
                    <Box sx={{
                        display:"flex",
                            // border: "1px solid red",
                            my: 1,
                            gap: 2,
                            flexDirection:"column",
                            alignItems:"center",
                            // border: "1px solid red",
                            justifyContent:"space-between",
                            width: "100%",
                            ml:{xs:0,md:-1.3, lg:-2},

                    }}>

                            <Stack direction="row" spacing={1} alignItems="flex-start" sx={{ mb: 1,
                                display: "flex",
                                width: "90%",
                                justifyContent:{
                                    xs:
                                    "space-between"   
                                ,md:"flex-start"
                                },
                                // px:5,
                                
                                textAlign: { xs: "center", md: "start" },
                                // border:"1px solid red",

                             }}>
                                <LocationOnIcon color="action" sx={{
                                    color:"#fbae19",
                                    fontSize:"1.8rem",
                                }}/>
                                <Typography variant="body2">Bristol Town 2578 AGS,<br />New York City</Typography>
                            </Stack>

                            <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1,
                                display: "flex",
                                width: "90%",
                                justifyContent:{ 
                                    xs:"space-between"   
                                ,md:"flex-start"
                                },
                                // px:5,
                                
                                textAlign: { xs: "center", md: "start" },
                                // border: "1px solid red",
                             }}>
                                <PhoneIcon color="action" sx={{
                                    color:"#fbae19",
                                    fontSize:"1.8rem",
                                }}/>
                                <Typography variant="body2">(018) 65 524 8503</Typography>
                            </Stack>

                            <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1,
                                display: "flex",
                                width: "90%",
                                justifyContent:{ 
                                    xs:"space-between"   
                                ,md:"flex-start"
                                },
                                // px:5,
                                
                                textAlign: { xs: "center", md: "start" },
                                // border: "1px solid red",
                             }}>
                                <PhoneIcon color="action" sx={{
                                    color:"#fbae19",
                                    fontSize:"1.8rem",
                                }}/>
                                <Typography variant="body2">(125) 954 7854</Typography>
                            </Stack>

                            <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1,
                                display: "flex",
                                width: "90%",
                                justifyContent:{ 
                                    xs:"space-between"   
                                ,md:"flex-start"
                                },
                                // px:5,
                                
                                textAlign: { xs: "center", md: "start" },
                                // border: "1px solid red",
                             }}>
                                <AccessTimeIcon color="action" sx={{
                                    color:"#fbae19",
                                    fontSize:"1.8rem",
                                }}/>
                                <Typography variant="body2">Mon to Fri - 08:00 to 16:30</Typography>
                            </Stack>

                            <Stack direction="row" spacing={1} alignItems="center" sx={{
                                display: "flex",
                                width: "90%",
                                // alignContent:"center",
                                justifyContent:{ 
                                    xs:"space-between"   
                                ,md:"flex-start"
                                },
                                // px:5,
                                
                                textAlign: { xs: "center", md: "start" },
                                // border: "1px solid red",
                            }}>
                                <EmailIcon color="action" sx={{
                                    
                                    color:"#fbae19",
                                    fontSize:"1.8rem",
                                }}/>
                                <Typography variant="body2">contact@factory.com</Typography>
                            </Stack>
                    </Box>
                </Box>
            </Box>
            </Box>
          














            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#e5e5e5 ',


            }}>

            <Box
                sx={{
                    backgroundColor: '#e5e5e5 ',
                    // mt:1,
                    py: 3,
                    px: 2,
                    display: 'flex',
                    justifyContent: 'space-between',
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
                <Typography variant="body2" sx={{ color: '#555555 ', fontWeight: 200, fontSize:"0.8rem" }} >
                    Copyright Industrial 1993. All rights reserved
                </Typography>

                <Typography variant="body2" sx={{ color: '#555555 ', fontWeight: 200, fontSize:"0.8rem" }} >
                    Created by : VXLCDM
                </Typography>
                </Box></Box>

    </Box>
    </>);
};
export default Footer;
