import React from 'react';
import { Box, Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import BuildIcon from '@mui/icons-material/Build';
import SecurityIcon from '@mui/icons-material/Security';
import GroupsIcon from '@mui/icons-material/Groups';


// const services = [
//     {
//         title: 'Material Science and Engineering',
//         description: 'Morbi tincidunt iaculis ipsum eget laoreet. Cras at finibus ante, posuere ornare ex. Mauris sollicitudin ornare ullamcorper. Donec in arcu purus.',
//         image: 'https://lazeapostolski.com/industrial2/img/proj1.jpg',
//     },
//     {
//         title: 'Chemical Research',
//         description: 'Morbi tincidunt iaculis ipsum eget laoreet. Cras at finibus ante, posuere ornare ex. Mauris sollicitudin ornare ullamcorper. Donec in arcu purus.',
//         image: 'https://lazeapostolski.com/industrial2/img/proj2.jpg',
//     },
//     {
//         title: 'Power and Energy',
//         description: 'Morbi tincidunt iaculis ipsum eget laoreet. Cras at finibus ante, posuere ornare ex. Mauris sollicitudin ornare ullamcorper. Donec in arcu purus.',
//         image: 'https://lazeapostolski.com/industrial2/img/proj3.jpg',
//     },
// ];


const features = [
  {
    icon: <BuildIcon sx={{ fontSize: 40, color: 'white', bgcolor:"#fbae19", 
          p:{xs:0, sm:0.5},
     }} />,
    image: 'https://lazeapostolski.com/industrial2/img/proj1.jpg',
    title: 'Quality Work Process',
    description: `We have over 15 years of experience Lorem ipsum dolor sit amet, consectetur.
Morbi tincidunt iaculis ipsum eget laoreet. Cras at finibus ante, posuere ornare ex.`,
    link: 'Read More'
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 40, color: 'white', bgcolor:"#fbae19", 
          p: { xs: 0, sm: 0.5 },
     }} />,
      image: 'https://lazeapostolski.com/industrial2/img/proj2.jpg',
    title: 'Safety on First Place',
    description: `We have over 15 years of experience Lorem ipsum dolor sit amet, consectetur.
Morbi tincidunt iaculis ipsum eget laoreet. Cras at finibus ante, posuere ornare ex.`,
    link: 'Read More'
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 40, color: 'white', bgcolor:"#fbae19", 
          p: { xs: 0, sm: 0.5 },
     }} />,
      image: 'https://lazeapostolski.com/industrial2/img/proj3.jpg',
    title: 'Team Job',
    description: `We have over 15 years of experience Lorem ipsum dolor sit amet, consectetur.
Morbi tincidunt iaculis ipsum eget laoreet. Cras at finibus ante, posuere ornare ex.`,
    link: 'Read More'
  }
];


const Hover2 = () => {
    // const duplicated = [...services, ]; 




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
                // border: "1px solid red",
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
                    {features.map((item, index) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            key={index}
                            sx={{
                                // border: "1px solid red",
                                width: {
                                    xs: '90%',
                                    sm: "47.8%",
                                    md: "31.4%",
                                    lg: "31.9%",
                                    // lg: "32%",
                                },
                                // height: { sm: "450px", md: "460px", lg: "400px" },
                                px: { md: 0, lg: 0 },
                            }}
                        >
                            <Card
                                sx={{
                                    height: '100%',
                                    boxShadow: 3,
                                    borderRadius: 0,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    position: "relative",
                                    '&:hover .underlay': {
                                        opacity: 0,
                                        zIndex: -99,
                                    },
                                    '&:hover .overlay': {
                                        opacity: 1,
                                        // zIndex: 9,
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        position: 'relative',
                                        // height: '180px',
                                        // height: '238px',
                                        overflow: 'hidden',


                                        
                                        
                                        // '&:hover ': {
                                        //     opacity: 0,
                                        // },
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        // height="180"
                                        image={item.image}
                                        sx={{ objectFit: 'cover',
                                            height: { xs: '100%', sm: '270px' ,md: '270px', lg:'300px'},
                                            // width: {
                                            //     xs: '90%',
                                            //     sm: "47.8%",
                                            //     md: "31.4%",
                                            //      lg: "100%",
                                            //      lg: "32%",
                                            // },

                                         }}
                                    />
                                    <Box
                                        className="overlay"
                                        sx={{
                                            // m:3,
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
                                            '&:hover .underlay': {
                                                opacity: 0,
                                                zIndex: -99,
                                            },
                                        }}
                                    >

                                        <Box sx={{
                                            mt:{xs:4, sm:7, lg:5},
                                            // border:"1px solid red",

                                            width:"90%",
                                            // height:"60%",
                                            // p:3,
                                            display:"flex",
                                            flexDirection:"column",
                                            overflow:"hidden",
                                            // bgcolor:"#eee",
                                            // p:1,
                                            bgcolor: 'rgba(8, 8, 8, 0.1)',
                                            justifyContent:"center",
                                            alignItems:"start",
                                            color:"white",

                                        }}>
                                            <Typography


                                                sx={{
                                                    p: 0,
                                                    m: 0,
                                                    height: "100%",
                                                    // border:"1px solid black",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    // py:4,
                                                    // maxWidth: "100%",
                                                    display: "flex",
                                                    position: "absolute",
                                                    left: 20,
                                                    bottom:{xs:"35%" ,sm:100} ,
                                                    // width:"100%",
                                                    // maxWidth: "100%",

                                                    paddingBottom: '0px !important',


                                                }}>
                                                {item.icon}

                                            </Typography>
                                            <Typography

                                                sx={{
                                                    // p: 1,
                                                    // border:"1px solid black",
                                                    fontSize: {xs:"0.8rem", sm:"1.2rem"},
                                                    // width:"100%",
                                                    // height:"100px",
                                                    paddingBottom: '0px !important',
                                                    m: 0,
                                                    textAlign: "center",
                                                    lineHeight: { xs: 2, sm: 2 },
                                                }}>
                                                {item.title}
                                            </Typography>
                                            <Typography

                                                sx={{
                                                    // p: 1,
                                                    // border: "1px solid black",
                                                    fontSize: { xs: "0.6rem", sm: "0.8rem" },
                                                    // width:"100%",
                                                    paddingBottom: '0px !important',
                                                    m: 0,
                                                    textAlign: "center",
                                                    lineHeight: { xs: 1, sm: 2 },
                                                }}>
                                                {item.description}
                                            </Typography>

                                            <Button
                                                variant="text"
                                                href="#"
                                                sx={{
                                                    mt:{xs:0, sm:1},
                                                    // bgcolor: '#fbae19',
                                                    borderColor: "rgba(0,0,0,0.6)",
                                                    fontSize: { xs: "0.6rem", sm: "0.8rem" },
                                                    // color: 'black',
                                                    color: "white",
                                                    '&:hover': {
                                                        borderColor: "#fbae19",
                                                        bgcolor: '#fbae19'
                                                    },
                                                }}
                                            >
                                                See More
                                            </Button>
                                        </Box>





                                      
                                    </Box>



                                </Box>

                                <CardContent 
                                    className="underlay"
                                  sx={{ flexGrow: 1, 
                                    // height: {xs:"" ,md:"40px",lg:"40px"},
                                    // height: "40px" ,
                                    // border:"2px solid blue",
                                    bgcolor:"#eee",
                                    position:"absolute",
                                    bottom:0,
                                    transition: 'opacity 0.3s ease-in-out',
                                    alignItems:"center",
                                    maxWidth: "100%",
                                    display:"flex",
                                    flexDirection:"row",
                                    justifyContent:"center",
                                    p:{xs:1.5, sm:3, md:3, lg:0},
                                    width:"100%",
                                    overflow:"hidden",
                                    m:0,
                                    //  transition: 'opacity 0.3s ease-in-out',
                                    opacity: 1,
                                    pb: 0,
                                    paddingBottom: '0px !important',
                                    py: { xs: '22px !important' ,    sm:`10px !important`},
                                      '&:hover .lay': {
                                          opacity: "10% !important",
                                        //   zIndex: -99,
                                      },
                                       '&:hover .underlay': {
                                          opacity: 0,
                                        //   zIndex: -99,
                                      },

                                 }}> 

                                    <Typography  
                                        

                                    sx={{
                                        p: 0,
                                        m: 0,
                                        height:"100%",
                                        // border:"1px solid black",
                                        alignItems: "center",
                                        justifyContent:"center",
                                        // py:4,
                                        // maxWidth: "100%",
                                        display: "flex",
                                        position: "absolute",
                                        left:10,
                                        // width:"100%",
                                        // maxWidth: "100%",
                                        
                                        paddingBottom: '0px !important',


                                    }}>
                                        {item.icon }
                                        
                                    </Typography>
                                    <Typography  
                                        
                                     sx={{
                                        // p: 1,
                                        // border:"1px solid black",
                                        fontSize:"1.2rem",
                                        // width:"50%",
                                        paddingBottom: '0px !important',
                                        m: 0,
                                        textAlign:"center",
                                        lineHeight:{xs:0, sm:2},
                                    }}>
                                        {item.title}
                                    </Typography>
                                 </CardContent>
                                 
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

</Box>





    );
};

export default Hover2;
