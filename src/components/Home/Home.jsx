import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {

    const clickHandler = ()=>{
        const footer = document.getElementById('Footer');
        footer.scrollIntoView({behavior: 'smooth'});
    }
    return (
        <div className='text-white w-full flex justify-between p-10 md: p-20'>

            <div className='md:w-2/4 md:pt-10'>

                <h1 className='text-3xl md:text-6xl w-[140px] h-[150px] md:h-[300px] md:w-[280px] font-bold flex leading-normal tracking-tighter'>
                    <Typewriter
                        words={['Hi, My name is Nafis!', 'I am a Frontend Developer.', 'I love to code.']}
                        loop={true}
                        cursor
                        cursorStyle=""
                        typeSpeed={100}
                        deleteSpeed={50}
                        delaySpeed={2000}
                    /></h1>
                <p className='text-sm md:text-2xl tracking-tight'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button onClick={clickHandler} className='mt-5 md:mt-10 texxt-white py-2 px-3 text-sm md:text-lg md:py-4 md:px-6 border border-1 cursor-pointer bg-[#4860AC]'>Contact Me</button>





            </div>

            <div>

                <img className='' src="../src/assets/Portfolio_Avatar.svg" alt="Avatar" />

            </div>



        </div>
    )
}

export default Home
