import React, { useEffect, useRef } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { useAnimation, useInView, motion } from 'framer-motion'

const About = () => {
    const { innerWidth: Width } = window;
    const ref = useRef();
    const isInView = useInView(ref);
    const mainControlls = useAnimation();
    useEffect(() => {
        if (isInView) {
            mainControlls.start("visible");
        }
    }, [isInView]);
  return (
    <div>
        <Navbar />
        <div className='max-w-screen overflow-hidden font-poppins'>
            <div className="sm:h-screen h-[80rem] -mb-20 sm:mb-0 bg-gradient-to-b from-gray-100/10 to-gray-200/50 pt-20">
                <div className='mt-20'>
                <motion.div
              ref={ref}
              variants={{
                hidden: { opacity: 0, y: -75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControlls}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex justify-center text-center"
            >
              <h1 className="flex justify-center text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-600 font-extrabold text-[3rem]">
                Who are we and why are we so good?
              </h1>
            </motion.div>

            <motion.div
                ref={ref}
                variants={{
                  hidden: { opacity: 0, x: 75 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={mainControlls}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="sm:flex sm:justify-center text-center sm:mt-20"
              >
                <h1 className=" text-xl sm:text-4xl sm:font-extrabold font-bold text-white ml-[-10%] sm:ml-0 mb-10 sm:mb-0">
                  "We are Inspired by Results and driven by Data"
                </h1>
              </motion.div>

            <motion.div
                ref={ref}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                initial="hidden"
                animate={mainControlls}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="block h-screen sm:justify-start justify-center text-center sm:text-start sm:ml-20 ml-0"
            >
                <p className=' text-white sm:flex justify-center text-3xl hidden ml-[-80%] mb-[-10%] sm:my-24'>
                    About Us:
                </p>
                <p className="text-white hidden sm:flex border-y-2 py-4 border-y-indigo-900/30 font-semibold sm:ml-[7%] w-[70%] ">
                Welcome to our site, where we specialize in empowering
                businesses to unlock their true potential and achieve
                unparalleled growth. With our expertise in advanced technology
                solutions, we provide the tools and knowledge necessary for
                organizations to make data-driven decisions, optimize
                operations, and drive innovation. Our personalized approach
                ensures that each business receives tailored solutions designed
                to address their specific objectives and challenges.<br></br><br></br> By
                leveraging the latest advancements and continuous innovation, we
                pave the way for businesses to thrive in today's ever-evolving
                landscape. At our site, we believe that success lies in
                harnessing the power of technology and data to drive meaningful
                outcomes. Whether you're a small startup or a large enterprise,
                our comprehensive range of services and solutions is designed to
                meet your unique needs. <br></br><br></br>From advanced algorithms and powerful
                analytics capabilities to seamless technology integration and
                ongoing support from our trained personnel, we are dedicated to
                helping businesses grow and succeed. Join us on this
                transformative journey, and together, we will propel your
                business to new heights of success.
              </p>
             
            </motion.div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default About