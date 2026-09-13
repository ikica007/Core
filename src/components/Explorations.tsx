import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=2487&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2564&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542314831-c6a4d14b43c8?q=80&w=2670&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=2670&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1614165936126-2ed18e471b3b?q=80&w=2574&auto=format&fit=crop"
];

export function Explorations() {
  const sectionRef = useRef<HTMLElement>(null);
  const centerContentRef = useRef<HTMLDivElement>(null);
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);
  const { language, t } = useLanguage();

  useEffect(() => {
    const section = sectionRef.current;
    const center = centerContentRef.current;
    const col1 = col1Ref.current;
    const col2 = col2Ref.current;

    if (!section || !center || !col1 || !col2) return;

    const ctx = gsap.context(() => {
      // Pin center content
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        pin: center,
        pinSpacing: false,
      });

      // Parallax columns
      gsap.to(col1, {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });

      gsap.to(col2, {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[300vh] bg-bg overflow-hidden">
      {/* Layer 1: Pinned Center */}
      <div 
        ref={centerContentRef} 
        className="absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center z-10 pointer-events-none"
      >
        <div className="bg-bg/80 backdrop-blur-xl p-10 rounded-[3rem] border border-stroke flex flex-col items-center text-center max-w-lg mx-4 pointer-events-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em]">{t('explorations')}</span>
            <div className="w-8 h-px bg-stroke" />
          </div>
          
          <h2 className="text-5xl md:text-7xl text-text-primary tracking-tight mb-6">
            Vizualno <span className="font-display italic">igralište</span>
          </h2>
          
          <p className="text-muted mb-8 max-w-xs">
            {t('explorationsDesc')}
          </p>
          
          <button className="group relative items-center gap-2 rounded-full px-6 py-3 text-sm text-bg bg-text-primary hover:text-text-primary hover:bg-bg transition-colors border border-transparent">
            <span className="absolute inset-[-2px] rounded-full bg-[linear-gradient(90deg,#89AACC_0%,#4E85BF_100%)] opacity-0 group-hover:opacity-100 transition-opacity -z-10 animate-gradient-shift bg-[length:200%_200%]" />
            <div className="absolute inset-0 rounded-full group-hover:bg-bg transition-colors -z-10" />
            <span className="flex items-center gap-2">
              {language === 'bs' ? 'Zaprati na Dribbble' : 'Follow on Dribbble'} <ArrowUpRight className="w-4 h-4" />
            </span>
          </button>
        </div>
      </div>

      {/* Layer 2: Parallax Columns */}
      <div className="relative z-20 max-w-[1400px] mx-auto px-6 md:px-10 h-full flex justify-between pointer-events-none pt-[50vh]">
        
        {/* Column 1 */}
        <div ref={col1Ref} className="w-[45%] md:w-[35%] flex flex-col gap-12 md:gap-40 pointer-events-auto mt-[20vh]">
          {images.slice(0, 3).map((img, i) => (
            <div 
              key={i} 
              className="group aspect-square w-full max-w-[320px] rounded-3xl overflow-hidden border border-stroke cursor-pointer relative"
              style={{ transform: `rotate(${i % 2 === 0 ? -4 : 2}deg)` }}
            >
              <img src={img} alt="Exploration" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                <span className="text-white text-sm font-medium px-4 py-2 rounded-full bg-white/10 border border-white/20">
                  {language === 'bs' ? 'Proširi' : 'Expand'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Column 2 */}
        <div ref={col2Ref} className="w-[45%] md:w-[35%] flex flex-col items-end gap-12 md:gap-40 pointer-events-auto mt-[10vh]">
          {images.slice(3, 6).map((img, i) => (
            <div 
              key={i + 3} 
              className="group aspect-square w-full max-w-[320px] rounded-3xl overflow-hidden border border-stroke cursor-pointer relative"
              style={{ transform: `rotate(${i % 2 === 0 ? 3 : -5}deg)` }}
            >
              <img src={img} alt="Exploration" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                <span className="text-white text-sm font-medium px-4 py-2 rounded-full bg-white/10 border border-white/20">
                  {language === 'bs' ? 'Proširi' : 'Expand'}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
