import React from 'react'
import { Link } from 'react-router-dom'
import heroImage from "../images/heroImage.jpg"
import { motion } from 'framer-motion'

const Herosection = () => {
  return (
    <div className="font-poppins overflow-x-hidden">

        <div className='relative  pt-[120px] pb-[110px] lg:pt-[150px] bg-[#e0e0e0]'>
            <div className='container mx-auto px-10'>
                <div className='mx-4 flex flex-wrap'>
                    <div className='hero-content'>
                        <motion.div
                            variants={{
                                visible: { opacity: 1, y: 0 },
                                hidden: { opacity: 0, y: 75 },
                            }}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.5, delay: 0.25 }}
                        >
                            <h1 className=' text-transparent bg-clip-text bg-gradient-to-r sm:text-8xl text-2xl from-black to-blue-600 mb-3  font-bold leading-snug sm:text-[42px] lg:text-[40px] xl:text-[42px]'>
                                Here you can
                                 <br />
                                <span className="sm:text-8xl text-6xl">
                                     Level Up Your Tech Life
                                 </span>
                            </h1>
                            <p className='text-body-color text-sm mb-8 max-w-[480px] sm:text-base'>
                            Welcome and thank you for taking your time to take a look at
                            our solutions, wee can ensure you that wee will take your
                            tech life to the next level, so hang in tight and lets Level
                            UP!
                            </p>
                        </motion.div>
                        <motion.div
                            variants={{
                            visible: { opacity: 1, x: 0 },
                            hidden: { opacity: 0, x: -75 },
                             }}
                             initial="hidden"
                            animate="visible"
                             transition={{ duration: 0.5, delay: 0.25 }}
                        >
                        <ul class="flex flex-wrap items-center">
                            <li>
                                <Link
                                     to="#"
                                    class="bg-blue-400 inline-flex items-center justify-center rounded-lg py-4 px-6 text-center text-base font-normal text-white hover:bg-blue-500 sm:px-10 lg:px-8 xl:px-10"
                                >
                                 Get Started
                                </Link>
                            </li>
                        <li>
                        <Link
                            to="#"
                            class="bg-blue-200/80 ml-6 inline-flex items-center justify-center rounded-lg py-4 px-6 text-center text-black font-normal hover:bg-blue-200 sm:px-10 lg:px-8 xl:px-10"
                        >
                            Take a look
                        </Link>
                    </li>
                  </ul>
                </motion.div>
                
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Herosection