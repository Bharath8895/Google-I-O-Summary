import { HeroBanner } from "./components/HeroBanner";
import { EventBrief } from "./components/EventBrief";
import { EmergingThemes } from "./components/EmergingThemes";
import { GeminiStack } from "./components/GeminiStack";
import { DevToolchain } from "./components/DevToolchain";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f0f0f0] flex flex-col items-center font-sans selection:bg-blue-100 selection:text-blue-900 scroll-smooth">
      {/* Image 1: The Hero Banner - Full screen width */}
      <div className="w-full">
        <HeroBanner />
      </div>

      <div className="relative w-full flex justify-center">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black/10 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black/10 to-transparent" />
        <main className="relative w-full max-w-[1200px] bg-white shadow-[0_40px_100px_rgba(0,0,0,0.1)] overflow-hidden mx-4">
          {/* Visual Hierarchy: Following the exact order of provided images */}

          {/* Image 2: The Event in Brief */}
          <EventBrief />

        {/* Image 3: Emerging Themes Grid */}
        <EmergingThemes />

        {/* Image 4: Gemini AI Stack & Timeline */}
        <GeminiStack />

        {/* Image 5: Developer Toolchain & Big Picture */}
        <DevToolchain />

        <footer className="w-full bg-white py-12 px-8 md:px-24 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-gray-400">
               <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
               <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
               <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
               <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span className="text-gray-400 font-medium tracking-tight">I/O 2026</span>
          </div>
          <p className="text-gray-400 text-[10px]">© 2026 Google LLC. For demonstration purposes only.</p>
          <div className="flex gap-4 text-gray-400 text-[10px] font-medium uppercase tracking-widest">
             <a href="#" className="hover:text-blue-500 transition-colors">Privacy</a>
             <a href="#" className="hover:text-blue-500 transition-colors">Terms</a>
          </div>
        </footer>
      </main>
    </div>
  </div>
  );
}

