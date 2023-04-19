import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import tmdb from "../../api/tmdb"
import apiConfig from "../../api/apiConfig"
import "./movie_detail.scss"
import Cast from "../../component/casts/Cast"
import Relative from "../../component/relative/Relative"

const MovieDetail = () => {
    const { id } = useParams()
    const [Items, setItems] = useState({})
    const params = { movie_id: id }
    const [casts, setCasts] = useState([])
    const [video, setVideo] = useState([])
    useEffect(() => {
        const data = async () => {
            const response = await tmdb.getDetailMovie(id)
            setItems(response.data)
            const getcredits = await tmdb.getCredits(id)
            setCasts(getcredits.data.cast.slice(0, 5))
            const getvideo = await tmdb.getVideo(id)
            setVideo(getvideo.data.results[0])
            // console.log(getvideo)

            // console.log(getcredits.data.cast.slice(1, 6))
        }
        data()
    }, [id])

    console.log("sss" + video)
    return (
        <>
            <div className='movie_detail_header'>
                <img
                    src={apiConfig.originalImage(Items.backdrop_path)}
                    alt=''
                />
                <div className='overlay'></div>
            </div>
            <div className='content'>
                <div className='infor'>
                    <img src={apiConfig.w500Image(Items.poster_path)} alt='' />
                    <div className='infor__detail'>
                        <h1>{Items.title}</h1>
                        <p>{Items.overview}</p>
                        <div className='cast'>
                            <h1>cast</h1>
                            <Cast list={casts} className='list_casts'></Cast>
                        </div>
                    </div>
                </div>
                <div className='video' style={{ marginTop: "1rem" }}>
                    <iframe
                        width='100%'
                        height='700px'
                        src={`https://www.youtube.com/embed/${video.key}`}
                        frameborder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                        allowfullscreen
                    ></iframe>
                </div>
                <div className='relative'>
                    <h1>Similar movie you may like</h1>
                    <Relative idmovie={id}></Relative>
                </div>
            </div>
        </>
    )
}

export default MovieDetail
