'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiStar, HiChevronLeft, HiChevronRight } from 'react-icons/hi'


export const Testimonials = () => {
  // Testimonials data: only text and name
  const testimonials = [
    {
      id: 1,
      name: 'Sandhya Kunjur',
      testimonial: `I was in good, safe hands for my physio sessions. I came in a wheelchair and in just 15 days, I walked out on my own. My physiotherapist, Mugilvanan understood my needs and helped me regain muscle strength, thank you for that. I plan to continue coming here three times a week for physio to keep working on my progress. It has been a happy experience. The food was prepared according to my body's requirements and supervised by the dietician. It was mild, nutritious and suited me well.`
    },
    {
      id: 2,
      name: 'Chayavan Mallya',
      testimonial: `I joined physiotherapy with Dr Mugil Vanan with the complaint of severe lower back pain and fatigue. Over 10 days I have reduced my pain by more than 90% and started on an exercise routine. Before start of physiotherapy sessions I was suffering back and muscle pain for over 5 to 6 months which limited my functionality and difficulty sleeping. Now it has become better. I am able to function better in my day to day routine.`
    },
    {
      id: 3,
      name: 'Yasitha Swain',
      testimonial: `I had been struggling to write since 5–6 months. Although sometimes I was able to write, potential to write did not last long. That’s when my doctor told me about Jogo Health. My physician Dr. Mugil Vanan sir helped me all these 12 sessions. I saw improvements in me. He also taught me some exercises for my whole body as well. Though I still have pain while writing, I have got my regular speed back. I am very grateful to sir Dr. Mugilvanan to improve me in my writing.`
    },
  ];

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl lg:text-5xl font-display font-semibold text-neutral-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Patient <span className="font-bold" style={{ color: '#739EC9' }}>Gallery</span>
          </motion.h2>
          <motion.p
            className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Real patient journeys and treatment moments. Click any photo to view larger.
          </motion.p>
        </motion.div>

        {/* Testimonials List: No Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((item) => (
            <motion.div
              key={item.id}
              className="flex flex-col items-center rounded-2xl overflow-hidden shadow-lg bg-white p-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-base text-neutral-700 text-center mb-4">{item.testimonial}</p>
              <span className="text-lg font-semibold text-[#739EC9] text-center">{item.name}</span>
            </motion.div>
          ))}
        </div>

        {/* No modal needed for text-only testimonials */}
      </div>
    </section>
  )
}