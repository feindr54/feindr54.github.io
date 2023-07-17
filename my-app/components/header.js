import ImageLink from './imagelink'
import NavLink from './navlink'

import githubPic from '../assets/github.svg'
import emailPic from '../assets/mail.svg'
import LPic from '../assets/linkedin.svg'

export default function Header() {
  return (
    <header className='flex flex-row border-b border-white'>
      <div className='pl-8'>
        <ul className='flex flex-row items-center gap-8 m-3'>
          <ImageLink src={emailPic} href='mailto:cxgao1729@gmail.com'/>
          <ImageLink src={githubPic} href='https://www.github.com/feindr54'/>
          <ImageLink src={LPic} href={'https://www.linkedin.com/in/changxiang-gao/'}/>
        </ul>
      </div>
      <div className='grow mr-10'>
        <ul className="list-none flex flex-row justify-end gap-10 m-6">
          <NavLink href='/'>Home</NavLink>
          <NavLink href='/about'>About</NavLink>
          <NavLink href='/blog'>Blog</NavLink>
          <NavLink href='/resume'>Resume</NavLink>
          <NavLink href='/links'>Links</NavLink>
        </ul>
      </div>
    </header>
  )
}