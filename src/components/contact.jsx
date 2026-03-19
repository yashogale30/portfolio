import { FaLinkedin, FaInstagram, FaEnvelope, FaXTwitter } from "react-icons/fa6";
import { SiLeetcode, SiCodeforces, SiCodechef, SiGithub } from "react-icons/si";

const links = [
  { icon: <SiGithub size={18} />, label: "Github", href: "https://github.com/yashogale30" },
  { icon: <FaEnvelope size={18} />, label: "Email", href: "mailto:ynogale@gmail.com" },
  { icon: <FaLinkedin size={18} />, label: "LinkedIn", href: "https://www.linkedin.com/in/yash-ogale-03a30b2aa/" },
  { icon: <FaXTwitter size={18} />, label: "X", href: "https://x.com/grindyoway" },
  { icon: <FaInstagram size={18} />, label: "Instagram", href: "https://instagram.com/yash_ogale__" },
  { icon: <SiLeetcode size={18} />, label: "LeetCode", href: "https://leetcode.com/u/yashogale/" },
  { icon: <SiCodeforces size={18} />, label: "Codeforces", href: "https://codeforces.com/profile/yashogale" },
  { icon: <SiCodechef size={18} />, label: "CodeChef", href: "https://www.codechef.com/users/yashogale" },
  
];

function Contact() {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-black px-6 relative overflow-hidden">
      
      {/* Subtle Gradient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#6ee7b7]/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Headline Section */}
      <div className="text-center z-10 mb-12">
        <p className="text-[#86868b] uppercase tracking-[0.2em] text-[10px] font-bold mb-4">
          Connect
        </p>
        <h2 className="text-6xl md:text-8xl font-semibold text-white tracking-tight leading-[1.1]">
          Got an idea?<br />
          <span className="text-[#86868b] hover:text-white transition-colors duration-700 cursor-default">
            Let's build it.
          </span>
        </h2>
      </div>

      {/* Links Grid - Using a more structured, airy layout */}
      <div className="flex flex-wrap justify-center gap-3 max-w-2xl z-10">
        {links.map(({ icon, label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1d1d1f] border border-[#424245]/30 text-[#f5f5f7] text-sm font-medium hover:bg-white hover:text-black transition-all duration-300 ease-out"
          >
            <span className="opacity-70 group-hover:opacity-100 transition-opacity">
              {icon}
            </span>
            {label}
          </a>
        ))}
      </div>

      {/* Footer - Minimalist & Pushed down */}
      <footer className="absolute bottom-12 w-full text-center z-10">
        <p className="text-[#424245] text-[10px] font-medium tracking-widest uppercase">
          © 2026 — Yash Ogale
        </p>
      </footer>

    </section>
  );
}

export default Contact;