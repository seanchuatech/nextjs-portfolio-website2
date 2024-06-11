import React from 'react'

const Footer = () => {
  return (
    <footer className='border-slate-700 bg-slate-700/25'>
        <div className='container mx-auto p-4 flex justify-between text-xs md:text-sm'>
            <div>
                <p>© 2024 <a href="/">Sean™</a>. All Rights Reserved.</p>
            </div>
            <div>
                <a href="https://github.com/seanchuatech" target="_blank"><span>GitHub</span></a>
            </div>
        </div>
    </footer>
  )
}

export default Footer