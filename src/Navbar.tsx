import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 w-full z-50 flex justify-center pt-6 px-4 pointer-events-none"
    >
      <div className="pointer-events-auto flex items-center justify-between w-full max-w-[1000px] h-[64px] px-3 pr-3 pl-6 rounded-full bg-white/60 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_0_rgba(0,0,0,0.04)]">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2.5 cursor-pointer group">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-tr from-neutral-900 to-neutral-700 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] group-hover:scale-105 transition-transform duration-300">
            <span className="text-white font-outfit font-bold text-sm tracking-tighter">O</span>
          </div>
          <span className="font-outfit font-semibold text-neutral-900 text-[17px] tracking-tight">Orbit</span>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8 ml-8">
          {["Product", "Solutions", "Resources", "Pricing"].map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              className="font-outfit text-[15px] font-medium text-neutral-500 hover:text-neutral-900 transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Call to Action Buttons */}
        <div className="flex items-center gap-3">
          <button className="hidden md:block font-outfit px-4 py-2 text-[15px] font-medium text-neutral-600 hover:text-neutral-900 transition-colors duration-200">
            Sign In
          </button>
          <button className="h-[44px] px-6 rounded-full bg-neutral-900 flex items-center justify-center font-outfit text-white text-[15px] font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-[0_4px_14px_0_rgba(0,0,0,0.15)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)]">
            Start Free
          </button>
        </div>

      </div>
    </motion.nav>
  );
}
