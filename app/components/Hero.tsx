"use client";

import BaseButton from "./ui/BaseButton"
import { FaAnglesDown } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-900 to-blue-950">
        <div className="flex items-center justify-center h-screen">
            <div className="flex flex-col items-center max-w-3xl gap-5">
                <h1 className="text-7xl text-center font-semibold">Hello there!</h1>
                <h2 className="text-2xl text-center tracking-wider leading-normal">I&apos;m Sean, a full stack developer. I can jugle both front-end and back-end, but still working on some fancy tricks. Let&apos;s build something awesome together!</h2>
                <BaseButton onClick={() => console.log('Button clicked!')}>Check out my work</BaseButton>
            </div>
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 opacity-80 hover:opacity-100 transition-opacity duration-300 animate-bounce">
              <FaAnglesDown className="text-4xl"/>
            </div>

        </div>
    </section>
  )
}

export default Hero