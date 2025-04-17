
import { Typography, Box } from '@mui/material';
// import { Box } from '@mui/material/Box';
import { Grid,  IconButton, Collapse } from "@mui/material";
 
 
import {    Accordion, AccordionSummary, AccordionDetails, TextField, Button } from "@mui/material";

 
import { Avatar,   Rating, Paper } from "@mui/material";


 

export default function Testimonial(){



 





    return(<>
    <Box  sx={{
            border:"1px solid #f7f7f7",
                bgcolor: "#f7f7f7",

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
                    
                mt: 5,
                width: {
                    xs: '95%',
                    sm: "600px",
                    md: '900px',
                    lg: '1200px',
                    
                },
                display: "flex",
                justifySelf:"center",
                alignSelf:"center",

                // border:"1px solid black",
                // justifyContent: "center",
                alignItems: "center",
                bgcolor: "#f7f7f7",
                // mx: ,

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
                    Testimonials
                </Typography>
</Box>









            <Box sx={{
                display:"flex",
                // border:"1px solid black",
                justifyContent:"center",
                alignItems:"center",
                bgcolor: "#f7f7f7",

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

                    // bgcolor: "#eee",

                    justifyContent: {
                        xs:"space-around",
                        sm: "space-around",
                        md:"space-around"},
                        // alignItems:"flex-start",
                    // gap: 5,
                    // bgcolor: "#f7f7f7",
                    bgcolor: "white",


                }}>
                




                    <Grid
                         
                     item sx={{
                        my:3,
                        py:6,
                        // width: {xs: "99%", sm:"75%"   , md:"45%"}
                        // bgcolor: "white",
                        width: {
                            xs: '95%',
                            sm: "90%",
                            md: '410px',
                            lg: '550px',
                        },
                        px: 2,
                        // border: "1px solid red",
                        boxShadow:3,
                        bgcolor: "#f7f7f7",
                        



                    }}>
                       <Box sx={{
                            // bgcolor: "#f7f7f7",
                            bgcolor: "white",

                       }}>



                            <Box
                                sx={{
                                    // px: 2,
                                    // py: 6,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    bgcolor: "#f7f7f7",
                                }}
                            >
                                <Box
                                    sx={{
                                        maxWidth: 600,
                                        position: "relative",

                                    }}
                                >
                                    
                                    <Paper
                                        elevation={3}
                                        sx={{
                                            position: "relative",
                                            p: 3,

                                            pb: 5,
                                            borderRadius: 2,
                                            backgroundColor: "#fff",

                                            fontStyle: "italic",
                                            "&::after": {
                                                content: '""',
                                                position: "absolute",
                                                bottom: -20,
                                                left: 40,
                                                width: 0,
                                                height: 0,
                                                borderLeft: "10px solid transparent",
                                                borderRight: "10px solid transparent",
                                                borderTop: "20px solid white",
                                            },
                                        }}
                                    >
                                        <Typography variant="body1">
                                            Fusce non faucibus lorem. Cras eu velit id diam cursus tincidunt in
                                            ut dui. Quisque quis augue placerat, pulvinar dui aliquam, convallis
                                            sapien. Orci varius natoque penatibus et magnis dis parturient montes.
                                        </Typography>
                                    </Paper>

                                    
                                    <Box sx={{ display: "flex", alignItems: "center", mt: 4, ml: 2 }}>
                                        <Avatar
                                            src="https://lazeapostolski.com/industrial2/img/author.jpg"
                                            alt="George Simons"
                                            sx={{ width: 64, height: 64, mr: 2 }}
                                        />
                                        <Box>
                                            <Typography variant="subtitle1" fontWeight="bold">
                                                George Simons
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" mb={0.5}>
                                                -Lawyer
                                            </Typography>
                                            <Rating value={5} readOnly size="small" />
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>

                         

                         





                       </Box>
                    </Grid>
                    






                    <Grid item sx={{
                        my: 3,
                        py: 6,
                        // width: {xs: "99%", sm:"75%"   , md:"45%"}
                        // bgcolor: "white",
                        width: {
                            xs: '95%',
                            sm: "90%",
                            md: '410px',
                            lg: '550px',
                        },
                        px: 2,
                        // border: "1px solid red",
                        boxShadow: 3,
                        bgcolor: "#f7f7f7",




                    }}>
                        <Box sx={{
                            // bgcolor: "#f7f7f7",
                            bgcolor: "white",

                        }}>



                            <Box
                                sx={{
                                    // px: 2,
                                    // py: 6,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    bgcolor: "#f7f7f7",
                                }}
                            >
                                <Box
                                    sx={{
                                        maxWidth: 600,
                                        position: "relative",

                                    }}
                                >
                                    {/* Testimonial Box */}
                                    <Paper
                                        elevation={3}
                                        sx={{
                                            position: "relative",
                                            p: 3,

                                            pb: 5,
                                            borderRadius: 2,
                                            backgroundColor: "#fff",

                                            fontStyle: "italic",
                                            "&::after": {
                                                content: '""',
                                                position: "absolute",
                                                bottom: -20,
                                                left: 40,
                                                width: 0,
                                                height: 0,
                                                borderLeft: "10px solid transparent",
                                                borderRight: "10px solid transparent",
                                                borderTop: "20px solid white",
                                            },
                                        }}
                                    >
                                        <Typography variant="body1">
                                            Fusce non faucibus lorem. Cras eu velit id diam cursus tincidunt in
                                            ut dui. Quisque quis augue placerat, pulvinar dui aliquam, convallis
                                            sapien. Orci varius natoque penatibus et magnis dis parturient montes.
                                        </Typography>
                                    </Paper>

                                    {/* Avatar, Name, Role & Rating */}
                                    <Box sx={{ display: "flex", alignItems: "center", mt: 4, ml: 2 }}>
                                        <Avatar
                                            src="https://lazeapostolski.com/industrial2/img/author.jpg"
                                            alt="George Simons"
                                            sx={{ width: 64, height: 64, mr: 2 }}
                                        />
                                        <Box>
                                            <Typography variant="subtitle1" fontWeight="bold">
                                                George Simons
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" mb={0.5}>
                                                -Lawyer
                                            </Typography>
                                            <Rating value={5} readOnly size="small" />
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>







                        </Box>
                    </Grid>


                     





                </Grid>
            </Box>



























    </Box>
    </>);
};