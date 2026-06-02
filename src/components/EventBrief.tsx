import { motion } from "motion/react";
import GeminiLogo from "../Logos/Gemini.png";
import LaunchLogo from "../Logos/Launch.png";
import SettingsLogo from "../Logos/Settings.png";
import GoogleLogo from "../Logos/Google.svg";

export function EventBrief() {
  return (
    <section className="relative w-full pt-5 pb-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <img
          src={GoogleLogo}
          alt="Google logo"
          className="absolute top-4 right-4 w-12 h-12 md:w-14 md:h-14"
        />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl lg:text-[40px] font-bold text-gray-900 leading-[1.1] max-w-[1000px] mb-14"
        >
          From a $2M hackathon to open-sourced Android Skills — Google is paying developers to build the agentic future for them
        </motion.h2>

        {/* EVENT BRIEF SECTION */}
        <div className="grid md:grid-cols-[60px_1fr] gap-0">

          {/* LEFT SIDEBAR */}
          <div className="relative flex flex-col items-end pr-2 pt-24">
            <div className="flex flex-col gap-20 items-end z-10">
              <img
                src={GeminiLogo}
                alt="Gemini"
                className="w-10 h-10 object-contain"
              />

              <img
                src={SettingsLogo}
                alt="Settings"
                className="w-10 h-10 object-contain"
              />

              <img
                src={LaunchLogo}
                alt="Launch"
                className="w-10 h-10 object-contain"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative pl-0 md:pl-0">
            <div
              className="absolute left-4 top-0 bottom-12 w-2 bg-white rounded-l-[6px] z-20"
              style={{
                boxShadow: "-28px 0 80px rgba(0,0,0,0.36), inset 0 0 0 1px rgba(255,255,255,0.9)",
                zIndex: 20,
              }}
            />

            {/* TITLE */}
            <h3 className="text-gray-600 font-bold uppercase tracking-[0.25em] text-lg mb-3 ml-4 md:ml-7">
              THE EVENT IN BRIEF
            </h3>

            {/* BLACK CONTENT BOX with tighter white left border */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative ml-6 bg-black text-white px-10 md:px-14 py-10 md:py-12 rounded-r-[100px] shadow-[0_40px_80px_rgba(0,0,0,0.95)]"
                >

                <div className="space-y-10">

                  <p className="text-xl md:text-[22px] leading-relaxed">
                    <span className="font-bold text-[#00A8FF]">
                      Gemini is now the OS
                    </span>{" "}
                    — embedded across Search, Gmail, YouTube, Workspace &
                    hardware
                  </p>

                  <p className="text-xl md:text-[22px] leading-relaxed">
                    <span className="font-bold text-[#00A8FF]">
                      Developers got real tools
                    </span>{" "}
                    — Antigravity 2.0, Managed Agents API, and a $2M hackathon
                  </p>

                  <p className="text-xl md:text-[22px] leading-relaxed">
                    <span className="font-bold text-[#00A8FF]">
                      Products, not promises
                    </span>{" "}
                    — Flow, Stitch, XR Glasses, Universal Cart, and 100+
                    announcements
                  </p>

                </div>
              </motion.div>
            </div>

            {/* STATS SECTION */}
            <div className="mt-12 ml-10 md:ml-14 max-w-[720px]">
              <div className="w-[220px] md:w-[300px] h-[4px] bg-gray-300 mb-12" />

              <div className="grid md:grid-cols-3 gap-10">

                <div>
                  <h4 className="text-6xl font-bold text-[#2F6DE1]">
                    100+
                  </h4>

                  <p className="text-sm text-gray-500 mt-3">
                    Announcements
                  </p>
                </div>

                <div>
                  <h4 className="text-6xl font-bold text-[#2F6DE1]">
                    $185 B
                  </h4>

                  <p className="text-sm text-gray-500 mt-3">
                    Capex this year
                  </p>
                </div>

                <div>
                  <h4 className="text-6xl font-bold text-[#2F6DE1]">
                    $2M
                  </h4>

                  <p className="text-sm text-gray-500 mt-3">
                    Gemini XPRIZE hackathon prize
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Blue Accent */}
      <div className="absolute bottom-0 left-0 h-10 w-[55%] bg-[#4A7BFF] rounded-tr-2xl" />
    </section>
  );
}
