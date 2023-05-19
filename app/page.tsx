
import { Inter } from 'next/font/google'
import Image from 'next/image'
import akai from '../public/akai-lg.svg'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="page h-full flex flex-row justify-between text-white bg-gray-background">

      <div className='h-full w-full flex flex-col item-center overflow-y-scroll scrollbar-hide md:w-1/2'>

        <div className=' z-40 w-full h-fit mb-28 p-16  font-karla text-2xl bg-gray-dark bg-opacity-40 md:mt-10'>
          <h1 className=' text-5xl font-pfd mb-10 hover:text-akai-red'> <Link href={'/about'}>About me</Link> </h1>
          <p>
            Hello, I’m Akai an <span className=' text-akai-red'>engineering student</span> , <span className=' text-akai-red'>content creator</span>  and <span className=' text-akai-red'>artist</span> . Sometimes I’m a web developer and other times a musician. I have many different hobbies and interests and I
            love to share them with other people. </p>
          <hr className='h-1 my-2 opacity-0' />
          <p>
            My biggest dream is to work in the game industry. In order to achieve this dream I’m currently am very focused on improving my coding and art skills.
          </p>
        </div>

        <div className=' z-40 w-full h-fit mb-28 p-16 font-karla text-2xl bg-gray-dark bg-opacity-40 '>
          <h1 className=' text-5xl font-pfd mb-10 hover:text-akai-red'> <Link href={'/portfolio'}>Portfolio</Link> </h1>
          <p>
            I’ve been drawing since I was 10, but I started to focus on my art around two years ago. Here you can find some of my best illustrations, projects and work at a glance. You can have more info about commissions <span className=' text-akai-red'>here</span>.
          </p>
        </div>

        <div className=' z-40 w-full h-fit mb-28 p-16 font-karla text-2xl bg-gray-dark bg-opacity-40 '>
          <h1 className=' text-5xl font-pfd mb-10 hover:text-akai-red'> <Link href={'/twitch'}>Twitch</Link> </h1>
          <p>
            Two years ago I started my career as a streamer and I couldn’t be happier. It is an immense pleasure to have people who share my interests and like what I'm doing. My first priority is to make
            people feel less alone and make them smile. I hope my community is going to grow and I'll meet more and more nice people.
          </p>
        </div>

        <div className='z-40 w-full h-fit p-16 mb-4 font-karla text-2xl bg-gray-dark bg-opacity-40 '>
          <h1 className=' text-5xl font-pfd mb-10 hover:text-akai-red'> <Link href={'/contacts'}>Contacts</Link> </h1>
          <p>
            If you want to collaborate on any art or web projects you can contact me on one of my socials, or email.
          </p>
        </div>

      </div>

      <div className='h-full relative md:w-1/2'>
        <Image src={akai} className=' z-0 absolute bottom-8 right-14 scale-125'></Image>
      </div>

    </main>
  );

}