import React from 'react'

const About = () => {
    return (
        <div id='About' className='text-white bg-[#0D0D0D]/30 w-4/5 md:w-4/5 justify-center items-center m-auto opacity-80 p-5'>

            <h1 className='font-bold flex items-center justify-center text-lg md:text-[2rem] p-4 md:p-8'>ABOUT</h1>

            <div className="flex flex-col md:flex-row md:gap-40 items-center md:items-start py-5 md:py-10">

                {/* Left Side - Image */}
                <div>
                    <img
                        src="/about.svg"
                        alt="About"
                        className="h-[120px] w-[140px] md:h-[200px] lg:h-[400px] md:w-[260px] lg:w-[520px] opacity-100  md:ml-10 lg::ml-20"
                    />
                </div>

                {/* Right Side - Text */}
                <div className="flex flex-col gap-y-6">
                    <div>
                        <h1 className="font-bold tracking-tight text-base md:text-xl">Frontend Developer</h1>
                        <p className="text-sm md:text-lg tracking-tighter text-gray-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>

                    <div>
                        <h1 className="font-bold tracking-tight text-base md:text-xl">Backend Developer</h1>
                        <p className="text-sm md:text-lg tracking-tighter text-gray-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>

                    <div>
                        <h1 className="font-bold tracking-tight text-base md:text-xl">Database Administration</h1>
                        <p className="text-sm md:text-lg tracking-tighter text-gray-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default About
