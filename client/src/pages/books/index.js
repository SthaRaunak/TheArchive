import Header from '@/components/Header'
import Footer from '@/components/Footer'
import React, { useState, useEffect } from 'react'
import { setUseProxies } from 'immer'
import book1 from "../../images/book1.webp";
import Image from "next/image"
const Books = () => {
  const [books, setBooks] = useState([])
  const fetchBooks = async () => {
    const res = await fetch('http://localhost:4000/books')
    const { data } = await res.json()
    console.log(JSON.stringify(data))
    setBooks(data)
  }
  useEffect(() => {
    fetchBooks()
  }, [])
  return (
    <>
      <Header />
      <div className='con pt-20 flex'>
        <div class="sortMenu"></div>
        <div>{
          books.length > 0 ? (
            <div>{books.map((item) => {
              return (<div className='card pb-5 font-["poppins"] shadow ms-4 px-4 py-3 mb-5  inline-flex flex-wrap relative cursor-pointer'>
                <ul>
                  <Image src={book1} alt="book" width={166} height={269} />
                  <li>{item.bookName}</li>

                  <li >by <span className="text-gray-600 text-sm">{`${item.author}`}</span></li>
                  <li className='mb-auto relative'> {`Rs. ${item.bookPrice}`}</li>
                  <button className='w-10/12 text-base py-1 bg-white border-blue-500 text-blue-500 rounded mt-auto absolute bottom-5'> ADD TO CART</button>
                </ul>
              </div>

              )
            })}</div>
          ) : "loading"
        } </div>
      </div>
      <Footer />
    </>
  )
}

export default Books