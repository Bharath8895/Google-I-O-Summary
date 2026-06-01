import { motion } from "motion/react";

const CATEGORIES = [
  {
    title: "Models & Intelligence",
    color: "bg-blue-600",
    items: [
      {
        name: "Gemini 3.5 Series",
        content: "Gemini 3.5 Flash launched — flagship-level intelligence and speed. Built for agentic, action-oriented tasks via API and AI Studio",
        border: "border-blue-600"
      },
      {
        name: "Gemini Omni",
        content: "A new multimodal model combining vision, audio, and text — designed for complex real-world tasks",
        border: "border-blue-600"
      },
      {
        name: "TPU Gen 8",
        content: "8th-gen TPUs with a dual-chip split: TPU 8t for training (3x prior gen) and TPU 8i for inference.",
        border: "border-blue-600"
      }
    ]
  },
  {
    title: "Agent Platform",
    color: "bg-green-600",
    items: [
      {
        name: "Google Antigravity 2.0",
        content: "Google's new agent-first dev platform. Upgraded with orchestration tools to build, deploy, and compose agents",
        border: "border-green-600"
      },
      {
        name: "Managed Agents API",
        content: "Single API call provisions a remote Linux sandbox to browse, write code, and manage files autonomously",
        border: "border-green-600"
      },
      {
        name: "AI Studio & Android",
        content: "Native Kotlin support added. Workspace integrations and Firebase support developers build and ship Android AI apps faster",
        border: "border-green-600"
      }
    ]
  },
  {
    title: "Products & Experiences",
    color: "bg-yellow-500",
    items: [
      {
        name: "AI Mode in Search",
        content: "Natural language queries replace keywords with Gmail, Photos, and Calendar integration. SynthID + C2PA watermarking for AI media",
        border: "border-yellow-500"
      },
      {
        name: "Universal Cart & Commerce",
        content: "Agentic shopping with a Universal Cart — AI handles discovery, comparison, and checkout across retailers",
        border: "border-yellow-500"
      },
      {
        name: "Workspace & Glasses",
        content: "Proactive task handling with voice features in Docs, Gmail & Keep. New Google Frames smart glasses with directions, photos and translation",
        border: "border-yellow-500"
      }
    ]
  }
];

export function EmergingThemes() {
  return (
    <section className="relative w-full bg-[#f8f9fa] py-16 px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold mb-12 text-gray-900"
        >
          Google I/O 2026 - Emerging Themes
        </motion.h2>

        <div className="space-y-16">
          {CATEGORIES.map((category, idx) => (
            <div key={idx} className="space-y-6">
              <div className="flex items-center gap-4">
                <div className={`w-1 h-8 ${category.color}`} />
                <h3 className="text-xl font-bold uppercase tracking-wider text-gray-500">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.items.map((item, iIdx) => (
                  <motion.div
                    key={iIdx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: iIdx * 0.1 }}
                    className="bg-white p-6 shadow-sm border border-gray-100 relative group truncate whitespace-normal"
                  >
                    <div className={`absolute top-0 left-0 w-1 h-full ${category.color.replace('bg-', 'bg-')}`} />
                    <h4 className="text-lg font-bold mb-3 text-gray-900">{item.name}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed font-light">{item.content}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-12 p-6 border border-blue-200 bg-blue-50/30 rounded-xs"
        >
          <p className="text-blue-800 font-medium">
             <span className="font-bold">Google's overarching message:</span> Al has moved from assistant to agent. Every announcement this year was anchored in Gemini becoming proactive, autonomous, and deeply embedded across Google's full product stack — from Search to Workspace to developer infrastructure.
          </p>
        </motion.div>
      </div>
      <div className="absolute bottom-0 right-0 w-[55%] h-10 bg-[#EA4335] rounded-tl-3xl shadow-lg" />
    </section>
  );
}
