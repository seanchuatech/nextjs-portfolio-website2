import Image from 'next/image'
import Link from 'next/link'
import { FaHtml5 } from 'react-icons/fa6'

const Projects = () => {
  return (
    <section className="">
        <div className="container mx-auto p-4 py-20">
            <h1 className="mb-4 text-5xl font-medium">
                Projects 
            </h1>
            <div className="flex gap-4">
                <div className='bg-gray-900 p-5 border-2 border-slate-800 rounded-md'>
                    <Image
                        src="/coding.webp"
                        alt="Picture of the author"
                        width={600}
                        height={600}
                        className='rounded-md'
                    />
                    <h2 className='p-2 text-lg font-medium'>Hello! This is a project title.</h2>
                    <p className="p-2 text-base">
                        I&apos;m a technical officer with a passion for creating things online. That&apos;s why I&apos;m currently on a mission to transition into the world of full-stack web development!
                    </p>
                    <div className='p-2 flex gap-2'>
                        <Link href={'/'} className=''><FaHtml5 className="text-4xl" /></Link>
                        <Link href={'/'} className=''><FaHtml5 className="text-4xl" /></Link>
                        <Link href={'/'} className=''><FaHtml5 className="text-4xl" /></Link>
                        <Link href={'/'} className=''><FaHtml5 className="text-4xl" /></Link>
                    </div>
                    <Link href={'/'} className=' pl-2' >Github</Link>
                </div>

                <div className='bg-gray-900 p-5 border-2 border-slate-800 rounded-md'>
                    <Image
                        src="/coding.webp"
                        alt="Picture of the author"
                        width={600}
                        height={600}
                        className='rounded-md'
                    />
                    <h2 className='p-2 text-lg font-medium'>Hello! This is a project title.</h2>
                    <p className="p-2 text-base">
                        I&apos;m a technical officer with a passion for creating things online. That&apos;s why I&apos;m currently on a mission to transition into the world of full-stack web development!
                    </p>
                    <div className='p-2 flex gap-2'>
                        <Link href={'/'} className=''><FaHtml5 className="text-4xl" /></Link>
                        <Link href={'/'} className=''><FaHtml5 className="text-4xl" /></Link>
                        <Link href={'/'} className=''><FaHtml5 className="text-4xl" /></Link>
                        <Link href={'/'} className=''><FaHtml5 className="text-4xl" /></Link>
                    </div>
                    <Link href={'/'} className=' pl-2' >Github</Link>
                </div>

                <div className='bg-gray-900 p-5 border-2 border-slate-800 rounded-md'>
                    <Image
                        src="/coding.webp"
                        alt="Picture of the author"
                        width={600}
                        height={600}
                        className='rounded-md'
                    />
                    <h2 className='p-2 text-lg font-medium'>Hello! This is a project title.</h2>
                    <p className="p-2 text-base">
                        I&apos;m a technical officer with a passion for creating things online. That&apos;s why I&apos;m currently on a mission to transition into the world of full-stack web development!
                    </p>
                    <div className='p-2 flex gap-2'>
                        <Link href={'/'} className=''><FaHtml5 className="text-4xl" /></Link>
                        <Link href={'/'} className=''><FaHtml5 className="text-4xl" /></Link>
                        <Link href={'/'} className=''><FaHtml5 className="text-4xl" /></Link>
                        <Link href={'/'} className=''><FaHtml5 className="text-4xl" /></Link>
                    </div>
                    <Link href={'/'} className=' pl-2' >Github</Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects