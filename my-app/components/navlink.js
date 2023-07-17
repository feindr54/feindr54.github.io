'use client'
import Link from 'next/link'

export default function NavLink({ href, children }) {
  return (
    <>
      <li className='inline text-white'>
        <Link href={href}>{children}</Link>
      </li>
    </>
  )
}