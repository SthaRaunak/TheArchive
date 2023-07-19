import React from 'react'
import Image from "next/image"
import Logo from "@/images/logoarchive.png"
import Link from 'next/link'
import { FaShoppingCart, FaSearch, FaXing } from 'react-icons/fa'


export default function Header(){
   return( <>
<div className='top'>
<div className='con flex'>

  <div className='flex logo '>
    <Image src={Logo} height="70" width="70" />

    <h3>THE ARCHIVE</h3>
  </div>
  <div className="logo">
    <ul className='flex navItems'>
      <li>Books</li>
      <li>Categories</li>
      <li>WishList</li>
      <li>About Us</li>
      <li><div className='search'><FaSearch /><input type="text" placeholder='Search book...' /></div></li>
      <li><FaShoppingCart /></li>
      <li><Link href="/login" class="login">Sign In</Link></li>
    </ul>
  </div>

</div>
</div>
</>)
}

