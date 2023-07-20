import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className='flex flex-col items-center'>
        <div className='pt-[50px] text-center'>
          <h1 className='text-5xl font-bold'>Hi! I am Changxiang Gao</h1>
          <h3 className='pt-3 text-xl'>I am a junior at Purdue University,</h3>
          <h3 className='text-xl'>and I am majoring in CS.</h3>
        </div>
        <div className='p-10'>
          <Image
            src="/profile_pic_500px.jpg"
            width={400}
            height={400}
            alt="my personal pic"
            className='rounded-full border-solid border-gray-500 border'
          />
        </div>
      </div>
      <div>

      </div>
    </main>
  )
}
