
import { Typography, Box } from '@mui/material';
// import { Box } from '@mui/material/Box';
import { Grid,  IconButton, Collapse } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
import {    Accordion, AccordionSummary, AccordionDetails, TextField, Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


const dropdowns = [
    "What is do i have to tell you a few lorem?",
    "What is do i have to tell you a few lorem?",
    "What is do i have to tell you a few lorem?",
    "What is do i have to tell you a few lorem?",
];



export default function FAQ(){



    const [openIndexes, setOpenIndexes] = useState([false, false, false, false]);

    const toggleOpen = (index) => {
        setOpenIndexes((prev) =>
            prev.map((item, i) => (i === index ? !item : item))
        );
    };






    return(<>
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
            </Box>























            <Box sx={{
                display:"flex",
                // border:"1px solid black",
                justifyContent:"center",
                alignItems:"center",
                
                //    px:2, 
                // mx:2
            }}>
                <Grid container justifyContent="center" sx={{
                    // py:{xs:1, sm:4, md: 6},
                    my:5,
                    width: {
                        xs: '95%',
                        sm: "600px",
                        md: '900px',
                        lg: '1200px',
                    },
                    // border: "1px solid red",
                    display:"flex",
                    justifyContent: {
                        xs:"space-around",
                        sm: "space-around",
                        md:"space-around"},
                        // alignItems:"flex-start",
                    // gap: 5,
                }}>
                    <Grid item sx={{
                        // width: {xs: "99%", sm:"75%"   , md:"45%"}
                        width: {
                            xs: '95%',
                            sm: "80%",
                            md: '410px',
                            lg: '550px',
                        },
                    }}>
                        {dropdowns.map((title, index) => (
                            <Box key={index} sx={{
                                border: "1px solid #ccc",
                                 py: 0.2, my: 2,
                                boxShadow: 1,
                                "&:hover": {
                                    cursor: "pointer",
                                }
                            }}
                                onClick={() => toggleOpen(index)}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        p:1,
                                    }}
                                >
                                    <IconButton sx={{
                                        color:"#fbae19",
                                        border:"1px solid #ddd",
                                        p:0,
                                        mx:1,
                                    }}>
                                        {openIndexes[index] ? <RemoveIcon /> : <AddIcon />}
                                    </IconButton>
                                    <Typography variant="subtitle2" fontWeight="800" sx={{ fontSize: "0.8rem" }}>
                                        {title}
                                    </Typography>
                                </Box>
                                <Collapse in={openIndexes[index]}>
                                    <Typography variant="body2" sx={{ mt: 1, px:1.5,pb:1.5, }}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                                        nec odio. Praesent libero. Sed cursus ante dapibus diam.
                                    </Typography>
                                </Collapse>
                            </Box>
                        ))}
                    </Grid>
                    









                    <Grid item sx={{
                        // width: { xs: "99%", sm:"75%"   , md: "45%" },
                        mt: {xs:5, md:0},

                        width: {
                            xs: '95%',
                            sm: "80%",
                            md: '410px',
                            lg: '550px',
                        },
                        bgcolor:"#eee",
                        p:2,
                        px:{xs:0.5, md:4},
                        // transform:"scale(0.9)",
                    }}>

                        <Box sx={{
                            // mt: 5,

                        }}>
                            <Box sx={{
                                position: "relative", display: "inline-block",
                                 mb: 2,

                                // textAlign: "center",
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
                                    Frequently Asked Questions
                                </Typography>
                            </Box>
                        </Box>


                        <Box
                            component="form"
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                // gap: 2,
                                width:"100%",
                                p:0,
                                // transform:"scale(0.8)",
                                justifyContent:"center",
                                // alignItems:"center",
                                // width: "95%",
                            }}>






                            <Grid container spacing={0.5} sx={{
                                // border:"1px solid red",
                                display: "flex",
                                justifyContent:"center",
                            }}>

                                <Grid container spacing={0} sx={{
                                    width: "100%",
                                    display: "flex",
                                    gap: { xs: 3, md: 0 },
                                    p:0,
                                    m:0,
                                    mb:2,

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
                                <Grid container spacing={0} sx={{
                                    width: "100%",
                                    display: "flex",
                                    gap: { xs: 3, md: 0 },
                                    mb: 2.5,


                                    justifyContent: "space-between",
                                    // border:"1px solid red",
                                }}>
                                    <Grid item xs={12} md={6} lg={12} sx={{
                                        width: { xs: '100%', md: '49%' },
                                    }}>
                                        <TextField
                                            label="Phone  "
                                            variant="outlined"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={12} sx={{
                                        width: { xs: '100%', md: '49%' },
                                    }}>
                                        <TextField
                                            label="I would like to discuss  "
                                            variant="outlined"
                                            fullWidth
                                            type="email"
                                        />
                                    </Grid>
                                </Grid>  


                                 






                                 
 



                            </Grid>








                            <TextField
                                fullWidth
                                label="Message"
                                variant="outlined"
                                multiline
                                rows={4}
                                sx={{
                                    mb: 2.5,

                                }}

                            />


                            <Button
                                variant="contained"
                                sx={{
                                    borderRadius: 0,
                                    backgroundColor: "#fbae19",
                                    color: "#fff",
                                    position: "relative",
                                    overflow: "hidden",
                                    width: "20%",
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
                                        backgroundColor: "#fbae19",  
                                    },
                                    "& > span": {
                                        position: "relative",
                                        zIndex: 1,
                                    },
                                }}
                            >
                                <span style={{fontSize:"0.8rem"}}>Submit</span>
                            </Button>
                        </Box>
                    </Grid>





                </Grid>
            </Box>



























    </Box>
    </>);
};