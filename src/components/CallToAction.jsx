import React, {useEffect, useRef} from "react" 
import { motion, useInView, useAnimation } from "framer-motion"

const CallToAction = () => {
    const {innerWidth: Width} = window;
    const ref = useRef();
    const isInView = useInView(ref)
    const mainControlls = useAnimation(isInView);

    useEffect(() => {
      if(isInView) {
        mainControlls.start("visible")
      }
    }, [isInView])
  return (
    <div>
      <div className="w-[70%]  h-[2px] bg-gradient-to-r from-blue-400 to-violet-500">
        <>
          <section className="py-20 lg:py-[120px] bg-gray-100/50 font-poppins">
            <div className="container mx-auto">
              <div className="bg-blue-800 relative z-10 sm:-mt-10 sm:-mb-10 overflow-x-hidden rounded py-12 px-8 md:p-[70px]">
                <div className="mx-4 flex flex-wrap items-center">
                  <motion.div
                    ref={ref}
                    variants={{
                      visible: { opacity: 1, x: 0 },
                      hidden: { opacity: 0, x: -75 },
                    }}
                    initial="hidden"
                    animate={mainControlls}
                    transition={{ duration: -.4, delay: 0.2 }}
                    className="w-full px-4 lg:w-1/2"
                  >
                    <span className="mb-2 text-base font-semibold text-white"></span>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
        </>
      </div>
    </div>
  )
}

export default CallToAction