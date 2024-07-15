import React from 'react'
import './navbar.css'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../../public/logo.png'
import { FaBars } from "react-icons/fa6";
export default function Navbar() {
  return (
    <>
        <nav>
            <div className="flex items-center text-2xl font-bold gap-1 mt-2 cursor-pointer"><Image src={logo} width={80} alt="" /></div>
            <input type="checkbox" id='check' />
            <label htmlFor="check">
                <FaBars className="text-xl cursor-pointer"/>
            </label>
            <ul className="text-white">
                <li><Link href="">HOME</Link></li>
                <li><Link href="">PRODUCT</Link></li>
                <li><Link href="">PROMO</Link></li>
                <li><Link href="">ABOUT</Link></li>
                <li><Link href="">CONTACT</Link></li>
            </ul>
        </nav>
    </>
  )
}
