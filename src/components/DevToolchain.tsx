import { motion } from "motion/react";
import { Play, Shield, Code, Share2, Globe, Heart } from "lucide-react";

const CARDS = [
  {
    title: "Antigravity 2.0 — live build demos",
    content: "Developers watched and replicated multi-agent orchestration in real time. Antigravity was demonstrated as 12× faster than its predecessor, with parallel subagents executing 16 tasks in one live keynote session",
    icon: <Play className="w-4 h-4 text-blue-600" />,
    iconBg: "bg-blue-50"
  },
  {
    title: "Managed Agent sandboxes",
    content: "A single API call spins up an isolated Linux sandbox. Agent reasons, runs code, browses the web, and tears down in under 2 minutes with no infrastructure provision",
    icon: <Shield className="w-4 h-4 text-cyan-600" />,
    iconBg: "bg-cyan-50"
  },
  {
    title: "Android CLI + open-sourced skills",
    content: "Stable CLI connects agents to Android Studio's toolchain. Google open-sourced Android Skills provide ready-made LLM instructions for tasks like Jetpack Compose migration",
    icon: <Code className="w-4 h-4 text-purple-600" />,
    iconBg: "bg-purple-50"
  },
  {
    title: "AI Studio → Antigravity export",
    content: "One-click export moves entire projects from AI Studio with full context into local Antigravity. AI Studio also added a mobile app and direct publish to Play Console test tracks",
    icon: <Share2 className="w-4 h-4 text-orange-600" />,
    iconBg: "bg-orange-50"
  },
  {
    title: "Modern Web Guidance + Chrome DevTools for agents",
    content: "100+ expert-vetted installable web skills. Chrome DevTools extended to AI agents for automated audits, user emulation, and live manual-free debugging",
    icon: <Globe className="w-4 h-4 text-red-600" />,
    iconBg: "bg-red-50"
  },
  {
    title: "Build with Gemini XPRIZE Hackathon",
    content: "A $2M global competition, the largest hackathon prize pool ever — inviting developers to build Gemini-powered solutions for food waste, medical research and global challenges",
    icon: <Heart className="w-4 h-4 text-green-600" />,
    iconBg: "bg-green-50"
  }
];

export function DevToolchain() {
  return (
    <section className="relative w-full bg-[#f8f9fa] pt-2 pb-16 px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold mb-4 text-gray-900"
        >
          <span className="text-blue-600">Operationalizing Agents:</span> Google's Next-Gen Developer Toolchain
        </motion.h2>
        <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
            <h3 className="text-lg font-bold text-blue-800">Sandboxing:</h3>
            <p className="text-gray-500 font-medium">Where builders got their hands on with live labs, open tools, and testable infrastructure across two packed days</p>
        </div>

        <div className="flex items-center gap-2 mb-2 bg-green-50 w-fit px-4 py-1.5 rounded-xs border border-green-100">
           <div className="w-3 h-3 bg-green-500 rounded-full" />
           <p className="text-xs font-bold text-green-800 uppercase tracking-widest">Hands-on tracks · Google I/O 2026</p>
           <div className="ml-8 text-xs font-bold text-green-600 bg-white border border-green-200 px-3 py-0.5 rounded-full">
              85+ sessions & codelabs on demand
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200 border border-gray-200">
          {CARDS.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white p-8 group hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-2">
                <div className={`w-10 h-10 shrink-0 ${card.iconBg} rounded-[10px] flex items-center justify-center border border-gray-100`}>
                  {card.icon}
                </div>
                <div className="space-y-1">
                  <h4 className="text-xl font-bold text-gray-900">{card.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed font-light">
                    {card.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-2 space-y-1">
           <div className="flex items-center gap-2 text-blue-600 text-sm font-bold opacity-80 cursor-pointer hover:opacity-100 transition-opacity">
              <span>▶ All sessions, codelabs & technical deep-dives available on demand</span>
              <span className="underline">io.google</span>
              <span className="font-normal text-gray-400">· Day 2 featured office hours with Google engineers across Android, Firebase, Chrome & Cloud tracks.</span>
           </div>

           <motion.div 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="p-8 bg-blue-50/50 border border-blue-100 rounded-xs flex items-start gap-4"
           >
              <span className="text-2xl pt-1">💡</span>
              <p className="text-blue-900 font-medium leading-relaxed">
                 <span className="font-bold">The big picture:</span> Google is making a deliberate bet that the next competitive frontier isn't smarter models in isolation — its <span className="font-bold text-blue-700 underline decoration-blue-200 decoration-2 underline-offset-4">agents woven into every surface</span> people already use. Gemini is no longer a chatbot you visit. It's becoming the operating layer underneath Search, Gmail, YouTube, Workspace, and soon your glasses. The risk: complexity and trust. The reward: a platform moat that's very hard to replicate.
              </p>
           </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-[55%] h-10 bg-[#34A853] rounded-tl-3xl shadow-lg" />
    </section>
  );
}
