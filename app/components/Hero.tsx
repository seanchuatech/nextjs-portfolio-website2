"use client";

import Link from "next/link";
import BaseButton from "./ui/BaseButton"
import { FaAnglesDown } from "react-icons/fa6";

const Hero = () => {
  return (
    // //  bg-gradient-to-r from-blue-900 to-blue-950
    <section className="" id="home"> 
        <div className="flex items-center justify-center h-screen px-5">
            <div className="flex flex-col items-center max-w-3xl gap-5">
                <h1 className="text-4xl md:text-7xl text-center font-semibold">Hello there!</h1>
                <h2 className="text-lg md:text-2xl text-center tracking-wider leading-normal">I&apos;m Sean, a full stack developer. I can juggle both front-end and back-end, and I&apos;m always eager to learn new tricks. Let&apos;s build something awesome together!</h2>
                <Link href="#contact">
                  <BaseButton onClick={() => console.log('Button clicked!')}>Contact me</BaseButton>
                </Link>
            </div>
            <div className="absolute bottom-12 transform -translate-x-1/2 opacity-80 hover:opacity-100 transition-opacity duration-300 animate-bounce">
              <FaAnglesDown className="text-4xl"/>
            </div>
        </div>
    </section>
  )
}

export default Hero