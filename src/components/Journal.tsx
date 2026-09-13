import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const journals = [
  {
    titleEn: "Designing with Motion",
    titleBs: "Dizajniranje sa Pokretom",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2664&auto=format&fit=crop",
    readTime: "4 min read",
    readTimeBs: "4 min čitanja",
    date: "Oct 24, 2025",
    dateBs: "24. Okt, 2025."
  },
  {
    titleEn: "The Future of Interfaces",
    titleBs: "Budućnost Interfejsa",
    image: "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=2670&auto=format&fit=crop",
    readTime: "6 min read",
    readTimeBs: "6 min čitanja",
    date: "Sep 12, 2025",
    dateBs: "12. Sep, 2025."
  },
  {
    titleEn: "Typography in Digital Spaces",
    titleBs: "Tipografija u Digitalnim Prostorima",
    image: "https://images.unsplash.com/photo-1601158935942-52255782d322?q=80&w=2672&auto=format&fit=crop",
    readTime: "5 min read",
    readTimeBs: "5 min čitanja",
    date: "Aug 05, 2025",
    dateBs: "05. Avg, 2025."
  },
  {
    titleEn: "Finding Balance in UI",
    titleBs: "Pronalaženje Balansa u UI",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    readTime: "3 min read",
    readTimeBs: "3 min čitanja",
    date: "Jul 18, 2025",
    dateBs: "18. Jul, 2025."
  }
];

export function Journal() {
  const { language, t } = useLanguage();
  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16"
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">{t('journal')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tight">
              {language === 'bs' ? 'Nedavna' : 'Recent'} <span className="font-display italic">{language === 'bs' ? 'razmišljanja' : 'thoughts'}</span>
            </h2>
            <p className="text-muted mt-4 max-w-sm">
              {t('journalDesc')}
            </p>
          </div>
          
          <button className="hidden md:inline-flex group relative items-center gap-2 rounded-full px-5 py-2.5 text-sm text-text-primary">
            <span className="absolute inset-[-2px] rounded-full bg-[linear-gradient(90deg,#89AACC_0%,#4E85BF_100%)] opacity-0 group-hover:opacity-100 transition-opacity -z-10 animate-gradient-shift bg-[length:200%_200%]" />
            <div className="absolute inset-0 rounded-full bg-surface border border-stroke group-hover:border-transparent transition-colors -z-10" />
            {language === 'bs' ? 'Vidi sve objave' : 'View all posts'} <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Journal Entries */}
        <div className="flex flex-col gap-4">
          {journals.map((post, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="group cursor-pointer flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-4 bg-surface/30 hover:bg-surface border border-stroke rounded-[40px] sm:rounded-full transition-colors"
            >
              <div className="w-16 h-16 shrink-0 rounded-full overflow-hidden">
                <img 
                  src={post.image} 
                  alt={language === 'bs' ? post.titleBs : post.titleEn} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl text-text-primary mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-[linear-gradient(90deg,#89AACC_0%,#4E85BF_100%)] transition-colors">
                  {language === 'bs' ? post.titleBs : post.titleEn}
                </h3>
                <div className="flex items-center gap-3 text-sm text-muted">
                  <span>{language === 'bs' ? post.readTimeBs : post.readTime}</span>
                  <span className="w-1 h-1 rounded-full bg-stroke" />
                  <span>{language === 'bs' ? post.dateBs : post.date}</span>
                </div>
              </div>
              <div className="hidden sm:flex w-12 h-12 rounded-full border border-stroke items-center justify-center text-muted group-hover:bg-text-primary group-hover:text-bg group-hover:border-transparent transition-all shrink-0">
                <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
