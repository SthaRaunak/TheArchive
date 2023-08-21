import Header from '@/components/Header'
import Footer from '@/components/Footer'
import React, { useState, useEffect } from 'react'
import Image from "next/image"
import {addToCart} from '../../redux/reducerSlice/books'
import { useDispatch } from 'react-redux';

const Books = () => {
  const dispatch = useDispatch()
  const [books, setBooks] = useState([])
  const fetchBooks = async () => {
    const res = await fetch('http://localhost:4000/books')
    const { data } = await res.json()
    setBooks(data)
  }
  useEffect(() => {
    fetchBooks()
  }, [])
  return (
    <>
      <Header />
      <div className='con pt-20 flex'>
        <div className="sortMenu"></div>
        <div>{
          books.length > 0 ? (
            <div>{books.map((item) => {
              return (<div className='card pb-5 font-["poppins"] shadow ms-4 px-4 py-3 mb-5  inline-flex flex-wrap relative cursor-pointer'>
                <ul>
                  {/* Book Image */}
                  <Image src={'http://localhost:4000/books-img/' + item._id} alt="book" width={166} height={269} priority={true} />
                  <li>{item.bookName}</li>

                  <li >by <span className="text-gray-600 text-sm">{`${item.author}`}</span></li>
                  <li className='mb-auto relative'> {`Rs. ${item.bookPrice}`}</li>
                  <button className='w-10/12 text-base py-1 bg-white border-blue-500 text-blue-500 rounded mt-auto absolute bottom-5 cursor-pointer hover:bg-gray-100' onClick={()=>dispatch(addToCart(item))}> ADD TO CART</button>
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