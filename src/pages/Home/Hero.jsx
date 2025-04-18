import React, { useState } from 'react';
import { Box, Button, Typography, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';





const images = [
    {
        url: "https://lazeapostolski.com/industrial2/img/slide1.jpg",
        heading: "Leader in Power and Automotion",
        subText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla mauris pellentesque, vestibulum quam vel, bibendum lectus.",
        position: "center",
    },
    {
        url: "https://lazeapostolski.com/industrial2/img/slide3.jpg",
        heading: "Welcome to all Industrial Business",
        subText: "You will be always aware of all business and financial news and stay informed with investment tips, market predictions, business advice and guides.",
        position: "flex-start",
    },
    {
        url: "https://lazeapostolski.com/industrial2/img/slide2.jpg",
        heading: "We help Industries Inovate and Grow",
        subText: "You will be always aware of all business and financial news and stay informed with investment tips, market predictions, business advice and guides.",
        position: "flex-end",
    },
];


// const variants = {
//     initial: { opacity: 0, y: 50 },
//     animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
//     exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
// };













const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const currentImage = images[currentIndex];


    const theme = useTheme();
    const isLg = useMediaQuery(theme.breakpoints.up('lg'));
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    const isSm = useMediaQuery(theme.breakpoints.up('sm'));
    // const isXs = useMediaQuery(theme.breakpoints.up('xs'));

    const is675 = useMediaQuery('(min-width:679px)');
    const is355 = useMediaQuery('(min-width:355px)');


    let topValue = `calc(${currentImage.top || "35%"} + 250px)`;
    // if (isLg) topValue = `calc(${currentImage.top || "35%"} + 70px)`;
    // else if (isMd) topValue = `calc(${currentImage.top || "35%"} + 80px)`;
    // else if (isSm) topValue = `calc(${currentImage.top || "35%"} + 140px)`;
    // else if (isXs) topValue = `calc(${currentImage.top || "35%"} + 230px)`;
    if (isLg) {
        topValue = `calc(${currentImage.top || "35%"} + 70px)`;
    } else if (isMd) {
        topValue = `calc(${currentImage.top || "35%"} + 80px)`;
    } else if (is675) {
        topValue = `calc(${currentImage.top || "35%"} + 100px)`;
    } else if (isSm) {
        topValue = `calc(${currentImage.top || "35%"} + 150px)`;
    } else if (is355) {
        topValue = `calc(${currentImage.top || "35%"} + 170px)`;
    } else {
        topValue = `calc(${currentImage.top || "35%"} + 250px)`;
    }







    return (
        <>    








        <Box sx={{ position: "relative", height: "100vh", overflow: "hidden" }}>
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    backgroundImage: `url(${currentImage.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transition: "background-image 0.5s ease-in-out",
                }}
            />











         
                <motion.div
                    key={currentIndex}
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 1 }}
                    style={{
                        position: "absolute",
                        top: currentImage.top || "30%",
                        // left: currentImage.left,
                        // left: "30%",
                        // right: currentImage.right,
                        left: "6%",
                        transform: currentImage.transform,
                        color: "white",
                        textAlign: currentImage.textAlign,
                        zIndex: 2,
                    }}
                >
                    <Typography variant="h2" sx={{ fontWeight: "bold" }}>
                        Welcome to the Future
                    </Typography>
                    <Typography variant="h6" sx={{ mt: 2 }}>
                        Experience seamless design and motion
                    </Typography>
                </motion.div>












                <motion.div
                    key={`buttons-${currentIndex}`}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    style={{
                        // border:"2px solid white",
                        position: "absolute",
                        top: topValue,
                        // top: `calc(${currentImage.top || "35%"} + 250px)`,
                        // top:{
                            // md: `calc(${currentImage.top || "35%"} + 190px)`,
                            // lg: `calc(${currentImage.top || "35%"} + 160px)`},
                        // left: currentImage.left,
                        left:"5%",
                        // right: currentImage.right,
                        transform: currentImage.transform,
                        display: "flex",
                        gap: "1rem",
                        zIndex: 2,
                    }}
                >
                    <Button
                        variant="contained"
                        sx={{
                            my: 5,
                            py: 1,
                            px: 3,
                            borderRadius: 0,
                            backgroundColor: "#fbae19",
                            fontSize: { xs: "0.75rem", sm: "0.8rem" },
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
                        <span style={{ 
                            // fontSize: { sm: "0.6rem", lg: "0.8rem" }
                             }}>LEARN MORE</span>
                    </Button>
                    <Button
                        variant="contained"
                        sx={{
                            my: 5,
                            py: 1,
                            px: 3,
                            borderRadius: 0,
                            // backgroundColor: "#fbae19",
                            color: "white",
                            border: "1px solid #062d4c",
                            fontSize: { xs: "0.75rem", sm: "0.8rem" },
                            boxShadow: 0,
                            position: "relative",
                            overflow: "hidden",
                            backgroundColor: "#062d4c",
                            // width: { md: "65%", lg: "35%" },
                            zIndex: 1,
                            "&::before": {
                                content: '""',
                                position: "absolute",
                                top: 0,
                                left: 0,
                                height: "100%",
                                width: "0%",
                                backgroundColor: "#fbae19",
                                zIndex: 0,
                                transition: "width 0.4s ease",
                            },
                            "&:hover::before": {
                                width: "100%",
                            },
                            "&:hover": {
                                border: "1px solid #fbae19",


                                // backgroundColor: "#fbae19",
                            },
                            "& > span": {
                                position: "relative",
                                zIndex: 1,
                            },
                        }}
                    >
                        <span style={{
                           
                             }}>VIEW SERVICES</span>
                    </Button>
                </motion.div>
           











            <IconButton
                onClick={handlePrev}
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "1rem",
                    zIndex: 3,
                    color: "white",
                    borderRadius: 1,
                    p: 2,
                    backgroundColor: "rgba(0,0,0,0.4)",
                    ":hover": { backgroundColor: "rgba(0,0,0,0.6)" },
                }}
            >
                {/* <ArrowBackIos sx={{ fontSize: "small" }} /> */}
                <AiOutlineArrowLeft size={14} />
            </IconButton>

            <IconButton
                onClick={handleNext}
                sx={{
                    position: "absolute",
                    top: "50%",
                    right: "1rem",
                    zIndex: 3,
                    color: "white",
                    borderRadius: 1,
                    // p:0,
                    p: 2,
                    backgroundColor: "rgba(0,0,0,0.4)",
                    ":hover": { backgroundColor: "rgba(0,0,0,0.6)" },
                }}
            >
                {/* <ArrowForwardIos sx={{ fontSize:"small"}}/> */}
                <AiOutlineArrowRight size={14} />

            </IconButton>


        </Box>











  </>  );
};

export default Hero;