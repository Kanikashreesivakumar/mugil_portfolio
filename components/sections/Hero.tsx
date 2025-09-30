'use client'


import { useRef, useEffect, useState } from 'react'
// Video modal component
function VideoModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={onClose}>
      <div className="relative w-full max-w-2xl mx-auto" onClick={e => e.stopPropagation()}>
        <video controls autoPlay className="w-full rounded-2xl shadow-2xl">
          <source src="/mukesh.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button className="absolute top-2 right-2 text-3xl text-white hover:text-primary-400" onClick={onClose} aria-label="Close">&times;</button>
      </div>
    </div>
  );
}
import { useScroll, useTransform, motion, useSpring } from 'framer-motion'
import { HiArrowDown, HiPlay, HiLightningBolt, HiStar } from 'react-icons/hi'
import { FiActivity, FiTarget, FiTrendingUp } from 'react-icons/fi'

const heroStats = [
  { icon: FiActivity, value: '3000+', label: 'Patients Healed', color: 'text-primary-600' },
  { icon: FiTarget, value: '98%', label: 'Success Rate', color: 'text-accent-pink-600' },
  { icon: FiTrendingUp, value: '4+', label: 'Years Experience', color: 'text-accent-violet-600' },
]

export const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  const [videoOpen, setVideoOpen] = useState(false);

  
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
  
  const parallaxY1 = useTransform(scrollY, [0, 400], [0, -60])
  const parallaxY2 = useTransform(scrollY, [0, 400], [0, 40])
  const parallaxY3 = useTransform(scrollY, [0, 400], [0, -30])
  
  const contentY = useTransform(scrollY, [0, 400], [0, 60])

  
  const [aboutOverlap, setAboutOverlap] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const about = document.getElementById('about')
      if (!about) return
      const rect = about.getBoundingClientRect()
      setAboutOverlap(rect.top < 120)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      id="home"
      ref={heroRef}
      style={{ zIndex: 1 }}
  className="relative min-h-screen flex items-center justify-center bg-white overflow-x-clip overflow-y-visible"
    >
      {/* Background and Parallax Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:10px_16px] sm:bg-[size:14px_24px]" />
        <motion.div className="absolute top-6 left-3 w-16 h-16 sm:top-20 sm:left-10 sm:w-32 sm:h-32 bg-gradient-to-br from-primary-500/20 to-primary-600/30 rotate-45 rounded-2xl sm:rounded-3xl shadow-2xl" style={{ y: parallaxY1 }} animate={{ rotate: [45, 225, 405], scale: [1, 1.1, 1] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute top-1/4 right-4 w-10 h-10 sm:top-1/3 sm:right-16 sm:w-24 sm:h-24 bg-gradient-to-br from-accent-pink-500/20 to-accent-pink-600/30 rounded-xl sm:rounded-2xl shadow-xl" style={{ y: parallaxY2 }} animate={{ rotate: [0, -180, -360], scale: [1, 0.9, 1] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute bottom-1/6 left-1/6 w-8 h-8 sm:bottom-1/4 sm:left-1/4 sm:w-16 sm:h-16 bg-gradient-to-br from-accent-violet-500/20 to-accent-violet-600/30 rounded-full shadow-lg" style={{ y: parallaxY3 }} animate={{ x: [0, 15, 0], scale: [1, 1.2, 1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute top-0 left-1/4 w-0.5 h-20 sm:h-40 bg-gradient-to-b from-primary-400/60 to-transparent rotate-12" style={{ y: parallaxY1 }} />
        <motion.div className="absolute bottom-0 right-1/4 w-0.5 h-16 sm:h-32 bg-gradient-to-t from-accent-pink-400/60 to-transparent -rotate-12" style={{ y: parallaxY2 }} />
      </div>

      {/* Main Content */}
  <motion.div className="container mx-auto px-3 sm:px-6 text-center z-10 relative" style={{ y: contentY }} initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: 'easeOut' }}>
        {/* ...existing code for status badge, heading, subtitle, tagline, CTA buttons, stats grid... */}
  <motion.div className="inline-flex items-center bg-gradient-to-r from-primary-50 to-accent-violet-50 border border-primary-200/60 rounded-xl sm:rounded-2xl px-3 sm:px-6 py-1.5 sm:py-3 mb-3 sm:mb-10 shadow-2xl backdrop-blur-sm" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
  <HiLightningBolt className="w-5 h-5 sm:w-12 sm:h-12 text-primary-600 mr-2 sm:mr-6" />
  <span className="text-xs sm:text-xl md:text-2xl font-bold text-neutral-800 tracking-wide uppercase">Rehab. Recover. Renew</span>
  <div className="w-2 h-2 sm:w-3 h-3 bg-green-500 rounded-full ml-1 sm:ml-4 animate-pulse" />
  </motion.div>
  <motion.h1 className="text-2xl xs:text-3xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-black text-neutral-900 mb-2 sm:mb-6 leading-[1.1] sm:leading-[0.85] tracking-tight" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
          <span className="block relative">
            <span className="bg-gradient-to-r from-[#739EC9] via-neutral-400 to-[#739EC9] bg-clip-text text-transparent font-black">Dr.Mugil vanan</span><span className="bg-gradient-to-r from-[#739EC9] via-neutral-400 to-[#739EC9] bg-clip-text text-transparent font-black  lg:text-6xl"> ,PT,MBA</span>
      <motion.div className="absolute -top-1 -right-2 w-4 h-4 sm:w-7 sm:h-7 bg-accent-pink-500 rounded-full" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} />
          </span>
        </motion.h1>
        <motion.div className="flex items-center justify-center mb-2 sm:mb-6" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}>
          <div className="w-4 h-1 sm:w-14 bg-primary-500 mr-2 sm:mr-5" />
          <h2 className="text-sm xs:text-base sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-700 tracking-wider uppercase">Physical Therapist | Rehabilitation Specialist </h2>
          <div className="w-4 h-1 sm:w-14 bg-accent-pink-500 ml-2 sm:ml-5" />
        </motion.div>
  <motion.p className="text-xs xs:text-sm sm:text-xl md:text-2xl lg:text-3xl text-neutral-600 mb-3 sm:mb-12 max-w-4xl mx-auto leading-tight font-medium" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }}>
          Transforming lives through <span className="text-primary-600 font-bold text-sm sm:text-2xl"> evidence-based physiotherapy</span> and <span className="font-bold text-sm sm:text-2xl" style={{color: '#739EC9'}}> personalized recovery solutions</span>
        </motion.p>
  <motion.div className="flex flex-col sm:flex-row gap-2 sm:gap-6 justify-center items-center mb-4 sm:mb-16" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9 }}>
          <motion.button
            className="group bg-gradient-to-r from-primary-600 to-primary-700 text-white px-5 sm:px-12 py-3 sm:py-6 rounded-2xl sm:rounded-3xl font-bold text-sm sm:text-xl shadow-2xl shadow-primary-300/50 hover:shadow-3xl hover:shadow-primary-400/60 transition-all duration-300 relative overflow-hidden"
            data-cursor-hover
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              const contact = document.getElementById('contact');
              if (contact) contact.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="relative z-10 flex items-center"><HiStar className="w-4 h-4 sm:w-6 sm:h-6 mr-2 sm:mr-3" />Link with me</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-800 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </motion.button>
          <motion.button
            className="group flex items-center text-neutral-700 hover:text-primary-600 font-bold text-sm sm:text-xl transition-colors duration-300"
            data-cursor-hover
            whileHover={{ x: 5 }}
            onClick={() => setVideoOpen(true)}
          >
            <div className="w-8 h-8 sm:w-16 sm:h-16 bg-white border-2 border-neutral-300 group-hover:border-primary-500 rounded-2xl sm:rounded-3xl flex items-center justify-center mr-2 sm:mr-5 shadow-lg group-hover:shadow-xl transition-all duration-300"><HiPlay className="w-4 h-4 sm:w-7 sm:h-7 text-primary-600 ml-1" /></div>
            <span className="text-xs sm:text-lg">Watch Success Stories</span>
          </motion.button>
          <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />
        </motion.div>
  <motion.div className="grid grid-cols-3 gap-1 sm:gap-8 max-w-3xl mx-auto" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.1 }}>
          {heroStats.map((stat, index) => (
            <motion.div key={index} className="text-center group cursor-pointer" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }} whileHover={{ y: -5 }}>
              <div className="inline-flex items-center justify-center w-8 h-8 sm:w-24 sm:h-24 bg-white border-2 border-neutral-200 group-hover:border-primary-300 rounded-2xl sm:rounded-3xl mb-2 sm:mb-5 group-hover:scale-110 transition-all duration-300 shadow-xl group-hover:shadow-2xl"><stat.icon className={`w-4 h-4 sm:w-12 sm:h-12 ${stat.color}`} /></div>
              <h3 className="text-sm sm:text-4xl md:text-5xl font-black text-neutral-900 mb-1 sm:mb-3">{stat.value}</h3>
              <p className="text-neutral-600 font-bold uppercase tracking-wide text-[11px] sm:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      

      {/* Smooth Decorative Elements and Overlap with About */}
      <div className="absolute inset-0 pointer-events-none overflow-visible">
        <motion.div className="absolute top-0 left-0 w-16 h-16 sm:w-32 sm:h-32 border-l-2 sm:border-l-4 border-t-2 sm:border-t-4 border-primary-300/60 rounded-tl-xl sm:rounded-tl-3xl" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }} />
        <motion.div className="absolute top-0 right-0 w-16 h-16 sm:w-32 sm:h-32 border-r-2 sm:border-r-4 border-t-2 sm:border-t-4 border-accent-pink-300/60 rounded-tr-xl sm:rounded-tr-3xl" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.7 }} />
        <motion.div className="absolute bottom-0 left-0 w-16 h-16 sm:w-32 sm:h-32 border-l-2 sm:border-l-4 border-b-2 sm:border-b-4 border-accent-violet-300/60 rounded-bl-xl sm:rounded-bl-3xl" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.9 }} />
        <motion.div className="absolute bottom-0 right-0 w-16 h-16 sm:w-32 sm:h-32 border-r-2 sm:border-r-4 border-b-2 sm:border-b-4 border-primary-300/60 rounded-br-xl sm:rounded-br-3xl" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.1 }} />
        <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-96 sm:h-96 border-2 border-dashed border-neutral-300/40 rounded-full" style={{ y: parallaxY1 }} animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} />
        <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-128 sm:h-128 border border-neutral-200/20 rounded-full" style={{ y: parallaxY2 }} animate={{ rotate: -360 }} transition={{ duration: 90, repeat: Infinity, ease: "linear" }} />
        <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-40 bg-gradient-to-t from-white via-white/80 to-transparent" />
        {aboutOverlap && (
          <motion.div className="absolute left-1/2 -translate-x-1/2 bottom-[-30px] sm:bottom-[-60px] w-[95vw] sm:w-[90vw] h-12 sm:h-32 rounded-t-xl sm:rounded-t-3xl bg-white shadow-2xl z-20 border-t-2 sm:border-t-4 border-primary-100" initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }} />
        )}
      </div>
    </section>
  );
}








