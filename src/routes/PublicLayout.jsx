import React, { useEffect } from 'react'
import { useState, createContext, useContext } from "react";
import Navbar from '../components/Navbar'
import NavbarBlw from '../components/NavbarBlw'
import Footer from '../components/Footer'
import { Outlet, useLocation } from 'react-router-dom'
import { Box } from '@mui/material'
import NavbarBlw2 from '../components/NavbarBlw2'
import Navbar2 from '../components/Navbar2'
// import useMediaQuery from '@mui/material/useMediaQuery';
// import { useTheme } from '@mui/material/styles';
import { NavContext } from '../context/NavContext';
// import { NavProvider } from '../context/NavContext';
 import {useMediaQuery as UMQ }from '@mui/material';

const PublicLayout = () => {

  // const theme = useTheme();
  // const isLg = useMediaQuery(theme.breakpoints.down('lg'));
  // const isMd = useMediaQuery(theme.breakpoints.down('md'));
  // const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  // const isXs = useMediaQuery(theme.breakpoints.down('xs'));
  const isDev=UMQ("(max-width:522.5px)");
 
  const { openFlag, setOpenFlag } = useContext(NavContext);

  // useEffect(()=>{
  //   console.log(openFlag);
    
  // }
  //   , [openFlag]
  // )
  
  // const is675 = useMediaQuery('(min-width:675px)');
  // const is355 = useMediaQuery('(min-width:355px)');

  const location = useLocation();
  // maxHeight:"100%",
  const pathname = location.pathname;

  let navbarToRender = null;

  if (pathname.startsWith('/')) {
    navbarToRender = (
      <>

       
         
      <Box sx={{
        // m:2,
        // border:"3px solid green",
        // display:"flex",
          // width: "100%",
          left:0,
          zIndex:9999,
          position: openFlag ? "fixed" : "sticky",
          // position: openFlag ? "absolute" : "sticky",

        // overflowY: "auto",
        
        
        // maxHeight: 'max-content',
        // maxHeight:"100%",
        // height:"20%",
        height:openFlag?"100%":0,
          // maxHeight: '700px',
          overflowY: openFlag ? "auto" : "unset",
          // overflowX:"hidden",
          // overflowY: "auto",
          top:openFlag?0:0,



      }}>

          <Navbar />
 
            {/* <NavProvider> */}

            <NavbarBlw />

        {/* </NavProvider> */}
 
      </Box>

        

      </>
    );
  } else if (pathname.startsWith('/hometwo')) {
     navbarToRender = (
      <>
         <Box sx={{
          //  border:"10px solid red",
           // display:"flex",
          //  width: "100%",
           zIndex: 9999,

          //  position: "fixed",
         }}>
        <Navbar2 />
        <NavbarBlw2 />
         </Box>
      </>
    );
  } else if (pathname.startsWith('/45')) {
    navbarToRender = <NavbarBlw />;  
  } else {
     navbarToRender = (
      <>
        {/* <Navbar />
        <NavbarBlw /> */}
      </>
    );  
  }

  return (
    <>
      {/* {navbarToRender} */}

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh', 
          // backgroundColor: '#121212',  
          // color: '#fff',
        }}
      >
     
    {/* <Navbar/>
        <NavbarBlw/> */}
        {navbarToRender}


      <Box component="main" sx={{ flex: 1,
          pt: isDev ? { xs: "300px", sm: "235px", md: '150px', lg: '150px' } : { xs:"285px",sm: "235px", md: '150px',lg:'150px' },
          // border:"3px solid green",
       }}>
        <Outlet />
      </Box>
     


    <Footer />
    
      </Box>
    </>
  )
}

export default PublicLayout;