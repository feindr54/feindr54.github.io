import Image from 'next/image'
import Link from 'next/link'
import Section from '../components/section'

const PHOTO_SIZE = 400

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className='pt-[64px] text-center'>
        <h1 className='font-bold'>Hi! I am Changxiang Gao</h1>
        <h3 className='pt-3'>I am a junior at Purdue University,</h3>
        <h3>and I am majoring in CS.</h3>
      </div>
      <div className='p-10'>
        <Image
          src="/profile_pic_500px.jpg"
          width={PHOTO_SIZE}
          height={PHOTO_SIZE}
          alt="my personal pic"
          className='rounded-full border-solid border-gray-500 border'
        />
      </div>
      <Section title="Basic Facts about Me">
        <ul className='list-disc list-inside'>
          <li>I am a rising junior in Purdue University graduating in Spring 2025, and I am majoring in Computer Science and Mathematics.</li>
          <li>I am a software engineer intern at Carbon Arc Corp, and I have been a Teaching Assistant since Aug 2022.</li>
          <li>In my free time, I like to boulder, read about history, and learn new recipes!</li>
        </ul>
      </Section>
      <Section title="Interest Areas in Computer Science">
        <p className=''>
          I am currently interested in the implementations and applications of Large Language Models (LLMs), and other areas in ML and AI. As I enjoy the process of proving in mathematics, I want to learn about developing algorithms that allows machines to better
          interpret human language.
        </p>
        <p className='mt-4'>
          Additionally, I am also unafraid to try new areas in CS too, such as robotics (excited to be enrolled in a robotics course!) and software engineering.
        </p>
      </Section>
      <Section title="Activities and Clubs on Campus">
        <p className=''>
          Paragraph 1
        </p>
        <p className='mt-4'>
          Paragraph 2
        </p>
      </Section>
      <Section title="A moment in history I would like to visit">
        <p className=''>
          I would love to visit great civilizations at the moment in which they were created, as their creation stories are often shrouded in myths
          and I have always been fascinated by the manner in which these various mythologies were made, as well as the actual events that have
          occurred.
        </p>
        <p className='mt-4'>
          An easy example would be the creation of the Inca state in the 1300s. The Inca civilization has always been fascinating as it was a full-fledged
          empire with excellent levels of administration despite having no written records. With their past backed by rich oral histories, it would be exciting
          to see how they were able to run the empire so successfully in the 1400s, as well as witnessing how the common people lived in a world so different
          from typical literature.
        </p>
      </Section>
      <Section title="Future Project Ideas">
        <p>
          I have a few ideas that are swimming in my mind, but I might get to them in the future.
        </p>
        <ul className='list-disc list-inside mt-4'>
          <li>Family tree generator</li>
          <p className='pl-12'>Partially inspired by an idea to store my personal family tree, this could also be useful for analyzing royal families, especially matrilineal lines.</p>
          <li>Text message analyzer</li>
          <p className='pl-12'>
            From the get-go, it was interesting to note that people (like me) are much more prone to intentionally misspell words to portray a certain
            tone, or emphasise a point. This would be the toughest challenge for now, and I&apos;m looking into LLMs for possible inspiration.
          </p>
          <li>Personal Chatbot</li>
        </ul>
      </Section>
      <Section title="More information about me">
        <p className=''>
          If you want to know more about my academic involvements and coursework, you can visit my <Link href="/resume" className='text-blue-400 hover:underline'>Resume</Link>.
          For more informal information about me, you can visit my <Link href='/about' className='text-blue-400 hover:underline'>About</Link> page.
        </p>
      </Section>
    </main>
  )
}
