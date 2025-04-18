
import { Typography, Box } from '@mui/material';
// import { Box } from '@mui/material/Box';
import { Grid, IconButton, Collapse, Stack, Button } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails, TextField, } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


const newsData = [
    {
        img: 'https://lazeapostolski.com/industrial2/img/new.jpg',
        day: '14',
        month: 'Apr',
        title: 'Materials & Manufacturing Service Engineers',
        author: 'Martin',
        comments: '25 Comments',
        excerpt:
            'Fusce non faucibus lorem. Cras eu velit id diam cursus tincidunt. Quisque quis augue placerat.',
    },
    {
        img: 'https://lazeapostolski.com/industrial2/img/new.jpg',
        day: '14',
        month: 'Apr',
        title: 'Materials & Manufacturing Service Engineers',
        author: 'Martin',
        comments: '25 Comments',
        excerpt:
            'Fusce non faucibus lorem. Cras eu velit id diam cursus tincidunt. Quisque quis augue placerat.',
    },
];
const dropdowns = [
    "What is do i have to tell you a few lorem?",
    "What is do i have to tell you a few lorem?",
    "What is do i have to tell you a few lorem?",
    "What is do i have to tell you a few lorem?",
];



export default function AUFAQ() {



    const [openIndexes, setOpenIndexes] = useState([false, false, false, false]);

    const toggleOpen = (index) => {
        setOpenIndexes((prev) =>
            prev.map((item, i) => (i === index ? !item : item))
        );
    };






    return (<>
        <Box  sx={{
            backgroundImage: `url(https://lazeapostolski.com/industrial2/img/bg2.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            // py: 5,
            pb: 5,
            pt: 10,
            overflow:"hidden",

        }}>


<Box sx={{
    width:"100%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
}}>
            <Box sx={{ position: "relative", display: "flex", 

            // mb: 4,
            mb:"0  !important",

            justifySelf:"center",
                justifyContent:{xs:"center", sm:"flex-start"},
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
                        About Us & FAQ
                    </Box>
                    <Box component="span" sx={{ position: "relative", 
                    pr: 0.5, 
                        px:5,
                     }}>
                        <Box
                            component="span"
                            sx={{
                                position: "relative",
                                top: {xs:-20, 
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
            </Box>









            {/* 
<Box sx={{
                display: "flex",
                justifySelf:"center",
                alignItems:"center",
                border:"10px solid black",
                // justifyContent: "center",
                mt: 5,
                width: {
                    xs: '95%',
                    sm: "600px",
                    md: '900px',
                    lg: '1200px',
                },
                // alignItems: "center",
}}>
                
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
                    // my: 5,

                    width: {
                        xs: '95%',
                        sm: "600px",
                        md: '900px',
                        lg: '1200px',
                    },
                    // border: "1px solid red",
                    flexDirection: { xs: "column-reverse", md: "row-reverse" },
                    display: "flex",
                    justifyContent: {
                        xs: "space-around",
                        sm: "space-around",
                        md: "space-around"
                    },
                    alignItems: { xs: "center", md: "flex-start" },
                    // gap: { xs: 10, md: 0 },
                    // py: 5,
                }}>

                    <Grid item sx={{
                        // width: {xs: "99%", sm:"75%"   , md:"45%"}
                        // pb: 5,
                        // boxShadow: 3,

                        px: { xs: 0.5, sm: 2, md: 4 },
                        width: {
                            xs: '95%',
                            sm: "95%",
                            md: '440px',
                            lg: '585px',
                        },
                        // border: "1px solid red",
                        // bgcolor: '#eee',
                        // bgcolor: '#fff',
                        bgcolor: 'hsla(0,0%,0%,0)',
                        // py: 5,
                    }}>

                        {/* <Box sx={{
                            // border: "1px solid red",
                            display: "flex",
                            justifyContent: { xs: "center", md: "flex-start" },
                            my: 5,
                        }}>

                            <Typography
                                variant="h5"
                                fontWeight="800"
                                gutterBottom
                                sx={{
                                    // my: 5,

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
                                Frequently Ask questions
                            </Typography>
                        </Box> */}





                        {dropdowns.map((title, index) => (
                            <Box key={index} sx={{
                                border: "1px solid hsla(0,0%,0%,0.5)",
                                py: 0.2, my: 2,
                                boxShadow: 3,
                                color: "white",

                                bgcolor: 'hsla(0,0%,0%,0.5)',
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
                                        p: 1,
                                    }}
                                >
                                    <IconButton sx={{
                                        color: "#fbae19",
                                        border: "1px solid #fbae19",
                                        p: 0,
                                        mx: 1,
                                    }}>
                                        {openIndexes[index] ? <RemoveIcon /> : <AddIcon />}
                                    </IconButton>
                                    <Typography variant="subtitle2" fontWeight="800" sx={{ fontSize: "0.8rem",
                                        color:"white",
                                     }}>
                                        {title}
                                    </Typography>
                                </Box>
                                <Collapse in={openIndexes[index]}>
                                    <Typography variant="body2" sx={{ mt: 1, px: 1.5, pb: 1.5, }}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                                        nec odio. Praesent libero. Sed cursus ante dapibus diam.
                                    </Typography>
                                </Collapse>
                            </Box>
                        ))}







                    </Grid>










                    <Grid item sx={{
                        // width: { xs: "99%", sm:"75%"   , md: "45%" },
                        mt: { xs: 0, md: 0 },

                        width: {
                            xs: '95%',
                            sm: "95%",
                            md: '440px',
                            lg: '585px',
                        },
                        // bgcolor: "#fff",
                        bgcolor: 'hsla(0,0%,0%,0)',

                        // boxShadow: 3,
                        // px: 2,
                        // border: "1px solid red",

                        px: { xs: 0.5, sm: 2, md: 4 },
                        // transform:"scale(0.9)",
                        // py: 5,
                        // pt: 5,

                    }}>

                        <Box sx={{

                            // mt: 5,


                        }}>
                            {/* <Box sx={{
                                // border: "1px solid red",
                                my: 5,
                                display: "flex",
                                justifyContent: { xs: "center", md: "flex-start" },
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
                                    Latest news
                                </Typography>
                            </Box> */}



                            <Box
                                sx={{

                                    // color: '#eeeee',
                                }}
                            >
                                {/* <Typography variant="h4" textAlign="center" fontWeight="bold" mb={6}>
                                    Latest News
                                </Typography> */}
                                <Typography sx={{
                                    fontSize: "1.4rem",
                                    lineHeight: 1.5,
                                    wordSpacing: "0.1rem",
                                    mb: 2,
                                }} >
                                    We are professional construction company
                                </Typography>
                                <Typography sx={{
                                    fontSize: "0.9rem",
                                    lineHeight: 1.5,
                                    wordSpacing: "0.1rem",
                                    mb: 2,
                                }} >
                                    Fusce non faucibus lorem. Cras eu velit id diam cursus tincidunt in ut dui. Quisque quis augue placerat, pulvinar dui aliquam, convallis sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla feugiat cursus egestas.
                                </Typography>
                                <Typography sx={{
                                    fontSize: "0.9rem",
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


                                <Button
                                    variant="contained"
                                    sx={{
                                        my: 5,
                                        py: 1,
                                        px: 3,
                                        borderRadius: 0,
                                        backgroundColor: "#fbae19",
                                        color: "white",
                                        boxShadow: 0,
                                        border: "1px solid #fbae19",
                                        position: "relative",
                                        overflow: "hidden",
                                        // width: { md: "65%", lg: "35%" },
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
                                {/* <Grid container spacing={4} justifyContent="center">
                                    {newsData.map((news, index) => (
                                        <Grid item xs={12} md={5.5} key={index}>
                                            <Box sx={{
                                                backgroundColor: '#fff', color: '#000',
                                                // borderRadius: 2,
                                                overflow: 'hidden',
                                                display: "flex",
                                                flexDirection: { xs: "column", sm: "row" },
                                                justifyContent: "center",
                                                alignItems: { xs: "center", sm: "self-start" },
                                            }}>
                                                <Box
                                                    component="img"
                                                    src={news.img}
                                                    alt={news.title}
                                                    sx={{
                                                        width: { xs: "90%", sm: '30%', md: "30%", lg: "30%" },
                                                        height: { xs: "%", sm: '190px', md: '210px', lg: '170px' },
                                                        objectFit: 'cover'
                                                    }}
                                                />





                                                <Box sx={{
                                                    // border:"1px solid red",
                                                    width: { xs: "90%", sm: '70%', md: "70%", lg: "70%" },
                                                    height: { xs: "%", sm: '190px', md: '210px', lg: '170px' },

                                                }}>
                                                    <Stack direction="row" spacing={2} alignItems="center"

                                                        sx={{
                                                            display: "flex",
                                                            py: { xs: 2, sm: 0 },
                                                            px: { xs: 1, md: 1, lg: 2 }
                                                        }}>
                                                        <Box
                                                            sx={{
                                                                bgcolor: '#fbae19',
                                                                width: 60,
                                                                height: 60,
                                                                display: 'flex',
                                                                flexDirection: 'column',
                                                                justifyContent: 'center',
                                                                alignItems: 'center',
                                                                fontWeight: 'bold',
                                                                color: '#fff',
                                                            }}
                                                        >
                                                            <Typography fontSize="1.2rem">{news.day}</Typography>
                                                            <Typography fontSize="0.9rem">{news.month}</Typography>
                                                        </Box>

                                                        <Box>
                                                            <Typography fontWeight="bold">{news.title}</Typography>
                                                            <Typography fontSize="0.85rem" color="text.secondary">
                                                                by {news.author} - {news.comments}
                                                            </Typography>
                                                        </Box>
                                                    </Stack>

                                                    <Box px={2}>
                                                        <Typography fontSize="0.95rem" color="text.secondary" mb={2}>
                                                            {news.excerpt}
                                                        </Typography>
                                                        <Button
                                                            variant="outlined"
                                                            sx={{
                                                                borderColor: '#fbae19',
                                                                color: '#fbae19',
                                                                fontSize: "0.6rem",
                                                                '&:hover': {
                                                                    bgcolor: '#fbae19',
                                                                    color: '#fff',
                                                                },
                                                                mb: 2,
                                                            }}
                                                        >
                                                            Read More
                                                        </Button>
                                                    </Box>

                                                </Box>





                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid> */}
                            </Box>















                            <Box sx={{
                                position: "relative", display: "inline-block",
                                mb: 2,

                                // textAlign: "center",
                            }}>










                            </Box>
                        </Box>


                        <Box
                            component="form"
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                // gap: 2,
                                width: "100%",
                                p: 0,
                                // transform:"scale(0.8)",
                                justifyContent: "center",
                                // alignItems:"center",
                                // width: "95%",
                            }}>






                        </Box>

                    </Grid>





                </Grid>
            </Box>



























        </Box>
    </>);
};