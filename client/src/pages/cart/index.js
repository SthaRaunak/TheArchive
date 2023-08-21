import Image from 'next/image';
import cartImg from '../../images/emptycart.png'
import React from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useDispatch , useSelector} from 'react-redux';
import { list } from 'postcss';
function index() {
  const dispatch = useDispatch();
  const {cartList} = useSelector(state=> state.books)
  return (
    <>
    <Header/>
    {cartList.length == 0 ?<EmptyCart/>: <div className='con !mt-20 bg-white'>{cartList.map(item => <li>{item}</li>)}</div>
    
  }
    <Footer/>
    </>
  )
}

function EmptyCart() {
  return (
<>
<div className='!mt-20 con bg-white flex ps-28'>
      <Image src={cartImg} className="p-30 " width={550} ></Image>
      <div style={{fontFamily:"poppins"}}>
      <h3 className='text-7xl pe-36 pt-20 font-normal' >Your Cart is Empty</h3>
      <p className='pt-5 font-normal'>Looks like you haven't added anyuthing to your cart yet</p>
      <button className='border-none bg-green-700 px-16 py-3 mt-5 rounded text-white font-bold tracking-'>SHOP NOW</button>
      </div>
      </div>
</>
  )
}



export default index