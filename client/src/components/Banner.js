
import React from 'react'
import Image from "next/image"
import book1 from "../images/book1.webp"
import book2 from "../images/book2.jpg"
import book3 from "../images/book3.webp"
import { FaShoppingCart, FaSearch, FaXing } from 'react-icons/fa'


export default function Banner() {
   return( <>
    <div className="con flex banner">
        <div class="banner-left">
          <h1><FaXing />Find Your Next Book</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate libero consequatur iusto sapiente quasi veniam minus eligendi, nesciunt rem similique saepe nobis repellat ipsum tenetur! Quam, laborum dicta! Deserunt, nemo!


          </p>
          <a>Explore Now</a>
        </div>

        <div class="banner-right flex">
          <div class="banner-book">
            <Image src={book2} height="410" width="250" className="book1" />
            <h3>The Earth Transformed</h3>
            <p>Peter Frankopan</p>
          </div>
          <div class="banner-book">
            <Image src={book3} height="410" width="250" className="book2" />
            <h3>How I Made $2,000,000 in the Stock Market</h3>
            <p>Nicolas Darvas</p>
          </div>
          <div class="banner-book">
            <Image src={book1} height="410" width="250" className="book3" />
            <h3>Mindwandering</h3>
            <p>Moshe Bar</p>
          </div>
        </div>
      </div>
      </>);
}