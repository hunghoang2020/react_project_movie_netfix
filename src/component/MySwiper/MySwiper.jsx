import React from "react"

import apiConfig from "../../api/apiConfig"

import { useState, useEffect } from "react"

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"

import axiosClinent from "../../api/axiosClinent"
import tmdb, { gettv } from "../../api/tmdb"

import "swiper/css"
import "swiper/css/pagination"
import "./myswiper.scss"
import { Link } from "react-router-dom"

const MySwiper = (props) => {
    const [TVItems, setTVItems] = useState([])
    useEffect(() => {
        const data = async () => {
            const response = await tmdb.gettv()
            setTVItems(response.data.results)
            // console.log(setTVItems)
        }
        data()
        console.log(TVItems)
    }, [])

    return (
        <>
            <Swiper
                className='myswiper'
                slidesPerView={3}
                spaceBetween={3}
                modules={[Pagination]}
            >
                {TVItems.map((data, id) => (
                    <SwiperSlide key={id}>
                        <Link to={`${props.type}/${data.id}`}>
                            <img
                                src={
                                    data.backdrop_path
                                        ? apiConfig.w500Image(
                                              data.backdrop_path
                                          )
                                        : ""
                                }
                                alt=''
                            />
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default MySwiper
