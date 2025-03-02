import { Vortex } from "./vortex"

export default function WhatAreYouWaitingFor() {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">Let's Collaborate!</h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          Reach Out to any of our members.  Contact us on LinkedIn&apos;Or you can email us at algolabs@google.com.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
        <button className="font-bold w-40 h-14 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm transform transition-transform duration-200 hover:scale-105">
          Book us now!
        </button>
        </div>
      </Vortex>
    </div>
  )
}

