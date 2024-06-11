import Image from 'next/image'
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaWordpress } from "react-icons/fa";
import { SiExpress, SiMongodb, SiMongoose, SiJavascript } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";

const Skills = () => {
  return (
    <section className="" id='skills'>
        <div className="container mx-auto p-4 py-20">
            <h1 className="mb-4 text-5xl font-medium">
                Skills 
            </h1>
            <div className="flex gap-4 min-h-40">
                <div className="bg-gray-900 flex-grow flex-1 p-5 border-2 border-slate-800 rounded-md">
                    <h2 className='text-center mb-3 text-xl'>Front-end</h2>
                    {/* <div className="flex flex-wrap gap-8 justify-around"> */}
                    <div className="grid grid-cols-5 gap-4">
                        <div className="flex flex-col justify-center items-center gap-1">
                            <FaHtml5 className="text-4xl" />
                            <p className="text-sm">HTML</p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-1">
                            <FaCss3Alt className="text-4xl" />
                            <p className="text-sm">CSS</p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-1">
                            <SiJavascript className="text-4xl" />
                            <p className="text-sm">JavaScript</p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-1">
                            <FaReact className="text-4xl" />
                            <p className="text-sm">ReactJS</p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-1">
                            <RiNextjsLine  className="text-4xl" />
                            <p className="text-sm">NextJS</p>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-900 flex-grow flex-1 p-5 border-2 border-slate-800 rounded-md">
                    <h2 className='text-center mb-3 text-xl'>Back-end</h2>
                    <div className="grid grid-cols-4 gap-4">
                        <div className="flex flex-col justify-center items-center gap-1">
                            <FaNodeJs className="text-4xl" />
                            <p className="text-sm">NodeJS</p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-1">
                            <SiExpress className="text-4xl" />
                            <p className="text-sm">Express</p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-1">
                            <SiMongodb className="text-4xl" />
                            <p className="text-sm">MongoDB</p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-1">
                            <SiMongoose className="text-4xl" />
                            <p className="text-sm">Mongoose</p>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-900 flex-grow flex-1 p-5 border-2 border-slate-800 rounded-md">
                    <h2 className='text-center mb-3 text-xl'>Others</h2>
                    <div className="grid grid-cols-4 gap-4">
                        <div className="flex flex-col justify-center items-center gap-1">
                            <FaGitAlt className="text-4xl" />
                            <p  className="text-sm">Git</p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-1">
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