import { Box, Typography, Grid, Card, CardContent, Avatar, ListItem, ListItemText } from "@mui/material";
// import { style } from '@mui/system';
import { List, ListItemIcon, Button } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ScienceIcon from '@mui/icons-material/Science';
import EngineeringIcon from '@mui/icons-material/PrecisionManufacturing';
import BoltIcon from '@mui/icons-material/Bolt';
import RecyclingIcon from '@mui/icons-material/Autorenew';


// const team = [
//     {
//         name: "George Simons",
//         position: "CEO & Managing Director",
//         phone: "800-700-6202",
//         email: "simons@industrial.com",
//         image: "https://lazeapostolski.com/industrial2/img/member1.jpg", 
//     },
//     {
//         name: "Lisa Jones",
//         position: "Adviser & Business Developer",
//         phone: "800-700-6202",
//         email: "simons@industrial.com",
//         image: "https://lazeapostolski.com/industrial2/img/member2.jpg", 
//     },
//     {
//         name: "George Simons",
//         position: "Chief Engineer",
//         phone: "800-700-6202",
//         email: "simons@industrial.com",
//         image: "https://lazeapostolski.com/industrial2/img/member3.jpg", 
//     },
//     {
//         name: "George Simons",
//         position: "Chief Engineer",
//         phone: "800-700-6202",
//         email: "simons@industrial.com",
//         image: "https://lazeapostolski.com/industrial2/img/member4.jpg", 
//     },
// ];



export default function WIG2() {





























    return (
        <Box>




















            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    justifyContent: "center",
                    alignItems: {
                        sm: "center",
                        md: "center",
                    },
                    // alignItems:"center",
                    // maxWidth: "1200px",
                    width: {
                        xs: '95%',
                        sm: "600px",
                        md: '900px',
                        lg: '1200px',
                    },
                    mx: "auto",
                    // height: "100%",
                    // px: { xs: 0, md: 3 },
                    mt: 5,
                    mb: 10,
                    gap: {
                        xs: 0,
                        sm: 3
                    },
                    // border: "1px solid red",
                }}
            >

                <Box
                    sx={{
                        width: {
                            xs: "90%",
                            sm: "80%",

                            md: "45%", lg: "55%"
                        },
                        display: "flex",
                        justifyContent: "center",
                        justifySelf: "center",
                        flexDirection: "column",
                        height: "100%",
                        alignItems: { sm: "center", md: "flex-start" },
                        alignSelf: {
                            xs: "center",
                            sm: "initial",
                        },
                        // py:3,
                        // px:6,
                        gap: 2,
                        // mb: {
                        //     xs: 4,
                        //     sm: "auto", md: 0
                        // },
                        // border: "1px solid blue",
                    }}
                >
                    <Box
                        component="img"
                        src="https://lazeapostolski.com/industrial2/img/worker-man.png"
                        alt="Company Overview"
                        sx={{
                            width: { xs: "100%", sm: "70%", md: "90%", lg: "60%" },
                            height: "auto",
                            // height: "100%",
                            px: { xs: 0, sm: 5 },
                            // border: "1px solid red",
                        }}
                    />

                    {/* <Box
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
                    </Box> */}
                </Box>


                <Box
                    sx={{
                        width: { xs: "90%", sm: "80%", md: "55%" },
                        // border: "1px solid blue",
                        // border: "1px solid red",

                        alignSelf: {
                            xs: "center",
                            sm: "initial",
                        },
                        // px: 3,
                        pr: { xs: 0, md: 3, lg: 3 },
                        pt: 3,
                        mt: { xs: 4, md: 0 },
                    }}
                >
                    <Box sx={{
                        position: "relative",
                        display: "inline-block",
                        // mb: 4
                    }}>
                        <Typography variant="h4" fontWeight="bold" >
                            <Typography variant="h4" fontWeight="bold" sx={{
                                // m: "0 !important",
                                // p: "0 !important"
                            }}  >
                                We are Industrial Group
                            </Typography>
                            <Box component="span" sx={{ position: "relative", pr: 0.5 }}>

                                <Box
                                    component="span"
                                    sx={{
                                        position: "absolute",
                                        top: 0,
                                        width: "40px",
                                        borderBottom: "3.5px solid #fbae19",
                                        display: "inline-block",
                                        pb: "12px",
                                    }}
                                >

                                </Box>

                            </Box>
                        </Typography>
                    </Box>





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


                    {/* <Typography sx={{
                        fontSize: "0.7rem",
                        lineHeight: 1.5,
                        wordSpacing: "0px",
                        mb: 2,
                        fontWeight: 700,
                    }} >
                        Vestibulum tincidunt neque id quam tristique pulvinar non in nulla. Tincidunt neque id quam tristique pulvinar non in nulla. Curabitur sem dolor, ultricies nec purus eu, convallis cursus leo.
                    </Typography> */}

                    {/* <Typography sx={{
                        fontSize: "0.7rem",
                        lineHeight: 1.5,
                        wordSpacing: "0.1rem",
                        mb: 2,
                    }} >
                        Fusce non faucibus lorem. Cras eu velit id diam cursus tincidunt in ut dui. Quisque quis augue placerat, pulvinar dui aliquam, convallis sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla feugiat cursus egestas.
                    </Typography> */}



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

                </Box>
            </Box>































































        </Box>
    );
}
