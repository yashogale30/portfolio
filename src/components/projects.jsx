import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import car from "../assets/car.png";
import signlang from "../assets/signlang.png";
import quadspace from "../assets/quadspace.png";
import healthcare from "../assets/healtcare.png";
import ey from "../assets/ernst-young-ey-logo-black-and-white.png";
import chrome from "../assets/chrome.jpg";
import rag from "../assets/rag.png.webp";
import lawyer from "../assets/lawyer.png";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { title: "Xcelerate", desc: "SELF DRIVING CAR using CNNs", tag: "Deep Learning", image: car, link: "https://github.com/yashogale30/Xcelerate" },
  { title: "Sign Language Detector", desc: "Indian Sign Language Translation", tag: "Computer Vision", image: signlang, link: "https://github.com/yashogale30/SIH_teamqwerty_signlanguage_detection" },
  { title: "QuadSpace", desc: "A Social Media for VJTI pps", tag: "Web Dev", image: quadspace, link: "https://quadspace-xi.vercel.app" },
  { title: "HealthCare+", desc: "An AI-Powered Health Companion", tag: "AI / Healthcare", image: healthcare, link: "https://healthcareplus-2b3e.vercel.app" },
  { title: "EY: FMCG", desc: "Agentic System to speed up scale RFP responses for faster B2B growth.", tag: "Agentic AI", image: ey, link: "https://github.com/yashogale30/EY_TECHATHON_qwerty" },
  { title: "Distraction Removal", desc: "Chrome Extension", tag: "Utility", image: chrome, link: "https://github.com/yashogale30/Distraction_Removal_Chrome_extention" },
  { title: "Simple RAG system", desc: "RAG pipeline", tag: "LLMs", image: rag, link: "https://github.com/yashogale30/COE_VJTI" },
  { title: "Ai Lawyer", desc: "Chatbot assistant for LAW", tag: "NLP", image: lawyer, link: "https://github.com/yashogale30/Legal_Aid_Advisor" },
]

function Projects() {
  const sectionRef = useRef(null)
  const containerRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (isMobile) return 

    const container = containerRef.current
    const section = sectionRef.current

    let ctx = gsap.context(() => {
      const calculateScroll = () => {
        const scrollAmount = container.scrollWidth - window.innerWidth

        gsap.to(container, {
          x: -scrollAmount,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${scrollAmount}`,
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            onUpdate: (self) => {
              const index = Math.round(self.progress * (projects.length - 1))
              setActiveIndex(index)
            }
          },
        })
      }

      const images = container.querySelectorAll("img")
      let loaded = 0

      if (images.length === 0) {
        calculateScroll()
      } else {
        images.forEach((img) => {
          if (img.complete) {
            loaded++
            if (loaded === images.length) calculateScroll()
          } else {
            img.addEventListener("load", () => {
              loaded++
              if (loaded === images.length) calculateScroll()
            })
          }
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [isMobile])

  // MOBILE LAYOUT
  if (isMobile) {
    return (
      <section className="bg-[#0a0a0a] py-20 px-6">
        <p className="text-[#a0a0a0] uppercase tracking-widest text-xs font-medium mb-10 text-center">
          Projects
        </p>
        <div className="flex flex-col gap-6">
          {projects.map((project, i) => (
            <a
              key={i}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative rounded-3xl overflow-hidden block"
              style={{ height: "60vw" }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white tracking-tight mb-1">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {project.desc}
                </p>
              </div>
              <div className="absolute top-4 right-4 text-white/10 text-2xl font-black italic">
                {i + 1 < 10 ? `0${i + 1}` : i + 1}
              </div>
            </a>
          ))}
        </div>
      </section>
    )
  }

  // DESKTOP LAYOUT
  return (
    <section
      ref={sectionRef}
      id="projects"
      className="bg-[#0a0a0a] relative overflow-hidden h-screen"
    >
      <p className="absolute top-10 left-16 z-10 text-[#a0a0a0] uppercase tracking-widest text-[2.5vh] font-medium">
        Projects
      </p>

      <div
        ref={containerRef}
        className="flex items-center h-full gap-12 pl-20 pr-40"
        style={{ width: "max-content", willChange: "transform" }}
      >
        {projects.map((project, i) => (
          <a
            key={i}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex-shrink-0 rounded-3xl overflow-hidden cursor-pointer group block"
            style={{ width: "28vw", height: "65vh" }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-3xl font-bold text-white tracking-tight mb-3">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-[320px]">
                {project.desc}
              </p>
            </div>
            <div className="absolute top-8 right-8 text-white/10 text-4xl font-black italic">
              {i + 1 < 10 ? `0${i + 1}` : i + 1}
            </div>
          </a>
        ))}
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-2 z-10">
        {projects.map((_, i) => (
          <div
            key={i}
            className="transition-all duration-300 rounded-full"
            style={{
              width: i === activeIndex ? "20px" : "6px",
              height: "6px",
              backgroundColor: i === activeIndex ? "#0071e3" : "rgba(255,255,255,0.2)",
            }}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects