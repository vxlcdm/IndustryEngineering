import React from 'react'
import { Routes ,Route } from 'react-router-dom';
import PublicLayout from './PublicLayout';
import Home from '../pages/Home/Home'
import Home2 from '../pages/Home/Home2'
import Home3 from '../pages/Home/Home3'
import Home4 from '../pages/Home/Home4'
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
import Solutions from '../pages/Solutions/Solutions';
 

const PublicRoutes = () => {



  return (
    <>
      <Routes>
        <Route path='/' element={<PublicLayout/>}>
          <Route index element={< Home/>}/>

          <Route path='/about' element={<About />} />
          <Route path='/hometwo' element={<Home2 />} />
          <Route path='/homethree' element={<Home3 />} />
          <Route path='/homefour' element={<Home4 />} />
          {/* <Route path='/solutions' element={<Solutions />} /> */}
          <Route path='/solutions/*' element={<Solutions />} />
          <Route path='/aboutourteam' element={<Team />} />
          <Route path='/abouttestimonial' element={<Testimonials />} />
          <Route path='/aboutfaq' element={<FAQ />} />
          <Route path='/project' element={<Projects />} />
          <Route path='/project/projects' element={<Projects />} />
          <Route path='project/singleproject' element={<ProjectsSP />} />

          <Route path='/shop' element={<Shop />} />
          <Route path='shop/productdetails' element={<ShopPD />} />

          <Route path='shop/checkout' element={<ShopCHKP />} />

          <Route path='shop/cart' element={<ShopCP />} />
          <Route path='/news' element={<News />} />


          <Route path='news/bigview' element={<NewsBV />} />
          <Route path='news/singlenews' element={<NewsOV />} />
          {/* <Route path='/aboutfaq' element={<FAQ />} /> */}
          {/* <Route path='/aboutfaq' element={<FAQ />} /> */}


          {/* <Route path='/aboutfaq' element={<FAQ />} /> */}
          {/* <Route path='/aboutfaq' element={<FAQ />} /> */}
          <Route path='/contact' element={<Contact />} />

          {/* <Route path='/register' element={<Register />} /> */}

          {/* <Route path='/profile' element={<RouteProtection />} >
            <Route path='/profile' element={<Profile />}/>
          </Route>
          
          <Route element={<RouteProtection />}>
            <Route path="/shop" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Route> */}

{/* 
          <Route path='/login' element={<LogRegRouteProtection />}>
            <Route path='/login' element={<Login />} />
          </Route > */}



{/* 
          <Route path='/register' element={<LogRegRouteProtection />}>
            <Route path='/register' element={<Register />} />
          </Route > */}

          
            <Route path="solutions/chemicalresearch" element={<CR />} />
            <Route path="solutions/factoryprocess" element={<FP />} />
            <Route path="solutions/mechanicalengineering" element={<ME />} />
            <Route path="solutions/materialscience" element={<MSE />} />
            <Route path="solutions/powerenergy" element={<PE />} />
            <Route path="solutions/petroleumgas" element={<PG />} />
          <Route path="/chemicalresearch" element={<CR />} />
          <Route path="/factureprocess" element={<FP />} />
          <Route path="/scienceengineering" element={<MSE />} />
          <Route path="/materialscience" element={<MSE />} />
          <Route path="/powerenergy" element={<PE />} />
          <Route path="/petroleumgas" element={<PG />} />
          <Route path="/mechanicalengineering" element={<ME />} />

                
        </Route>

      </Routes>  
    </>
  )
}

export default PublicRoutes;