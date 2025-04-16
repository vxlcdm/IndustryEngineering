import React from 'react'
import Navbar from '../components/Navbar'
import NavbarBlw from '../components/NavbarBlw'
import Footer from '../components/Footer'
import { Outlet, useLocation } from 'react-router-dom'
import { Box } from '@mui/material'


 


const PublicLayout = () => {

  const location = useLocation();
  const pathname = location.pathname;

  let navbarToRender = null;

  if (pathname.startsWith('/')) {
    navbarToRender = (
      <>
        {/* <Navbar />
        <NavbarBlw /> */}
      </>
    );
  } else if (pathname.startsWith('/##')) {
     navbarToRender = (
      <>
        {/* <Navbar />
        <NavbarBlw /> */}
      </>
    );
  } else if (pathname.startsWith('/#')) {
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

      <Box component="main" sx={{ flex: 1 }}>
        <Outlet />
      </Box>
     


    {/* <Footer /> */}
    
      </Box>
    </>
  )
}

export default PublicLayout