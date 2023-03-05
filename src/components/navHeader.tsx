import { Raleway } from '@next/font/google'
import Link from 'next/link';
import * as HoverCard from '@radix-ui/react-hover-card';


const raleway = Raleway({ weight: "100", style: ['normal'], subsets: ['latin'] })
const ralewayBold = Raleway({ weight: "600", style: ['normal'], subsets: ['latin'] })

const LinkFloater = (props: any) => {
  return (
    <button className="nav-item relative group text-[#F9E0C8] hover:translate-y-2 font-extrabold transition  mx-2 text-[18px]">
      <div className='opacity-80 group-hover:opacity-100'>
        {props.title}
      </div>
      <div className='h-[2px] w-full bg-[#ff5074] scale-x-0 group-hover:scale-x-100 duration-200' />
      {props.hover && props.hoverContent}
    </button>
  )
}

let howHoverContent = (
<div className={'group-hover:block shadow-[#ff5074] shadow-lg z-10 hidden absolute bg-black top-12 rounded-md text-[13px] w-48 p-2 right-[-4.5rem] text-white ' + raleway.className}>
        This is a WIP portfolio project developed in <span className={ralewayBold.className}>Next + React</span>, with <span className={ralewayBold.className}>Tailwind</span> support. The project is deployed on <span className={ralewayBold.className}>Vercel</span> and is designed in <span className={ralewayBold.className}>Figma.</span> <br></br>
        At some point I might write in detail about eng and design decisions.
        </div>
)

let whyHoverContent = (
  <div className={'group-hover:block shadow-[#ff5074] shadow-lg opacity-90 hidden absolute bg-black top-12 rounded-md text-[13px] w-48 p-2 right-[-4.5rem] text-white ' + raleway.className}>
        Why shall a mortal buy space on digital real estate?
          </div>
  )

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

        {/* <Link href={'/coming_soon'}>
          <LinkFloater title={"gallery"} />
        </Link> */}
        <Link rel="noreferrer" target="_blank" href={'https://read.cv/nikhilsachdeva'}>
          <LinkFloater title={"resume"} />
        </Link>
      </div>

      <div className='flex'>
        {/* <LinkFloater title={"why?"} hover={true} hoverContent={whyHoverContent} /> */}
    <LinkFloater title={"how?"} hover={true} hoverContent={howHoverContent} />


      </div>
    </div>
  )
}
