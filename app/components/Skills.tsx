import Image from 'next/image'
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaWordpress } from "react-icons/fa";
import { SiExpress, SiMongodb, SiMongoose, SiVercel } from "react-icons/si";
import { RiNextjsLine, RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";

const Skills = () => {
  return (
    <section className="" id='skills'>
        <div className="container mx-auto px-5 py-20">
            <h1 className="mb-4 text-4xl font-medium text-center sm:text-left">
                Skills 
            </h1>
            <div className="flex flex-col lg:flex-row gap-4">
                <div className="bg-gray-900 flex-grow flex-1 p-5 border-2 border-slate-800 rounded-md ">
                    <h2 className='text-center mb-3 text-xl'>Front-end</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        <div className="flex flex-col justify-center items-center gap-1 w-20 aspect-square">
                            <FaHtml5 className="text-4xl" />
                            <p className="text-sm">HTML</p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-1 w-20 aspect-square">
                            <FaCss3Alt className="text-4xl" />
                            <p className="text-sm">CSS</p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-1 w-20 aspect-square">
                            <RiJavascriptFill className="text-4xl" />
                            <p className="text-sm">JavaScript</p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-1 w-20 aspect-square">
                            <BiLogoTypescript className="text-4xl" />
                            <p className="text-sm">TypeScript</p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-1 w-20 aspect-square">
                            <FaReact className="text-4xl" />
                            <p className="text-sm">ReactJS</p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-1 w-20 aspect-square">
                            <RiNextjsLine  className="text-4xl" />
                            <p className="text-sm">NextJS</p>
                        </div>
                        
                    </div>
                </div>
                <div className="bg-gray-900 flex-grow flex-1 p-5 border-2 border-slate-800 rounded-md sm:max-md:flex sm:max-md:flex-col sm:max-md:items-center">
                    <h2 className='text-center mb-3 text-xl'>Back-end</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        <div className="flex flex-col justify-center items-center gap-1 w-20 aspect-square">
                            <FaNodeJs className="text-4xl" />
                            <p className="text-sm">NodeJS</p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-1 w-20 aspect-square">
                            <SiExpress className="text-4xl" />
                            <p className="text-sm">Express</p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-1 w-20 aspect-square">
                            <SiMongodb className="text-4xl" />
                            <p className="text-sm">MongoDB</p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-1 w-20 aspect-square">
                            <SiMongoose className="text-4xl" />
                            <p className="text-sm">Mongoose</p>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-900 flex-grow flex-1 p-5 border-2 border-slate-800 rounded-md sm:max-md:flex sm:max-md:flex-col sm:max-md:items-center">
                    <h2 className='text-center mb-3 text-xl'>Others</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        <div className="flex flex-col justify-center items-center gap-1 w-20 aspect-square">
                            <FaGitAlt className="text-4xl" />
                            <p  className="text-sm">Git</p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-1 w-20 aspect-square">
                            <SiVercel className="text-4xl" />
                            <p className="text-sm">Vercel</p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-1 w-20 aspect-square">
                            <FaWordpress className="text-4xl" />
                            <p className="text-sm">WordPress</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Skills