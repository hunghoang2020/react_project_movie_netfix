import React from "react"
import "./relative.scss"
import { useState, useEffect } from "react"
import tmdb from "../../api/tmdb"

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"
import apiConfig from "../../api/apiConfig"

const Relative = (props) => {
    const [similar, setSimilar] = useState([])

    useEffect(() => {
        const data = async () => {
            const results = await tmdb.getrelative(props.idmovie)
            setSimilar(results.data.results)
            console.log(similar)
        }
        data()
        console.log(props.idmovie)
    }, [props.idmovie])

    return (
        <>
            <Swiper
                className='myswiper'
                slidesPerView={5}
                spaceBetween={3}
                modules={[Pagination]}
            >
                {similar.map((data, id) => (
                    <SwiperSlide key={id}>
                        <img
                            src={
                                data.backdrop_path
                                    ? apiConfig.w500Image(data.backdrop_path)
                                    : ""
                            }
                            alt=''
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default Relative
