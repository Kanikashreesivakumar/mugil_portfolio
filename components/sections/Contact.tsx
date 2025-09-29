'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { HiPhone, HiMail, HiLocationMarker, HiClock } from 'react-icons/hi'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
}

const contactInfo = [
  {
    icon: HiPhone,
    title: 'Phone',
    details: '+91 6383791589',
    link: 'tel:+916383791589',
  },
  {
    icon: HiMail,
    title: 'Email',
  details: 'mukil0199@gmail.com',
  link: 'mailto:mukil0199@gmail.com',
  },
  {
    icon: HiLocationMarker,
    title: 'Address',
    details: '203c,Gounder nagar ,Bhavani,Erode,Tamilnadu',
   
  },
  
]

const socialLinks = [
  {
    icon: FaInstagram,
    name: 'Instagram',
  url: 'https://www.instagram.com/im_mukil__?igsh=MW03M3p3NW12eTFldA%3D%3D&utm_source=qr',
    color: 'hover:text-pink-600',
  },
  {
    icon: FaLinkedin,
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/mugil-vanan-162b21270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    color: 'hover:text-blue-700',
  },
  {
    icon: FaWhatsapp,
    name: 'WhatsApp',
    url: 'https://wa.me/916383791589',
    color: 'hover:text-green-500',
  },
]

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    // Build WhatsApp message
    const message = `Name: ${data.name}%0AEmail: ${data.email}%0APhone: ${data.phone || '-'}%0AMessage: ${data.message}`;
    const whatsappUrl = `https://wa.me/916383791589?text=${message}`;
    window.open(whatsappUrl, '_blank');
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
    reset()
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-24 lg:py-32 gradient-bg">
      <div className="container mx-auto px-6">
        {/* Section Header */}
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
            Get In <span className="text-[#739EC9]">Touch</span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Ready to start your journey to pain-free movement? 
            Contact us today to schedule your consultation.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-3xl p-8 shadow-2xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-neutral-900 mb-6">
              Send us a message
            </h3>

            {isSubmitted && (
              <motion.div
                className="bg-primary-50 border border-primary-200 text-primary-700 p-4 rounded-lg mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Thank you for your message! We'll get back to you within 24 hours.
              </motion.div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-neutral-700 font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  {...register('name', { required: 'Name is required' })}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-neutral-700 font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-neutral-700 font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  {...register('phone')}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                  placeholder="6383791589"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-neutral-700 font-medium mb-2">
                  Message *
                </label>
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  rows={4}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300 resize-none"
                  placeholder="Tell us about your concern or question..."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-lg font-medium text-lg transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-neutral-400 cursor-not-allowed'
                    : 'bg-primary-600 hover:bg-primary-700 hover:shadow-xl hover:shadow-primary-200'
                } text-white`}
                data-cursor-hover
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="loading-dots">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <span className="ml-2">Sending...</span>
                  </div>
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Contact Information */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-neutral-900 mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center group"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary-200 transition-colors duration-300">
                      <info.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-neutral-800">
                        {info.title}
                      </h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-neutral-600 hover:text-primary-600 transition-colors duration-300"
                          data-cursor-hover
                        >
                          {info.details}
                        </a>
                      ) : (
                        <p className="text-neutral-600">{info.details}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>


        
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center text-neutral-600 ${social.color} transition-all duration-300 hover:shadow-xl hover:scale-110`}
                    data-cursor-hover
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}