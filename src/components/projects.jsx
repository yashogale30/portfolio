import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

// I added a 'tag' field here since your JSX calls project.tag
const projects = [
  { title: "Xcelerate", desc: "SELF DRIVING CAR using CNNs", tag: "Deep Learning", image: "src/assets/car.png", link: "https://github.com/yashogale30/Xcelerate" },
  { title: "Sign Language Detector", desc: "Indian Sign Language Translation", tag: "Computer Vision", image: "src/assets/signlang.png", link: "https://github.com/yashogale30/SIH_teamqwerty_signlanguage_detection" },
  { title: "QuadSpace", desc: "A Social Media for VJTI pps", tag: "Web Dev", image: "src/assets/quadspace.png", link: "https://quadspace-xi.vercel.app" },
  { title: "HealthCare+", desc: "An AI-Powered Health Companion", tag: "AI / Healthcare", image: "src/assets/healtcare.png", link: "https://healthcareplus-2b3e.vercel.app" },
  { title: "EY: FMCG", desc: "Agentic System to speed up scale RFP responses for faster B2B growth.", tag: "Agentic AI", image: "src/assets/ernst-young-ey-logo-black-and-white.png", link: "https://github.com/yashogale30/EY_TECHATHON_qwerty" },
  { title: "Distraction Removal", desc: "Chrome Extension", tag: "Utility", image: "src/assets/chrome.jpg", link: "https://github.com/yashogale30/Distraction_Removal_Chrome_extention" },
  { title: "Simple RAG system", desc: "RAG pipeline", tag: "LLMs", image: "src/assets/rag.png.webp", link: "https://github.com/yashogale30/COE_VJTI" },
  { title: "Ai Lawyer", desc: "Chatbot assistant for LAW", tag: "NLP", image: "src/assets/lawyer.png", link: "https://github.com/yashogale30/Legal_Aid_Advisor" },
]

function Projects() {
  const sectionRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    const section = sectionRef.current

    // Use a small timeout or ScrollTrigger.refresh() to ensure DOM is ready
    const calculateScroll = () => {
      const totalWidth = container.scrollWidth
      const viewportWidth = window.innerWidth
      const scrollAmount = totalWidth - viewportWidth

      gsap.to(container, {
        x: -scrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          // The end should match the amount of horizontal travel
          end: () => `+=${scrollAmount}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true, // Recalculates if window is resized
          anticipatePin: 1,
        }
      })
    }

    calculateScroll()

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} id="projects" className="bg-[#0a0a0a] relative overflow-hidden">
      <p className="absolute top-10 left-16 z-10 text-[#a0a0a0] uppercase tracking-widest text-xs">
        Projects
      </p>

      <div
        ref={containerRef}
        id="projects-container"
        className="flex items-center h-screen gap-8 pl-20 pr-20"
        style={{ width: "max-content", willChange: "transform" }}
      >
        {projects.map((project, i) => (
          <a
            key={i}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex-shrink-0 rounded-3xl overflow-hidden cursor-pointer group block"
            style={{ width: "420px", height: "560px" }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="text-[#0071e3] text-xs uppercase tracking-widest mb-3 block">
                {project.tag}
              </span>
              <h3 className="text-2xl font-bold text-[#f0f0f0] tracking-tight mb-2">
                {project.title}
              </h3>
              <p className="text-[#a0a0a0] text-sm leading-relaxed">
                {project.desc}
              </p>
            </div>
            <div className="absolute top-6 right-6 text-[#ffffff30] text-xs font-mono">
              0{i + 1}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Projects