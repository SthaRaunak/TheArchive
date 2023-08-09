import Image from 'next/image';
import cartImg from '../../images/emptycart.png'
import React from 'react'
import Header from '../../components/Header';
function index() {
  return (
    <>
      <Header/>
      <div className='!mt-6 con bg-white shado flex'>
      <Image src={cartImg} className="p-30 " width={500} ></Image>
      <div style={{fontFamily:"poppins"}}>
      <h3 className='text-5xl text-right pe-36 pt-20 font-normal' >Your Cart is Empty</h3>
      <p className='pt-5 font-normal'>Looks like you haven't added anyuthing to your cart yet</p>
      <button className='border-none bg-green-600 px-10 py-2 mt-5 rounded text-white font-bold'>SHOP NOW</button>
      </div>
    
      </div>

    </>
  )
}

export default index