
import { Box, Typography } from '@mui/material';


export default function ProjectsSP() {



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
                    textAlign:"center",
                    justifyContent: "center",
                }}
            >
                <Typography variant="h5" color="black" fontWeight="bold">
                    Material Science and Engineering
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
                    Home  &gt;  <span style={{ color: "#fbae19" }}>Material Science and Engineering  </span>
                </Typography>
            </Box>
















            <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
                <Box
                    sx={{
                        width: "95%",
                        maxWidth: "1170px",
                        height: "80vh",
                        backgroundImage: 'url("https://lazeapostolski.com/industrial2/img/phot.jpg")',
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                />
            </Box>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    gap: 4,
                    // px: 4,
                    // border:"1px solid red",
                    mb:8,
                    // width: "100%",
                    justifySelf:"center",
                    justifyContent: "center",
                    width: "95%",
                    maxWidth: "1170px",
                }}
            >
                <Box sx={{ width: { xs: "100%", md: "70%" } }}>
                    <Typography variant="h5" fontWeight="bold" gutterBottom   sx={{
                        textAlign:{xs:"center", md:"start"},
                    }}>
                        Description
                    </Typography>
                    <Typography variant="body2" paragraph sx={{
                        fontSize: "1rem",
                        fontWeight: 100,
                    }}>
                        Fusce non faucibus lorem. Cras eu velit id diam cursus tincidunt in ut dui. Quisque quis augue placerat,
                        pulvinar dui aliquam, convallis sapien. Orci varius natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus. Nulla feugiat cursus egestas.
                    </Typography>
                    <Typography variant="body2" paragraph sx={{
                        fontSize: "1rem",
                        fontWeight: 600,
                    }}>
                        Vestibulum tincidunt neque id quam tristique pulvinar non in nulla. Tincidunt neque id quam tri tique pulvinar
                        non in nulla. Curabitur sem dolor, ultricies nec purus eu, convallis cursus leo.
                    </Typography>

                    <Typography variant="h5" fontWeight="bold" gutterBottom mt={2} sx={{
                        textAlign: { xs: "center", md: "start" },

                    }}>
                        Specification
                    </Typography>
                    <Typography variant="body2" paragraph sx={{
                        fontSize: "1rem",
                        fontWeight: 100,
                    }}>
                        Fusce non faucibus lorem. Cras eu velit id diam cursus tincidunt in ut dui. Quisque quis augue placerat,
                        pulvinar dui aliquam, convallis sapien. Orci varius natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus. Nulla feugiat cursus egestas.
                    </Typography>
                    <Box component="ul" sx={{ pl: 0,
                    //  fontSize: "0.9rem",
                      listStyle: "none", m: 0,
                        fontSize: "1rem",
                        fontWeight: 100,
                     }}>
                        {[
                            "Cras eu velit id diam cursus tincidunt in ut dui.",
                            "Quisque quis augue placerat, pulvinar dui aliquam, convallis sapien.",
                            "Orci varius natoque penatibus et magnis dis",
                            "Parturient montes, nascetur ridiculus mus. Nulla feugiat cursus egestas.",
                        ].map((item, index) => (
                            <Box key={index} component="li" sx={{ display: "flex", alignItems: "start", mb: 1 }}>
                                <Box component="span" sx={{ color: "#fbae19", fontWeight: "bold", pr: 1 }}>➥</Box>
                                <Typography sx={{
                                    fontSize:"1rem",
                                    fontWeight:100,
                                }}>{item}</Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>

                <Box sx={{ width: { xs: "99%", md: "350px" }, 
                border:"1px solid #ccc", 
                    bgcolor:"",
                borderLeft:"4px solid black",
                px:{sx:0,sm:0, md:3},
                py: 3, 
                height:"",
                
                boxShadow: 2 }}>




                    <Box sx={{ px: { xs: 1, md: 0 }, fontSize: "1rem", fontWeight: 100 }}>
                        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{
                            mb:2,
                        }}>
                            Multi-Spring Pusher Seal
                        </Typography>

                        {[
                            { label: "Customer", value: "Mark Simons" },
                            { label: "Live Demo", value: "www.livedemo.com" },
                            { label: "Category", value: "Finance Services" },
                            { label: "Date", value: "30 March, 2014" },
                            { label: "Tags", value: "Finance Services" },
                        ].map((item, idx) => (
                            <Box key={idx} sx={{ display: "flex", mb: 1 }}>
                                <Typography sx={{ width: "90px", fontSize: "1rem", fontWeight: 100 }}>
                                    {item.label}
                                </Typography>
                                <Typography sx={{ width: "40px", fontSize: "1rem", fontWeight: 100, textAlign: "center" }}>
                                    :{"\u00A0"}
                                </Typography>
                                <Typography sx={{ fontSize: "1rem", fontWeight: 100 }}>
                                    {item.value}
                                </Typography>
                            </Box>
                        ))}
                    </Box>







                </Box>
            </Box>



















        </Box>
    </>);
};