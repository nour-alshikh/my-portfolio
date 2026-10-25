import { useContext, useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { SectionContext } from "../hoc/SectionContext"

// Animates its element in from `vars` (see utils/motion) once the parent section scrolls into view.
const Reveal = ({ as: Tag = "div", vars, children, ...props }) => {
  const ref = useRef(null)
  const sectionRef = useContext(SectionContext)

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(ref.current, {
        ...vars,
        scrollTrigger: {
          trigger: sectionRef?.current ?? ref.current,
          start: "top 75%",
          once: true,
        },
      })
    })

    return () => mm.revert()
  })

  return (
    <Tag ref={ref} {...props}>
      {children}
    </Tag>
  )
}

export default Reveal
