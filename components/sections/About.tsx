'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { HiAcademicCap, HiClock, HiStar, HiUsers } from 'react-icons/hi'

const stats = [
  {
    icon: HiUsers,
    value: '150+',
    label: 'Happy Patients',
  },
  {
    icon: HiClock,
    value: '5+',
    label: 'Years Experience',
  },
  {
    icon: HiStar,
    value: '4.9',
    label: 'Patient Rating',
  },
  {
    icon: HiAcademicCap,
    value: '3',
    label: 'Certifications',
  },
]

const qualifications = [
  'MBA in Hospital Management – Alagappa University, Karaikudi',
  'Bachelor of Physiotherapy (BPT) – The Tamil Nadu Dr. M.G.R. Medical University, Guindy, Chennai',
]

export const About = () => {
  return (
  <section id="about" className="py-12 sm:py-24 lg:py-32 bg-[#F7FAFC]">
    <div className="container mx-auto px-3 sm:px-6">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative z-10">
              <Image
                src="/images/mu.jpg"
                alt="Dr. mugil vanan - Professional Physiotherapist"
                width={400}
                height={500}
                className="rounded-2xl shadow-2xl w-60 h-72 sm:w-[400px] sm:h-[500px] object-cover mx-auto"
                priority
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-[#739EC9]/20 rounded-full opacity-60" />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#739EC9]/10 rounded-lg opacity-60" />
            <div className="absolute top-1/2 -right-8 w-12 h-12 bg-[#739EC9]/20 rounded-full opacity-60" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-6 h-1 sm:w-16 bg-gradient-to-r from-[#739EC9] to-[#739EC9] rounded-full mr-3 sm:mr-6" />
              <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#739EC9]">About</span>
            </div>
            
            <h2 className="text-2xl sm:text-4xl lg:text-6xl font-display font-black text-[#739EC9] mb-4 sm:mb-8 leading-tight">
              I&apos;m <span className="bg-gradient-to-r from-[#739EC9] to-[#739EC9] bg-clip-text text-transparent">Dr. Mugil Vanan</span>
            </h2>
            
            <div className="space-y-4 sm:space-y-8 text-sm sm:text-lg text-[#3A4A5A] leading-relaxed">
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#739EC9] to-[#739EC9] rounded-full" />
                <p className="font-bold text-base sm:text-xl text-[#739EC9] mb-2 sm:mb-4">
                  
                  Physiotherapist with strong 5+ years of experience across sports, orthopedic, and neurological rehabilitation.
                </p>
              </div>
              <p className="text-sm sm:text-lg font-medium">
                Over the years, I have worked with diverse patient groups — from stroke and neuro recovery to sports injuries, musculoskeletal conditions, and pediatric rehabilitation. I believe in evidence-based, patient-centered therapy that enhances function, independence, and overall quality of life.
              </p>
              <p className="text-sm sm:text-lg">
                I have also completed my MBA in Hospital Management to combine my clinical background with healthcare leadership and management expertise.
              </p>
            </div>
          </motion.div>         
            <motion.div
              className="mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-base sm:text-2xl font-semibold text-[#739EC9] mb-2 sm:mb-4">
                Qualifications & Certifications
              </h3>
              <ul className="space-y-1 sm:space-y-2">
                {qualifications.map((qualification, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start text-[#739EC9] text-xs sm:text-base"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="w-1.5 h-1.5 sm:w-2 h-2 bg-[#739EC9] rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0" />
                    <span>{qualification}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="bg-[#739EC9] text-white px-6 sm:px-8 py-2 sm:py-4 rounded-full font-medium text-base sm:text-lg hover:bg-[#5682B1] transition-all duration-300 hover:shadow-xl hover:shadow-[#739EC9]/30"
                data-cursor-hover
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const contact = document.getElementById('contact');
                  if (contact) contact.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact me
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-10 sm:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="inline-flex items-center justify-center w-8 h-8 sm:w-16 sm:h-16 bg-[#739EC9]/10 rounded-full mb-2 sm:mb-4 group-hover:bg-[#739EC9]/20 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <stat.icon className="w-4 h-4 sm:w-8 sm:h-8 text-[#739EC9]" />
              </motion.div>
              <h4 className="text-base sm:text-3xl font-bold text-[#739EC9] mb-1 sm:mb-2">
                {stat.value}
              </h4>
              <p className="text-xs sm:text-base text-[#3A4A5A] font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}