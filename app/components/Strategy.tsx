import Image from 'next/image'

const Strategy = () => {
  return (
    <section className="" id='strategy'>
        <div className="container mx-auto p-4 py-20">
            <h1 className="mb-4 text-5xl font-medium">
                Strategy 
            </h1>
            <div className="flex gap-4">
                <div className='w-1/3 aspect-square bg-gray-900 p-5 border-2 border-slate-800 rounded-md'>
                    <Image
                        src="/collaborating.png"
                        alt="Picture of the author"
                        width={600}
                        height={900}
                        className='rounded-md'
                    />
                    <h2 className='p-2 text-lg font-medium'>Planning & Analysis</h2>
                    <p className="p-2 text-base">
                        Before diving into code, I carefully map out my website&apos;s purpose, target audience, and desired features. This ensures a clear direction and focus throughout development.
                    </p>
                </div>

                <div className='w-1/3 aspect-square bg-gray-900 p-5 border-2 border-slate-800 rounded-md'>
                    <Image
                        src="/coding.png"
                        alt="Picture of the author"
                        width={600}
                        height={600}
                        className='rounded-md'
                    />
                    <h2 className='p-2 text-lg font-medium'>Design & Development</h2>
                    <p className="p-2 text-base">
                        I bring my ideas to life through an iterative process of designing and building, constantly refining and adjusting to create a polished user experience.
                    </p>
                </div>

                <div className='w-1/3 aspect-square bg-gray-900 p-5 border-2 border-slate-800 rounded-md'>
                    <Image
                        src="/presenting.png"
                        alt="Picture of the author"
                        width={600}
                        height={200}
                        className='rounded-md'
                    />
                    <h2 className='p-2 text-lg font-medium'>Testing & Deployment</h2>
                    <p className="p-2 text-base">
                        Rigorous testing ensures a seamless experience for all users. Once I&apos;m confident in its functionality, I&apos;ll launch my site and share it with the world.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Strategy