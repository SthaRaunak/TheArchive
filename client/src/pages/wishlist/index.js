import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import { useRouter } from 'next/navigation'
import wishlistImg from '../../images/emptywishlist.png'
import Image from 'next/image'
function wishlist() {
    return (
        <>
            <Header />
            <EmptyWishlist />
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