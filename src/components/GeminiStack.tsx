import { motion } from "motion/react";

const STACK_ITEMS = [
  { category: "PERSONAL AI", name: "Gemini Spark", description: "A deeply personal Gemini mode — reads your Gmail, Photos & Docs to complete complex tasks with real context", color: "text-purple-700", bg: "bg-purple-50" },
  { category: "CREATIVITY", name: "Google Flow & Flow Music", description: "AI creative studio upgraded with Gemini Omni and parallel agents. Flow Music allows to create & share studio-quality songs with Mobile apps", color: "text-green-700", bg: "bg-green-50" },
  { category: "HARDWARE", name: "Android XR Glasses", description: "Google's first audio glasses arrive this fall with Warby Parker & Gentle Monster. Features all-day Gemini access, Maps, audio and camera", color: "text-cyan-700", bg: "bg-cyan-50" },
  { category: "DISCOVERY", name: "Ask YouTube", description: "Ask natural-language questions inside YouTube. Gemini finds the right video with context and follow-up support", color: "text-orange-700", bg: "bg-orange-50" },
  { category: "DESIGN", name: "Google Stitch & Pics", description: "Stitch lets you describe or speak a UI, then guides layout and reflow in real time. Pics is a new AI image design tool with object segmentation, text editing & translation", color: "text-pink-700", bg: "bg-pink-50" },
  { category: "SCIENCE", name: "Gemini for Science", description: "Co-Scientist simulates hypothesis generation, literature review, research-to-code and agent connectivity to life science databases & tools", color: "text-emerald-700", bg: "bg-emerald-50" },
];

const TIMELINE = [
  { time: "Now", items: ["Gemini 3.5 Flash, Antigravity 2.0, Google Flow, Stitch, Managed Agents API"], detail: "Live today in AI Studio, Gemini API, Google AI Plus / Pro / Ultra plans.", color: "text-blue-600", dot: "bg-blue-600" },
  { time: "Summer '26", items: ["Ask YouTube, AI Search Agents, Gemini Spark payments"], detail: "Agentic search agents that monitor the web on your behalf; Spark payment features debut.", color: "text-green-600", dot: "bg-green-600" },
  { time: "Fall '26", items: ["Android XR Audio Glasses, Universal Cart broadly, Google Pics"], detail: "First consumer XR glasses ship; Universal Cart expands across US retailers.", color: "text-orange-500", dot: "bg-orange-600" },
  { time: "Later", items: ["Calendar / Drive in AI Mode, Co-Scientist broad access, more specialized agents"], detail: "Personal Intelligence expanding; Gemini for Science opening to broader research community.", color: "text-gray-500", dot: "bg-gray-400" },
];

export function GeminiStack() {
  return (
    <section className="relative w-full bg-white pt-2 pb-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold mb-4 text-gray-900"
        >
          Widening the Gemini AI stack — Creativity, XR, Search and Science
        </motion.h2>
        <h3 className="text-xl font-bold text-gray-500 uppercase tracking-widest mb-6">Where were the announcements</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {STACK_ITEMS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className={`p-6 ${item.bg}`}
            >
              <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${item.color.replace('text-', 'text-opacity-70 text-')}`}>{item.category}</p>
              <h4 className={`text-lg font-bold mb-2 ${item.color}`}>{item.name}</h4>
              <p className={`text-sm leading-relaxed ${item.color.replace('text-', 'text-opacity-90 text-')}`}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-bold text-gray-500 uppercase tracking-widest mb-6">What's Coming When</h3>
          <div className="space-y-8">
            {TIMELINE.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-8"
              >
                <p className={`w-32 text-2xl font-bold font-serif whitespace-nowrap pt-1 ${step.color}`}>{step.time}</p>
                <div className="flex-1">
                   <div className="flex items-center gap-3 mb-1">
                      <div className={`w-3 h-3 rounded-full mt-1 ${step.dot}`} />
                      <p className="text-lg font-medium text-gray-800">{step.items.join(', ')}</p>
                   </div>
                   <p className="text-gray-500 text-sm ml-6">{step.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-[55%] h-10 bg-[#FBBC05] rounded-tr-3xl shadow-lg" />
    </section>
  );
}
