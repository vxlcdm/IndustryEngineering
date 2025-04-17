import React from 'react'
import { Routes, Route } from 'react-router-dom';
 
import PublicLayout from '../../routes/PublicLayout'; 
import CR from './CR';
import FP from './FP';
import ME from './ME';
import MSE from './MSE';
import PE from './PE';
import PG from './PG';
 
 


const Solutions = () => {



    return (
        <>
            <Routes>
                
                  
                <Route index element={<MSE />} />
              
                 

            </Routes>
        </>
    )
}

export default Solutions;