import Link from 'next/link'
import React from 'react'
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='border-slate-700 bg-slate-700/25'>
        <div className='container mx-auto p-4 flex justify-between text-xs md:text-sm'>
            <div>
                <p>© 2024 <a href="/">Sean™</a>. All Rights Reserved.</p>
            </div>
            <div>
            
                <Link href="https://github.com/seanchuatech" target="_blank" className='flex gap-1 items-center'><FaGithub /><span>GitHub</span></Link>
            </div>
        </div>
    </footer>
  )
}

export default Footer