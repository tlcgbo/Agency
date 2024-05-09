import React from 'react'
import { Link } from 'react-router-dom'
import heroImage from "../images/heroImage.jpg"
import { motion } from 'framer-motion'
import lenovo from "../images/Lenovo-Logo-1.png"
import apple from "../images/Apple-Logo.png"
import google from "../images/google.png"

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
                            our solutions, we can ensure you that wee will take your
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
                
                <motion.div
                    variants={{
                        visible: { opacity: 1 },
                        hidden: { opacity: 0 },
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.8, delay: 0.25 }}
                    className='clients pt-16'
                >
                    <h6 class="text-body-color mb-2 flex items-center text-xs font-normal">
                        Some Of Our Clients
                        <span class="bg-body-color ml-2 inline-block h-[1px] w-8"></span>
                    </h6>
                    <div class="flex items-center">
                    <div class="mr-4 w-full py-1">
                      <img
                        width="200px"
                        src={apple}
                        alt="apple"
                      />
                    </div>
                    <div class="mr-4 w-full py-3">
                      <img
                        width="120px"
                        src={google}
                        alt="google"
                      />
                    </div>
                    <div class="mr-4 w-full py-3">
                      <img
                        width="200px"
                        src={lenovo}
                        alt="lenovo"
                      />
                    </div>
                </div>
                </motion.div>
                </div>
            </div>
            <div className="hidden px-4 lg:block lg:w-1/12"></div>
            <div className='w-full px-4 lg:w-6/12'>
                <div className='lg:ml-auto lg:text-right'>
                <motion.div
                  variants={{
                    visible: { opacity: 1, x: 0, filter: "blur(0px)" },
                    hidden: { opacity: 0, x: 75, filter: "blur(5px)" },
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.5, delay: 0.25 }}
                  class="relative z-10 inline-block pt-11 lg:pt-0 mt-6"
                >
                  <img
                    src={heroImage}
                    alt="hero"
                    class="flex justify-end max-w-full lg:ml-auto rounded-l-[20%] rounded-br-[6%]"
                  />
                  <span class="absolute -left-8 -bottom-8 z-[-1]">
                    <svg
                      width="93"
                      height="93"
                      viewBox="0 0 93 93"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                    </svg>
                  </span>
                </motion.div>
                </div>
            </div>
        </div>
    </div>

    </div>
  );
}

export default Herosection