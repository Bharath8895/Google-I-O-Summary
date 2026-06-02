import { motion } from "motion/react";
import IOLogo from "../Logos/I.O.png";
import GoogleDriveLogo from "../Logos/Google Drive.png";

export function HeroBanner() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="mx-auto relative w-full max-w-[1600px] h-[320px] overflow-hidden border border-[#e5e7eb] bg-[#f5f6f8]">
        <div className="relative w-full h-full overflow-hidden bg-black">

          {/* =========================
              BACKGROUND
          ========================= */}

          {/* Base Black Background */}
          <div className="absolute inset-0 bg-black z-0" />

          {/* Left Gradient Shape */}
          <div
            className="absolute top-0 left-0 z-[1]"
            style={{
              width: "590px",
              height: "220px",
              background:
                "linear-gradient(90deg, #3F3F3F 0%, #2F2F2F 55%, #000000 100%)",
              clipPath: "polygon(0 0, 100% 0, 0 100%)",
            }}
          />

          {/* Right Gradient Shape */}
          <div
            className="absolute right-0 bottom-0 z-[1]"
            style={{
              width: "1300px",
              height: "360px",
              background:
                "linear-gradient(90deg, #3F3F3F 0%, #2A2A2A 50%, #000000 100%)",
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 35% 100%)",
            }}
          />
          {/* CONTENT */}
          <div className="relative z-20 h-full w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute left-6 bottom-4"
          >
            <div className="flex items-end gap-3">
              <h1 className="text-white text-[60px] font-medium tracking-tighter leading-none -translate-y-8">
                Google
              </h1>

              <div className="flex flex-col items-center mb-1">
                <img
                  src={IOLogo}
                  alt="Google I/O logo"
                  className="h-18 w-auto object-contain"
                />

                <div className="mt-1 text-center">
                  <p className="text-white text-[8px] font-bold uppercase tracking-[0.18em]">
                    MAY 19–20, 2026
                  </p>

                  <p className="text-gray-400 text-[6px] uppercase mt-0.5">
                    io.google
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <img
            src={GoogleDriveLogo}
            alt="Google Drive visual"
            className="absolute right-[-8px] bottom-[-52px] w-[52%] max-w-[600px] h-auto object-contain z-20"
          />
        </div>
      </div>
      </div>
    </section>
  );
}
