'use client'

import { motion } from 'framer-motion'
import { HiHeart, HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import Image from 'next/image'

const footerLinks = {
  services: [
    'Knee pain Rehabilitation', 
 'Shoulder pain Rehabilitation',
 'Back pain Rehabilitation',
 'Ankle pain Rehabilitation',
 'Stroke Rehabilitation',
 'Bell’s palsy Rehabilitation',
 'Parkinson’s Rehabilitation',
 'Post Operative Stiffness Rehabilitation',
 'Sports surgery Rehabilitation',

  ],
  quickLinks: [
    { label: 'About Dr. Mugil', href: '#about' },
    { label: 'Services', href: '#skills' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ],
  resources: [
    'Health Tips Blog',
    'Exercise Videos',
    'Patient Resources',
    'Insurance Information',
    'FAQs',
  ],
}

const socialLinks = [
  { icon: FaWhatsapp, url: 'https://wa.me/916383791589', name: 'WhatsApp' },
  { icon: FaInstagram, url: 'https://www.instagram.com/im_mukil__?igsh=MW03M3p3NW12eTFldA%3D%3D&utm_source=qr', name: 'Instagram' },
  { icon: FaLinkedin, url: 'https://www.linkedin.com/in/mugil-vanan-162b21270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', name: 'LinkedIn' },
  { icon: HiMail, url: 'mailto:mukil0199@gmail.com', name: 'Email' },
]

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Main Footer Content */}
  <div className="container mx-auto px-4 py-10 sm:px-6 sm:py-16">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full overflow-hidden flex items-center justify-center bg-white">
                <Image src="/images/logo.jpg" alt="Logo" width={56} height={56} className="object-contain w-full h-full" />
              </div>
              <span className="text-lg sm:text-xl font-display font-semibold">
                Dr. mugil vanan
              </span>
            </div>
            
            <p className="text-neutral-400 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
              Expert physiotherapy services helping you move pain-free. 
              Personalized care with compassionate support for optimal wellness.
            </p>

            {/* Contact Info */}
            <div className="space-y-1 sm:space-y-2">
              <div className="flex items-center text-neutral-400">
                <HiPhone className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                <span className="text-xs sm:text-sm">+91 6383792589</span>
              </div>
              <div className="flex items-center text-neutral-400">
                <HiMail className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                <span className="text-xs sm:text-sm">mukil0199@gmail.com</span>
              </div>
              <div className="flex items-center text-neutral-400">
                <HiLocationMarker className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                <span className="text-xs sm:text-sm">203c , Gounder nagar, Bhavani,Erode ,Tamilnad</span>
              </div>
            </div>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((service, index) => (
                <li key={index}>
                  <span
                    className="text-neutral-400 text-xs sm:text-sm"
                    data-cursor-hover
                  >
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-primary-400 transition-colors duration-300 text-xs sm:text-sm cursor-pointer"
                    data-cursor-hover
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Resources</h4>
            <ul className="space-y-2 mb-6">
              {footerLinks.resources.map((resource, index) => (
                <li key={index}>
                  <span
                    className="text-neutral-400 text-xs sm:text-sm"
                    data-cursor-hover
                  >
                    {resource}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

        {/* Social Media Links */}
        <motion.div
          className="flex justify-center space-x-4 sm:space-x-6 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-neutral-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-10 sm:h-10 bg-neutral-800 rounded-lg flex items-center justify-center text-neutral-400 hover:text-white hover:bg-primary-600 transition-all duration-300"
              data-cursor-hover
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.div
        className="border-t border-neutral-800 py-4 sm:py-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-neutral-400">
            <p>
              © {currentYear} Dr. mugil vanan Physiotherapy. All rights reserved.
            </p>
            <div className="flex items-center mt-2 md:mt-0">
              <span>Made with </span>
              <HiHeart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 mx-1" />
              <span>for better health</span>
            </div>
          </div>
        </div>
      </motion.div>
      </div>
    </footer>
  )
}