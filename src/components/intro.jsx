import { useEffect, useRef } from 'react';
import gsap from 'gsap';

function Intro() {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.5 } });

      // 1. Initial State: Image starts slightly zoomed in
      gsap.set(imgRef.current, { scale: 1.1, opacity: 0 });
      // 2. Initial State: Text starts lower and invisible
      gsap.set(".animate-text", { y: 50, opacity: 0 });

      tl.to(imgRef.current, { 
        scale: 1, 
        opacity: 0.7, 
        duration: 2 
      })
      .to(".animate-text", { 
        y: 0, 
        opacity: 1, 
        stagger: 0.2 // This creates the "one-by-one" reveal effect
      }, "-=1.5"); // Start text animation 1.5s before image finish
      
    }, sectionRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <section ref={sectionRef} className="h-screen relative bg-[#0a0a0a] overflow-hidden">
      
      <img 
        ref={imgRef}
        src="src/assets/Gemini_Generated_Image_87saf987saf987sa.png" 
        alt="Yash" 
        className="w-full h-full object-cover"
      />

      <div className="absolute bottom-16 left-16 z-10">
        <p className="animate-text text-[#a0a0a0] text-lg mb-2 uppercase tracking-widest font-medium">
          Hello, 
        </p>
        <h2 className="animate-text text-7xl font-bold text-[#f0f0f0] mb-4 tracking-tight">
          I build crazy stuffs .
        </h2>
        <p className="animate-text text-[#a0a0a0] text-xl leading-relaxed max-w-lg">
          - Yash Ogale <br/> (Pre Final Year UG @Veermata Jijabai Technological Institue (VJTI)) .
        </p>
      </div>
      
      {/* Ensure gradient is on top of image but behind text */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent pointer-events-none" />
    </section>
  );
}

export default Intro;