import { motion } from 'framer-motion'

export function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 dark:from-gray-800 dark:via-gray-900 dark:to-black text-white min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold mb-4">Welcome to GDG Dr. AIT</h1>
          <p className="text-xl mb-8">Empowering students through technology and innovation</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-gray-600 px-8 py-3 rounded-full font-semibold text-lg shadow-lg"
          >
            Join Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}