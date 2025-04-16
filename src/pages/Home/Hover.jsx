import React from 'react';
import { Box, Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const services = [
    {
        title: 'Material Science and Engineering',
        description: 'Morbi tincidunt iaculis ipsum eget laoreet. Cras at finibus ante, posuere ornare ex. Mauris sollicitudin ornare ullamcorper. Donec in arcu purus.',
        image: 'https://lazeapostolski.com/industrial2/img/proj1.jpg',
    },
    {
        title: 'Chemical Research',
        description: 'Morbi tincidunt iaculis ipsum eget laoreet. Cras at finibus ante, posuere ornare ex. Mauris sollicitudin ornare ullamcorper. Donec in arcu purus.',
        image: 'https://lazeapostolski.com/industrial2/img/proj2.jpg',
    },
    {
        title: 'Power and Energy',
        description: 'Morbi tincidunt iaculis ipsum eget laoreet. Cras at finibus ante, posuere ornare ex. Mauris sollicitudin ornare ullamcorper. Donec in arcu purus.',
        image: 'https://lazeapostolski.com/industrial2/img/proj3.jpg',
    },
];

const Hover = () => {
    const duplicated = [...services, ...services]; // Two rows (6 total)




    return (






<Box sx={{
            my:5,
            display: 'flex',
            justifySelf:"center",
            alignSelf:"center",
            // border: "1px solid red",
            maxWidth: '1200px',
            // margin: '0 auto',
            flexDirection: { xs: 'column-reverse', md: 'row' },
            // width:{xs:"90%"},
            width: {
                xs: '95%',
                sm:"600px",
                md: '900px',
                lg: '1200px',
            },
            gap: { xs: 5, md: 0 },

}}>

            <Box sx={{ 
                // px:2,
                px: {xs:0, sm:2},
                
                py: 5,
                display: 'flex',
                justifySelf: "center",
                alignSelf: "center",
                // justifyContent: { xs: "center", md: "space-between" },
                alignItems: "center",
             }}>
                <Grid
                    container
                    spacing={3}
                    sx={{
                        justifyContent: { xs: "center", md: "space-between" },
                        alignItems: "center",
                        display: 'flex',
                        justifySelf: "center",
                        alignSelf: "center",
                    }}
                >
                    {duplicated.map((item, index) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            key={index}
                            sx={{
                                width: {
                                    xs: '90%',
                                    sm: "47.8%",
                                    md: "31.4%",
                                    lg: "31.9%",
                                },
                                height: { sm: "450px", md: "460px", lg: "400px" },
                                px: { md: 0, lg: 0 },
                            }}
                        >
                            <Card
                                sx={{
                                    height: '100%',
                                    borderRadius: 0,
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                            >
                                <Box
                                    sx={{
                                        position: 'relative',
                                        height: '180px',
                                        overflow: 'hidden',
                                        '&:hover .overlay': {
                                            opacity: 1,
                                        },
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        height="180"
                                        image={item.image}
                                        alt={item.title}
                                        sx={{ objectFit: 'cover' }}
                                    />
                                    <Box
                                        className="overlay"
                                        sx={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            bgcolor: 'rgba(0,0,0,0.6)',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            opacity: 0,
                                            transition: 'opacity 0.3s ease-in-out',
                                        }}
                                    >
                                        <Button
                                            variant="outlined"
                                            href="#"
                                            sx={{
                                                // bgcolor: '#fbae19',
                                                borderColor:"rgba(0,0,0,0.6)",
                                                color: '#fff',
                                                '&:hover': {
                                                    borderColor: "#fbae19",
                                                    bgcolor: '#fbae19' },
                                            }}
                                        >
                                            See More
                                        </Button>
                                    </Box>
                                </Box>

                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h6" component="div" fontWeight="bold">
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.description}
                                    </Typography>
                                </CardContent>
                                <Button sx={{ px: 2, color: '#fbae19', alignSelf: 'flex-start', m: 2 }}>
                                    Read More
                                </Button>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

</Box>





    );
};

export default Hover;
