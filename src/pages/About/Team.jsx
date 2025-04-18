
import { Box, Typography } from '@mui/material';
import {   Grid, Card, CardContent, Avatar, ListItem, ListItemText } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

 
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



























export default function Team(){



    return(<>






     <Box sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>



                    
    <Box sx={{
        width:"100%",
           

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
                    Meet Our Team
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
                    Home  &gt;  <span style={{ color: "#fbae19" }}>Meet Our Team</span>
                </Typography>
            </Box>














            <Grid container spacing={4} sx={{
                // border:"2px solid red",
                width: "1170px",
                display: "flex",
                alignSelf:"center",
                justifySelf:"center",
                alignItems: "center",
                justifyContent: "center",
              
                
                maxWidth:{
                    xs:"300px",
                    sm:"600px",
                    md:"900px",
                    lg:"900px",
                    xl:"900px",

                },
                // border:"1px solid red",
                // height: "100%",
                py: 8,

            }}>
                {team.map((member, i) => (
                    <Grid item xs={12} sm={6} md={3} lg={3} key={i}
                        // sx={{
                        //     width:{md:"800px"}
                        // }}
                    >

                        <Card sx={{ display: "flex", flexDirection: "column", alignItems: "start", borderRadius: 0, 
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





    </Box>
    
    </>)
}