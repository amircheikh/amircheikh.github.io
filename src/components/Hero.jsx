import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas, StarsCanvas } from "./canvas";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faYoutube} from '@fortawesome/free-brands-svg-icons';
import { faFileText } from '@fortawesome/free-solid-svg-icons';
import { resume } from "../assets";



const SocialMediaIcons = () => {
  return (
    <div className="flex gap-5 mt-4">
      <a href="https://github.com/amircheikh" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} className="text-white text-3xl" />
      </a>
      <a href="https://www.linkedin.com/in/amircheikh/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} className="text-white text-3xl" />
      </a>
      <a href="https://www.youtube.com/channel/UCa7KC1wRWu-IS4OblRrBMVg" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faYoutube} className="text-white text-3xl" />
      </a>
      <a href={resume} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFileText} className="text-white text-3xl" />
      </a>
    </div>
  );
};

const Hero = () => {
  return (
    
    <section className="relative w-full h-screen mx-auto">
      <StarsCanvas/>
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-secondary" />
          <div className="w-1 sm:h-80 h-40 bg-secondary" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-secondary">Amir</span>
          </h1>
          <SocialMediaIcons />
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A computer science student who develops cool experiences for like-minded individuals
          </p>
          
        </div>
      </div>
      
      <ComputersCanvas/>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
