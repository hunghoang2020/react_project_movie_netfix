import React from "react"

import apiConfig from "../../api/apiConfig"

import { useState, useEffect } from "react"

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"

import axiosClinent from "../../api/axiosClinent"
import tmdb, { getTrendingMovies } from "../../api/tmdb"

import "swiper/css"
import "swiper/css/pagination"
import { Link } from "react-router-dom"
const Popular = () => {
    const [TrendingMovie, setTrendingMovie] = useState([])
    useEffect(() => {
        const data = async () => {
            const response = await tmdb.getTrendingMovies()
            setTrendingMovie(response.data.results)
            // console.log(setTrendingMovie)
        }
        data()
        console.log(TrendingMovie)
    }, [])

    return (
        <>
            <Swiper
                className='myswiper'
                slidesPerView={4}
                spaceBetween={1}
                modules={[Pagination]}
            >
                {TrendingMovie.map((data, id) => (
                    <SwiperSlide key={id}>
                        <Link to={`movie/${data.id}`}>
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

export default Popular
