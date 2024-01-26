import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './ModeToggle'

const Navbar = () => {
  return (
    <nav className='max-w-5xl relative flex items-center justify-between mx-auto py-5 bg-background text-primary'>
    

        <Link href="/">
          Home
        </Link>
        <Link href="/about">
          About
        </Link>
        <Link href="/articles">
          Articles
        </Link>
        <Link href="/freebies">
          Freebies
        </Link>
        <Link href="/shop">
          Shop
        </Link>
        <Link href="/contact">
          Contact
        </Link>
        <ModeToggle/>
    </nav>
  )
}

export default Navbar