import Head from 'next/head'
import Image from 'next/image'
import { Raleway } from '@next/font/google'
import Tippy from '@tippyjs/react/headless';
import styles from '@/styles/Home.module.css'
import NavHeader from '@/components/navHeader';
import Link from 'next/link';


const comfortaa = Raleway({ weight: "400", style: ['normal'], subsets: ['latin'] })

const blogs = [
    {
        title: 'You built it, but would they use it: The story of my first year at Betafi',
        link: 'https://www.betafi.co/blog-post/learnings-of-an-intern',
        subtext: 'My journey at Betafi as I dive into the user-research space in my first real full-time job.'
    },
    {
        title: 'The brief overlap of Anti-fragility and Machine Learning models',
        link: 'https://nikhilsachdeva57.medium.com/the-brief-overlap-of-anti-fragility-and-machine-learning-models-ceb344d88efc',
        subtext: 'The mental model of Anti-fragility developed by Nassim Nicholas Taleb in his book Anti-fragile is a one-size-fits-all model for timeless'
    },
    {
        title: 'Using Cron Jobs to deploy FCM Push Notifications',
        link: 'https://nikhilsachdeva57.medium.com/using-cron-jobs-to-deploy-fcm-push-notifications-6c3ef1a375c7',
        subtext: 'Push notifications are the first and often most important communications channel used by apps. Nearly every major app uses push notifications for transactions and re-engagement.'
    },
    {
        title: 'An Android Developer’s Beginner’s Guide to React Native (Includes an Example Application)',
        link: 'https://medium.com/hackernoon/a-react-native-beginner-guide-for-an-android-developer-b0572b709096',
        subtext: 'I have been an Android developer using Java for quite some time now. It was only recently that I tried my hands on React-Native framework.'
    },
    {
        title: 'Implementing Slide Shows in Android apps',
        link: 'https://nikhilsachdeva57.medium.com/implementing-slide-shows-in-android-apps-e1acca53953a',
        subtext: 'What is SliderView? With the advent of big screen smartphones, UI features popular for websites are now also implementable in mobile apps. SliderView or slideshows is one such feature. '
    },
    {
        title: 'An easy way to implement Pagination in Firebase Realtime Database',
        link: 'https://nikhilsachdeva57.medium.com/an-easy-way-to-implement-pagination-in-firebase-realtime-database-488eefc01b21',
        subtext: 'What is Pagination? While loading data from an API on internet connection, it is important to load it in batches as and when required. If Facebook/Instagram were to load all the data altogether, the apps would never start.'
    }
]

export default function Blog() {
    return (
        <>
        <Head>
        <title>blog</title>
        </Head>
        <div className={"relative mx-40 mt-8 " + comfortaa.className}>

            <NavHeader />
            <div className='w-full mt-12 flex justify-center'>
                <div className='w-[30rem] mb-24'>

            {blogs.map((blog, idx) => {
                return (
                    <Link key={idx} href={blog.link} target="_blank" className='group hover:shadow-md shadow-white'>
                        <div className='mt-8'> 
                        <div className='group-hover:text-[#ff5074] text-[18px] group-hover:scale-100 scale-90 duration-200 text-white'>
                            {blog.title}
                        </div>
                        </div>
                        <div className='text-[13px] scale-90 group-hover:scale-100 duration-200 text-gray-500'>{blog.subtext}</div>
                    </Link>
                )
            })}
            </div>
            </div>
        </div>
        </>
    )
}
