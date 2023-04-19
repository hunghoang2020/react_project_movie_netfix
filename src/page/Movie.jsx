import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import tmdb from "../api/tmdb"
import Slider from "../component/slider/Slider"
import "./scss/movie.scss"

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"
import apiConfig from "../api/apiConfig"

import "swiper/css"
import "swiper/css/pagination"

const Movie = () => {
    const [horror, setHorror] = useState([])
    const [action, setAction] = useState([])
    const [romantic, setRomantic] = useState([])
    const [sci_on, setsci_on] = useState([])

    useEffect(() => {
        const req = async () => {
            const res_horro = await tmdb.getHorrorMovie({
                params: { with_genres: 27 },
            })
            setHorror(res_horro.data.results)
            console.log(res_horro.data.results)
            const res_action = await tmdb.getActionMovie({
                params: { with_genres: 28 },
            })
            setAction(res_action.data.results)
            const res_romantic = await tmdb.getRomanticMovie({
                params: { with_genres: 10749 },
            })
            setRomantic(res_romantic.data.results)
            const res_sci_on = await tmdb.getScienceFictionMovie({
                params: { with_genres: 878 },
            })
            setsci_on(res_sci_on.data.results)
        }
        req()
    }, [])

    return (
        <>
            <Slider></Slider>
            <div className='movie__content'>
                <div className='movie__content__horror'>
                    <h1>horror</h1>
                    <span className='device'></span>
                </div>
                <div className='movie__content_galary '>
                    {horror.map((data, id) => (
                        <Link to={`${data.id}`} key={id}>
                            <div className='category__gallary__item' key={id}>
                                <img
                                    src={apiConfig.w500Image(data.poster_path)}
                                    alt=''
                                />
                                <h1>
                                    {data.name
                                        ? data.name
                                        : data.original_title}
                                </h1>
                                <h1>Vote average {data.vote_average}</h1>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className='movie__content__horror'>
                    <h1>Action</h1>
                    <span className='device'></span>
                </div>
                <div className='movie__content_galary '>
                    {action.map((data, id) => (
                        <Link to={`${data.id}`} key={id}>
                            <div className='category__gallary__item' key={id}>
                                <img
                                    src={apiConfig.w500Image(data.poster_path)}
                                    alt=''
                                />
                                <h1>
                                    {data.name
                                        ? data.name
                                        : data.original_title}
                                </h1>
                                <h1>Vote average {data.vote_average}</h1>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className='movie__content__horror'>
                    <h1>Romantic</h1>
                    <span className='device'></span>
                </div>
                <div className='movie__content_galary '>
                    {romantic.map((data, id) => (
                        <Link to={`${data.id}`} key={id}>
                            <div className='category__gallary__item' key={id}>
                                <img
                                    src={apiConfig.w500Image(data.poster_path)}
                                    alt=''
                                />
                                <h1>
                                    {data.name
                                        ? data.name
                                        : data.original_title}
                                </h1>
                                <h1>Vote average {data.vote_average}</h1>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className='movie__content__horror'>
                    <h1>ScienceFiction</h1>
                    <span className='device'></span>
                </div>
                <div className='movie__content_galary '>
                    {sci_on.map((data, id) => (
                        <Link to={`${data.id}`} key={id}>
                            <div className='category__gallary__item' key={id}>
                                <img
                                    src={apiConfig.w500Image(data.poster_path)}
                                    alt=''
                                />
                                <h1>
                                    {data.name
                                        ? data.name
                                        : data.original_title}
                                </h1>
                                <h1>Vote average {data.vote_average}</h1>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Movie
