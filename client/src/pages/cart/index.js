import Image from 'next/image';
import cartImg from '../../images/emptycart.png'
import React from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation'
import { FiTrash } from 'react-icons/fi'
import { BsBookmarkHeart, BsBookmarkHeartFill, BsChevronLeft } from 'react-icons/bs'
import { ImCross } from 'react-icons/im'
import { Button, message } from 'antd';
import { IncreaseQuantity, removeFromCart, DecrementQuantity, addToWishlist, removeWishlist, removeAllFromCart } from '@/redux/reducerSlice/books';
import Link from 'next/link';
function Cart() {
  const [msg, contextHolder] = message.useMessage();
  const dispatch = useDispatch();

  const { cartList } = useSelector(state => state.books)
  const { wishlist } = useSelector(state => state.books)

  const removeCartItem = (item) => {
    msg.info(item.bookName + " has been removed from the Cart");
    dispatch(removeFromCart(item._id))

  }
  const IncrementCartItem = (item) => {
    dispatch(IncreaseQuantity(item))
  }
  const DecrementCartItem = (item) => {
    dispatch(DecrementQuantity(item))
  }
  const addWishListItem = (item) => {
    const { quantity, totalBookPrice, ...rest } = item;
    console.log(rest)
    wishlist.some(list => list._id == rest._id) ? dispatch(removeWishlist(rest)) : dispatch(addToWishlist(rest))
  }

  return (
    <>
      {contextHolder}
      <Header />
      {cartList.length == 0 ? <EmptyCart /> : (
        <div className='con !mt-[70px] bg-white flex font-["poppins"]'>
          <div className='w-[800px]'>
            <div className='flex justify-between items-baseline'>
              <h2 className='text-[2.1rem] font-normal text-[#2e2e2e] pb-10'>Shopping Cart ({cartList.reduce((total, item) => total + item.quantity, 0)})</h2>
              <p className='flex justify-normal items-center gap-2 font-semibold cursor-pointer' onClick={() => dispatch(removeAllFromCart())}> Clear Cart <ImCross className='text-sm' /></p>
            </div>
            {cartList.map(item =>
              <div>
                <div className='flex'>
                  <Image src={'http://localhost:4000/books-img/' + item._id} alt="book" width={92} height={142} priority={true} className="shadow-xl" />
                  <div className='flex justify-between w-[700px]'>
                    <div>
                      <p className="ps-4 pt-3 text-xl">{item.bookName}</p>
                      <p className='ps-4 text-[16px]'>by <span className='text-gray-600'>{item.author}</span></p>
                      <div className='mt-9 ms-4 w-[70px] h-[35px] bg-white shadow flex justify-around items-center px-1'>
                        <button className='bg-transparent border-none text-3xl text-gray-600 cursor-pointer ' onClick={() => { DecrementCartItem(item) }}>-</button>
                        <p className='inline text-lg '>{item.quantity}</p>
                        <button className='bg-transparent border-none text-2xl  text-gray-600 cursor-pointer' onClick={() => { IncrementCartItem(item) }}>+</button>
                      </div>
                    </div>

                    <div>
                      <div className='flex !justify-end'>
                        <p className='pt-5 text-[1.4rem]'>Rs. {item.bookPrice}</p>
                      </div>

                      <div className='flex gap-6'>
                        <p className='mt-[54px] text-[1.1rem] items-center flex cursor-pointer text-gray-700 gap-1' onClick={() => { removeCartItem(item) }}><FiTrash /> Remove</p>
                        <p className='mt-[54px] text-[1.1rem] items-center flex cursor-pointer text-gray-700 gap-1' onClick={() => { addWishListItem(item) }}> {wishlist.some(list => list._id == item._id) ? <><BsBookmarkHeartFill />Remove from wishlist</> : <><BsBookmarkHeart /> Add to wishlist</>}</p>
                      </div>

                    </div>
                  </div>



                </div>

                <div className='w-[100%] bg-gray-400 h-[0.1px] my-5 '></div>
              </div>)}
            <Link href="/books" className='no-underline'><p className='flex items-center !justify-normal font-semibold cursor-pointer text-black'><BsChevronLeft className='text-xl' />Continue Shopping</p></Link>
          </div>

          <div className='w-[430px] h-[500px] shadow-xl px-5 mt-20'>
            <h3 className='text-left text-3xl font-normal py-3'>Cart Total</h3>
            <div className='flex !justify-between  '>
              <p>Subtotal</p>
              <p>Rs. {cartList.reduce((total, item) => total + item.totalBookPrice, 0)}</p>
            </div>
            <div className='w-[100%] bg-gray-600 h-[0.5px] my-3 mb-10'></div>
            <p>Shipping</p>
            <input type="text" placeholder='Enter Address' className='py-2 w-[100%] px-3 text-[18px] my-3' />
            <button className='w-[100%] py-3 bg-green-700 border-none text-white font-bold mt-[200px]'>PROCEED TO CHECKOUT</button>
          </div>
        </div>)

      }
      <Footer />
    </>
  )
}

function EmptyCart() {
  const router = useRouter();
  return (
    <>
      <div className='!mt-20 con bg-white flex ps-28'>
        <Image src={cartImg} className="p-30 " width={550} ></Image>
        <div style={{ fontFamily: "poppins" }}>
          <h3 className='text-7xl pe-36 pt-20 font-normal' >Your Cart is Empty</h3>
          <p className='pt-5 font-normal'>Looks like you haven't added anyuthing to your cart yet</p>
          <button className='border-none bg-green-700 px-16 py-3 mt-5 rounded text-white font-bold cursor-pointer hover:bg-green-600  ' onClick={() => router.push("/books")}>SHOP NOW</button>
        </div>
      </div>
    </>
  )
}



export default Cart