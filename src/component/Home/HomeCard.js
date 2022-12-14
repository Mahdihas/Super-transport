import React from 'react'
import { FaUsersCog,FaStar,FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';



const HomeCard = ({ service }) => {
    
    const { name,des,img,price} = service;

  
  return (
      <div>
         <PhotoProvider>
          <div className="card h-[550px] overflow-hidden bg-base-100 shadow-xl">
  <figure><PhotoView src={img}><img src={img} className="h-[300px] w-[100%]" alt="img" /></PhotoView></figure>
  <div className="card-body">
                  <h2 className="card-title capitalize">{ name}</h2>
          <p className='text-start'>{des.length > 100 ? des.slice(0, 100) + '...' : des}</p>
          <p className='text-start'>Price : {price}$</p>
         <p className='flex items-center'>Rating : <FaStar className='text-yellow-500 px-4'></FaStar><FaStar className='text-yellow-500'></FaStar><FaStar className='text-yellow-500'></FaStar><FaStar className='text-yellow-500'></FaStar><FaStar className='text-yellow-500'></FaStar></p>


      
          <div className="card-actions w-full">
            <Link to={`/service/${service._id}`}> <button className="btn text-white btn-primary">view details </button></Link>
    </div>
  </div>
</div>
</PhotoProvider> 
    </div>
  )
}

export default HomeCard