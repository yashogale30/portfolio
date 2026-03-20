import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const sectionRef = useRef(null);
  const pillsRef = useRef([]);

  const skills = [
    "C/C++", "Langchain", "LangGraph", "Google SDKs", "Python", "Java", "TensorFlow", "Keras", "PyTorch", "OpenCV",
    "NumPy", "Pandas", "React", "Node.js", "MongoDB", "REST APIs", "Git/GitHub",
    "Linux", "VS Code", "Google Colab", "Postman", "SQL", "LLMs",
    "CNNs", "Deep Learning", "AI & ML", "Computer Vision", "NLP",
    "Competitive Programming", "DSA", "Agentic AI"
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        pillsRef.current,
        { 
          opacity: 0, 
          y: 40, 
          scale: 0.8,
          filter: "blur(12px)" 
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "expo.out",
          stagger: {
            amount: 1.2,
            from: "center",
          },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="min-h-screen flex flex-col items-center justify-center bg-black px-8 py-32 overflow-hidden"
    >
      <p className="text-[#86868b] uppercase tracking-[0.5em] text-[2.5vh] mb-20 font-bold opacity-80">
        Things I use
      </p>

      <div className="flex flex-wrap justify-center gap-x-4 gap-y-6 max-w-6xl">
        {skills.map((skill, index) => (
          <span
            key={skill}
            ref={(el) => (pillsRef.current[index] = el)}
            className="px-8 py-3.5 rounded-full border border-white/5 bg-white/[0.03] text-[#a1a1a6] text-[14px] font-medium backdrop-blur-xl transition-all duration-300 cursor-default select-none hover:border-[#0071e3]/40 hover:text-white hover:bg-[#0071e3]/5 hover:scale-105 active:scale-95 shadow-[0_0_0_rgba(0,113,227,0)] hover:shadow-[0_0_20px_rgba(0,113,227,0.2)]"
            style={{ 
                fontFamily: '-apple-system, BlinkMacSystemFont, "Inter", sans-serif',
                letterSpacing: "-0.02em" 
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;