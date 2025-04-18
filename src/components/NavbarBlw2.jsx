import React, { useRef, useState, useEffect } from "react";
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { IconButton } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useMediaQuery as UMQ } from "@mui/material";
import { FaSearch } from "react-icons/fa";
import { borderBottom, keyframes } from "@mui/system";
import { Link } from "react-router-dom";







const navItems = [
    {
        label: "Home",
        to: "/",
        subLabels: [
            { label: "Home Two", to: "/hometwo" },
            { label: "Home Three", to: "/homethree" },
            { label: "Home Four", to: "/homefour" }
        ]
    },
    {
        label: "About",
        to: "/about",
        subLabels: [
            { label: "Our Team", to: "/aboutourteam" },
            { label: "Testimonial", to: "/abouttestimonial" },
            { label: "FAQ", to: "/aboutfaq" }
        ]
    },
    {
        label: "Solutions",
        to: "/solutions",
        subLabels: [
            { label: "Material Science and Engineering", to: "/solutions/materialscience" },
            { label: "Chemical Research", to: "/solutions/chemicalresearch" },
            { label: "Power and Energy", to: "/solutions/powerenergy" },
            { label: "Mechanical Engineering", to: "/solutions/mechanicalengineering" },
            { label: "Petroleum and Gas", to: "/solutions/petroleumgas" },
            { label: "Facture Process", to: "/solutions/factoryprocess" }
        ]
    },
    {
        label: "Project",
        to: "/project",
        subLabels: [
            { label: "Projects", to: "/project/projects" },
            { label: "Single Project", to: "/project/singleproject" }
        ]
    },
    {
        label: "News",
        to: "/news",
        subLabels: [
            { label: "Big View", to: "/news/bigview" },
            { label: "Single News", to: "/news/singlenews" }
        ]
    },
    {
        label: "Shop",
        to: "/shop",
        subLabels: [
            { label: "Product Details", to: "/shop/productdetails" },
            { label: "Cart Page", to: "/shop/cart" },
            { label: "Checkout Page", to: "/shop/checkout" }
        ]
    },
    { label: "Contact", to: "/contact" }
];




const slideWithDoubleBump = keyframes`
  0% {
    left: -100%;
  }
  75% {
    left: 0%;
  }

  /* First Bump: 76–85% */
  76% {
    left: -3%;
  }
  77% {
    left: -6%;
  }
  78% {
    left: -9%;
  }
  79% {
    left: -12%;
  }
  80% {
    left: -15%;
  }
  81% {
    left: -12%;
  }
  82% {
    left: -9%;
  }
  83% {
    left: -6%;
  }
  84% {
    left: -3%;
  }
  85% {
    left: 0%;
  }

  /* Second Bump: 92–100% */
  92% {
    left: -3%;
  }
  93% {
    left: -6%;
  }
  94% {
    left: -9%;
  }
  95% {
    left: -12%;
  }
  96% {
    left: -15%;
  }
  97% {
    left: -12%;
  }
  98% {
    left: -9%;
  }
  99% {
    left: -6%;
  }
  100% {
    left: 0%;
  }
`;






const NavbarBlw2 = () => {

    const isMobile = UMQ("(max-width:600px)");
    const isMobile2 = window.matchMedia("(max-width:825px)").matches;
    const isMobile3 = UMQ("(max-width:810px)");
    const [openKar, setOpenKar] = useState(-1);
    const [openFlag, setOpenFlag] = useState(false);
    const [openFlag2, setOpenFlag2] = useState(false);
    // const [s1, setS1] = useState(-1);
    // const [s2, setS2] = useState(false);
    // const [s3,setS3]=useState(false);
    // const [s4, setS4] = useState(false);
    // const [s5, setS5] = useState(false);
    // const [s6, setS6] = useState(false);



    const [openStates, setOpenStates] = useState({});
    const handleToggle = (index) => {
        setOpenStates((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };




    const contentRef = useRef(null);
    const [contentHeight, setContentHeight] = useState(0);

    const contentRef2 = useRef(null);
    const [contentHeight2, setContentHeight2] = useState(0);

    useEffect(() => {
        if (contentRef.current) {
            setContentHeight(contentRef.current.scrollHeight);
        }
    }, [openFlag]);



    useEffect(() => {
        if (contentRef2.current) {
            setContentHeight2(contentRef2.current.scrollHeight);
        }
    }, [openFlag2]);


    const handleDrawerOpen = () => {
        setOpenFlag(!openFlag);
    }

    // const handleIconClickFunc=(e)=>{
    //     if (e===0) {
    //         console.log(e);
    //         if(s1===0)
    //         {
    //             setS1(-9);
    //             console.log(s1);

    //         }
    //         setS1(0)
    //         // setOpenKar(1);
    //     }
    //     if (e===1) {
    //         console.log(e);
    //         setOpenKar(-1);

    //     }
    //     if (e === 2) {
    //         console.log(e);
    //                     setOpenKar(-1);

    //     }
    //     if (e === 3) {
    //         console.log(e);
    //                     setOpenKar(-1);

    //     }
    //     if (e === 4) {
    //         console.log(e);
    //                     setOpenKar(-1);

    //     }
    //     if (e === 5) {
    //         console.log(e);
    //                     setOpenKar(-1);

    //     }

    //     setOpenKar(e);




    // }

    // const handleAlldrawerItems=()=>{
    //     setOpenFlag2(!openFlag2)  ; 
    // }






    return (<>
        <AppBar disableGutters sx={{
            // top:100,
            position: 'unset',
            top: 95, zIndex: 10900,
            // position: "fixed",
            // border: "1px solid red",

            bgcolor: "#062d4c",
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            // border: "1px solid red",
        }}>
            <Toolbar disableGutters sx={{
                display: "flex",
                p: 0,
                m: 0,
                justifyContent: "center",
                alignItems: "center",
                // border: "1px solid blue",
                width: "100%",
                maxWidth: "1170px",
                // position: "relative",
                // border: "1px solid red",


                // gap:16,

            }}>
                <Box disableGutters sx={{
                    px: 4,
                    display: "flex",
                    width: "100%",
                    // justifyContent: "space-between",
                    // position: "relative",
                    alignItems: isMobile3 ? 'end' : "none",
                    // justifyContent: "center",
                    flexDirection: isMobile3 ? "column" : {
                        xs: "row-reverse",
                        sm: "row",
                        md: "row"

                    },
                    // alignItems: "flex-start",
                    border: "1px solid red",
                    // gap:16,

                }}>

                    <Box sx={{
                        border:"1px solid red",
                        width:"100%",
                        display:"flex",
                        justifyContent:"flex-start",
                    }}>

                    
                      <Box sx={{
                                     
                                        // width: "300px",
                                        // height: "300px",
                                        display: "flex",
                                         alignItems: "center", gap: 2,
                                        // border:"1px solid red"
                    
                                }}>
                                            <img src="https://lazeapostolski.com/industrial2/img/logo.jpg" alt=""
                                                style={{
                                                    transform:"scale(0.8)",
                                                }} />
                                </Box>



                    <Box sx={{
                        display: "flex",
                        // position: "relative",
                        flexDirection: {
                            xs: "row-reverse",
                            sm: "row",
                        },
                        bgcolor: {
                            xs: "#fbae19",
                            sm: "#062d4c"
                        },
                        // border:"1px solid white",
                        border: "1px solid red",
                        width: isMobile3 ? "100%" : "",
                        // alignItems:"flex-start"
                    }}>
                        <>
                            {navItems.map((item, i) => (

                                <Box key={i}
                                    component={Link}
                                    to={item.to}
                                    sx={{
                                        border:"1px solid white",
                                        color: "white",
                                        position: "relative",
                                        width: isMobile3 ? "100%" : "1.1",
                                        textDecoration: "none",
                                        px: {
                                            sm: 2,
                                            md: 2,
                                            lg: 3,
                                        },
                                        py: 2,
                                        height: "50%",
                                        // border:"1px solid ",

                                        display: {
                                            xs: "none",
                                            sm: "flex",
                                            // md: "none"
                                        },
                                        cursor: "pointer",
                                        "&:hover .submenu": {
                                            display: "flex",
                                        }

                                    }}>
                                    <Typography sx={{
                                        fontSize: "0.7rem",
                                        fontWeight: 600,
                                        textTransform: "uppercase"
                                    }}>
                                        {item.label}
                                    </Typography>





                                    {item.subLabels && (
                                        <Box
                                            className="submenu"
                                            sx={{
                                                // display: "flex",
                                                flexDirection: "column",
                                                textDecoration: "none",

                                                bgcolor: "#062d4c",
                                                borderBottom: "5px solid #fbae19",
                                                display: "none",
                                                // flexDirection: "column",
                                                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                                                zIndex: 9,
                                                minWidth: "180px",
                                                mt: 1,
                                                // py:1,

                                                // borderRadius: 1,
                                                position: "absolute",
                                                top: isMobile3 ? 40 : 50,
                                                left: 0,
                                                // right: 0,
                                                // width:"100px",
                                            }}>
                                            {item.subLabels && item.subLabels.map((sub, index) => (
                                                <Box key={index}
                                                    component={Link}
                                                    to={sub.to}
                                                    sx={{
                                                        // height: "25px",
                                                        // width: "200px",
                                                        bgcolor: "white",
                                                        textDecoration: "none",
                                                        color: "black",
                                                        zIndex: 9, cursor: "pointer",
                                                        ":hover": {
                                                            backgroundColor: "#fbae19",
                                                            color: "#062d4c"
                                                        },

                                                        // height:"400px",
                                                        py: 1,
                                                        px: 2,
                                                    }}>
                                                    <Typography sx={{
                                                        fontSize: "0.7rem",
                                                        fontWeight: 600,
                                                        textTransform: "uppercase"
                                                    }}>
                                                        {sub.label}

                                                    </Typography>
                                                </Box>
                                            ))}
                                        </Box>)}







                                </Box>
                            ))}</>







                        <Box sx={{
                            // border:"1px solid black",
                            width: "100%",
                            bgcolor: "fbae19",
                            color: "black",
                            // overflow: "hidden",
                            overflow: "hidden",
                            maxHeight: openFlag ? `${contentHeight}px+${contentHeight2}px` : "55px",
                            transition: "max-height 0.5s ease-in-out",
                            // maxHeight: openFlag2 ? `` : "462.88px",

                            display: {
                                xs: "block",
                                sm: "none",
                            },
                        }}>
                            <IconButton
                                onClick={() => handleDrawerOpen()}
                                sx={{

                                    bgcolor: "#fbae19", color: "black",
                                    ":hover": { bgcolor: "white", borderColor: "black" },
                                    display: {
                                        xs: "flex",
                                        sm: "none",
                                    },
                                    mr: 1,
                                    my: 1.5,
                                    p: 0.5,
                                    px: 1,
                                    position: "relative",
                                    alignSelf: "center",
                                    // bottom: "99%",
                                    // justifyContent:"flex-end",
                                    justifySelf: "flex-end",
                                    // justifySelf:"flex-end",
                                    // alignSelf:"flex-end",
                                    border: "1px solid white",
                                    borderRadius: "2px",
                                    // alignItems:"flex-end",
                                    // fontSize:"10rem",
                                    // transform:"scale(0.8)",
                                    // marginRight:"0 auto",
                                }}>
                                <MenuIcon sx={{
                                    // fontSize:"large"
                                    // maxHeight:"10px",
                                }} />
                            </IconButton>


                            <Box
                                ref={contentRef}
                                sx={{
                                    bgcolor: "white",
                                    transform: openFlag ? "translateY(0%)" : "translateY(-10%)",
                                    opacity: openFlag ? 1 : 0,
                                    transition: "transform 0.5s ease, opacity 0.5s ease",
                                    pointerEvents: openFlag ? "auto" : "none",
                                    // transition: "max-height 0.5s ease-in-out",



                                }}
                            >
                                {navItems.map((value, anoIndex) => (


                                    <Box key={anoIndex}
                                        sx={{
                                            borderBottom: "dotted 2px #ddd",



                                            display: "flex",
                                            position: "relative",
                                            // p:0.5,
                                            px: 1.5,
                                            // my: 2,
                                            py: 0.8,
                                            // py:1.2,
                                            // width: "100%",
                                            overflow: "hidden",
                                            // width: "120%",
                                            // ml: -4.5,
                                            // pl: 6,


                                            height: "100%",
                                            // border:"1px solid red",
                                            justifyContent: "space-between",
                                            alignItems: "flex-start",
                                            // justifyItems: "center",
                                        }}
                                    >



                                        <Box
                                            sx={{
                                                // borderBottom: "dotted 2px #ddd",
                                                display: "flex",
                                                flexDirection: "column",
                                                position: "relative",
                                                // borderTop: anoIndex === openKar ? "solid 3px #fbae19" : "",
                                                borderBottom: anoIndex === openKar ? "solid 3px #fbae19" : "",

                                                width: "100%",

                                                // p:0.5,
                                                // px: 1.5,
                                                // my: 2,
                                                ":hover": {
                                                    // backgroundColor: "#fbae19",
                                                    color: "#062d4c",
                                                    cursor: "pointer",
                                                },
                                                // py: 1.2,
                                                // height: "100%",

                                                // borderBottom:"2px solid #fbae19",

                                                // border: "1px solid red",

                                                // justifyContent: "space-between",
                                                // alignItems: "center",
                                            }}>
                                            <Typography sx={{
                                                fontSize: "0.7rem",
                                                fontWeight: 600,
                                                textTransform: "uppercase",
                                                py: 1.2,

                                            }}>
                                                {value.label}
                                            </Typography>

                                            {/* {console.log(anoIndex)} */}


                                            {!value.subLabels ? "" :
                                                (<Box
                                                    ref={contentRef2}

                                                    sx={{
                                                        position: "relative",
                                                        width: "100%",
                                                        transition: "all 0.5s ease-in-out",
                                                        display: "flex",
                                                        // border: "1px solid red",



                                                        flexDirection: "column",
                                                        right: 0,

                                                    }}>

                                                    {openStates[anoIndex] && (value.subLabels.map((valu, inde) => (


                                                        <Box key={inde}
                                                            sx={{
                                                                // display:"none",
                                                                display: "flex",
                                                                // border:"1px solid red",
                                                                overflow: "hidden",
                                                                width: "120%",
                                                                ml: -1.5,
                                                                pl: 3,
                                                                ":hover": {
                                                                    backgroundColor: "#fbae19",
                                                                    color: "#062d4c",
                                                                    cursor: "pointer",
                                                                },
                                                            }}>
                                                            <Typography sx={{
                                                                fontSize: "0.7rem",
                                                                fontWeight: 600,
                                                                textTransform: "uppercase",
                                                                py: 1.2,
                                                                width: "100%",

                                                            }}>
                                                                {valu.label}
                                                            </Typography>
                                                        </Box>



                                                    )))}
                                                </Box>)}
                                        </Box>











                                        {!value.subLabels ? "" : (
                                            <IconButton key={anoIndex}
                                                // onClick={() => { handleIconClickFunc(anoIndex)}}
                                                onClick={() => { handleToggle(anoIndex) }}

                                                sx={{
                                                    my: 0.3,
                                                    p: 0.5,
                                                    px: 1,
                                                    // my: 1.2,
                                                    bgcolor: "white", color: "black",
                                                    ":hover": { bgcolor: "#FFB300" },
                                                    display: {
                                                        xs: "flex",
                                                        sm: "none",
                                                    },
                                                    borderRadius: "2px",



                                                    // justifyContent:"flex-end",
                                                    // justifySelf:"flex-end",
                                                    justifySelf: "flex-end",
                                                    // alignSelf:"flex-end",
                                                    border: "1px solid black",
                                                    // alignItems:"flex-end",
                                                    // fontSize:"10rem",
                                                    // transform:"scale(0.8)",
                                                    // marginRight:"0 auto",
                                                    fontWeight: 200,

                                                }}>
                                                <MenuIcon sx={{
                                                    fontSize: "medium",
                                                    fontWeight: 200,
                                                }} />
                                            </IconButton>)}




                                    </Box>

                                ))}
                            </Box>
                        </Box>




                    </Box>



                    </Box>





                    {/* <Box sx={{
                        display: "flex",
                        // gap:2,
                        // border: "1px solid red",
                        maxWidth: "90%",
                        // // justifyContent:"cneter",
                        // justifyContent:"center",
                        // justifySelf: "flex-start",
                        // alignContent:"start",
                        // alignSelf:"start",

                        // alignItems:"start",

                        flexDirection: isMobile3 ? "row" : {
                            xs: "column-reverse",
                            sm: "column-reverse",
                            md: "row",
                            lg: "row"
                        },
                        // alignItems: "center", 

                    }} >
                        <Box sx={{
                            // py: 1,
                            py: 1,
                            mb: 1,
                            display: "flex",
                            justifySelf: "flex-start",
                            alignSelf: "flex-end",
                            // border: "1px solid white",


                        }}>
                            <FaSearch size={14} color="gray" />
                        </Box>




                        <Box
                            sx={{
                                display: "flex",
                                px: 2,
                                py: 2,
                                ml: 2,
                                top: 0,
                                // mt:-1,
                                // left:-1,
                                // border: "1px solid black",
                                fontSize: "0.7rem",
                                fontWeight: 600,
                                color: "white",
                                textTransform: "uppercase",
                                position: "relative",
                                overflow: "hidden",
                                backgroundColor: "#fbae19",
                                cursor: "pointer",
                                // border: "1px solid #fbae19",  
                                transition: "all 0.3s ease-in-out",
                                outline: "none",
                                border: "none",

                                "&::before": {
                                    content: '""',
                                    position: "absolute",
                                    top: 0,
                                    left: "-100%",
                                    width: "100%",
                                    height: "100%",
                                    backgroundColor: "#062d4c",
                                    zIndex: 0,
                                },

                                "&:hover::before": {
                                    animation: `${slideWithDoubleBump} 0.7s ease-in-out forwards`
                                },

                                "&:hover": {
                                    color: "white"
                                }
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: "0.7rem",
                                    fontWeight: 600,
                                    textTransform: "uppercase",
                                    zIndex: 1,
                                }}
                            >
                                REQUEST A QUOTE
                            </Typography>
                        </Box>

                    </Box> */}











                </Box>
            </Toolbar>
        </AppBar>
    </>);
};
export default NavbarBlw2;
