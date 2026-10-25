import { Tilt } from "react-tilt"
import Reveal from "./Reveal"
import { styles } from "../styles"
import { services } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"
import { SectionWrapper } from '../hoc'


const ServiceCard = ({ title, icon, index }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <Reveal
        vars={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <p className="text-center font-bold text-white text-[20px]">
            {title}
          </p>
        </div>
      </Reveal>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <Reveal vars={textVariant()}>
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>
          Overview.
        </h2>
      </Reveal>
      <Reveal as="p" vars={fadeIn("", "", 0.1, 1)}
        className="mt-0 text-secondary text-[17px] max-w-3xl leading-[30px]">
        I’m a highly motivated and skilled Full Stack developer with experience in building websites , great end‑user
        experience includes compiling codes to solve problems and new modules within Laravel‑based framework.
        I have experience working with Vue . I also have experience working with Bootstrap and Tailwind CSS. I enjoy
        being part of a productive team.
      </Reveal>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, i) => (
          <ServiceCard key={service.title} index={i} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")