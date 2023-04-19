import React from "react"

import Slider from "../component/slider/Slider"
import Button from "../component/button/Button"
import "./scss/home.scss"
import MySwiper from "../component/MySwiper/MySwiper"
import CardGallary from "../component/card_gallary/CardGallary"
import Popular from "../component/popular/Popular"

const home = () => {
    return (
        <>
            <Slider></Slider>
            <div className='last-added'>
                <h1>Popular TV Show</h1>
            </div>
            <MySwiper type='tvshow'></MySwiper>
            <CardGallary></CardGallary>
            <div className='trending_movies'>
                <h1>Weekly trending</h1>
            </div>
            <Popular></Popular>
        </>
    )
}

export default home
