import Head from 'next/head'
import Image from 'next/image'
import { Raleway } from '@next/font/google'
import Tippy from '@tippyjs/react/headless';
import styles from '@/styles/Home.module.css'


const comfortaa = Raleway({ weight: "400", style: ['normal'], subsets: ['latin'] })

export default function Home() {
  return (
    <>

      <div className="relative mx-48 mt-8">


        <div className={"flex justify-between " + comfortaa.className}>
            Coming Soon !
       </div>
      </div>
    </>
  )
}
