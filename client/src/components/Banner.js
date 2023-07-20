
import React from 'react'
import Image from "next/image"
import book1 from "../images/book1.webp"
import book2 from "../images/book2.jpg"
import book3 from "../images/book3.webp"
import {FaXing } from 'react-icons/fa'


export default function Banner() {
   return( <>
    <div className="con flex banner">
        <div className="banner-left">
          <h1><FaXing />Find Your Next Book</h1>
          <p className="infoText">Uncover a realm of boundless imagination and captivating narratives at TheArchive, your gateway to literary bliss


          </p>
          <a>Explore Now</a>
        </div>

        <div className="banner-right flex">
          <div className="banner-book">
            <Image src={book2} height="410" width="240" className="book1" alt="book1"/>
            <h3>The Earth Transformed</h3>
            <p>Peter Frankopan</p>
          </div>
          <div className="banner-book">
            <Image src={book3} height="410" width="245" className="book2"alt="book2"/>
            <h3>How I Made $2,000,000 in the Stock Market</h3>
            <p>Nicolas Darvas</p>
          </div>
          <div className="banner-book">
            <Image src={book1} height="410" width="245" className="book3" alt="book3"/>
            <h3>Mindwandering</h3>
            <p>Moshe Bar</p>
          </div>
        </div>
      </div>
      </>);
}