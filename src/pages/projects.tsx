import Head from 'next/head'
import Image from 'next/image'
import { Raleway } from '@next/font/google'
import Tippy from '@tippyjs/react/headless';
import styles from '@/styles/Home.module.css'
import NavHeader from '@/components/navHeader';
import { projects } from '@/data/projects';
import Link from 'next/link';

const comfortaa = Raleway({ weight: "400", style: ['normal'], subsets: ['latin'] })

export default function ComingSoon() {
  return (
      <div className="relative mx-40 mt-8">

    <NavHeader/>


        <div className='sm:flex mt-20'>
        {projects.map((project, idx) => {
            return(
                <Link key={idx} href={project.link} rel="noreferrer" target="_blank" className='group rounded-xl border border-white h-[520px] w-[350px] p-4 mx-4 relative opacity-80 hover:opacity-100 scale-95 hover:scale-100 duration-200'>

                    <div className='w-full flex justify-center'>
                        <Image width={200} height={200} alt="project_image" src={project.image_url}/>
                        </div>
                    <div className='absolute bottom-4'>
                        <div className='group-hover:text-[#ff5074]'>
                    {project.name}
                    </div>
                    <div className='text-[15px]'>
                        {project.title}
                        </div>
                        <div className='text-gray-500 text-[12px]'>
                            {project.description}
                        </div>
                    </div>
                </Link>
            )
        })}
        </div>

      </div>
  )
}
