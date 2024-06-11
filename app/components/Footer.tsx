import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-slate-600'>
        <div className='container mx-auto p-4 flex justify-between'>
            <div>
                <p>© 2024 <a href="/">Sean™</a>. All Rights Reserved.</p>
            </div>
            <div>
                <a href="https://github.com/seanchuatech" target="_blank"><span>GitHub account</span></a>
            </div>
        </div>
    </footer>
  )
}

export default Footer