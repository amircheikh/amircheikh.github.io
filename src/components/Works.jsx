import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faYoutube, faUnity} from '@fortawesome/free-brands-svg-icons';
import { faFileText } from '@fortawesome/free-solid-svg-icons';
import Carousel from "./Carousel";
import YouTube from 'react-youtube';

const LinkIcons = ({
unity_link,
github_link,
youtube_link
}) => {
  return (
    <div className="flex gap-5 mt-4">
      {unity_link &&
      <a href={unity_link} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faUnity} className="text-white text-3xl" />
      </a>
      }
      {github_link &&
      <a href={github_link} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} className="text-white text-3xl" />
      </a>
      }
      {youtube_link &&
      <a href={youtube_link} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faYoutube} className="text-white text-3xl" />
      </a>
      }
    </div>
  );
};


const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  slides,
  unity_link,
  github_link,
  youtube_link
}) => {

  return (
    
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>

      <div //Was originally Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl w-full"
      >
        <div className="relative w-full">
          
          {/* REVERT TO SINGLE PICTURE METHOD <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          /> */ }
          
          
          <Carousel>
            {[...slides.map((s) =>(
              
              <img className="rounded-2xl" src={s}/>
              
            ) ),
                
            ]}

          </Carousel>

        </div>

        <div className="mt-3">

          <div className="inset-0 flex card-img_hover rounded-xl">

            
            <LinkIcons {...{unity_link, github_link, youtube_link}}/>

          </div>
          
          <h3 className="text-white font-bold text-[32px] mt-3">{name}</h3>
          <p className="mt-2 text-secondary text-[18px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I spend my free time working on projects to show my skills. 
          Below are some of my projects that I have made publicly avaliable.
          Feel free to check them out by clicking the links on each one.

        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
