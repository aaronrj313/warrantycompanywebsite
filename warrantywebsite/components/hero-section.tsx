"use client"
import { ShootingStars } from "./shooting-stars"
import { StarsBackground } from "./stars-background"
import { FlipWords } from "./flip-words"


export default function HeroSection() {


    const words = ["Modern", "Beautiful", "Awesome", "Better"]

  return (
    <div className="h-[40rem] flex items-center px-4 w-full">
    <div className="w-full ml-16">
    <div className="text-7xl font-bold text-white">
    We want to amplify <br/>your digital identities & <br/>experiences make it
      <br/>
    <FlipWords words={words} />. <br />
    <StarsBackground />
    <ShootingStars />
    </div>
    <div className=" text-xl mt-16 font-normal text-neutral-500">
    Copy paste the most trending components and use them in your <br/> websites without having to worry about styling and animations.
    </div>

    </div>
  </div>
  )
}

