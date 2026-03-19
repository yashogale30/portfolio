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
      // Apple-style entrance: From the center, with a subtle blur-in
      gsap.fromTo(
        pillsRef.current,
        { 
          opacity: 0, 
          y: 30, 
          scale: 0.9,
          filter: "blur(4px)" 
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "expo.out", // Smoother than back.out for a "Pro" feel
          stagger: {
            amount: 1,
            from: "center",
          },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen flex flex-col items-center justify-center bg-black px-8 py-24 overflow-hidden">
      <p className="text-[#86868b] uppercase tracking-[0.4em] text-[10px] mb-16 font-bold">
        Technical Stack
      </p>

      <div className="flex flex-wrap justify-center gap-4 max-w-5xl">
        {skills.map((skill, index) => (
          <span
            key={skill}
            ref={(el) => (pillsRef.current[index] = el)}
            className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-[#a1a1a6] text-[13px] font-medium backdrop-blur-md transition-all duration-500 cursor-default select-none hover:border-[#0071e3]/50 hover:text-white hover:bg-[#0071e3]/10"
            style={{ 
                fontFamily: '-apple-system, BlinkMacSystemFont, "Inter", sans-serif',
                letterSpacing: "-0.01em" 
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