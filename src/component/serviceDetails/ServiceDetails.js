import React, { useContext } from 'react'
import { useLoaderData } from 'react-router-dom'
import { FaUsersCog,FaStar,FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from '../../context/UserContext';


const ServiceDetails = () => {
    const service = useLoaderData([]);
    const {user}=useContext(AuthContext)
    console.log(service);
    const { img,price,des,name,ratings} = service;



  return (
      <div className='flex  my-6 px-4'>
          <div className="sm:w-[60%]">
              
          <div className="card bg-base-100 shadow-xl">
  <figure><img src={img} className="h-[300px] w-[100%]" alt="Shoes" /></figure>
  <div className="card-body">
                  <h2 className="card-title capitalize">{ name}</h2>
          <p>{des}</p>
          <p>Price : {price}$</p>
                      <p className='flex items-center'>Rating : <span className='mx-4'>{ ratings}.0</span> <FaStar className='text-yellow-500 px-4'></FaStar><FaStar className='text-yellow-500 mx-1'></FaStar><FaStar className='text-yellow-500 mx-1'></FaStar><FaStar className='text-yellow-500 mx-1'></FaStar><FaStar className='text-yellow-500 mx-1'></FaStar></p>


      
          <div className="card-actions w-full">
          <button className="btn btn-primary">button</button>
    </div>
  </div>
</div>
          </div>

          <div className="sm:w-[40%]">
              
          {
                                user?.uid ?
                <>
reviews
         

                                    </>
                                    :
                      <>
                          <p className='text-[#46bbe9] text-2xl px-2'>     Please Log in or Register</p>
                          <br />
                  <Link to='/login'> <button className='btn mx-2 w-full btn-dark'>Log In</button></Link>
                  
                                        
                </>
              
            }
             
          </div>

    </div>
  )
}

export default ServiceDetails