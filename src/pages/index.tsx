import Head from 'next/head'
import Image from 'next/image'
import { Raleway } from '@next/font/google'
import Link from 'next/link';
import profilePic from '../../public/images/me-1.png';

const comfortaa = Raleway({ weight: "400", style: ['normal'], subsets: ['latin'] })
const ralewayBold = Raleway({ weight: "600", style: ['normal'], subsets: ['latin'] })


const LinkedInIcon = () => {
  return (
    <svg width="16" height="16" className='m-auto' viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_68)">
        <path d="M44.4469 0H3.54375C1.58437 0 0 1.54688 0 3.45938V44.5312C0 46.4437 1.58437 48 3.54375 48H44.4469C46.4062 48 48 46.4438 48 44.5406V3.45938C48 1.54688 46.4062 0 44.4469 0ZM14.2406 40.9031H7.11563V17.9906H14.2406V40.9031ZM10.6781 14.8688C8.39062 14.8688 6.54375 13.0219 6.54375 10.7437C6.54375 8.46562 8.39062 6.61875 10.6781 6.61875C12.9563 6.61875 14.8031 8.46562 14.8031 10.7437C14.8031 13.0125 12.9563 14.8688 10.6781 14.8688ZM40.9031 40.9031H33.7875V29.7656C33.7875 27.1125 33.7406 23.6906 30.0844 23.6906C26.3812 23.6906 25.8187 26.5875 25.8187 29.5781V40.9031H18.7125V17.9906H25.5375V21.1219H25.6312C26.5781 19.3219 28.9031 17.4188 32.3625 17.4188C39.5719 17.4188 40.9031 22.1625 40.9031 28.3313V40.9031Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_17_68">
          <rect width="48" height="48" fill="white" />
        </clipPath>
      </defs>
    </svg>

  )
}

const TwitterIcon = () => {
  return (
    <svg width="16" height="16" className='m-auto' viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_80)">
        <path d="M15.1003 43.5C33.2091 43.5 43.1166 28.4935 43.1166 15.4838C43.1166 15.0619 43.1072 14.6307 43.0884 14.2088C45.0158 12.815 46.679 11.0886 48 9.11066C46.205 9.90926 44.2993 10.4308 42.3478 10.6575C44.4026 9.42588 45.9411 7.491 46.6781 5.21159C44.7451 6.35718 42.6312 7.16528 40.4269 7.60128C38.9417 6.02318 36.978 4.97829 34.8394 4.62816C32.7008 4.27803 30.5064 4.64216 28.5955 5.66425C26.6846 6.68635 25.1636 8.30947 24.2677 10.2827C23.3718 12.2559 23.1509 14.4693 23.6391 16.5807C19.725 16.3842 15.8959 15.3675 12.4 13.5963C8.90405 11.825 5.81939 9.33893 3.34594 6.29909C2.0888 8.46655 1.70411 11.0314 2.27006 13.4722C2.83601 15.9131 4.31013 18.047 6.39281 19.44C4.82926 19.3904 3.29995 18.9694 1.93125 18.2119V18.3338C1.92985 20.6084 2.7162 22.8132 4.15662 24.5736C5.59704 26.334 7.60265 27.5412 9.8325 27.99C8.38411 28.3863 6.86396 28.4441 5.38969 28.1588C6.01891 30.1149 7.24315 31.8258 8.89154 33.0527C10.5399 34.2796 12.5302 34.9613 14.5847 35.0025C11.0968 37.7423 6.78835 39.2283 2.35313 39.2213C1.56657 39.2201 0.780798 39.1719 0 39.0769C4.50571 41.9676 9.74706 43.5028 15.1003 43.5Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_17_80">
          <rect width="48" height="48" fill="white" />
        </clipPath>
      </defs>
    </svg>

  )
}
const GithubIcon = () => {
  return (
    <svg width="16" height="16" className='m-auto' viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_910_44)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.0005 1C18.303 1.00296 12.7923 3.02092 8.45374 6.69305C4.11521 10.3652 1.23181 15.452 0.319089 21.044C-0.593628 26.636 0.523853 32.3684 3.47174 37.2164C6.41963 42.0643 11.0057 45.7115 16.4099 47.5059C17.6021 47.7272 18.0512 46.9883 18.0512 46.36C18.0512 45.7317 18.0273 43.91 18.0194 41.9184C11.3428 43.3608 9.93197 39.101 9.93197 39.101C8.84305 36.3349 7.26927 35.6078 7.26927 35.6078C5.09143 34.1299 7.43223 34.1576 7.43223 34.1576C9.84455 34.3275 11.1123 36.6194 11.1123 36.6194C13.2504 40.2667 16.7278 39.2116 18.0949 38.5952C18.3095 37.0501 18.9335 35.999 19.621 35.4023C14.2877 34.8017 8.68408 32.7548 8.68408 23.6108C8.65102 21.2394 9.53605 18.9461 11.156 17.2054C10.9096 16.6047 10.087 14.1785 11.3905 10.8829C11.3905 10.8829 13.4054 10.2427 17.9916 13.3289C21.9253 12.2592 26.0757 12.2592 30.0095 13.3289C34.5917 10.2427 36.6026 10.8829 36.6026 10.8829C37.9101 14.1706 37.0875 16.5968 36.8411 17.2054C38.4662 18.9464 39.353 21.2437 39.317 23.6187C39.317 32.7824 33.7015 34.8017 28.3602 35.3905C29.2186 36.1334 29.9856 37.5836 29.9856 39.8122C29.9856 43.0051 29.9578 45.5736 29.9578 46.36C29.9578 46.9962 30.391 47.7391 31.6071 47.5059C37.0119 45.7113 41.5984 42.0634 44.5462 37.2147C47.4941 32.3659 48.611 26.6326 47.6972 21.0401C46.7835 15.4476 43.8986 10.3607 39.5587 6.68921C35.2187 3.01771 29.7067 1.00108 24.0085 1H24.0005Z" fill="white"/>
<path d="M16.0557 39.9505C16.0557 40.1442 15.8331 40.3101 15.547 40.3141C15.2608 40.318 15.0264 40.16 15.0264 39.9663C15.0264 39.7727 15.2489 39.6067 15.535 39.6028C15.8212 39.5988 16.0557 39.753 16.0557 39.9505Z" fill="white"/>
<path d="M17.8838 39.6463C17.9196 39.8399 17.7208 40.0414 17.4347 40.0888C17.1486 40.1363 16.8982 40.0217 16.8624 39.832C16.8267 39.6423 17.0333 39.4368 17.3115 39.3855C17.5897 39.3341 17.848 39.4526 17.8838 39.6463Z" fill="white"/>
<path d="M14.0923 39.8162C14.0327 40.0019 13.7625 40.0849 13.4922 40.0058C13.222 39.9268 13.0432 39.7055 13.0948 39.5158C13.1465 39.3262 13.4207 39.2392 13.6949 39.3262C13.9691 39.4131 14.144 39.6225 14.0923 39.8162Z" fill="white"/>
<path d="M12.2921 39.0417C12.161 39.1879 11.8947 39.1484 11.6761 38.9508C11.4575 38.7532 11.4059 38.4845 11.537 38.3423C11.6682 38.2 11.9344 38.2395 12.161 38.4331C12.3875 38.6268 12.4312 38.8994 12.2921 39.0417Z" fill="white"/>
<path d="M11.0085 37.7139C10.8614 37.8167 10.6111 37.7139 10.472 37.5085C10.4335 37.4716 10.4029 37.4274 10.382 37.3785C10.3611 37.3296 10.3503 37.2771 10.3503 37.2239C10.3503 37.1708 10.3611 37.1183 10.382 37.0694C10.4029 37.0205 10.4335 36.9763 10.472 36.9394C10.619 36.8406 10.8694 36.9394 11.0085 37.141C11.1476 37.3425 11.1516 37.6112 11.0085 37.7139Z" fill="white"/>
<path d="M10.0626 36.3428C9.98028 36.384 9.88612 36.3955 9.79622 36.3753C9.70632 36.3551 9.62629 36.3045 9.56979 36.2321C9.41479 36.0662 9.38298 35.837 9.50221 35.7342C9.62143 35.6315 9.83606 35.6789 9.99105 35.8449C10.146 36.0108 10.1818 36.24 10.0626 36.3428Z" fill="white"/>
<path d="M9.08887 35.264C9.03721 35.3826 8.84645 35.4181 8.69146 35.3351C8.53646 35.2522 8.42122 35.098 8.47686 34.9755C8.5325 34.853 8.71928 34.8214 8.87428 34.9044C9.02927 34.9874 9.14848 35.1455 9.08887 35.264Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_910_44">
<rect width="48" height="48" fill="white"/>
</clipPath>
</defs>
</svg>

  )
}

const InstaIcon = () => {
  return (
    <svg width="16" height="16" className='m-auto' viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_17_63)">
<path d="M24 4.32187C30.4125 4.32187 31.1719 4.35 33.6938 4.4625C36.0375 4.56562 37.3031 4.95938 38.1469 5.2875C39.2625 5.71875 40.0688 6.24375 40.9031 7.07812C41.7469 7.92188 42.2625 8.71875 42.6938 9.83438C43.0219 10.6781 43.4156 11.9531 43.5188 14.2875C43.6313 16.8187 43.6594 17.5781 43.6594 23.9813C43.6594 30.3938 43.6313 31.1531 43.5188 33.675C43.4156 36.0188 43.0219 37.2844 42.6938 38.1281C42.2625 39.2438 41.7375 40.05 40.9031 40.8844C40.0594 41.7281 39.2625 42.2438 38.1469 42.675C37.3031 43.0031 36.0281 43.3969 33.6938 43.5C31.1625 43.6125 30.4031 43.6406 24 43.6406C17.5875 43.6406 16.8281 43.6125 14.3063 43.5C11.9625 43.3969 10.6969 43.0031 9.85313 42.675C8.7375 42.2438 7.93125 41.7188 7.09688 40.8844C6.25313 40.0406 5.7375 39.2438 5.30625 38.1281C4.97813 37.2844 4.58438 36.0094 4.48125 33.675C4.36875 31.1438 4.34063 30.3844 4.34063 23.9813C4.34063 17.5688 4.36875 16.8094 4.48125 14.2875C4.58438 11.9437 4.97813 10.6781 5.30625 9.83438C5.7375 8.71875 6.2625 7.9125 7.09688 7.07812C7.94063 6.23438 8.7375 5.71875 9.85313 5.2875C10.6969 4.95938 11.9719 4.56562 14.3063 4.4625C16.8281 4.35 17.5875 4.32187 24 4.32187ZM24 0C17.4844 0 16.6688 0.028125 14.1094 0.140625C11.5594 0.253125 9.80625 0.665625 8.2875 1.25625C6.70312 1.875 5.3625 2.69062 4.03125 4.03125C2.69063 5.3625 1.875 6.70313 1.25625 8.27813C0.665625 9.80625 0.253125 11.55 0.140625 14.1C0.028125 16.6687 0 17.4844 0 24C0 30.5156 0.028125 31.3312 0.140625 33.8906C0.253125 36.4406 0.665625 38.1938 1.25625 39.7125C1.875 41.2969 2.69063 42.6375 4.03125 43.9688C5.3625 45.3 6.70313 46.125 8.27813 46.7344C9.80625 47.325 11.55 47.7375 14.1 47.85C16.6594 47.9625 17.475 47.9906 23.9906 47.9906C30.5063 47.9906 31.3219 47.9625 33.8813 47.85C36.4313 47.7375 38.1844 47.325 39.7031 46.7344C41.2781 46.125 42.6188 45.3 43.95 43.9688C45.2812 42.6375 46.1063 41.2969 46.7156 39.7219C47.3063 38.1938 47.7188 36.45 47.8313 33.9C47.9438 31.3406 47.9719 30.525 47.9719 24.0094C47.9719 17.4938 47.9438 16.6781 47.8313 14.1188C47.7188 11.5688 47.3063 9.81563 46.7156 8.29688C46.125 6.70312 45.3094 5.3625 43.9688 4.03125C42.6375 2.7 41.2969 1.875 39.7219 1.26562C38.1938 0.675 36.45 0.2625 33.9 0.15C31.3313 0.028125 30.5156 0 24 0Z" fill="white"/>
<path d="M24 11.6719C17.1938 11.6719 11.6719 17.1938 11.6719 24C11.6719 30.8062 17.1938 36.3281 24 36.3281C30.8062 36.3281 36.3281 30.8062 36.3281 24C36.3281 17.1938 30.8062 11.6719 24 11.6719ZM24 31.9969C19.5844 31.9969 16.0031 28.4156 16.0031 24C16.0031 19.5844 19.5844 16.0031 24 16.0031C28.4156 16.0031 31.9969 19.5844 31.9969 24C31.9969 28.4156 28.4156 31.9969 24 31.9969Z" fill="white"/>
<path d="M39.6937 11.1843C39.6937 12.778 38.4 14.0624 36.8156 14.0624C35.2219 14.0624 33.9375 12.7687 33.9375 11.1843C33.9375 9.59053 35.2313 8.30615 36.8156 8.30615C38.4 8.30615 39.6937 9.5999 39.6937 11.1843Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_17_63">
<rect width="48" height="48" fill="white"/>
</clipPath>
</defs>
</svg>

  )
} 
export default function Home() {
  return (
    <>
      <Head>
        <title>nikhil sachdeva</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative mx-40 mt-8 text-[#F9E0C8]">
        <div className={"flex justify-between " + ralewayBold.className}>

          <div className="flex">

            <Link href={'/'}>
              <button className="nav-item group text-[#F9E0C8] hover:translate-y-2 font-extrabold transition  mx-2 text-[18px]">
                <div>
                  home
                </div>
                <div className='h-[2px] w-full bg-[#FF8AA2] scale-x-0 group-hover:scale-x-100 duration-200' />
              </button>
            </Link>

            <Link href={'/coming_soon'}>
              <button className="group font-extrabold transition  hover:translate-y-2 mx-2 text-[18px]">
                <div>
                  projects
                </div>
                <div className='h-[2px] w-full bg-[#FF8AA2] scale-x-0 group-hover:scale-x-100 duration-200' />
              </button></Link>

            <Link href={'/coming_soon'}>
              <button className="group text-[#F9E0C8] font-extrabold transition  hover:translate-y-2 mx-2 text-[18px]">
                <div>
                  blog
                </div>
                <div className='h-[2px] w-full bg-[#FF8AA2] scale-x-0 group-hover:scale-x-100 duration-200' />
              </button>
            </Link>

            <Link href={'/coming_soon'}>
              <button className="group text-[#F9E0C8] font-extrabold transition hover:translate-y-2 mx-2 text-[18px]">
                <div>
                  gallery
                </div>
                <div className='h-[2px] w-full bg-[#FF8AA2] scale-x-0 group-hover:scale-x-100 duration-200' />
              </button>

            </Link>
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
          <div className="w-[300px] h-[550px] bg-white rounded">

            <Image
              className="p-2 rounded"
              src={profilePic}
              alt="Picture of the author"
              width={500}
              height={500} />
            <div className='w-[300px]'>
              <div className='px-4 text-[15px] text-black'>
                hi, i’m nikhil. I love building delightful interactions. i work as a ui/mobile engineer at <a className={"text-[#FF8AA2] hover:opacity-30"} rel="noreferrer" target="_blank" href='https://www.betafi.co'>Betafi</a>. i also write and sometimes make open-source libraries. apart from this, i love travelling and <a className={"text-[#FF8AA2] hover:opacity-30"} rel="noreferrer" target="_blank" href='https://www.betafi.co'> curating delhi indie music</a>
              </div>
              <div className='flex justify-center w-full'>
                <div className='flex w-[220px] mt-8 justify-around'>
                  <button className='bg-[#FF8AA2] opacity-60 rounded-full w-12 h-12 hover:translate-y-[-10px] duration-200'>
                    <GithubIcon />
                  </button>
                  <button className='bg-[#FF8AA2] opacity-60 rounded-full w-12 h-12 hover:translate-y-[-10px] duration-200'>
                    <LinkedInIcon />
                  </button>
                  <button className='bg-[#FF8AA2] opacity-60 rounded-full w-12 h-12 hover:translate-y-[-10px] duration-200'>
                    <TwitterIcon />
                  </button>
                  <button className='bg-[#FF8AA2] opacity-60 rounded-full w-12 h-12 hover:translate-y-[-10px] duration-200'>
                    <InstaIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='px-24 mt-8'>
            <div className="text-[48px] w-full">
              <span>
                {"if you're not pouring your soul into it,"}
              </span>
              <span className="italic text-[#FF9A9A]">
                {' '}why bother?
              </span>
            </div>

            <div className='mt-4'>
              a number of iterations had to die. In order to create something beautiful, It is the death of these workable-but-visibly-mediocre ideas that led to beauty. much like biological evolution, creative endeavours require ruthless elimination of things that just don’t work, mostly without an explanation. And when you look back, you realize the sacrifice of these ideas was necessary, it is the cost of striving for beauty. let this serve as a reminder to pour your soul into every iteration, while knowing that most probably it will die, at the off-chance that it might not. And the eventual contentment will outweight the collective mouring for previous iterations.
            </div>
          </div>
        </div>
        <div className={'flex w-full justify-end text-[#F9E0C8]' + comfortaa.className}>
          <div>
          <button className="nav-item group hover:translate-y-1 transition  mx-2 text-[18px]">
                <div>
                  developed
                </div>
                <div className='h-[2px] w-full bg-[#FF8AA2] scale-x-0 group-hover:scale-x-100 duration-200' />
              </button>
               & <a className={"hover:opacity-30"} rel="noreferrer" target="_blank" href='https://www.betafi.co'>designed</a> with</div><div>
            <svg className='ml-2' width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M27.5656 5.7938C24.5821 -3.88971 14.8857 0.439385 14 5.28114C12.788 0.154576 3.32469 -3.66187 0.434435 5.7938C-2.78214 16.3317 12.8812 25.7874 14 27.3254C15.1188 26.0722 30.7821 16.1609 27.5656 5.7938Z" fill="#FF5A79" />
            </svg>

          </div>
        </div>
      </div>
    </>
  )
}
