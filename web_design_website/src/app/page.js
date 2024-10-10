'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, ArrowRight, Palette, Code, Zap } from 'lucide-react'
import Link from 'next/link'
import { Playfair_Display, Inter } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  const [mounted, setMounted] = useState(false)
  const { scrollYProgress } = useScroll()
  const projectsY = useTransform(scrollYProgress, [0, 0.2], [100, 0])
  const projectsOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])
  const scrollExploreOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className={`min-h-screen bg-stone-50 text-stone-800 ${inter.className}`}>
      <nav className="bg-stone-100 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className={`text-2xl font-bold text-stone-700 ${playfair.className}`}>YourName</Link>
          <ul className="flex space-x-8">
            <li><Link href="/about" className="hover:text-stone-600 transition-colors">About</Link></li>
            <li><Link href="/portfolio" className="hover:text-stone-600 transition-colors">Portfolio</Link></li>
            <li><Link href="/services" className="hover:text-stone-600 transition-colors">Services</Link></li>
            <li><Link href="/contact" className="hover:text-stone-600 transition-colors">Contact</Link></li>
          </ul>
        </div>
      </nav>

      <header className="container mx-auto px-4 py-12 text-center">
        <h1 className={`text-5xl font-bold mb-6 text-stone-800 ${playfair.className}`}>Crafting Digital Experiences</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-stone-600">Hi, I'm [Your Name]. I design and build websites that make businesses shine.</p>
        <Link 
          href="/contact"
          className="bg-stone-800 hover:bg-stone-700 text-stone-50 font-bold py-3 px-6 rounded-full inline-flex items-center transition-colors"
        >
          Let's Work Together
          <ArrowRight className="ml-2" />
        </Link>
      </header>

      <main className="container mx-auto px-4">
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          <div className="bg-stone-100 p-6 rounded-lg shadow-sm">
            <Palette className="text-stone-600 w-12 h-12 mb-4" />
            <h2 className={`text-2xl font-semibold mb-2 text-stone-800 ${playfair.className}`}>Creative Design</h2>
            <p className="text-stone-600">Crafting visually stunning and user-friendly interfaces that captivate your audience.</p>
          </div>
          <div className="bg-stone-100 p-6 rounded-lg shadow-sm">
            <Code className="text-stone-600 w-12 h-12 mb-4" />
            <h2 className={`text-2xl font-semibold mb-2 text-stone-800 ${playfair.className}`}>Clean Code</h2>
            <p className="text-stone-600">Developing robust and scalable websites using the latest web technologies.</p>
          </div>
          <div className="bg-stone-100 p-6 rounded-lg shadow-sm">
            <Zap className="text-stone-600 w-12 h-12 mb-4" />
            <h2 className={`text-2xl font-semibold mb-2 text-stone-800 ${playfair.className}`}>Fast Performance</h2>
            <p className="text-stone-600">Optimizing for speed to ensure your website loads quickly and runs smoothly.</p>
          </div>
        </motion.section>
        
        <motion.div
          style={{ opacity: scrollExploreOpacity }}
          className="text-center mb-16"
        >
          <ArrowDown className="inline-block text-stone-400 w-8 h-8 animate-bounce" />
          <p className="text-sm mt-2 text-stone-500">Scroll to explore</p>
        </motion.div>

        <motion.section 
          style={{ y: projectsY, opacity: projectsOpacity }}
          className="mb-24"
        >
          <h2 className={`text-3xl font-bold mb-8 text-center text-stone-800 ${playfair.className}`}>Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="aspect-video bg-stone-200 rounded-lg overflow-hidden">
                <img src="/placeholder.svg?height=360&width=640" alt="Project 1" className="w-full h-full object-cover" />
              </div>
              <h3 className={`text-xl font-semibold text-stone-700 ${playfair.className}`}>Project Name 1</h3>
              <p className="text-sm text-stone-600">Brief description of the project and your role in it.</p>
              <Link href="/portfolio" className="text-stone-600 hover:text-stone-800 inline-flex items-center">
                View Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="space-y-4">
              <div className="aspect-video bg-stone-200 rounded-lg overflow-hidden">
                <img src="/placeholder.svg?height=360&width=640" alt="Project 2" className="w-full h-full object-cover" />
              </div>
              <h3 className={`text-xl font-semibold text-stone-700 ${playfair.className}`}>Project Name 2</h3>
              <p className="text-sm text-stone-600">Brief description of the project and your role in it.</p>
              <Link href="/portfolio" className="text-stone-600 hover:text-stone-800 inline-flex items-center">
                View Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </motion.section>

        <section className="text-center mb-24">
          <h2 className={`text-3xl font-bold mb-6 text-stone-800 ${playfair.className}`}>Let's Create Something Beautiful</h2>
          <p className="mb-8 max-w-2xl mx-auto text-stone-600">I'm always excited to take on new projects and challenges. If you have an idea, let's bring it to life together.</p>
          <Link 
            href="/contact"
            className="bg-stone-800 hover:bg-stone-700 text-stone-50 font-bold py-3 px-6 rounded-full inline-flex items-center transition-colors"
          >
            Get in Touch
            <ArrowRight className="ml-2" />
          </Link>
        </section>
      </main>

      <footer className="bg-stone-800 text-stone-200 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} [Your Name]. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
