import { motion } from "motion/react";
import GeminiLogo from "../logos/Gemini.png";
import LaunchLogo from "../logos/Launch.png";
import SettingsLogo from "../logos/Settings.png";
import GoogleLogo from "../logos/Google.svg";

export function EventBrief() {
  return (
    <section className="relative w-full bg-[#f5f5f5] py-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <img
          src={GoogleLogo}
          alt="Google logo"
          className="absolute top-6 right-6 w-10 h-10 md:w-12 md:h-12"
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
        <div className="grid md:grid-cols-[90px_1fr] gap-0">

          {/* LEFT SIDEBAR */}
          <div className="relative flex flex-col items-center pt-24">
            {/* Vertical Divider */}
            <div className="absolute top-0 right-0 h-full w-[2px] bg-gray-300" />

            <div className="flex flex-col gap-20 items-center z-10">
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
          <div className="pl-6 md:pl-10">

            {/* TITLE */}
            <h3 className="text-gray-600 font-bold uppercase tracking-[0.25em] text-lg mb-6">
              THE EVENT IN BRIEF
            </h3>

            {/* BLACK CONTENT BOX */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="
                relative
                bg-black
                text-white
                px-10
                md:px-14
                py-10
                md:py-12
                rounded-r-[90px]
                border
                border-[#2b5ebf]
                shadow-[0_40px_80px_rgba(0,0,0,0.35)]
              "
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

            {/* STATS SECTION */}
            <div className="mt-12">
              <div className="w-full h-[4px] bg-gray-300 mb-12" />

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
