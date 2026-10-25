import { useRef } from "react"
import { SectionContext } from "./SectionContext"
import { styles } from "../styles"

const SectionWrapper = (Component, idName) =>
    function HOC() {
        const sectionRef = useRef(null)

        return (
            <SectionContext.Provider value={sectionRef}>
                <section
                    ref={sectionRef}
                    className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
                >
                    <span className="hash-span" id={idName}>
                        &nbsp;
                    </span>
                    <Component />
                </section>
            </SectionContext.Provider>
        )
    }


export default SectionWrapper
