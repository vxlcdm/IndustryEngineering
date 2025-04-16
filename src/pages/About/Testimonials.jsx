
import { Box, Typography } from '@mui/material';
import { Grid, Card, CardContent, Avatar, ListItem, ListItemText } from "@mui/material";
 
 


const teamData = [
    {
        name: "John Simsons",
        position: "Sales Manager",
        description: "Lorem ipsum dolor sit amet, sint occaecat cupidatat non proident occaecat cupidatat.",
        image: "https://lazeapostolski.com/industrial2/img/test1.jpg"
    },
    {
        name: "John Simsons",
        position: "Sales Manager",
        description: "Lorem ipsum dolor sit amet, sint occaecat cupidatat non proident occaecat cupidatat.",
        image: "https://lazeapostolski.com/industrial2/img/test2.jpg"
    },
    {
        name: "John Simsons",
        position: "Sales Manager",
        description: "Lorem ipsum dolor sit amet, sint occaecat cupidatat non proident occaecat cupidatat.",
        image: "https://lazeapostolski.com/industrial2/img/test3.jpg"
    },
    {
        name: "John Simsons",
        position: "Sales Manager",
        description: "Lorem ipsum dolor sit amet, sint occaecat. Nullam venenatis bibendum nunc, non sollicitudin orci vulputate vel.",
        image: "https://lazeapostolski.com/industrial2/img/test4.jpg"
    },
    {
        name: "John Simsons",
        position: "Sales Manager",
        description: "Nullam venenatis bibendum nunc, non sollicitudin orci vulputate vel. Lorem ipsum dolor sit amet, sint occaecat cupidatat non proident occaecat cupidatat.",
        image: "https://lazeapostolski.com/industrial2/img/test5.jpg"
    },
    {
        name: "John Simsons",
        position: "Sales Manager",
        description: "Lorem ipsum dolor sit amet, sint occaecat cupidatat non proident occaecat cupidatat.",
        image: "https://lazeapostolski.com/industrial2/img/test6.jpg"
    },
    {
        name: "John Simsons",
        position: "Sales Manager",
        description: "Nullam venenatis bibendum nunc, non sollicitudin orci vulputate vel. Proin consectetur, nec molestie augue turpis at nunc.",
        image: "https://lazeapostolski.com/industrial2/img/test2.jpg"
    },
    {
        name: "John Simsons",
        position: "Sales Manager",
        description: "Lorem ipsum dolor sit amet, sint occaecat cupidatat non proident occaecat cupidatat.",
        image: "https://lazeapostolski.com/industrial2/img/test1.jpg"
    }
];
























export default function Testimonials() {



    return (<>
        <Box sx={{
            width: "100%",


        }}>


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
                    Testimonials
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
                    Home  &gt; About Us &gt;  <span style={{ color: "#fbae19" }}>Testimonials</span>
                </Typography>
            </Box>














            <Box sx={{
                display: "flex",
                alignSelf: "center",
                justifySelf: "center",
                alignItems: "center",
                justifyContent: "center",
                // border:"1px solid red",
                
                width: {
                    // xs: "300px",
                    // sm: "480px",
                    // md: "850px",
                    lg: "100%",
                    // xl: "900px",

                },
            }}>
                <Grid container spacing={4} sx={{
                    // border:"2px solid red",
                    // width: "1170px",
                    display: "flex",
                    alignSelf: "center",
                    // border: "1px  solid red",

                    justifySelf: "center",
                    // alignItems: "center",   
                    // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                    justifyContent: "center",


                    // border:"1px solid red",
                    // height: "100%",
                    py: 8,

                }}>
                    {teamData.map((member, i) => (
                        <Grid item xs={12} sm={6} md={3} lg={3} key={i}
                        // sx={{
                        //     width:{md:"800px"}
                        // }}
                        // sx={{ p: 8, }}
                           sx={{
                               width: {
                                   xs: "90%",
                                   sm: "70%",
                                   md: "25%",
                                   lg: "20%",
                                   // xl: "900px",

                               },
                            // display:"flex",
                            // border:"1px  solid red",
                               
                               
                           }}

                        >

                            <Card sx={{
                                display: "flex", flexDirection: "column",
                                alignItems: { xs: "center", sm: "center", md: "start" }, 
                                textAlign: { xs: "center", sm: "center", md: "start" }, 
                                 borderRadius: 0,
                                overflow: "hidden",
                                position: "relative",
                                "&:hover": {
                                    boxShadow: 6,
                                    transform: "translateY(-4px)",
                                },
                                height: {
                                    // xs: "300px",
                                    sm: "70%",
                                    md: "80%",
                                       lg: "75%",
                                    // xl: "900px",

                                },
                                
                                py: 4,
                                // px:3,
                                "&:hover .hover-overlay": {
                                    transform: "scale(1)",
                                },

                            }}>





                                <Avatar src={member.image} sx={{
                                    // p:2,m:2
                                    mx:2,
                                    alignSelf: { xs: "center",sm:"center", md:"start"}
                                }}/>


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
                                        my: 2,
                                    }}> {member.description}</Typography>




                                </Box>




                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>




















        </Box>

    </>)
}