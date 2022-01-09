import React from 'react'
import  './Component.style.css'


const HeaderSection = () =>{

    return(
    <div className='container'>
        <div className='container home-background flex bg-gray-900 text-center '>
            <div className='mx-auto pt-72'> 
                <h1 className='text-7xl text-white drop-shadow-lg'>Dark Fashion Zone</h1>
                <h1 className=' text-xl py-8 text-white uppercase drop-shadow-2xl'>A way to dark premiumness.</h1>                
                <button className='rounded bg-zinc-800	 p-2 px-8 text-white hover:bg-zinc-400'>FIND MORE</button>
            </div>
        </div>
    </div>
);
}

export default HeaderSection;