"use client"
import { ShootingStars } from "./shooting-stars"
import { StarsBackground } from "./stars-background"
import { FlipWords } from "./flip-words"


export default function HeroSection() {


    const words = ["Modern", "Beautiful", "Awesome", "Better"]

  return (
    <div className="h-[40rem] flex items-center px-0 w-full">
    <div className="w-full ml-0">
    <div className="text-6xl text-white text-center">
      <h2 className="font-sans-bold font-bold mt-20">Let's amplify <br/>your digital identities & <br/>experiences make it </h2>
      <FlipWords words={words} />. <br />
      <StarsBackground />
      <ShootingStars />
    </div>
    <div className=" text-center text-xl mt-8 font-normal text-neutral-500">
    We provide cutting-edge digital solutions to help businesses thrive in the modern world. <br/>From custom-built websites to AI-powered automation, we bring technology and innovation together to drive your success.
    </div>


    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 space-x-0 md:space-x-4 justify-center mt-24">
        <button className="w-40 h-14 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm transform transition-transform duration-200 hover:scale-105">
          Book us now!
        </button>
        <button className="w-40 h-14 rounded-xl bg-white text-black border border-black transform transition-transform duration-200 hover:scale-105 text-sm"> Services </button>
    </div>


    <div className=" text-center text-xl mt-16 font-normal text-neutral-500">
    Trusted by founders, companies, and multiple aspiring individuals.
    </div>

    </div>
  </div>
  )
}

