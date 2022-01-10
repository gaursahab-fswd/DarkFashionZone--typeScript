import React from 'react';
import  './Component.style.css';




const AboutSection = () =>{

    const signUp = () =>{

        

    }

    return(
    <div className='container'>
        <div className='container home-background flex bg-gray-900 text-center '>
            <div className='text-white'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className='mx-auto pt-72'> 
                <h1 className='text-6xl text-shadow'>Welcome to Dark Fashion Zone</h1>
                <form>
                    <div className='pt-8'>
                        <button onClick={()=> signUp()} className='bg-sky-500 hover:bg-sky-700 px-5 py-2 text-md leading-5 rounded-full font-semibold text-white mr-4'>SIGN UP</button>
                        
                        <button className='bg-slate-500 hover:bg-slate-700 px-5 py-2 text-md leading-5 rounded-full font-semibold text-white'>LOG IN</button>
                    </div>
                </form>              
            </div>
        </div>
    </div>
);
}

export default AboutSection;