'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function ImageLink({src, href}) {
  return (
    <li className='inline'>
      <Link href={href}>
        <Image
          src={src}
          width={48}
          height={48}
          alt="icon-image"
        />
      </Link>
    </li>
  )
}