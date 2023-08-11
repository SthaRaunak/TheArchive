import React from 'react'
import Image from "next/image"
import Logo from "@/images/logoarchive.png"
import Link from 'next/link';
import { FaShoppingCart, FaSearch, FaXing, FaRegHeart } from 'react-icons/fa'
import { Avatar, Space, Popover } from 'antd';
import { useSelector , useDispatch } from 'react-redux';
import {handleLogout} from '../redux/reducerSlice/users'


export default function Header() {
  const { isLoggedIn, userDetails } = useSelector(state => state.users);

  const dispatch = useDispatch()

  const userLogout = () =>{
    dispatch(handleLogout())
  }

  const content = (
    <div>
      <Link href="/account"> My Account </Link>
      <p onClick={userLogout}>Logout</p>
    </div>
  )

  return (<>

    <div className='top bg-[#F9F8F6] '>
      <div className='con flex'>

        <div className='flex logo '>
          <Image src={Logo} height="70" width="70" alt="logo" />
          
          <h3><Link href="/" className='link'>THE ARCHIVE</Link></h3>
        </div>
        <div className="logo">
          <ul className='flex navItems'>
            <li><Link href="/books" className='text-black no-underline'>Books</Link></li>
            <li>Categories</li>
            <li>About Us</li>
            <li><div className='search'><FaSearch /><input type="text" placeholder='Search book...' /></div></li>
            <li><Link href="/wishlist" className='link'><FaRegHeart /></Link></li>
            <li><Link href="/cart" className='text-black'><FaShoppingCart /></Link></li>

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
                      fontSize: '1.4rem'
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

