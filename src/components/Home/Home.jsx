import React from 'react'

const Home = () => {
    return (
        <div className='text-white w-full flex justify-between p-10 md: p-20'>

            <div className='md:w-2/4 md:pt-10'>

                <h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter'>Hello I am Nafis</h1>
                <p className='text-sm md:text-2xl tracking-tight'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button className='mt-5 md:mt-10 texxt-white py-2 px-3 text-sm md:text-lg md:py-4 md:px-6 border border-1 cursor-pointer bg-[#4860AC]'>Contact Me</button>

                

                

            </div>

            <div>

                    <img className='' src="../src/assets/Portfolio_Avatar.svg" alt="Avatar" />

                </div>



        </div>
    )
}

export default Home
