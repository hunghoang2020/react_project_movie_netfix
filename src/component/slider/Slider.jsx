/** @format */

import React from "react"
import { useState, useEffect } from "react"

import axiosClinent from "../../api/axiosClinent"
import apiConfig, { originalImage } from "../../api/apiConfig"
import { Swiper, SwiperSlide } from "swiper/react"

import "./slider.scss"

// Import Swiper styles
import "swiper/css"
import Button, { OutlineButton } from "../button/Button"
import { Link } from "react-router-dom"

const Slider = () => {
    const [MovieItems, setMovieItems] = useState([])

    useEffect(() => {
        const data = async () => {
            const response = await axiosClinent.get("/movie/popular")

            setMovieItems(response.data.results.slice(1, 5))
        }
        data()
    }, [])
    console.log(MovieItems)
    return (
        <>
            <Swiper className='slider'>
                {MovieItems.map((data, key) => (
                    <SwiperSlide key={key}>
                        <SwiperItem item={data}></SwiperItem>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

const SwiperItem = (props) => {
    const background = apiConfig.originalImage(props.item.backdrop_path)

    // console.log(background)
    return (
        <SwiperSlide>
            <div
                className='slider__item'
                style={{ backgroundImage: `url(${background})` }}
            >
                <div className='overlay'></div>
                <div className='slider__item__container'>
                    <h2 className='title'>{props.item.title}</h2>
                    <p className='description'>{props.item.overview}</p>
                    <h1 className='release-date'>
                        Release date: {props.item.release_date}
                    </h1>

                    <Link to={`/movie/${props.item.id}`}>
                        <Button className='btn'>Watch now</Button>
                    </Link>
                    <OutlineButton> watch trailer</OutlineButton>
                </div>
            </div>
        </SwiperSlide>
    )
}

export default Slider
