import { motion, type Variants } from "framer-motion";
import { Star } from "lucide-react";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center bg-white overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover [transform:scaleY(-1)]"
        >
          <source 
            src="background.mp4" 
            type="video/mp4" 
          />
        </video>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[26.416%] from-[rgba(255,255,255,0)] to-[66.943%] to-white"></div>
      </div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 w-full max-w-[1200px] flex flex-col items-center text-center pt-[140px] md:pt-[190px] px-6 gap-y-6 md:gap-y-[32px]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Heading */}
        <motion.h1 
          variants={itemVariants}
          className="font-outfit font-medium text-[40px] md:text-[80px] leading-[1.05] tracking-[-0.04em] text-neutral-900"
        >
          Simple{' '}
          <span className="font-instrument italic font-normal text-[50px] md:text-[100px] font-serif pr-1">
            management
          </span>
          <br className="hidden md:block" /> for your remote team
        </motion.h1>

        {/* Description */}
        <motion.p 
          variants={itemVariants}
          className="font-outfit text-[18px] text-[#373a46] opacity-80 max-w-[554px] leading-relaxed"
        >
          Streamline workflows, organize tasks, and boost productivity with our intuitive platform designed specifically for distributed teams.
        </motion.p>

        {/* Email Input Block */}
        <motion.div variants={itemVariants} className="w-full flex flex-col items-center gap-6 pt-4">
          <div 
            className="flex flex-col sm:flex-row items-center w-full max-w-[480px] bg-[#fcfcfc] rounded-[24px] sm:rounded-[40px] border border-neutral-200/60 p-2 sm:p-1.5 focus-within:ring-2 focus-within:ring-neutral-200 transition-all duration-300 gap-2 sm:gap-0"
            style={{ boxShadow: "0px 10px 40px 5px rgba(194,194,194,0.25)" }}
          >
            <input 
              type="email" 
              placeholder="Enter your work email..." 
              className="w-full sm:flex-1 bg-transparent border-none outline-none px-4 sm:px-5 py-3 sm:py-0 text-base font-outfit placeholder:text-neutral-400 text-neutral-800 text-center sm:text-left"
            />
            <button 
              className="w-full sm:w-auto h-[48px] px-6 rounded-[16px] sm:rounded-[32px] bg-gradient-to-b from-[#2a2a2a] to-[#121212] flex items-center justify-center font-outfit text-white text-[15px] font-medium transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-[inset_-4px_-6px_25px_0px_rgba(201,201,201,0.08),inset_4px_4px_10px_0px_rgba(29,29,29,0.24)]"
            >
              Create Free Account
            </button>
          </div>

          {/* Social Proof */}
          <div className="flex items-center gap-3">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#f5a623] text-[#f5a623]" />
              ))}
            </div>
            <span className="font-outfit text-sm text-neutral-500 font-medium">1,020+ Reviews</span>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
