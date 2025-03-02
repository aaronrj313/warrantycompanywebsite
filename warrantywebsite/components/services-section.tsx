"use client"
import { StickyScroll } from "./sticky-scroll-reveal"
import { Spotlight } from "./spotlight"
import CardSpotlightDemo from "./why-us-card"
import Image from "next/image"

const content = [
  {
    title: "Web Solutions",
    description:
      "We empower you to work together in real time with your team, clients, and stakeholders. Our platform is designed to streamline your workflow, enhance collaboration, and boost productivity. Whether you're managing a small team or a large organization, we ensure that our solutions are scalable and flexible to meet your unique needs.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="https://img.freepik.com/free-vector/vector-banner-website-development_107791-3339.jpg?t=st=1740868263~exp=1740871863~hmac=30ec57cb1421ff93590f61bc28c89f4ae77d20ff7a878c5a652a0e710617ba74&w=1480"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "AI Automation & Services",
    description:
      "We provide cutting-edge AI automation services that make your life easier. With our real-time tracking feature, you can see changes as they happen. We eliminate the confusion of version control by ensuring everyone is always working on the most recent version of your project. Our AI-powered tools automate repetitive tasks, analyze data, and provide insights to help you make better decisions.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://img.freepik.com/free-vector/artificial-intelligence-landing-page_52683-28644.jpg?t=st=1740868414~exp=1740872014~hmac=e1e2dec04b532f9f5a1841e7fc680ecd78ac39e7e7d65ae605669ce6bbad641c&w=1380"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Mobile App Development",
    description:
      "We specialize in creating custom mobile apps that bring your vision to life. Our platform ensures that you experience real-time updates and never stress about version control again. We keep your team aligned and your workflow uninterrupted, whether you're building a new app from scratch or improving an existing one.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        <Image
          src="https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg?t=st=1740868782~exp=1740872382~hmac=9a5895ddae433aa61afcf0336930e0de15447e5ed9fe55550ce3ca8e81124808&w=1380"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "UX/UI Design",
    description:
      "We create stunning and user-friendly UX/UI designs that captivate your audience. We craft interfaces that are visually appealing, intuitive, and easy to navigate. We believe that good design is the foundation of a great user experience, and we work closely with you to ensure that your product stands out in a crowded market.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="https://img.freepik.com/free-vector/gradient-ui-ux-elements-background_23-2149056159.jpg?t=st=1740868832~exp=1740872432~hmac=0645a9b4d948c1a2359779e7ca9e9c35679099467e7e20bd7123fac5461d3ad4&w=1380"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "IT Consulting",
    description:
      "We provide expert IT consulting services to guide you in making informed decisions about your technology strategy. We work closely with you to understand your business goals and recommend the best solutions to achieve them. We can implement new systems, optimize your infrastructure, and ensure that your business stays at the forefront of innovation.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="https://img.freepik.com/free-photo/person-working-html-computer_23-2150038853.jpg?t=st=1740868929~exp=1740872529~hmac=2d4e49a7fc21bd6b4107d5f47f6e91651e9cc30f0456d9fbcad276a53efd1ea3&w=1380"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
]
export default function ServiceSection() {
  return (
    <div className="h-[56rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden pb-36">
      <div className="p-1 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
        <h4 className="mt-72 font-sans-bold bg-clip-text text-transparent text-center text-6xl lg:text-6xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white">
          Our Best Services
        </h4>
        <p className="text-xl lg:text-3xl lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300 mb-24">
          Or Should We Say Forte.
        </p>
        <Spotlight />
        {/* Add a grid container with increased spacing */}
        <div className="grid grid-cols-4 md:grid-cols-4 gap-[420px] p-8">
          {/* Left side - CardSpotlightDemo */}
          <div className="md:col-span-1">
            <CardSpotlightDemo />
          </div>
          
          {/* Right side - StickyScroll */}
          <div className="md:col-span-3 ml-8">
            <StickyScroll content={content} />
          </div>
        </div>
      </div>
    </div>
  );
}

