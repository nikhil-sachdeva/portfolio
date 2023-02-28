import { Raleway } from '@next/font/google'
import Link from 'next/link';


const comfortaa = Raleway({ weight: "400", style: ['normal'], subsets: ['latin'] })
const ralewayBold = Raleway({ weight: "600", style: ['normal'], subsets: ['latin'] })

const LinkFloater = (props: any) => {
  return (
    <button className="nav-item group text-[#F9E0C8] hover:translate-y-2 font-extrabold transition  mx-2 text-[18px]">
      <div className='opacity-80 group-hover:opacity-100'>
        {props.title}
      </div>
      <div className='h-[2px] w-full bg-[#ff5074] scale-x-0 group-hover:scale-x-100 duration-200' />
    </button>
  )
}

export default function NavHeader() {
  return (
    <div className={"flex justify-between " + ralewayBold.className}>

      <div className="flex">

        <Link href={'/'}>
          <LinkFloater title={"home"} />
        </Link>

        <Link href={'/projects'}>
          <LinkFloater title={"projects"} />
        </Link>

        <Link href={'/blog'}>
          <LinkFloater title={"blog"} />

        </Link>

        <Link href={'/coming_soon'}>
          <LinkFloater title={"gallery"} />
        </Link>
      </div>

      <div className='flex'>
        <LinkFloater title={"why?"} />
        <LinkFloater title={"how"} />

      </div>
    </div>
  )
}
