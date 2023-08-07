import React from 'react'
import Image from "next/image"
import Logo from "@/images/logoarchive.png"
import Link from 'next/link';
import { FaShoppingCart, FaSearch, FaXing, FaRegHeart } from 'react-icons/fa'
import { Avatar, Space, Popover } from 'antd';
import { useSelector } from 'react-redux';



export default function Header() {
  const { isLoggedIn, userDetails } = useSelector(state => state.users);

  const content = (
    <div>
      <Link href="/profile"> Profile </Link>
      <p>Logout</p>
    </div>
  )

  return (<>
    <div className='top'>
      <div className='con flex'>

        <div className='flex logo '>
          <Image src={Logo} height="70" width="70" alt="logo" />

          <h3><Link href="/" className='link'>THE ARCHIVE</Link></h3>
        </div>
        <div className="logo">
          <ul className='flex navItems'>
            <li>Books</li>
            <li>Categories</li>
            <li>About Us</li>
            <li><div className='search'><FaSearch /><input type="text" placeholder='Search book...' /></div></li>
            <li><Link href="/wishlist" className='link'><FaRegHeart /></Link></li>
            <li><FaShoppingCart /></li>

            <li>{isLoggedIn ? (
              <div>
                <Popover placement="bottomRight" title={userDetails.fullName} content={content} trigger="click">
                  <Avatar
                    size="large"
                    style={{
                      backgroundColor: '#fde3cf',
                      color: '#f56a00',
                      border: '2px solid black',
                      marginTop: '-7px',
                      cursor: 'pointer',
                    }}
                  >
                    {userDetails.fullName[0]}
                  </Avatar>
                </Popover>
              </div>) : <Link href="/login" className="link">Sign In</Link>}</li>
          </ul>
        </div>

      </div>
    </div>
  </>)
}

