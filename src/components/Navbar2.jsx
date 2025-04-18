import React from "react";
import { AppBar, Toolbar, Box, Typography } from '@mui/material';
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";





const navItems1=[
    {
        icon: <FaMapMarkerAlt />,
        label:"Phone",
        address: "+ 123 - 456 - 7890"
           


    },
    {
        icon: <FaPhoneAlt />,
        label: "Mail",
        address: "Mail@Fortuneteam.com"
    }, {
        icon: <FaPhoneAlt />,
        label: "Address",
        address: "Apple St, New York, NY 10012, USA"
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






const Navbar2=()=>{


    return(<>
    <AppBar sx={{
        // position:"sticky",
            // position: "fixed",
            // position: 'fixed',
            position: 'unset', 
            top: 0,
            zIndex: 1100, 
            width: '100%' ,
            bgcolor:"hsla(0,0%,0%,0.1)",
            display: "flex",
            alignItems:"center",
            justifyContent: "center",
            
            py:2,
            // gap: 1,
            // border: "1px solid blue",
            // mb: 8,

    }}>
            <Toolbar sx={{ display: "flex", 
            
                justifyContent: "center",
                alignItems:"center",
                gap:2,
                maxWidth: "1170px",
                width:"100%",
                // border:"1px solid red",
                flexDirection: {
                    xs: "column",   
                    sm: "row"      
                },
             }}>
            {/* <Box sx={{
                 
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
            </Box> */}
            <Box sx={{
                    display: "flex",
                    // justifyContent: "center",
                    alignItems: "center",
                    flexDirection: {
                        xs: "row",  
                        sm: "row"      
                    },
                    // p:1,
                    // border: "1px solid blue",
                    width:{ xs:"98%",sm:"95%"},
                    justifyContent: "space-between",

                    // px:1,
                    gap:{
                        xs: 2,
                        sm:4,
                        md:5
                    }
            }}>
                       <Box sx={{
                        width:{xs:"100%", sm:"60%" ,md:"63%", lg:"50%"},
                        display: "flex",
                        // border:"1px solid blue",
                        // flexDirection:"column",
                        justifyContent: "space-between",
                        // alignItems: "center",
                        flexDirection: {
                            xs: "column",
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
                                    xs: "150%",
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
                        flexDirection:{xs:"column", sm:"row"},
                        gap: 1, 

                        // p:1,
                        // alignContent:"flex-end",
                        // alignItems: "flex-end",
                        // justifyContent:"flex-end",
                        // justifySelf:"flex-start",
                        alignSelf:{
                            xs: "flex-start",
                            // sm:"center"
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
export default Navbar2;
