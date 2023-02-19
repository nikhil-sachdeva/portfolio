import Head from 'next/head'
import Image from 'next/image'
import { Raleway } from '@next/font/google'
import Tippy from '@tippyjs/react/headless';
import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import profilePic from '../../public/images/me-1.png'


const comfortaa = Raleway({ weight: "400", style: ['normal'], subsets: ['latin'] })
const ralewayBold = Raleway({ weight: "600", style: ['normal'], subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative mx-48 mt-8 text-[#F9E0C8]">


        <div className={"flex justify-between " + ralewayBold.className}>

          <div className="flex">

              <button className="nav-item group text-[#F9E0C8] font-extrabold transition  mx-2 text-[18px]">
                <div>
                  home
                </div>
                <div className='h-[2px] w-full bg-[#FF8AA2] scale-x-0 group-hover:scale-x-100 duration-200' />
              </button>

            <Link href={'/coming_soon'}>
            <button className="group  font-extrabold transition  mx-2 text-[18px]">
              <div>
                projects
              </div>
              <div className='h-[2px] w-full bg-[#FF8AA2] scale-x-0 group-hover:scale-x-100 duration-200' />
            </button></Link>

            <button className="group text-[#F9E0C8] font-extrabold transition  mx-2 text-[18px]">
              <div>
                blog
              </div>
              <div className='h-[2px] w-full bg-[#FF8AA2] scale-x-0 group-hover:scale-x-100 duration-200' />
            </button>

            <button className="group text-[#F9E0C8] font-extrabold transition  mx-2 text-[18px]">
              <div>
                gallery
              </div>
              <div className='h-[2px] w-full bg-[#FF8AA2] scale-x-0 group-hover:scale-x-100 duration-200' />
            </button>
          </div>

          <div>
            <button className="nav-item mx-2 text-[15px]">
              why?
            </button>
            <button className="nav-item mx-2 text-[15px]">
              how?
            </button>
          </div>
        </div>
        <div className={"flex mt-32 " + comfortaa.className}>
        <div className="w-[300px] h-[500px] mr-14 bg-white rounded">

              <Image
                    className="p-2 rounded"
                    src={profilePic}
                    alt="Picture of the author"
                    width={500}
                    height={500}/>
                    <div>
                    <div className='p-2 text-[13px] text-black'>
                    hi, i’m nikhil. I love building delightful interactions. i work as a ui/mobile engineer at Betafi. i also write and sometimes make open-source libraries. apart from this, i love travelling and curating delhi indie music
                    </div>
                    <div className='flex mt-4 mx-8'>
                      <div className='mx-2 bg-[#F9E0C8] rounded-full w-12 h-12'></div>
                      <div className='mx-2 bg-blue-500 rounded-full w-12 h-12'></div>
                      <div className='mx-2 bg-blue-500 rounded-full w-12 h-12'></div>
                      <div className='mx-2 bg-blue-500 rounded-full w-12 h-12'></div>
                    </div>
                    </div>
                </div>
          <div className="text-[48px] w-1/2">
            <span>
              {"if you're not pouring your soul into it,"}
            </span>
            <span className="italic text-[#FF9A9A]">
              {' '}why bother?
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
