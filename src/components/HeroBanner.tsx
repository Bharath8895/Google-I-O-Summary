import { motion } from "motion/react";
import GeminiLogo from "../logos/Gemini.png";
import LaunchLogo from "../logos/Launch.png";
import SettingsLogo from "../logos/Settings.png";

export function HeroBanner() {
  return (
    <section className="relative w-full h-[320px] md:h-[420px] bg-black overflow-hidden flex items-end px-4 md:px-8">
      {/* Geometric Background Decorations - matching the sharp angles in the reference */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#111]" />
      <div className="absolute top-0 right-0 w-[80%] h-full bg-[#1a1a1a] skew-x-[-30deg] origin-top-right translate-x-32" />
      <div className="absolute top-0 right-0 w-[45%] h-full bg-[#222] skew-x-[-30deg] origin-top-right translate-x-48" />
      
      <div className="relative z-10 flex items-end justify-between w-full max-w-[1600px] mx-auto h-full pb-0">
        <div className="absolute top-4 right-6 px-3 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold uppercase tracking-[0.2em] opacity-90">
          Google
        </div>

        {/* Left: Google I/O Branding */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-end gap-6 mb-8 md:mb-12"
        >
          <h1 className="text-white text-7xl md:text-8xl lg:text-[110px] font-medium tracking-tighter leading-none">Google</h1>
          
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 h-16 md:h-20 lg:h-24">
               {/* Rainbow Rectangle */}
               <div className="w-8 md:w-12 lg:w-14 h-16 md:h-20 lg:h-24 bg-linear-to-br from-blue-400 via-purple-500 to-orange-400 rounded-sm" />
               {/* Slash */}
               <div className="text-white text-5xl md:text-7xl lg:text-8xl font-light leading-none mx-0.5">/</div>
               {/* Rainbow Circle */}
               <div className="w-12 md:w-18 lg:w-24 h-12 md:w-18 lg:h-24 rounded-full bg-linear-to-br from-blue-400 via-green-400 to-yellow-400" />
            </div>
            <div className="mt-2 text-center">
               <p className="text-white text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] opacity-90">May 19–20, 2026</p>
               <p className="text-gray-500 text-[7px] md:text-[8px] uppercase tracking-tighter mt-0.5">io.google</p>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <img src={GeminiLogo} alt="Gemini logo" className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 p-2" />
              <img src={LaunchLogo} alt="Launch logo" className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 p-2" />
              <img src={SettingsLogo} alt="Settings logo" className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 p-2" />
            </div>
          </div>
        </motion.div>

        {/* Right: Icon Sequence Cluster */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden md:flex items-end gap-1 opacity-90 origin-bottom-right scale-90 lg:scale-100"
        >
          <div className="flex items-end h-24">
            {/* Opening Brace */}
            <div className="w-6 md:w-8 h-20 md:h-24 bg-linear-to-b from-blue-500 to-green-500 mr-1" style={{ clipPath: 'polygon(100% 0, 100% 12%, 40% 12%, 40% 45%, 100% 45%, 100% 55%, 40% 55%, 40% 88%, 100% 88%, 100% 100%, 0 100%, 0 0)' }} />
            
            {/* Android Head */}
            <div className="relative w-20 md:w-28 h-12 md:h-16 flex items-end -ml-1">
               <div className="w-full h-10 md:h-14 bg-linear-to-tr from-green-400 via-yellow-400 to-orange-400 rounded-t-full relative overflow-hidden">
                  <div className="absolute left-1/4 top-1/2 w-2 h-2 bg-black/30 rounded-full" />
                  <div className="absolute right-1/4 top-1/2 w-2 h-2 bg-black/30 rounded-full" />
               </div>
               <div className="absolute left-5 top-0 w-1 h-4 md:h-6 bg-green-400 -rotate-12 rounded-full" />
               <div className="absolute right-5 top-0 w-1 h-4 md:h-6 bg-green-400 rotate-12 rounded-full" />
            </div>

            {/* Globe */}
            <div className="w-16 md:w-20 h-16 md:h-20 rounded-full bg-linear-to-br from-blue-500 via-green-500 to-yellow-500 mx-1 flex items-center justify-center p-1 border border-white/10 relative overflow-hidden">
               <div className="absolute inset-0 opacity-10 flex flex-col justify-between p-1.5">
                  <div className="h-[0.5px] w-full bg-white" />
                  <div className="h-[0.5px] w-full bg-white" />
                  <div className="h-[0.5px] w-full bg-white" />
               </div>
               <div className="absolute inset-0 opacity-10 flex justify-between p-1.5">
                  <div className="w-[0.5px] h-full bg-white" />
                  <div className="w-[0.5px] h-full bg-white" />
                  <div className="w-[0.5px] h-full bg-white" />
               </div>
            </div>

            {/* Rainbow Rect */}
            <div className="w-8 md:w-12 h-20 md:h-24 bg-linear-to-b from-blue-400 via-purple-500 to-orange-500 rounded-xs mx-0.5" />

            {/* Large Slash */}
            <div className="text-white text-7xl md:text-9xl font-thin opacity-80 mx-1 md:mx-2 leading-none mb-[-5px]">/</div>

            {/* Large Circle */}
            <div className="w-20 md:w-24 h-20 md:h-24 rounded-full bg-linear-to-br from-blue-500 via-green-500 via-yellow-400 to-red-500 mx-0.5" />

            {/* Star */}
            <div className="w-12 md:w-18 h-12 md:h-18 bg-linear-to-br from-yellow-400 via-orange-500 to-red-600 mx-0.5" style={{ clipPath: 'polygon(50% 0%, 65% 35%, 100% 50%, 65% 65%, 50% 100%, 35% 65%, 0% 50%, 35% 35%)' }} />

            {/* Cursor/Arrow */}
            <div className="w-12 md:w-14 h-14 md:h-18 bg-linear-to-br from-green-400 via-blue-500 to-indigo-600 mx-0.5" style={{ clipPath: 'polygon(0% 0%, 100% 70%, 50% 70%, 65% 100%, 0% 100%)' }} />

            {/* Closing Brace */}
            <div className="w-6 md:w-8 h-20 md:h-24 bg-linear-to-b from-yellow-500 to-red-600 ml-1" style={{ clipPath: 'polygon(0 0, 0 12%, 60% 12%, 60% 45%, 0 45%, 0 55%, 60% 55%, 60% 88%, 0 88%, 0 100%, 100% 100%, 100% 0)' }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
