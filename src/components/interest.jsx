import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function Interest() {
  useEffect(() => {
    gsap.set(".interest-line", { y: 120, opacity: 0 })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".interest-section",
        start: "top top",
        end: "+=150%",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      }
    })

    tl.to(".interest-line", {
      y: 0,
      opacity: 1,
      stagger: 0.12,
      ease: "power3.out",
    })

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <section className="interest-section h-screen flex items-center justify-center bg-black px-10">
      <h2
        className="text-center font-bold uppercase"
        style={{
          fontSize: "clamp(2.5rem, 6vw, 7rem)",
          lineHeight: "1.05", // Slightly tighter for Apple look
          letterSpacing: "-0.05em", // Crucial: Apple's signature tight tracking
          fontFamily: '-apple-system, BlinkMacSystemFont, "Inter", "SF Pro Display", sans-serif'
        }}
      >
        <div style={{ overflow: "hidden" }} className="py-1">
          <span className="interest-line inline-block text-[#86868b]">
            DRIVEN BY <span className="text-[#f5f5f7]">SCIENCE,</span>
          </span>
        </div>

        <div style={{ overflow: "hidden" }} className="py-1">
          <span className="interest-line inline-block text-[#86868b]">
            OBSESSED WITH
          </span>
        </div>

        <div style={{ overflow: "hidden" }} className="py-1">
          <span className="interest-line inline-block text-white">
            AI, TECH, CARS
          </span>
        </div>

        <div style={{ overflow: "hidden" }} className="py-1">
          <span className="interest-line inline-block text-[#86868b]">
            BUILDING THINGS THAT <span className="text-[#0071e3]">MATTER.</span>
          </span>
        </div>
      </h2>
    </section>
  )
}

export default Interest