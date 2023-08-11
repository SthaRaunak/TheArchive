import React from 'react'
import Link from 'next/link';
function Footer() {
    return (
        <div className='bg-[#FAFAFB] mt-36'>
            <div className='con'>
                <div className='flex gap-4 font-["merriweather"] py-24'>
                    <div>
                        <h2 className='pb-6'>Company</h2>
                        <ul className='font-light leading-8 font-["poppins"]'>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Vacancy</li>
                            <li>Company</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='pb-6'>Help</h2>
                        <ul className='font-light leading-8 font-["poppins"]'>
                            <li>Subscription instruction</li>
                            <li>Help Cetner</li>
                            <li>Problemt with the site</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='pb-6'>User</h2>
                        <ul className='font-light leading-8 font-["poppins"]'>
                            <li><Link href="/register" className='text-black no-underline'>Registration</Link></li>
                            <li><Link href="/cart" className='text-black no-underline'>Cart</Link></li>
                            <li>Wish list</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='pb-6'>Follow Us</h2>
                        <ul className='font-light leading-8 font-["poppins"]'>
                            <li>Instagram</li>
                            <li>Facebook</li>
                            <li>Twitter</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='pb-6'>Contact Us</h2>
                        <input type="text" placeholder='Enter email here' className='block py-3 ps-3 pe-28 bg-[#FAFAFB] border border-gray-400' />
                        <button className='mt-4 py-3 px-28 bg-slate-950 text-white border border-black cursor-pointer'>Send Email</button>
                    </div>
                </div>
                <div className='text-center font-["poppins"]'>
                    <h6 className='text-xl font-semibold pb-2 tracking-wider font-["outfit"]'>THE ARCHIVE</h6>
                    <p className='text-sm pb-10'>©2023. All rights reserved. Privacy Policy</p>
                </div>
            </div>
        </div>
    )
}

export default Footer