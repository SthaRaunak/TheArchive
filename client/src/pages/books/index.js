import Header from '@/components/Header'
import Footer from '@/components/Footer'
import React, { useState, useEffect } from 'react'
import Image from "next/image"
import { addToCart } from '../../redux/reducerSlice/books'
import { useDispatch } from 'react-redux';
import { Button, message, Space } from 'antd';

const Books = () => {
  const [messageApi, contextHolder] = message.useMessage();
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

  const handleCheckout = (item) => {
    debugger;
    messageApi.open({
      type: 'success',
      content: `${item.bookName} has been added to cart`
    });
    dispatch(addToCart(item))


  }


  return (
    <>
      {contextHolder}
      <Header />
      <div className='con pt-20 flex'>
        <div className="sortMenu bg-gray-50">
        </div>
        <div>{
          books.length > 0 ? (
            <div>{books.map((item) => {
              return (<div className='card pb-5 font-["poppins"] ms-4 px-4 py-3 mb-5 inline-flex shadow flex-wrap relative cursor-pointer hover:shadow-2xl ease-linear duration-200'>
                <ul>
                  {/* Book Image */}
                  <Image src={'http://localhost:4000/books-img/' + item._id} alt="book" width={166} height={269} priority={true} />
                  <li>{item.bookName}</li>

                  <li >by <span className="text-gray-600 text-sm">{`${item.author}`}</span></li>
                  <li className='mb-auto relative'> {`Rs. ${item.bookPrice}`}</li>
                  <button className='w-10/12 text-base py-1 bg-white border-blue-500 text-blue-500 rounded mt-auto absolute bottom-5 cursor-pointer hover:bg-blue-500 hover:text-white ease-linear duration-150' onClick={() => handleCheckout(item)}> ADD TO CART</button>
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