'use client'
import copy from 'clipboard-copy';
import { useState } from 'react';
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleClick = () => {
    copy('seanchuatech@gmail.com');
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1500); // Reset after 1.5 seconds
  };

  return (
    <section className="" id='contact'>
        <div className="container mx-auto px-5 py-20">
          <h1 className="mb-4 text-4xl font-medium text-center sm:text-left">
            Contact 
          </h1>
          <div>
            <p className='text-center text-xl sm:text-left md:text-2xl py-2'>
              Let&apos;s collaborate on your next project! I&apos;m excited to discuss how my skills and experience can help you achieve your goals.
            </p>
            <button className="text-center text-lg sm:text-left md:text-xl py-2 flex items-center mx-auto sm:mx-0" onClick={handleClick}>
              <MdEmail className="mr-2" /> {/* Add margin-right for spacing */}
              <p>seanchuatech@gmail.com</p>
            </button>
            <div className='h-8'>
            {isCopied && (
              <span className="text-sm text-zinc-300">
                Email Address Copied!
              </span>
            )}
            </div>
            
          </div>
        </div>
    </section>
  )
}

export default Contact