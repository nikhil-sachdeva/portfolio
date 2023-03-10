import Head from 'next/head'
import { Raleway } from '@next/font/google'
import Link from 'next/link';
import profilePic from '../../public/images/me-1.png';
import Tippy from '@tippyjs/react';
import NavHeader from '@/components/navHeader';
import { useEffect } from 'react';
import Image from 'next/image';
const comfortaa = Raleway({ weight: "400", style: ['normal'], subsets: ['latin'] })
const ralewayBold = Raleway({ weight: "600", style: ['normal'], subsets: ['latin'] })

const designFileLink = "https://www.figma.com/file/m77Nm2FaV7bbTH2uYZAr12/Portfolio";
const repositoryLink = "https://github.com/nikhil-sachdeva/portfolio";

const githubLink = "https://github.com/nikhil-sachdeva";
const mediumLink = "https://medium.com/@nikhilsachdeva57";
const linkedinLink = "https://www.linkedin.com/in/nikhilsachdeva57/";
const twitterLink = "https://twitter.com/mostly_dumb";

const playlistLink = "https://open.spotify.com/playlist/44plddoH8dHwEG7BZRS7Mw";



// MAIN function
// function pixelate(v) {

//     // if in play mode use that value, else use slider value
//     var size = (play ? v : blocks.value) * 0.01,
//         // cache scaled width and height
//         w = canvas.width * size,
//         h = canvas.height * size;

//     console.log(size)
//     // draw original image to the scaled size
//     ctx.drawImage(img, 0, 0, w, h);

//     // then draw that scaled image thumb back to fill canvas
//     // As smoothing is off the result will be pixelated
//     ctx.drawImage(canvas, 0, 0, w, h, 0, 0, canvas.width, canvas.height);
// }


const LinkedInIcon = () => {
  return (
    <svg width="16" height="16" className='m-auto h-full' viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_17_68)">
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

const MediumIcon = () => {
  return(
<svg xmlns="http://www.w3.org/2000/svg" className='m-auto h-full'  viewBox="0 0 72 72" width="32" height="32">
  <path fill='white' d="M45.049,14C57.06,14,58,14.94,58,26.951v18.098C58,57.06,57.06,58,45.049,58H26.951C14.94,58,14,57.06,14,45.049V26.951	C14,14.94,14.94,14,26.951,14H45.049z M29.713,44.151c4.502,0,8.151-3.649,8.151-8.151c0-4.502-3.649-8.151-8.151-8.151	c-4.502,0-8.151,3.649-8.151,8.151C21.562,40.502,25.212,44.151,29.713,44.151z M42.713,43.757c2.228,0,4.034-3.473,4.034-7.757	c0-4.284-1.806-7.757-4.034-7.757c-2.228,0-4.034,3.473-4.034,7.757C38.679,40.284,40.485,43.757,42.713,43.757z M48.98,42.928	c0.775,0,1.403-3.102,1.403-6.928s-0.628-6.928-1.403-6.928c-0.775,0-1.403,3.102-1.403,6.928S48.205,42.928,48.98,42.928z"/></svg>
  )
}

const TwitterIcon = () => {
  return (
    <svg width="16" height="16" className='m-auto h-full' viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_17_80)">
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
    <svg width="16" height="16" className='m-auto h-full' viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_910_44)">
        <path fillRule="evenodd" clipRule="evenodd" d="M24.0005 1C18.303 1.00296 12.7923 3.02092 8.45374 6.69305C4.11521 10.3652 1.23181 15.452 0.319089 21.044C-0.593628 26.636 0.523853 32.3684 3.47174 37.2164C6.41963 42.0643 11.0057 45.7115 16.4099 47.5059C17.6021 47.7272 18.0512 46.9883 18.0512 46.36C18.0512 45.7317 18.0273 43.91 18.0194 41.9184C11.3428 43.3608 9.93197 39.101 9.93197 39.101C8.84305 36.3349 7.26927 35.6078 7.26927 35.6078C5.09143 34.1299 7.43223 34.1576 7.43223 34.1576C9.84455 34.3275 11.1123 36.6194 11.1123 36.6194C13.2504 40.2667 16.7278 39.2116 18.0949 38.5952C18.3095 37.0501 18.9335 35.999 19.621 35.4023C14.2877 34.8017 8.68408 32.7548 8.68408 23.6108C8.65102 21.2394 9.53605 18.9461 11.156 17.2054C10.9096 16.6047 10.087 14.1785 11.3905 10.8829C11.3905 10.8829 13.4054 10.2427 17.9916 13.3289C21.9253 12.2592 26.0757 12.2592 30.0095 13.3289C34.5917 10.2427 36.6026 10.8829 36.6026 10.8829C37.9101 14.1706 37.0875 16.5968 36.8411 17.2054C38.4662 18.9464 39.353 21.2437 39.317 23.6187C39.317 32.7824 33.7015 34.8017 28.3602 35.3905C29.2186 36.1334 29.9856 37.5836 29.9856 39.8122C29.9856 43.0051 29.9578 45.5736 29.9578 46.36C29.9578 46.9962 30.391 47.7391 31.6071 47.5059C37.0119 45.7113 41.5984 42.0634 44.5462 37.2147C47.4941 32.3659 48.611 26.6326 47.6972 21.0401C46.7835 15.4476 43.8986 10.3607 39.5587 6.68921C35.2187 3.01771 29.7067 1.00108 24.0085 1H24.0005Z" fill="white" />
        <path d="M16.0557 39.9505C16.0557 40.1442 15.8331 40.3101 15.547 40.3141C15.2608 40.318 15.0264 40.16 15.0264 39.9663C15.0264 39.7727 15.2489 39.6067 15.535 39.6028C15.8212 39.5988 16.0557 39.753 16.0557 39.9505Z" fill="white" />
        <path d="M17.8838 39.6463C17.9196 39.8399 17.7208 40.0414 17.4347 40.0888C17.1486 40.1363 16.8982 40.0217 16.8624 39.832C16.8267 39.6423 17.0333 39.4368 17.3115 39.3855C17.5897 39.3341 17.848 39.4526 17.8838 39.6463Z" fill="white" />
        <path d="M14.0923 39.8162C14.0327 40.0019 13.7625 40.0849 13.4922 40.0058C13.222 39.9268 13.0432 39.7055 13.0948 39.5158C13.1465 39.3262 13.4207 39.2392 13.6949 39.3262C13.9691 39.4131 14.144 39.6225 14.0923 39.8162Z" fill="white" />
        <path d="M12.2921 39.0417C12.161 39.1879 11.8947 39.1484 11.6761 38.9508C11.4575 38.7532 11.4059 38.4845 11.537 38.3423C11.6682 38.2 11.9344 38.2395 12.161 38.4331C12.3875 38.6268 12.4312 38.8994 12.2921 39.0417Z" fill="white" />
        <path d="M11.0085 37.7139C10.8614 37.8167 10.6111 37.7139 10.472 37.5085C10.4335 37.4716 10.4029 37.4274 10.382 37.3785C10.3611 37.3296 10.3503 37.2771 10.3503 37.2239C10.3503 37.1708 10.3611 37.1183 10.382 37.0694C10.4029 37.0205 10.4335 36.9763 10.472 36.9394C10.619 36.8406 10.8694 36.9394 11.0085 37.141C11.1476 37.3425 11.1516 37.6112 11.0085 37.7139Z" fill="white" />
        <path d="M10.0626 36.3428C9.98028 36.384 9.88612 36.3955 9.79622 36.3753C9.70632 36.3551 9.62629 36.3045 9.56979 36.2321C9.41479 36.0662 9.38298 35.837 9.50221 35.7342C9.62143 35.6315 9.83606 35.6789 9.99105 35.8449C10.146 36.0108 10.1818 36.24 10.0626 36.3428Z" fill="white" />
        <path d="M9.08887 35.264C9.03721 35.3826 8.84645 35.4181 8.69146 35.3351C8.53646 35.2522 8.42122 35.098 8.47686 34.9755C8.5325 34.853 8.71928 34.8214 8.87428 34.9044C9.02927 34.9874 9.14848 35.1455 9.08887 35.264Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_910_44">
          <rect width="48" height="48" fill="white" />
        </clipPath>
      </defs>
    </svg>

  )
}

const LinkFloater = (props: any) => {
  return (
    <button className="nav-item group text-[#F9E0C8] hover:translate-y-2 font-extrabold transition  mx-2 text-[15px]">
      <div className='opacity-80 hover:opacity-100'>
        {props.title}
      </div>
      <div className='h-[2px] w-full bg-[#ff5074] scale-x-0 group-hover:scale-x-100 duration-200' />
    </button>
  )
}

export default function Home() {
  // useEffect(()=>{

  //       const canvas = document.getElementById("canvas") as HTMLCanvasElement
  //       var ctx = canvas.getContext('2d')
  //       var img = new Image()
  //     console.log(require("../../public/images/me-1.png").default)
  //     img.src = "https://avatars.githubusercontent.com/u/34986121?v=4";
  //     console.log(img)
  //     ctx.drawImage(img, 0, 0, 280, 280);

  //     var x = 5;
  //     setInterval(() => {
  //       let off = 280 * (1/x)

  //       if(ctx){
  //     ctx.drawImage(img, 0, 0, off, off);
  //     ctx.drawImage(canvas, 0, 0, off, off, 0, 0, canvas.width, canvas.height);
  //       }
  //     else{
  //       console.log("no ctx")
  //     }
  //     x = (x+1)%5;
  //     }, 1000)

  // },[])
  return (
    <>
      <Head>
        <title>nikhil sachdeva</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative mx-12 lg:mx-40 mt-8 text-[#F9E0C8]">

    <NavHeader/>
        <div className={"sm:flex mt-32 " + comfortaa.className}>
          <div className="w-[300px] h-[550px] bg-white rounded-[20px] hover:shadow-[#ff5074] hover:shadow-lg cursor-pointer hover:translate-y-[-10px] duration-200">

          <Image
              className="my-[10px] mx-auto rounded-[20px] border-8 border-[#ff507480]"
              src={profilePic}
              alt="self"
              width={280}
              height={280} />
            <div className='w-[300px]'>
              <div className='px-6 text-[15px] text-black'>
                {"hi, i’m nikhil sachdeva. I love building delightful interactions on web and mobile. i'm currently a founding engineer at "}<a className="text-[#ff5074] hover:opacity-30 hover:cursor-pointer" rel="noreferrer" target="_blank" href='https://www.betafi.co'>Betafi</a>. i also write my technical learnings and sometimes make open-source libraries. apart from this, i love travelling and <a className={"text-[#ff5074] hover:opacity-30"} rel="noreferrer" target="_blank" href={playlistLink}> curating delhi indie music</a>
              </div>
              <div className='flex justify-center w-full'>
                <div className='flex w-[220px] mt-2 justify-around'>
                    <Link rel="noreferrer" target="_blank" href={githubLink} className='bg-[#ff5074] opacity-70 hover:opacity-100 rounded-full w-12 h-12 hover:translate-y-[-10px] duration-200'>
                      <GithubIcon />
                    </Link>
                  <Link rel="noreferrer" target="_blank" href={linkedinLink} className='bg-[#ff5074] opacity-70 hover:opacity-100 rounded-full w-12 h-12 hover:translate-y-[-10px] duration-200'>
                    <LinkedInIcon />
                  </Link>
                  <Link rel="noreferrer" target="_blank" href={twitterLink} className='bg-[#ff5074] opacity-70 hover:opacity-100 rounded-full w-12 h-12 hover:translate-y-[-10px] duration-200'>
                    <TwitterIcon />
                  </Link>
                  <Link rel="noreferrer" target="_blank" href={mediumLink} className='bg-[#ff5074] opacity-70 hover:opacity-100 rounded-full w-12 h-12 hover:translate-y-[-10px] duration-200'>
                    <MediumIcon />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='sm:px-24 px-4 mt-8'>
            <div className="text-[42px] w-full">
              <span>
                {"if you're not striving for beauty,"}
              </span>
              <span className="italic text-[#ff5074]">
                {' '}why bother?
              </span>
            </div>
            <div className='mt-4 text-[18px]'>
              a number of iterations had to die, in order to create something beautiful. It is the death of these <span className='italic'>workable-but-visibly-mediocre</span> ideas that led to beauty. much like biological evolution, creative endeavours require ruthless elimination of things that just don’t work, mostly without an explanation. And when you look back, you realize the sacrifice of these ideas was necessary, it is the cost of striving for beauty. let this serve as a reminder to pour your soul into every iteration, while knowing that most probably it will die.
            </div>
            <div className='mt-2 text-[18px] italic'>
            And the eventual satisfaction of creating beauty will outweight the collective mourning for the death of previous iterations.
            </div>
          </div>
        </div>
        <div className={'flex w-full justify-end text-[#F9E0C8] mb-12'}>
          <Link rel="noreferrer" target="_blank" href={designFileLink}>
            <LinkFloater title={"designed"} />
          </Link>
          &
          <Link rel="noreferrer" target="_blank" href={repositoryLink}>
            <LinkFloater title={"developed"} />
          </Link>  with
          <div>
            <svg className='ml-2' width="20" height="20" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M27.5656 5.7938C24.5821 -3.88971 14.8857 0.439385 14 5.28114C12.788 0.154576 3.32469 -3.66187 0.434435 5.7938C-2.78214 16.3317 12.8812 25.7874 14 27.3254C15.1188 26.0722 30.7821 16.1609 27.5656 5.7938Z" fill="#FF5A79" />
            </svg>
          </div>
        </div>
      </div>
    </>
  )
}
