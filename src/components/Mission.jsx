import missionImg from "../assets/mission.jpeg"
import mission from "../assets/mission.mp4"
import { MISSION } from "../constants"
import { motion } from "framer-motion"

const Mission = () => {
  return (
    <section id="mission">
        <div className="container mx-auto text-center">
            <h2 className="mb-8 text-3xl lg:text-4xl">Our Mission</h2>
            <div className="relative flex item-center justify-center">
              <motion.video 
                initial={{ opacity: 0}}
                whileInView={{ opacity:1}}
                transition={{ duration: 2}}
                className="w-full rounded-3xl" 
                autoPlay 
                muted 
                loop 
                playsInline 
                poster={missionImg} 
              >
                <source src={mission} type="video/mp4"/>
              </motion.video>
              <div className="absolute h-full w-full rounded-3xl bg-black/40"></div>
              <motion.div 
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                transition={{ duration: 0.5, delay: 0.5}}
                className="absolute w-full inset-0 flex items-center justify-center  tracking-tighter lg:text-3xl">
                <motion.p 
                  initial={{ opacity:0, y:50}}
                  whileInView={{ opacity:1, y:0}}
                  transition={{ duration:1.9, delay: 0.3}}
                  className="max-w-lg"
                >{MISSION}</motion.p>
              </motion.div>
            </div>
        </div>
    </section>
  )
}
export default Mission