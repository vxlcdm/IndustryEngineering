import React, { useRef, useEffect } from "react";
import { Box, useTheme, Typography, useMediaQuery } from "@mui/material";

const images = [
  "https://placehold.co/200x120/EEE/111?text=1",
  "https://placehold.co/200x120/DDD/111?text=2",
  "https://placehold.co/200x120/CCC/111?text=3",
  "https://placehold.co/200x120/BBB/111?text=4",
  "https://placehold.co/200x120/AAA/111?text=5",
  "https://placehold.co/200x120/999/111?text=6",
];

const Partner = () => {
  const sliderRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isMd = useMediaQuery(theme.breakpoints.between("md", "lg"));
//   const isLg = useMediaQuery(theme.breakpoints.up("lg"));

  const getVisibleCount = () => {
    if (isXs) return 1;
    if (isSm) return 2;
    if (isMd) return 3;
    return 4;
  };

  const visibleCount = getVisibleCount();
  const totalImages = [...images, ...images.slice(0, visibleCount)];

  useEffect(() => {
    const container = sliderRef.current;
    if (!container) return;
    container.scrollLeft = 0;
  }, [visibleCount]);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; 
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleScroll = () => {
    const container = sliderRef.current;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;

    if (container.scrollLeft + clientWidth >= scrollWidth - 1) {
      container.scrollLeft = 0;
    }
  };

  return (



<>
<Box   sx={{
              bgcolor:"#F5F5F5",
                // border:"1px solid red",

              my: 5,
              py:5,

}}>

        <Box sx={{
            width: {
                xs: '95%',
                sm: "600px",
                md: '900px',
                lg: '1200px',
            },
                  pt: 5,

            justifySelf: "center",
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            //   border:"1px solid red",


        }}>
            <Typography
                variant="h4"
                fontWeight="700"
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
                Our partners
            </Typography>
        </Box>
        <Box sx={{
            // border: "1px solid red",
            // px:2,
            justifySelf: "center",

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: {
                xs: '95%',
                sm: "600px",
                md: '900px',
                lg: '1200px',
            },
        }}>


            <Box
                ref={sliderRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                onScroll={handleScroll}
                sx={{
                    //   border: "1px solid red",

                    width: "1170px",
                    //   justifyContent: "center",

                    display: "flex",
                    overflowX: "auto",
                    scrollSnapType: "x mandatory",
                    scrollBehavior: "smooth",
                    gap: 2,
                    px: { xs: 1, sm: 2 },
                    py: 4,
                    "&::-webkit-scrollbar": { display: "none" },
                    msOverflowStyle: "none",
                    scrollbarWidth: "none",
                    cursor: isDragging.current ? "grabbing" : "grab",
                    userSelect: "none"
                }}
            >
                {totalImages.map((img, i) => (
                    <Box
                        key={i}
                        sx={{
                            flex: {
                                xs: `0 0 calc(102% / ${visibleCount})`,
                                sm: `0 0 calc(101% / ${visibleCount})`,
                                md: `0 0 calc(98.9% / ${visibleCount})`,
                                lg: `0 0 calc(97.4% / ${visibleCount})`
                            },
                            scrollSnapAlign: "start",
                            borderRadius: 0,
                            boxShadow: 3,
                            overflow: "hidden",
                            border: "2px solid white",
                            position: "relative",
                            // top:0,
                            zIndex: 2,

                        }}
                    >
                        <img src={img} alt={`slide-${i}`} draggable={false}   style={{
                            width: "100%", height: "auto",
                            position:"relative",
                            draggable: false,
                            // top:0,
                            zIndex:-2,

                        }} />
                    </Box>
                ))}
            </Box>


        </Box>
</Box>
</>


  );
};

export default Partner;
