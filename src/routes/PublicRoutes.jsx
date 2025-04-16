import React from 'react'
import { Routes ,Route } from 'react-router-dom';
import PublicLayout from './PublicLayout';
import Home from '../pages/Home/Home'
import About from '../pages/About/About';
import Team from '../pages/About/Team';
import Testimonials from '../pages/About/Testimonials';
import FAQ from  '../pages/About/FAQ'
import CR from '../pages/Solutions/CR';
import FP from '../pages/Solutions/FP';
import ME from '../pages/Solutions/ME';
import MSE from '../pages/Solutions/MSE';
import PE from '../pages/Solutions/PE';
import PG from '../pages/Solutions/PG';
import Projects from '../pages/Projects/Projects';
import ProjectsSP from '../pages/Projects/ProjectsSP';
import Contact from '../pages/Contact/Contact';
import News from '../pages/News/News';
import NewsBV from '../pages/News/NewsBV';
import NewsOV from '../pages/News/NewsOV';
import Shop from '../pages/Shop/Shop';
import ShopPD from '../pages/Shop/ShopPD';
import ShopCP from '../pages/Shop/ShopCP';
import ShopCHKP from '../pages/Shop/ShopCHKP';


const PublicRoutes = () => {



  return (
    <>
      <Routes>
        <Route path='/' element={<PublicLayout/>}>
          <Route index element={< Home/>}/>

          {/* <Route path='/' element={<About />} /> */}

          {/* <Route path='/profile' element={<RouteProtection />} >
            <Route path='/profile' element={<Profile />}/>
          </Route>
          
          <Route element={<RouteProtection />}>
            <Route path="/shop" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Route>


          <Route path='/login' element={<LogRegRouteProtection />}>
            <Route path='/login' element={<Login />} />
          </Route >




          <Route path='/register' element={<LogRegRouteProtection />}>
            <Route path='/register' element={<Register />} />
          </Route >



          <Route path='/register' element={<Register />} /> */}
                
        </Route>

      </Routes>  
    </>
  )
}

export default PublicRoutes;