"use client"
import { motion } from "framer-motion"
import { CardSpotlight } from "./card-spotlight"

export default function ProjectPlans() {
  return (
    <div className="py-20 px-4 md:px-8">
      <div className="text-center mb-20">
        <h2 className="font-sans-bold bg-clip-text text-transparent text-center text-6xl lg:text-6xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white">
          Our Plans
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mt-4">
          Choose the plan that works best for your business
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Intro Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-8 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Learn more about how Squarebox Technology works and how we can help you.
            </h3>
          </div>
          <button className="mt-6 bg-white text-black font-medium py-3 px-4 rounded-md hover:bg-white/90 transition-all">
            Book a 15-min intro call
          </button>
        </motion.div>

        {/* Standard Plan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative bg-neutral-900 border border-white/10 rounded-xl p-8 flex flex-col"
        >
          <div className="absolute top-0 left-0 right-0 flex justify-center -translate-y-1/2">
            <div className="bg-orange-600 text-white text-sm font-medium px-4 py-1 rounded-full">
              Recommended
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-white text-center mt-4">Standard</h3>
          
          <div className="text-center my-6">
            <div className="text-neutral-400 text-sm">RM</div>
            <div className="text-5xl font-bold text-white">8,999</div>
            <div className="text-neutral-400 text-sm mt-1">Every month</div>
            <div className="text-neutral-400 text-xs mt-2">
              Limited time offer (Ori. Price RM16,999)
            </div>
          </div>
          
          <button className="bg-orange-600 text-white font-medium py-3 px-4 rounded-md hover:bg-orange-700 transition-all">
            Get Started
          </button>
          
          <div className="mt-8 space-y-4 text-sm">
            <div className="text-white text-center">One engineer & project manager</div>
            <div className="text-white text-center">No fix requirements</div>
            <div className="text-white text-center">Mobile or web app development</div>
            <div className="text-white text-center">Unlimited modules</div>
            <div className="text-white text-center">Unlimited supports</div>
            <div className="text-white text-center">AWS hosting</div>
            <div className="text-white text-center">In-house developers</div>
            <div className="text-white text-center">Pause or cancel anytime</div>
          </div>
        </motion.div>

        {/* Pro Plan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-8 flex flex-col"
        >
          <h3 className="text-xl font-bold text-white text-center mt-4 flex items-center justify-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="w-5 h-5 text-yellow-500 mr-2"
            >
              <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
            </svg>
            Pro
          </h3>
          
          <div className="text-center my-6">
            <div className="text-neutral-400 text-sm">RM</div>
            <div className="text-5xl font-bold text-white">15,999</div>
            <div className="text-neutral-400 text-sm mt-1">Every month</div>
            <div className="text-neutral-400 text-xs mt-2">
              Limited time offer (Ori. Price RM16,999)
            </div>
          </div>
          
          <button className="bg-orange-600 text-white font-medium py-3 px-4 rounded-md hover:bg-orange-700 transition-all">
            Get Started
          </button>
          
          <div className="mt-8 space-y-4 text-sm">
            <div className="text-white text-center">Two engineers & one project manager</div>
            <div className="text-white text-center">No fix requirements</div>
            <div className="text-white text-center">Mobile or app development</div>
            <div className="text-white text-center">Unlimited modules</div>
            <div className="text-white text-center">Unlimited supports</div>
            <div className="text-white text-center">AWS hosting</div>
            <div className="text-white text-center">In-house developers</div>
            <div className="text-white text-center">Pause or cancel anytime</div>
          </div>
        </motion.div>
      </div>
      
      <div className="text-center text-xs text-neutral-500 mt-8">
        * We will use Stripe payment gateway for eCommerce project.
      </div>
    </div>
  )
}