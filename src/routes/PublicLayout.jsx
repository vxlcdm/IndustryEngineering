import React from 'react'
import Navbar from '../components/Navbar'
import NavbarBlw from '../components/NavbarBlw'
import Footer from '../components/Footer'
import { Outlet, useLocation } from 'react-router-dom'
import { Box } from '@mui/material'
import NavbarBlw2 from '../components/NavbarBlw2'
import Navbar2 from '../components/Navbar2'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


 


const PublicLayout = () => {
  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.down('lg'));
  const isMd = useMediaQuery(theme.breakpoints.down('md'));
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  const isXs = useMediaQuery(theme.breakpoints.down('xs'));

  const is675 = useMediaQuery('(min-width:675px)');
  const is355 = useMediaQuery('(min-width:355px)');

  const location = useLocation();
  // maxHeight:"100%",
  const pathname = location.pathname;

  let navbarToRender = null;

  if (pathname.startsWith('/')) {
    navbarToRender = (
      <>
      <Box sx={{
        // border:"10px solid red",
        // display:"flex",
          width: "100%",
          zIndex:9999,
        position:"fixed",
        // overflowY: "auto",
        
        
        // maxHeight: 'max-content',
        height:"100%",
        // height:"20%",
          // maxHeight: '700px',
          // overflowY: isSm ? "scroll" : "unset",


      }}>

          <Navbar />
<Box  sx={{

}}>

            <NavbarBlw />

</Box>
      </Box>
      </>
    );
  } else if (pathname.startsWith('/hometwo')) {
     navbarToRender = (
      <>
         <Box sx={{
           // border:"10px solid red",
           // display:"flex",
           width: "100%",
           zIndex: 9999,

           position: "fixed",
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
          pt: { xs:"305px",sm: "250px", md: '160px',lg:'160px' }
       }}>
        <Outlet />
      </Box>
     


    {/* <Footer /> */}
    
      </Box>
    </>
  )
}

export default PublicLayout