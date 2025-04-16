
import React from 'react';
import { Box, Drawer, List, ListItem, ListItemText, Button, Typography, Grid } from '@mui/material';
import GavelIcon from '@mui/icons-material/Gavel';
import GroupsIcon from '@mui/icons-material/Groups';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { useState } from 'react';
import { IconButton, Collapse } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";



const fields = [
    "Material Science and Engineering",
    "Chemical Research",
    "Power and Energy",
    "Mechanical Engineering",
    "Petroleum and Gas",
    "Facture Process"
];
const dropdowns = [
    "What is do i have to tell you a few lorem?",
    "What is do i have to tell you a few lorem?",
    "What is do i have to tell you a few lorem?",
    "What is do i have to tell you a few lorem?",
];
const features = [
    {
        icon: <GavelIcon sx={{
            fontSize: "50px"
        }} />,
        title: "Creditable Integrity",
        description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae"
    },
    {
        icon: <GroupsIcon sx={{
            fontSize: "50px"
        }} />,
        title: "Effective Team Work",
        description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae"
    },
    {
        icon: <SupportAgentIcon sx={{
            fontSize: "50px"
        }} />,
        title: "Advice Consulting",
        description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae"
    }
];


export default function ME() {

    const [openIndexes, setOpenIndexes] = useState([false, false, false, false]);

    const toggleOpen = (index) => {
        setOpenIndexes((prev) =>
            prev.map((item, i) => (i === index ? !item : item))
        );
    };


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
                    Facture Process
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
                    Solutions  &gt;  <span style={{ color: "#fbae19" }}>     Facture Process        </span>
                </Typography>
            </Box>

























































            <Box sx={{
                display: 'flex',
                justifyContent: "center",
                // border:"1px solid red",
                justifySelf: "center",
                alignSelf: "center",
                alignItems: "center",
                my: 8,

                // width:"110%"
                // flexDirection: { sm: "column", md: "row" },
                // px:10,

            }}>

                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: "column", sm: "column", md: "row" },
                    alignItems: { xs: "center", md: "start" },
                    justifyContent: "center",
                    // width:"80%",
                    width: { lg: "1170px", md: "880px", sm: "90%", xs: "95%" },
                    gap: { xs: 6, md: 1.5 },
                    m: 0,
                    p: 0,
                    // maxWidth:{sm:"800px", md:"1170px"}
                    // display:"flex",
                    // border: "1px solid red",

                }}>
                    <Box sx={{
                        // border: "1px solid green",
                        display: 'flex',
                        alignItems: "center",
                        justifyContent: "center",
                        // width:"80%"
                        width: {
                            xs: "100%",
                            // sm: "80%",
                            md: "30%"


                        },
                        m: 0,
                        p: 0,

                    }}>
                        <Box

                            sx={{
                                // width: drawerWidth,
                                width: {
                                    xs: "100%",
                                    // sm:"80%",
                                    // md:"80%"
                                },
                                m: 0,
                                p: 0,

                                // flexShrink: 0,
                                // [`& .MuiDrawer-paper`]: {
                                //     width: drawerWidth,
                                //     boxSizing: 'border-box',
                                //     backgroundColor: '#062d4c',
                                // },
                            }}
                        >
                            <Box sx={{
                                overflow: 'auto',
                                // border:"1px solid black",
                                width: "100%",
                                m: 0,
                                p: 0,
                            }}>
                                <List sx={{
                                    // m: 0,
                                    p: 0,
                                }}>
                                    {fields.map((text, index) => (
                                        <ListItem button key={index} sx={{
                                            bgcolor: index === 5 ? "#062d4c" : "#eeeeee",
                                            color: index === 5 ? "white" : "black",
                                            borderLeft: index === 5 ? "4px solid #fbae19" : "",
                                            my: 0.6,
                                            mt: 0,
                                            // mb:0,
                                            // m:0,
                                            "&:hover": {
                                                bgcolor: "#062d4c",
                                                cursor: "pointer",
                                                color: "white",
                                                borderLeft: "4px solid #fbae19"
                                            }
                                        }} >
                                            <ListItemText sx={{

                                            }} />
                                            <Typography sx={{
                                                fontSize: "0.8rem",
                                                textAlign: "start",
                                                width: "100%",
                                                p: 0.5,
                                                // border: "1px solid black",
                                            }}>
                                                {text}
                                            </Typography>
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>



                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: "#003366",
                                    color: "#fff",
                                    borderRadius: 0,
                                    width: "100%",
                                    fontSize: "0.7rem",
                                    mt: 5,
                                    fontWeight: "bold",
                                    "&:hover": {
                                        backgroundColor: "#002244",
                                    },
                                }}>
                                <Typography sx={{
                                    fontSize: "0.8rem",
                                    // textAlign: "start",
                                    width: "100%",
                                    p: 0.5,
                                    // border: "1px solid black",
                                }}>
                                    Download Brochure
                                </Typography>

                            </Button>





                            <Box sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "center",
                                p: 2,
                                boxShadow: 1,
                                // borderRadius: 2,
                                border: "1px solid black",
                                bgcolor: "#fff",
                                // maxWidth: 400,
                                mx: "auto",
                                mt: 6,
                            }}>
                                <Typography sx={{
                                    // mb: 2,
                                    fontSize: "1.2rem",
                                    textAlign: "start",
                                    width: "100%",
                                    p: 0.5,
                                    // border: "1px solid black",

                                }}>
                                    Contact Us for Help
                                </Typography>
                                <Typography variant="body1" sx={{
                                    mb: { xs: 0, md: 3 },
                                    px: 2,
                                    // mb: 2,
                                    fontSize: "0.8rem",
                                    textAlign: "start",
                                    width: "100%",
                                    p: 0.5,
                                }}>

                                    Contact with us through our representative or submit a business inquiry online.
                                </Typography>
                                <Button
                                    variant="text"
                                    sx={{
                                        display: "flex",
                                        color: "#fbae19",
                                        justifyContent: "start",
                                        borderColor: "#fbae19",
                                        // border:"1px solid black",
                                        width: "100%",
                                        px: 0,
                                        // textAlign:"start",
                                        borderRadius: 0,
                                        "&:hover": {
                                            backgroundColor: "white",
                                            cursor: "default",
                                            // color: "#fff",
                                        },
                                        fontWeight: "bold",

                                    }}
                                >

                                    <Typography sx={{
                                        // mb: 2,
                                        fontSize: "0.8rem",
                                        textAlign: "start",
                                        "&:hover": {
                                            backgroundColor: "#fbae19",
                                            color: "#fff",
                                            cursor: "pointer",

                                        },
                                        // width: "100%",
                                        py: 1,
                                        // border: "1px solid black",

                                    }}>
                                        CONTACT US
                                    </Typography>
                                </Button>
                            </Box>




                        </Box>

                    </Box>






                    <Box sx={{
                        // border:"2px solid blue",
                        display: "flex",
                        justifyContent: "center",

                        alignItems: "center",
                        justifyItems: "center",
                        alignContent: "center",
                        width: {
                            xs: "100%",
                            // sm: "80%",
                            md: "80%"


                        },
                        mt: 0,
                        pt: 0,

                    }}>

                        <Box
                            component="main"
                            sx={{
                                flexGrow: 1,
                                bgcolor: 'background.default',
                                // py: 3,
                                px: 1,
                                // width:"0%",
                                // border: "2px solid redgreen",
                                // width: `calc(100% - ${drawerWidth}px)`,
                            }}
                        >
                            {/* <Box
                                sx={{
                                    height: { xs: "80vh", md: "40vh" },
                                    width: "100%",
                                    display: "flex",
                                    gap: 2,
                                    overflow: "hidden",
                                    flexDirection: { xs: "column", md: "row" },
                                }}
                            >
                                <Box
                                    sx={{
                                        width: { xs: "100%", md: "60%" },
                                        height: { xs: "50%", md: "100%" },
                                        backgroundImage: 'url("https://lazeapostolski.com/industrial2/img/mech1.jpg")',
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        backgroundRepeat: "no-repeat",
                                    }}
                                />
                                <Box
                                    sx={{
                                        width: { xs: "100%", md: "40%" },
                                        height: { xs: "50%", md: "100%" },
                                        backgroundImage: 'url("https://lazeapostolski.com/industrial2/img/mech2.jpg")',
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        backgroundRepeat: "no-repeat",
                                    }}
                                />



                            </Box> */}




                            {/* <Box sx={{
                                mt: 0,
                                pt: 0,
                                mb: 5,
                                textAlign: { xs: "center", sm: "start" },
                            }}>
                                <Typography
                                    sx={{
                                        mb: 2,
                                        fontSize: "0.8rem",
                                        lineHeight: 2,
                                    }}
                                >
                                    Sed a vehicula felis. Donec eu tempus orci. Nunc in mi ultricies, tempus ante id, auctor tortor. Nulla facilisi. Praesent dignissim justo et orci porta facilisis. Sed non varius dolor. Donec a eleifend turpis. Nam egestas aliquet rutrum. Integer

                                    <br />

                                    <span style={{
                                        fontWeight: 600,
                                        fontSize: "0.8rem",
                                    }}>Quisque accumsan nec elit non suscipit.</span>
                                    <br />
                                    Suspendisse molestie convallis neque ut venenatis. Vestibulum nec libero non ipsum gravida gravida vel eu nunc. Cras urna diam, placerat at augue a, ornare sollicitudin nisl.

                                    <br />

                                    <span style={{
                                        fontWeight: 600,
                                        fontSize: "0.8rem",
                                    }}>Quisque accumsan nec elit non suscipit.</span>
                                    <br />
                                    Suspendisse molestie convallis neque ut venenatis. Vestibulum nec libero non ipsum gravida gravida vel eu nunc.
                                </Typography>
                            </Box> */}













                            <Box
                                sx={{
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: { xs: "column", md: "row" },
                                    height: { xs: "auto", md: "40vh" },
                                    mb: 5,
                                }}
                            ><Box
                                    sx={{
                                        width: { xs: "100%", md: "51%" },
                                        height: { xs: "40vh", md: "100%" },
                                        backgroundImage: 'url("https://lazeapostolski.com/industrial2/img/petroleum1.jpg")',
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        backgroundRepeat: "no-repeat",
                                    }}
                                />


                                <Box
                                    sx={{
                                        width: { xs: "100%", md: "49%" },
                                        px: { xs: 0, md: 1, lg: 2 },
                                        py: { xs: 4, md: 0 },
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: { xs: "center", md: "start" },
                                        // border:"1px solid red",
                                        // height: { xs: "30vh", md: "100%" },
                                        // justifyContent: "center",
                                    }}
                                >
                                    
                                    {/* <Typography variant="h5" fontWeight="bold" gutterBottom>
                                        Energy Strategy
                                    </Typography> */}
                                    
                                    <Typography
                                        sx={{
                                            fontSize: "0.8rem",
                                            lineHeight: { xs: "1rem", sm: "1rem", md: "1.4rem", lg: "1.9rem" },
                                            // height: { xs: "30vh", md: "100%" },
                                            color: "#333",
                                            textAlign: { xs: "center", md: "start" },

                                            // border: "1px solid red",

                                        }}
                                    >
                                        Sed a vehicula felis. Donec eu tempus orci. Nunc in mi ultricies, tempus ante id, auctor tortor. Nulla facilisi.
                                        Suspendisse molestie convallis neque ut venenatis. Vestibulum nec libero non ipsum gravida gravida vel eu nunc.
                                        Cras urna diam, placerat at augue a, ornare sollicitudin nisl.
                                        <br />
                                        <br />
                                        <span style={{ fontSize: "0.9rem" }}>Quisque accumsan nec elit non suscipit.</span>
                                        <br />
                                        Suspendisse molestie convallis neque ut venenatis. Vestibulum nec libero
                                        non ipsum gravida gravida vel eu nunc.
                                    </Typography>
                                </Box>
                                
                            </Box>





                            <Box
                                sx={{
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: { xs: "column", md: "row" },
                                    height: { xs: "auto", md: "40vh" },
                                    mb: 5,
                                }}
                            >
                                <Box
                                    sx={{
                                        width: { xs: "100%", md: "51%" },
                                        height: { xs: "40vh", md: "100%" },
                                        backgroundImage: 'url("https://lazeapostolski.com/industrial2/img/mech3.jpg")',
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        backgroundRepeat: "no-repeat",
                                    }}
                                />

                                <Box
                                    sx={{
                                        width: { xs: "100%", md: "49%" },
                                        px: { xs: 0, md: 1, lg: 2 },
                                        py: { xs: 4, md: 0 },
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: { xs: "center", md: "start" },
                                        // border:"1px solid red",
                                        // height: { xs: "30vh", md: "100%" },
                                        // justifyContent: "center",
                                    }}
                                >
                                    {/* <Typography variant="h5" fontWeight="bold" gutterBottom>
                                        Energy Strategy
                                    </Typography> */}
                                    <Typography
                                        sx={{
                                            fontSize: "0.8rem",
                                            lineHeight: { xs: "1rem", sm: "1rem", md: "1.4rem", lg: "1.9rem" },
                                            // height: { xs: "30vh", md: "100%" },
                                            color: "#333",
                                            textAlign: { xs: "center", md: "start" },

                                            // border: "1px solid red",

                                        }}
                                    >
                                        Sed a vehicula felis. Donec eu tempus orci. Nunc in mi ultricies, tempus ante id, auctor tortor. Nulla facilisi.
                                        Suspendisse molestie convallis neque ut venenatis. Vestibulum nec libero non ipsum gravida gravida vel eu nunc.
                                        Cras urna diam, placerat at augue a, ornare sollicitudin nisl.
                                        <br />
                                        <br />
                                        <span style={{ fontSize: "0.9rem" }}>Quisque accumsan nec elit non suscipit.</span>
                                        <br />
                                        Suspendisse molestie convallis neque ut venenatis. Vestibulum nec libero
                                        non ipsum gravida gravida vel eu nunc.
                                    </Typography>
                                </Box>
                            </Box>




























                            <Grid container
                                sx={{
                                    gap: { md: 3.8, lg: 5, },
                                    // border:"1px solid red",
                                    display: "flex",
                                    // width: { xs: "100%", md: "30%" },
                                    // width:"98%",
                                    flexDirection: { xs: "column", md: "row" },
                                    justifyContent: "center",
                                    alignItems: "center",
                                    bgcolor: { xs: "#f3f3f3", md: "#fff" },

                                }}>
                                {features.map((item, index) => (
                                    <Grid item key={index} sx={{
                                        display: "flex",
                                        // flexDirection: "row",
                                        justifyContent: { xs: "center", sm: "center", md: "space-between" },
                                        width: { xs: "100%", md: "30%" },
                                        // gap:4,
                                        p: { xs: 1, md: 0 },
                                        alignItems: "center",
                                    }}>
                                        <Box
                                            sx={{
                                                border: "1px solid #eee",
                                                // gap:1,
                                                my: { xs: 1, md: 0 },
                                                bgcolor: { xs: "#fff", md: "#f3f3f3" },
                                                py: 3,
                                                px: 1,
                                                textAlign: "center",
                                                // borderRadius: 2,
                                                boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.05)",
                                                transition: "0.3s",
                                                "&:hover": {
                                                    boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.1)"
                                                }
                                            }}
                                        >
                                            <Box sx={{ fontSize: "0rem", color: "black", mb: 2 }}>{item.icon}</Box>
                                            <Typography sx={{
                                                fontSize: "1rem"
                                            }}>{item.title}</Typography>
                                            <Typography sx={{
                                                fontSize: "0.8rem"
                                            }}>{item.description}</Typography>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>















                            <Grid item sx={{
                                // border: "1px solid red",
                                alignSelf: "center",
                                justifySelf: "center",
                                m: 0,
                                p: 0,
                                width: "100%",
                                my: 2,
                                mt: 5,

                                // width:"100%",
                                // display: "flex",
                                // justifyContent: "center",
                                // alignItems: "center",
                                // width: { xs: "99%", sm: "80%", md: "50%" }
                            }}>
                                {dropdowns.map((title, index) => (
                                    <Box key={index}>
                                        <Box
                                            sx={{
                                                border: "1px solid #ccc",
                                                py: 0.2,
                                                my: 1,
                                                boxShadow: 1,
                                                "&:hover": {
                                                    cursor: "pointer",
                                                },
                                            }}
                                            onClick={() => toggleOpen(index)}
                                        >
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    justifyContent: "start",
                                                    alignItems: "center",
                                                    p: 1,
                                                }}
                                            >
                                                <IconButton
                                                    sx={{
                                                        color: "#fbae19",
                                                        border: "1px solid #ddd",
                                                        p: 0,
                                                        mx: 1,
                                                    }}
                                                >
                                                    {openIndexes[index] ? <RemoveIcon /> : <AddIcon />}
                                                </IconButton>
                                                <Typography variant="subtitle2" fontWeight="800" sx={{ fontSize: "0.8rem" }}>
                                                    {title}
                                                </Typography>
                                            </Box>
                                        </Box>

                                        <Collapse in={openIndexes[index]}>
                                            <Box sx={{ px: 1.5, pb: 1.5 }}>
                                                <Typography variant="body2">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                                                </Typography>
                                            </Box>
                                        </Collapse>
                                    </Box>
                                ))}
                            </Grid>
                        </Box>


                    </Box>
                </Box>


            </Box>


















        </Box>
    </>);
};