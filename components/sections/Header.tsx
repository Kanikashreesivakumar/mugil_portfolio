'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
]

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-lg border-b border-neutral-200/20' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-violet-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">SJ</span>
          </div>
          <span className="text-xl font-display font-semibold text-neutral-800">
            Dr. mugil vanan
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="text-neutral-700 hover:text-primary-600 font-medium transition-colors duration-300 relative group"
              data-cursor-hover
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
          
          {/* CTA Button */}
          <motion.button
            className="bg-primary-600 text-white px-6 py-3 rounded-full font-medium hover:bg-primary-700 transition-all duration-300 hover:shadow-lg hover:scale-105"
            data-cursor-hover
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Appointment
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors duration-300"
          onClick={toggleMenu}
          data-cursor-hover
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? (
            <HiX className="w-6 h-6 text-neutral-700" />
          ) : (
            <HiMenu className="w-6 h-6 text-neutral-700" />
          )}
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <div style={{ overflow: 'hidden' }}>
        <motion.div
          className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-neutral-200/20"
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
            height: isMenuOpen ? 'auto' : 0,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <div className="container mx-auto px-6 py-6 space-y-4">
          {navItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="block text-neutral-700 hover:text-primary-600 font-medium py-2 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: isMenuOpen ? 1 : 0, 
                x: isMenuOpen ? 0 : -20 
              }}
              transition={{ delay: isMenuOpen ? 0.1 * index : 0 }}
            >
              {item.label}
            </motion.a>
          ))}
          <motion.button
            className="w-full bg-primary-600 text-white px-6 py-3 rounded-full font-medium hover:bg-primary-700 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isMenuOpen ? 1 : 0, 
              y: isMenuOpen ? 0 : 20 
            }}
            transition={{ delay: isMenuOpen ? 0.3 : 0 }}
          >
            
          </motion.button>
        </div>
        </motion.div>
      </div>
    </motion.header>
  )
}