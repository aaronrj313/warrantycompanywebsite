"use client"
import { AnimatedTooltip } from "./animated-tooltip"
import { motion } from "framer-motion"

const people = [
  {
    id: 1,
    name: "Mr. Leong",
    designation: "CEO",
    description: "Founder and visionary businessman, leading the company's strategy and growth.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Hunter",
    designation: "COO",
    description: "Co-founder with expertise across all IT domains, driving innovation and operations.",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Sebastian",
    designation: "CTO",
    description: "Co-founder, AI expert, and tech leader specializing in AI technologies and both front-end and back-end development.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Aaron AR",
    designation: "Software Engineer",
    description: "React front-end specialist, focused on dynamic web applications.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Aaron 3A",
    designation: "Software Engineer",
    description: "Front-end developer, dedicated to seamless and engaging user interfaces.",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "Jacynth",
    designation: "Software Engineer",
    description: "Front-end developer and tester, ensuring quality through automation.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    name: "Victor Paul",
    designation: "Software Engineer",
    description: "Front-end developer, creating visually stunning and high-performance websites.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]

export default function AboutUsSection() {
  return (
    <div className="py-20 px-4 md:px-8">
      <div className="text-center mb-20">
        <h2 className="font-sans-bold bg-clip-text text-transparent text-center text-6xl lg:text-6xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white">
          Meet Our Team
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mt-4">
          The talented individuals behind our success
        </p>
      </div>

      {/* Team members display with AnimatedTooltip */}
      <div className="flex flex-row items-center justify-center mb-16 w-full">
        <AnimatedTooltip items={people} />
      </div>

      {/* Team member cards with descriptions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {people.map((person) => (
          <motion.div
            key={person.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: person.id * 0.1 }}
            viewport={{ once: true }}
            className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-16 w-16 rounded-full overflow-hidden">
                <img 
                  src={person.image} 
                  alt={person.name} 
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{person.name}</h3>
                <p className="text-blue-400">{person.designation}</p>
              </div>
            </div>
            <p className="text-neutral-400">{person.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}