import Image from 'next/image'
import Link from 'next/link'
import Section from '../../components/section'

const PHOTO_SIZE = 200

export default function About() {
  return(
    <div className="min-h-screen flex flex-col items-center">
      <div className='p-10'>
        <Image
          src="/profile_pic_500px.jpg"
          width={PHOTO_SIZE}
          height={PHOTO_SIZE}
          alt="my personal pic"
          className='rounded-full border-solid border-gray-500 border'
        />
      </div>
    </div>
  )
}