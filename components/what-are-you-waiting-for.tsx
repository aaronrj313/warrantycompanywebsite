import ContactUsForm from "./contactus-form"
import { Vortex } from "./vortex"

export default function WhatAreYouWaitingFor() {
    return (
        <div className="w-[calc(100%-4rem)] mx-auto rounded-md h-screen overflow-hidden">
          <Vortex
            backgroundColor="black"
            rangeY={800}
            particleCount={500}
            baseHue={120}
            className="flex items-center justify-center px-2 md:px-10 py-4 w-full h-full"
          >
            <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-6xl gap-8 md:gap-16">
              {/* Left Side - Text Content */}
              <div className="flex-1 space-y-6 text-left">
                <h2 className="text-white text-2xl md:text-6xl font-bold">
                  Let's start collaborating!
                </h2>
                <p className="text-white text-sm md:text-xl max-w-md">
                  Contact us through LinkedIn. Leave us an Email.
                  Or simply, fill out this form!
                </p>
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <button className="font-bold w-40 h-14 rounded-xl bg-black border border-white text-white text-sm transform transition-transform duration-200 hover:scale-105">
                    Book us now!
                  </button>
                </div>
              </div>
    
              {/* Vertical Divider - Visible on medium screens and up */}
              <div className="hidden md:block w-px h-64 bg-gray-600" />
    
              {/* Right Side - Form */}
              <div className="flex-1 w-full max-w-lg">
                <ContactUsForm />
              </div>
            </div>
          </Vortex>
        </div>
      )
}

