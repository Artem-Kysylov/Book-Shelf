// Import Libraries
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import { GoChevronLeft } from "react-icons/go"

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'


// Import Components
import { FeaturedItem } from './FeaturedItem'


// Import API 
import { BOOKS_FEATURED_API } from '../api/API'


// Style 
const Container = styled.div`
    max-width: 1200px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    margin: 0 auto;
`

const SwiperPrevBtn = styled.div`
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    z-index: 10;
    cursor: pointer;

    @media (max-width: 1000px) {
      display: none;
    }
`

const SwiperNextBtn = styled.div`
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    transform: scaleX(-1);
    z-index: 10;
    cursor: pointer;

    @media (max-width: 1000px) {
      display: none;
    }
`

// Generate random books collection 
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}


// Component 
export const Featured = () => {
  // State 
  const [books, setBooks] = useState([])
  // Get API 
  const url = BOOKS_FEATURED_API

  const randomStart = getRandomInt(0, 50)

  const FetchData = () => {
    axios.get(`${url}&_start=${randomStart}`)
    .then((response) => {
      console.log(response.data)
      setBooks(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    FetchData()
  }, [])

  return (
      <Container>
        <Swiper
            modules={[EffectFade, Navigation, Pagination, Autoplay]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            speed={2000}
            spaceBetween={100}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: '.prev-button',
              nextEl: '.next-button',
            }}
            pagination={{
              clickable: true
            }}
            style={{
              "--swiper-pagination-color": "#000000",
              "--swiper-pagination-bullet-inactive-color": "#999999",
              "--swiper-pagination-bullet-inactive-opacity": "1",
              "--swiper-pagination-bullet-size": "10px",
              "--swiper-pagination-bullet-horizontal-gap": "10px",
          }}
          >
            <SwiperPrevBtn className="prev-button">
              {<GoChevronLeft 
              style={{
                height: '40', 
                width: '40'
                }}
              />}
            </SwiperPrevBtn>
            <SwiperNextBtn className="next-button">
              {<GoChevronLeft 
              style={{
                height: '40', 
                width: '40'
                }}
              />}
            </SwiperNextBtn> 
            {books.map((book) => (
                <SwiperSlide key={book.id}>
                  <FeaturedItem
                    id={book.id}
                    image={book.image_url}
                    title={book.title}
                    authors={book.authors}
                    description={book.description}
                  />
                </SwiperSlide>
            ))}                               
        </Swiper>
      </Container>     
  )
}
