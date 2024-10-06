import { motion } from 'framer-motion'

const teamMembers = [
  { name: 'John Doe', role: 'Lead', image: '/placeholder.svg?height=200&width=200' },
  { name: 'Jane Smith', role: 'Cloud Lead', image: '/placeholder.svg?height=200&width=200' },
  { name: 'Mike Johnson', role: 'Design Lead', image: '/placeholder.svg?height=200&width=200' },
  { name: 'Sarah Brown', role: 'Web Dev lead', image: '/placeholder.svg?height=200&width=200' },
]

export function TeamSection() {
  return (
    <section id="team" className="py-20 ">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-12">Core Team</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-600">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}