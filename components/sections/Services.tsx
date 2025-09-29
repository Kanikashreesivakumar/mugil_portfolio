'use client'


import { motion } from 'framer-motion'
import { HiHeart, HiLightningBolt, HiShieldCheck, HiStar } from 'react-icons/hi'
import { SkillsShowcase } from './SkillsShowcase'

export const Services = () => {
  return (
    <>
      <section id="services" className="py-12 sm:py-24 lg:py-32 gradient-bg">
        <div className="container mx-auto px-3 sm:px-6">
          <motion.div
            className="mt-6 sm:mt-12 mb-6 sm:mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-[#739EC9] mb-4 sm:mb-8 text-center">Professional Experience</h2>
            <div className="max-w-3xl mx-auto space-y-4 sm:space-y-8">
              <div className="bg-[#F7FAFC] rounded-xl sm:rounded-2xl p-3 sm:p-6 shadow-md border border-[#739EC9]/20">
                <h3 className="text-base sm:text-2xl font-bold text-[#739EC9] mb-1 sm:mb-2">Physiotherapist – Jogo Healthcare, Bangalore</h3>
                <ul className="list-disc ml-4 sm:ml-6 text-neutral-700 space-y-1 text-xs sm:text-base">
                  <li>Delivering advanced rehab programs through digital therapeutics and tech-based patient engagement.</li>
                  <li>Supporting stroke and musculoskeletal patients using app-based feedback and progress tracking.</li>
                </ul>
              </div>
              <div className="bg-[#F7FAFC] rounded-xl sm:rounded-2xl p-3 sm:p-6 shadow-md border border-[#739EC9]/20">
                <h3 className="text-base sm:text-2xl font-bold text-[#739EC9] mb-1 sm:mb-2">Physiotherapist – Mom’s Belief Therakeyz, Bangalore</h3>
                <ul className="list-disc ml-4 sm:ml-6 text-neutral-700 space-y-1 text-xs sm:text-base">
                  <li>Specialized in pediatric and women’s health physiotherapy.</li>
                  <li>Designed therapy for postnatal mothers and children with developmental needs.</li>
                  <li>Coordinated with caregivers and doctors to create holistic rehabilitation plans.</li>
                </ul>
              </div>
              <div className="bg-[#F7FAFC] rounded-xl sm:rounded-2xl p-3 sm:p-6 shadow-md border border-[#739EC9]/20">
                <h3 className="text-base sm:text-2xl font-bold text-[#739EC9] mb-1 sm:mb-2">Physiotherapist – Sukino Healthcare, Bangalore</h3>
                <ul className="list-disc ml-4 sm:ml-6 text-neutral-700 space-y-1 text-xs sm:text-base">
                  <li>Managed inpatients with stroke, dementia, orthopedic, and neuro conditions.</li>
                  <li>Act as an Assistant Lead for a centre</li>
                  <li>Delivered ICU physiotherapy, chest therapy, mobility training, and pain management.</li>
                  <li>Awarded Best Team Player (2024) for dedication and teamwork.</li>
                </ul>
              </div>
            </div>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-[#739EC9] mt-8 sm:mt-16 mb-4 sm:mb-8 text-center">Internships & Rotations</h2>
            <div className="max-w-3xl mx-auto space-y-3 sm:space-y-6">
              <div className="bg-[#F7FAFC] rounded-xl sm:rounded-2xl p-3 sm:p-6 shadow-md border border-[#739EC9]/20">
                <ul className="list-disc ml-4 sm:ml-6 text-neutral-700 space-y-1 text-xs sm:text-base">
                  <li><span className="font-bold text-[#739EC9]">Sports & Ortho Rehab:</span> Vesoma Sports Rehab (Bangalore), Synergy Physio Care (Chennai)</li>
                  <li><span className="font-bold text-[#739EC9]">Neuro Rehab:</span> Neuro Foundation (Salem)</li>
                  <li><span className="font-bold text-[#739EC9]">Cardio-Pulmonary Rehab:</span> Vinayaga Mission Superspeciality Hospital (Salem)</li>
                  <li><span className="font-bold text-[#739EC9]">Spine & Trauma:</span> Ganga Hospital & Spine Injury Rehab (Coimbatore)</li>
                  <li><span className="font-bold text-[#739EC9]">Burns & Rheumatology:</span> BRJ Hospital (Coimbatore)</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <SkillsShowcase />
    </>
  )
}