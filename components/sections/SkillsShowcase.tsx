'use client'

import { motion } from 'framer-motion'
import { HiAcademicCap, HiUserGroup, HiBriefcase } from 'react-icons/hi'

const clinicalSkills = [
  'Sports Rehabilitation',
  'Orthopedic Rehab',
  'Neuro Rehab',
  'Pain Management',
  'Manual Therapy',
  'ICU & Chest Physiotherapy',
  'Tapping',
];

const conditionsSkills = [
  'Knee pain Rehabilitation',
  'Shoulder pain Rehabilitation',
  'Back pain Rehabilitation',
  'Ankle pain Rehabilitation',
  'Stroke Rehabilitation',
  'Bell’s palsy Rehabilitation',
  'Parkinson’s Rehabilitation',
  'Post Operative Stiffness Rehabilitation',
  'Sports surgery Rehabilitation',
];

const techniquesSkills = [
  'Cryotherapy',
  'Tapping',
  'Mobilisation',
  'Muscle Energy Technique',
  'Strength Training',
  'IFT',
  'Ultrasound Therapy',
  'Nerve stimulation',
  'Exercise Therapy',
];

const professionalSkills = [
  'Patient-Centered Care',
  'Communication',
  'Team Collaboration',
  'Case Documentation',
]

const managementSkills = [
  'Hospital Operations',
  'Healthcare Analytics',
  'Leadership',
  'Strategic Planning',
]

export const SkillsShowcase = () => {
  const cards = [
    {
      title: 'Clinical',
      icon: HiAcademicCap,
      skills: clinicalSkills,
      gradient: 'from-[#739EC9] to-[#FFE8DB]'
    },
    {
      title: 'Techniques',
      icon: HiUserGroup,
      skills: techniquesSkills,
      gradient: 'from-[#FFE8DB] to-[#A7D7C5]'
    },
    
    {
      title: 'Conditions',
      icon: HiAcademicCap,
      skills: conditionsSkills,
      gradient: 'from-[#A7D7C5] to-[#FFE8DB]'
    },
    
    {
      title: 'Professional',
      icon: HiUserGroup,
      skills: professionalSkills,
      gradient: 'from-[#FFE8DB] to-[#739EC9]'
    },
    {
      title: 'Management (MBA)',
      icon: HiBriefcase,
      skills: managementSkills,
      gradient: 'from-[#739EC9] to-[#A7D7C5]'
    },
  ];

  return (
    <section id="skills" className="relative py-24 lg:py-32 bg-gradient-to-br from-[#F7FAFC] via-[#EAF2FB] to-[#FFE8DB] overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#739EC9]/20 rounded-full blur-3xl z-0" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#FFE8DB]/30 rounded-full blur-3xl z-0" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#739EC9] to-[#FFE8DB] mb-6">
            Core Skills
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            A blend of clinical, professional, and management skills for holistic patient care and healthcare leadership.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-12">
          {cards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (idx + 1) }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(115,158,201,0.15)' }}
              className={`relative bg-white rounded-3xl shadow-xl p-10 group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border-2 border-transparent hover:border-[#739EC9]/30`}
            >
              <div className={`w-16 h-16 flex items-center justify-center rounded-full mb-6 bg-gradient-to-br ${card.gradient} group-hover:scale-110 transition-transform duration-300`}>
                <card.icon className="w-8 h-8 text-white drop-shadow-lg" />
              </div>
              <h3 className="text-2xl font-bold text-[#739EC9] mb-4 tracking-wide group-hover:text-[#5682B1] transition-colors duration-300">{card.title}</h3>
              <ul className="space-y-3">
                {card.skills.map((skill, i) => (
                  <motion.li
                    key={i}
                    className="text-neutral-700 text-base px-3 py-2 rounded-lg bg-[#F7FAFC] group-hover:bg-[#EAF2FB] transition-colors duration-300 shadow-sm"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
                    viewport={{ once: true }}
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
