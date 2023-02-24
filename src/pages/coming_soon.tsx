import Head from 'next/head'
import Image from 'next/image'
import { Raleway } from '@next/font/google'
import Tippy from '@tippyjs/react/headless';
import styles from '@/styles/Home.module.css'
import NavHeader from '@/components/navHeader';


const comfortaa = Raleway({ weight: "400", style: ['normal'], subsets: ['latin'] })

export default function ComingSoon() {
  return (
      <div className="relative mx-40 mt-8">

    <NavHeader/>
    <div className="mt-24 w-full flex justify-center">
    <iframe className='pointer-events-none' src="https://giphy.com/embed/87h8zzOcPWSbcmXI54" height="400px" width="600px" allowFullScreen></iframe>
    </div>

    <div className={"flex justify-center w-full my-2 text-gray-500 hover:text-white " + comfortaa.className}>
      <div>
      friends, romans, countrymen - work is in progress
      </div>
    </div>



      </div>
  )
}
