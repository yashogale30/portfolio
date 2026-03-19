import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function Name() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Apple-style initial state: Tight tracking and refined white
      gsap.set(textRef.current, { scale: 1, opacity: 1 });

      // 2. The High-End Zoom
      gsap.to(textRef.current, {
        scale: 12, // Increased scale for that "passing through the letters" feel
        opacity: 0,
        filter: "blur(15px)", // Adds "Lens Depth" as it gets closer
        ease: "expo.in", // This creates the "rush" effect Apple uses
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=125%", // Gives the user more "room" to scroll the zoom
          scrub: 0.8,    // Smoother lag-time for the mouse wheel
          pin: true,
          anticipatePin: 1,
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [])

  return (
    <section 
      ref={sectionRef} 
      className="name-section h-screen flex items-center justify-center bg-[#000000] overflow-hidden"
    >
      <h1 
        ref={textRef} 
        className="name-text text-[10vw] font-bold tracking-[-0.05em] text-[#f5f5f7] antialiased select-none"
        style={{ 
            fontFamily: '-apple-system, BlinkMacSystemFont, "Inter", "SF Pro Display", sans-serif',
            willChange: "transform, opacity, filter" 
        }}
      >
        Yash Ogale
      </h1>
    </section>
  )
}

export default Name