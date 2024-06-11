import Image from 'next/image'

const Strategy = () => {
  return (
    <section className="" id='strategy'>
        <div className="container mx-auto px-5 py-20">
            <h1 className="mb-4 text-4xl font-medium text-center sm:text-left">
                Strategy 
            </h1>
            <div className="flex flex-col gap-4 lg:flex-row">
                <div className='flex flex-col items-center lg:w-1/3 lg:aspect-square bg-gray-900 p-5 border-2 border-slate-800 rounded-md'>
                    <Image
                        src="/collaborating.png"
                        alt="Picture of the author"
                        width={600}
                        height={900}
                        className='rounded-md'
                    />
                    <h2 className='p-2 text-base md:text-lg font-medium text-center'>Planning & Analysis</h2>
                    <p className="p-2 text-sm md:text-base text-center font-light">
                        Before diving into code, I carefully map out my website&apos;s purpose, target audience, and desired features. This ensures a clear direction and focus throughout development.
                    </p>
                </div>

                <div className='flex flex-col items-center lg:w-1/3 lg:aspect-square bg-gray-900 p-5 border-2 border-slate-800 rounded-md'>
                    <Image
                        src="/coding.png"
                        alt="Picture of the author"
                        width={600}
                        height={600}
                        className='rounded-md'
                    />
                    <h2 className='p-2 text-base md:text-lg font-medium text-center'>Design & Development</h2>
                    <p className="p-2 text-sm md:text-base text-center font-light">
                        I bring my ideas to life through an iterative process of designing and building, constantly refining and adjusting to create a polished user experience.
                    </p>
                </div>

                <div className='flex flex-col items-center lg:w-1/3 lg:aspect-square bg-gray-900 p-5 border-2 border-slate-800 rounded-md'>
                    <Image
                        src="/presenting.png"
                        alt="Picture of the author"
                        width={600}
                        height={200}
                        className='rounded-md'
                    />
                    <h2 className='p-2 text-base md:text-lg font-medium text-center'>Testing & Deployment</h2>
                    <p className="p-2 text-sm md:text-base text-center font-light">
                        Rigorous testing ensures a seamless experience for all users. Once I&apos;m confident in its functionality, I&apos;ll launch my site and share it with the world.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Strategy