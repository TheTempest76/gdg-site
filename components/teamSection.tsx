import { motion } from 'framer-motion'
import Image from 'next/image'

const teamMembers = [
    { role: 'Lead', image: '/lead.jpeg' },
    { role: 'Cloud Lead', image: '/cloud.jpeg' },
    { role: 'Design Lead', image: '/design.jpeg' },
    { role: 'Digital Marketing Lead', image: '/dm.jpeg' },
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
                            className="bg-white p-6 rounded-lg shadow-md text-center place-content-end "
                        >
                            <Image src={member.image} alt={member.role} width={128} height={128} className="rounded-full mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2 text-gray-600  ">{member.role}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
