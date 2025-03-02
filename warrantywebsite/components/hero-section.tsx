"use client"
import { ShootingStars } from "./shooting-stars"
import { StarsBackground } from "./stars-background"
import { FlipWords } from "./flip-words"


export default function HeroSection() {

    const CheckIcon = () => {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
            fill="currentColor"
            strokeWidth="0"
          />
        </svg>
      )
    }

    const Step = ({ title }: { title: string }) => {
      return (
        <li className="flex gap-2 items-start text-center">
          <CheckIcon />
          <p className="text-white">{title}</p>
        </li>
      )
    }

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
        <button className="font-bold w-40 h-14 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm transform transition-transform duration-200 hover:scale-105">
          Book us now!
        </button>
        <button className="w-40 font-bold h-14 rounded-xl bg-white text-black border border-black transform transition-transform duration-200 hover:scale-105 text-sm"> Services </button>
    </div>




    <div className="text-center text-xl mt-16 font-normal text-neutral-500">
      <ul className="list-none mt-2 flex justify-center items-center">
        <Step title="Trusted by founders, companies, and multiple aspiring individuals." />
      </ul>
    </div>

    </div>
  </div>
  )
}

