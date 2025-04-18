import React from 'react';
import { Box, Card, LinearProgress , Typography, useTheme, useMediaQuery } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';







const features = [
    {
        title: 'Worldwide Provider',
        description:
            'Fusce non faucibus lorem. Cras eu velit id diam cursus tincidunt in ut dui. Quisque quis augue placerat, pulvinar dui aliquam, convallis sapien. Orci varius natoque penaticursus egestas.',
        icon: <PublicIcon sx={{ fontSize: 60, color:"#fbae19" }} />,
    },
    {
        title: 'Fast Delivery',
        description:
            'Fusce non faucibus lorem. Cras eu velit id diam cursus tincidunt in ut dui. Quisque quis augue placerat, pulvinar dui aliquam, convallis sapien. Orci varius natoque penaticursus egestas.',
        icon: <LocalShippingIcon sx={{ fontSize: 60, color:"#fbae19" }} />,
    },
    {
        title: 'Frendly Support',
        description:
            'Fusce non faucibus lorem. Cras eu velit id diam cursus tincidunt in ut dui. Quisque quis augue placerat, pulvinar dui aliquam, convallis sapien. Orci varius natoque penaticursus egestas.',
        icon: <SupportAgentIcon sx={{ fontSize: 60, color:"#fbae19" }} />,
    },
];

const Hover3 = () => {
    const theme = useTheme();
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));
    const isMd = useMediaQuery(theme.breakpoints.down('md'));

    const getWidth = () => {
        if (isSm) return '80%';
        if (isMd) return '80%';
        return '50%';
    };

    return (

<>





 <Box sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>




<Box sx={{
    py:10,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
}}>

                <Box
                    sx={{
                        // border: "1px solid red",
                        display: 'flex',
                        justifySelf:"center",

                          
                           


                        
                        alignSelf:"center",
                        alignItems:"center",
                        // flexWrap: 'wrap',
                        gap: 2,
                        justifyContent: 'center',
                        // px: 2,
                        width: {
                            xs: '95%',
                            sm: "600px",
                            md: '900px',
                            lg: '1200px',

                        },
                        flexDirection: { xs: 'column-reverse', md: 'row' },

                    }}
                >
                    {features.map((item, idx) => (
                        <Card
                            key={idx}
                            sx={{
                                backgroundColor: '#eee',
                                borderRadius: 0,
                                p: 3,
                                width: getWidth(),
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                boxShadow: 2,
                                position: 'relative',
                                overflow: 'hidden',
                                '&:hover .progress': {
                                    transform: 'scaleX(1)',
                                },
                            }}
                        >
                            {item.icon}
                            <Typography variant="h5" fontWeight="" mt={0} my={3}>
                                {item.title}
                            </Typography>
                            <Typography variant="body2"
                                mb={3}
                                >{item.description}</Typography>



                           
                            <Box
                                className="progress"
                                sx={{
                                    display: "flex",
                                    // justifySelf:"center",
                                    position: 'absolute',
                                    bottom: 10,
                                    left: '10%',
                                    transform: 'scaleX(0)',
                                    transformOrigin: 'center',
                                    transition: 'transform 0.3s ease-in-out',
                                    height: 3,
                                    width: '80%',
                                    backgroundColor: '#fbae19',
                                    zIndex:9,
                                }}
                            /><Box
                                className=" "
                                sx={{
                                    display: "flex",
                                    // justifySelf:"center",
                                    position: 'absolute',
                                    bottom: 9,
                                    left: '10%',
                                    transform: 'scaleX(1)',
                                    transformOrigin: 'center',
                                    transition: 'transform 0.3s ease-in-out',
                                    height: 3,
                                    py:0.1,
                                    width: '80%',
                                    backgroundColor: '#cccccc',
                                }}
                            />

                        </Card>
                    ))}
                </Box>

</Box>
            </Box>

</>




            );
};

export default Hover3;
