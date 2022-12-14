import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import useTitle from '../../hook/useTitle';

const Update = () => {
    const storedUser = useLoaderData();
    useTitle('Update')
    
    const [order, setOrder] = useState(storedUser);
    const navigate=useNavigate()

    const handleUpdateUser = event =>{
        event.preventDefault();
        // console.log(user);
        fetch(`https://server-side-weld.vercel.app/order/${storedUser._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0){
                toast.success('review  updated')
                console.log(data);
            }
            navigate('/Myreviews')

        })
    }

    const handleInputChange = event =>{
        const field = event.target.name;
        const value = event.target.value;
        const newUser = {...order}
        newUser[field] = value;
        setOrder(newUser);
    }

    return (
        // <div className='w-full h-[400px] flex justify-center items-center'>
        //     <div className="">
        //     <h2 className='text-purple-500'>Please Update: {storedUser.customer}</h2>
        //     <form onSubmit={handleUpdateUser}>
        //         <input className='border-[2px] px-6 py-2 my-2  border-[black]' onChange={handleInputChange} defaultValue={storedUser.customer} type="text" name='customer' placeholder='customer' required />
        //         <br />
        //         <input className='border-[2px] px-6 py-2 my-2  border-[black]'  onChange={handleInputChange} type="text" defaultValue={storedUser.serviceName} name='serviceName' placeholder='address' required />
        //         <br />
        //         <input className='border-[2px] px-6 py-2 my-2  border-[black]'  onChange={handleInputChange} type="text" defaultValue={storedUser.price} name="price" id="" placeholder='email' required />
        //         <br />
        //         <input className='border-[2px] px-6 py-2   border-[black]'  onChange={handleInputChange} type="text" defaultValue={storedUser.img} name='img' placeholder='address' required />
        //         <br />
        //         <input className='border-[2px] px-6 py-2 my-2  border-[black]'  onChange={handleInputChange} type="text" defaultValue={storedUser.circle} name="circle" id="" placeholder='profile picture' required />
        //         <br />
        //         <button className='btn btn-secondary text-white my-4' type="submit">Update review</button>
        //         </form>

          
        //     </div>
        <div className='hero min-h-screen'  style={{ backgroundImage: `url("https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2020/10/Porsche-914-green.jpg")` }}>

            <form className='card-body text-[#494b88] ' onSubmit={handleUpdateUser} action="">
            <h1 className='text-4xl font-bold text-[skyblue] my-4 text-center'>Please Update your Review</h1>

            <div className="form-control">
         
         <input onChange={handleInputChange} defaultValue={storedUser.customer} type="text" name='customer' placeholder='customer' required className="input input-bordered" />
       </div>
       <div className="form-control">
        
               <input  onChange={handleInputChange} type="text" defaultValue={storedUser.serviceName} name='serviceName' placeholder='address' required className="input input-bordered" />
         
           </div>
           <div className="form-control">
        
        <input onChange={handleInputChange} type="text" defaultValue={storedUser.price} name="price" id="" placeholder='email' required className="input input-bordered" />
  
           </div>
           <div className="form-control">
        
        <input  onChange={handleInputChange} type="text" defaultValue={storedUser.img} name='img' placeholder='address' required className="input input-bordered" />
  
</div>
<div className="form-control">
        
        <input onChange={handleInputChange} type="text" defaultValue={storedUser.circle} name="circle" id="" placeholder='profile picture' required className="input input-bordered" />
  
                </div>
                <div className="form-control">
        
        <input onChange={handleInputChange} type="text" defaultValue={storedUser.message}   name="message" id="" placeholder='type  message' required className="input input-bordered" />
  
           </div>
           
       <div className="form-control w-[200px] mx-auto my-6 ">
         <button className="btn text-white btn-primary">Update  Review</button>
       </div>
      
            </form>
            <Toaster></Toaster>
        
        </div>
    );
};

export default Update;