import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import { useRouter } from 'next/navigation'
import wishlistImg from '../../images/emptywishlist.png'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux';
import { BsCartCheck, BsBookmarkHeartFill } from 'react-icons/bs'
import { removeWishlist, addToCart } from '@/redux/reducerSlice/books';
function wishlist() {
    const dispatch = useDispatch();
    const { wishlist } = useSelector(state => state.books)
    const handleMoveToCart = (item) => {
        dispatch(addToCart(item))
        dispatch(removeWishlist(item))
    }
    return (
        <>
            <Header />
            {wishlist.length == 0 ? <EmptyWishlist /> :
                (<>
                    <div className='con !mt-[70px] bg-white font-["poppins"]'>
                        <h2 className='text-[2.1rem] font-normal text-[#2e2e2e] pb-10'>Your Wishlist ({wishlist.length})</h2>
                        {
                            wishlist.map(item => (
                                <>
                                    <div className='flex !justify-normal gap-4 mb-5 shadow p-3'>
                                        <div>
                                            <img src={'http://localhost:4000/books-img/' + item._id} alt="" width={142} height={202} priority={true} className="shadow-xl" />
                                        </div>

                                        <div>
                                            <div>
                                                <h2 className='font-normal'>{item.bookName}</h2>
                                                <p className='pb-10 text-sm'>{item.bookDescription.slice(0, 200)} ....</p>
                                                <div className='flex !justify-normal'>
                                                    <p className='me-5 items-baseline flex !justify-start gap-2 cursor-pointer text-gray-' onClick={() => handleMoveToCart(item)}><BsCartCheck />Move to Cart</p>
                                                    <p className='me-5 items-center flex !justify-start gap-2  cursor-pointer' onClick={() => dispatch(removeWishlist(item))}><BsBookmarkHeartFill />Remove From Wishlist</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>

                            ))
                        }
                    </div>
                </>)}
            <Footer />
        </>
    )
}

function EmptyWishlist() {
    const router = useRouter();
    return (
        <>
            <div className='!mt-20 con bg-white flex ps-[210px]'>
                <Image src={wishlistImg} className="p-30 mt-12 " width={320} ></Image>
                <div style={{ fontFamily: "poppins" }}>
                    <h3 className='text-7xl pe-36 pt-20 font-normal' >Your Wishlist is Empty</h3>
                    <p className='pt-5 font-normal'>Add your books to wishlist to access them in future.</p>
                    <button className='border-none bg-green-700 px-16 py-3 mt-5 rounded text-white font-bold cursor-pointer hover:bg-green-600  ' onClick={() => router.push("/books")}>BROWSE BOOKS</button>
                </div>
            </div>
        </>
    )
}
export default wishlist