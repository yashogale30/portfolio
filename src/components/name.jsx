import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function Name() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(textRef.current, { scale: 1, opacity: 1 });

      gsap.to(textRef.current, {
        scale: 12, 
        opacity: 0,
        filter: "blur(15px)", 
        ease: "expo.in", 
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=125%", 
          scrub: 0.8,  
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