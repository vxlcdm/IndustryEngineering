import React, { useContext, useEffect } from "react";

import { AppBar, Toolbar, Box, Typography } from '@mui/material';
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { NavContext } from "../context/NavContext";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
  




const navItems1=[
    {
        icon: <FaMapMarkerAlt />,
        label:"Address",
        address: "20c Factory Street, Newyork, NY 10205"

    },
    {
        icon: <FaPhoneAlt />,
        label: "Address",
        address: "20c Factory Street, Newyork, NY 10205"
    },
]


const socialMediaIcons = [
    {
        icon: <FaFacebookF />
    },
    {
        icon: <FaTwitter />
    },
    {
        icon: <FaInstagram />
    }
];






const Navbar=()=>{

    const { openFlag, setOpenFlag } = useContext(NavContext);
    //   useEffect(()=>{
    //     console.log(openFlag);
        
    //   }
    //     , [openFlag]
    //   )
    return(<>
    <AppBar sx={{
        // position:"sticky",
            // position: "fixed",
            // position: 'absolute',
            // position: 'unset', 
            position: openFlag ? "unset" : "absolute",
            // top: 95,
            // mt:3,
            // pt:5,
            // height:"100%",
            width: "100%",
            top:0,
            zIndex: 1100, 
            // width: '100%' ,
            bgcolor:"#fff",
            display: "flex",
            alignItems:"center",
            justifyContent: "center",
            
            py:2,
            // gap: 1,
            // border: "1px solid blue",
            // mb: 8,

    }}>
            <Toolbar sx={{ display: "flex", 
            
                justifyContent: "space-between",
                gap:2,
                maxWidth: "1170px",
                // border:"1px solid red",
                flexDirection: {
                    xs: "column",  // < 600px
                    sm: "row"      // ≥ 600px
                },
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
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: {
                        xs: "column",  
                        sm: "row"      
                    },
                    // p:1,
                    // border: "1px solid blue",

                    // px:1,
                    gap:{
                        xs: 2,
                        sm:4,
                        md:5
                    }
            }}>
                       <Box sx={{
                        width:"100%",
                        display: "flex",
                        // border:"1px solid blue",
                        // flexDirection:"column",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: {
                            xs: "row",
                            sm: "column",
                            md:"row"
                        },
                        gap: {
                            xs: 1,
                            sm: 1,
                            md: 2
                        },

                        // py:1,
                       }}>
                        {navItems1.map((item, i) => (
                            <Box key={i} sx={{
                                // width:"40%",
                                // border: "1px solid red",
                                color: "black",
                                // px: 2,
                                // flexDirection: {
                                //     xs: "row",
                                //     sm: "row"
                                // },
                                
                                maxWidth:{
                                    xs: "50%",
                                    sm:"80%",
                                } 
                            }}>

                                <Box sx={{
                                    display: "flex",
                                    gap:1,
                                    // ml:-2,
                                }}>
                                    <Box style={{
                                        color: "orange",
                                        pr:2,
                                        // mr:20,
                                    }}>
                                        {item.icon}
                                    </Box>
                                    <Typography sx={{
                                        textTransform: "uppercase",
                                        color: "gray",
                                        fontSize: "0.7rem",
                                        fontWeight: "600",

                                    }}>
                                        {item.label}
                                    </Typography>
                                </Box>

                                <Typography sx={{
                                    color: "black",
                                    fontSize: "0.7rem",
                                    fontWeight: "600" ,
                                    pl:3
                                }}>
                                    {item.address}
                                </Typography>
                            </Box>
                        ))}
                       </Box>







                    <Box sx={{
                        // border:"1px solid red",
                        display: "flex", 
                        gap: 1, 

                        // p:1,
                        // alignContent:"flex-end",
                        // alignItems: "flex-end",
                        // justifyContent:"flex-end",
                        // justifySelf:"flex-end",
                        alignSelf:{
                            xs: "end",
                            sm:"center"
                        },
                        // bgcolor: "green",

                        


                    }}>
                        {socialMediaIcons.map((item,i)=>(
                            
                                <Box key={i}
                                sx={{
                                    color: "white",
                                    // bgcolor:"gray",
                                    // p:4,
                                    // m:4,
                                    // color: "gray",   
                                    display: "flex",
                                    fontSize: "0.6rem", 
                                    alignItems: "center",
                                    borderRadius:0.5,
                                    justifyContent: "center",
                                    p:1.1,       
                                    // pr:2,     
                                    // height: "10px",
                                    // width: "10px",
                                    bgcolor:"gray",
                                    // m: 1   ,
                                    // display:"flex",

                                }}>
                                    {item.icon}
                                </Box>
                             
                        ))}
                    </Box>




            </Box>

        </Toolbar>
    </AppBar>
    </>);
};
export default Navbar;
