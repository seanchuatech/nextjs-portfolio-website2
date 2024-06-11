import Image from 'next/image'

const About = () => {
  return (
    <section className="divide-y divide-slate-300 divide-dashed" id='about'>
        <div className="container mx-auto p-4 py-20">
            <h1 className="mb-4 text-5xl font-medium">
                About me    
            </h1>
            <div className='grid grid-cols-2 gap-4 min-h-40'>
                <div className="flex flex-col">
                    <p className="mb-8 text-lg tracking-wide">
                        I&apos;m a technical officer with a passion for creating things online. That&apos;s why I&apos;m currently on a mission to transition into the world of full-stack web development! To make this jump, I&apos;m actively learning to code through free resources like The Odin Project and freeCodeCamp.
                    </p>
                    
                    <p className="mb-8 text-lg tracking-wide">
                        I&apos;m a technical officer with a passion for creating things online. That&apos;s why I&apos;m currently on a mission to transition into the world of full-stack web development! To make this jump, I&apos;m actively learning to code through free resources like The Odin Project and freeCodeCamp.
                    </p>

                    <p className="mb-8 text-lg tracking-wide">
                        I&apos;m a technical officer with a passion for creating things online. That&apos;s why I&apos;m currently on a mission to transition into the world of full-stack web development! To make this jump, I&apos;m actively learning to code through free resources like The Odin Project and freeCodeCamp.
                    </p>
                </div>
                <div className="justify-self-end">
                    <Image
                        src="/coding.webp"
                        alt="Picture of the author"
                        width={600}
                        height={600}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About