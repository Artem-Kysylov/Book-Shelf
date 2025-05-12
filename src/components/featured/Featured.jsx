// Import Libraries
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import { GoChevronLeft } from "react-icons/go"

// Import Styles
import styles from './styles.module.scss'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

// Import Components
import { FeaturedItem } from '../featured-item/FeaturedItem'

// Import API 
import { BOOKS_FEATURED_API } from '../../api/API'

// Generate random books collection 
const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

export const Featured = () => {
    // State 
    const [books, setBooks] = useState([])
    
    // Get API 
    const url = BOOKS_FEATURED_API
    const randomStart = getRandomInt(0, 50)

    const fetchData = () => {
        axios.get(`${url}&_start=${randomStart}`)
            .then((response) => {
                console.log(response.data)
                setBooks(response.data)
            }).catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <section className={styles.container}>
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
                <div className={`${styles.swiperPrevBtn} prev-button`}>
                    <GoChevronLeft 
                        style={{
                            height: '40',
                            width: '40'
                        }}
                    />
                </div>
                <div className={`${styles.swiperNextBtn} next-button`}>
                    <GoChevronLeft 
                        style={{
                            height: '40',
                            width: '40'
                        }}
                    />
                </div>
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
        </section>     
    )
}
