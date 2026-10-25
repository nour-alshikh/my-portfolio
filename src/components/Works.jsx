import { Tilt } from "react-tilt"
import Reveal from "./Reveal"
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { github } from '../assets'
import { projects } from '../constants'
import { fadeIn, textVariant } from "../utils/motion"


const ProjectCard = ({ index, name, description, tags, image, source_code_link, }) => {
  return (
    <Reveal vars={fadeIn("up", 'spring', index * 0.5, 0.75)}>
      <Tilt options={{
        max: 45,
        scale: 1,
        speed: 450
      }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
        <div className="relative w-full h-[230px]">
          <img src={image} alt={name}
            className="w-full h-full object-cover rounded-2xl" />
          {source_code_link && (
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover"
            >
              <div
                onClick={() => window.open(source_code_link, '_blank')}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                <img className="w-1/2 h-1/2 object-contain" src={github} alt={github} />
              </div>
            </div>
          )}
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <p key={i} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
          ))}
        </div>
      </Tilt>
    </Reveal>
  )
}


const Works = () => {
  return (
    <>
      <Reveal vars={textVariant()}>
        <p className={styles.sectionSubText}>
          My Work
        </p>
        <h2 className={styles.sectionHeadText}>
          Projects.
        </h2>
      </Reveal>
      <div className="w-full flex">
        <Reveal as="p"
          vars={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work
          with different technologies,
          and manage projects effectively.
        </Reveal>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} index={i} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, '')