import React, { useEffect, useState, useRef } from "react"
import tmdb from "../../api/tmdb"
import apiConfig from "../../api/apiConfig"
import axiosClient from "../../api/axiosClinent"
import "./card_gallary.scss"
import { OutlineButton } from "../button/Button"
import { Link } from "react-router-dom"

const CardGallary = () => {
    const [category, setCategory] = useState("comedy")
    const [gallarydata, setGallarydata] = useState([])
    // const params = {
    //     page: 3,
    //     query: "",
    // }
    let mycategory = useRef("comedy")
    function setcate(cate) {
        switch (cate) {
            case "comedy": {
                mycategory.current = "comedy"
                const data = async () => {
                    const response = await tmdb.getComedy({
                        params: { with_genres: 35 },
                    })
                    setGallarydata(response.data.results)
                    // console.log(mycategory)
                }
                data()
                // console.log(gallarydata)
                break
            }
            case "action": {
                mycategory.current = "action"

                const data = async () => {
                    const response = await tmdb.getActionMovie({
                        params: { with_genres: 28 },
                    })
                    setGallarydata(response.data.results)
                    // console.log(mycategory)
                }
                data()
                break
            }
            case "horror": {
                mycategory.current = "horror"
                const data = async () => {
                    const response = await tmdb.getHorrorMovie({
                        params: { with_genres: 27 },
                    })

                    setGallarydata(response.data.results)
                }
                data()

                break
            }
            case "thriller": {
                mycategory.current = "thriller"

                const data = async () => {
                    const response = await tmdb.getThrillerMovie({
                        params: { with_genres: 53 },
                    })
                    setGallarydata(response.data.results)
                }
                data()
                break
            }
            case "romantic": {
                mycategory.current = "romantic"

                const data = async () => {
                    const response = await tmdb.getRomanticMovie({
                        params: { with_genres: 10749 },
                    })
                    setGallarydata(response.data.results)
                }
                data()
                break
            }
            case "fantasy": {
                mycategory.current = "fantasy"

                const data = async () => {
                    const response = await tmdb.getfantasyMovie({
                        params: { with_genres: 14 },
                    })
                    setGallarydata(response.data.results)
                }
                data()
                break
            }
            case "historical": {
                mycategory.current = "historical"

                const data = async () => {
                    const response = await tmdb.getfantasyMovie({
                        params: { with_genres: 36 },
                    })
                    setGallarydata(response.data.results)
                }
                data()
                break
            }
            case "sci_fic": {
                mycategory.current = "sci_fic"

                const data = async () => {
                    const response = await tmdb.getScienceFictionMovie({
                        params: { with_genres: 878 },
                    })
                    setGallarydata(response.data.results)
                }
                data()
                break
            }
            default:
                console.log("defaul")
                break
        }
    }

    useEffect(() => {
        const data = async () => {
            const response = await tmdb.getComedy()
            setGallarydata(response.data.results)
        }
        data()
        // console.log(gallarydata)
    }, [])

    /*
        {
        "id": 35,"name": "Comedy"
        "id": 28,"name": "Action"
        "id": 27,"name": "Horror"
        "id": 53,"name": "Thriller"
        "id": 10749,"name": "Romance"
        "id": 14,"name": "Fantasy"
        "id": 36,"name": "History"
        "id": 878,"name": "Science Fiction"
        },
    */

    // let movieparam = useRef({ page: 1, with_genres: 35 })

    let movieparam = useRef({
        Comedy: { page: 1, with_genres: 35 },
        Action: { page: 1, with_genres: 28 },
        Horror: { page: 1, with_genres: 27 },
        Thriller: { page: 1, with_genres: 53 },
        Romance: { page: 1, with_genres: 10749 },
        Fantasy: { page: 1, with_genres: 14 },
        History: { page: 1, with_genres: 36 },
        ScienceFiction: { page: 1, with_genres: 878 },
    })
    function loadmore() {
        // console.log(movieparam.current)
        if (mycategory.current === "comedy") {
            mycategory.current = "comedy"
            const data = async () => {
                const response = await tmdb.getComedy({
                    params: movieparam.current.Comedy,
                })
                setGallarydata(gallarydata.concat(response.data.results))
            }
            data()
            movieparam.current.Comedy.page += 1
        }
        if (mycategory.current == "action") {
            mycategory.current = "action"
            const data = async () => {
                const response = await tmdb.getActionMovie({
                    params: movieparam.current.Action,
                })
                setGallarydata(gallarydata.concat(response.data.results))
            }
            data()
            movieparam.current.Action.page += 1
        }
        if (mycategory.current == "horror") {
            mycategory.current = "horror"
            const data = async () => {
                const response = await tmdb.getHorrorMovie({
                    params: movieparam.current.Horror,
                })
                setGallarydata(gallarydata.concat(response.data.results))
            }
            data()
            movieparam.current.Horror.page += 1
        }
        if (mycategory.current == "thriller") {
            mycategory.current = "thriller"
            const data = async () => {
                const response = await tmdb.getThrillerMovie({
                    params: movieparam.current.Thriller,
                })
                setGallarydata(gallarydata.concat(response.data.results))
            }
            data()
            movieparam.current.Thriller.page += 1
        }
        if (mycategory.current == "romantic") {
            mycategory.current = "romantic"
            const data = async () => {
                const response = await tmdb.getRomanticMovie({
                    params: movieparam.current.Romance,
                })
                setGallarydata(gallarydata.concat(response.data.results))
            }
            data()
            movieparam.current.Romance.page += 1
        }
        if (mycategory.current == "fantasy") {
            mycategory.current = "fantasy"
            const data = async () => {
                const response = await tmdb.getfantasyMovie({
                    params: movieparam.current.Fantasy,
                })
                setGallarydata(gallarydata.concat(response.data.results))
            }
            data()
            movieparam.current.Fantasy.page += 1
        }
        if (mycategory.current == "historical") {
            mycategory.current = "historical"
            const data = async () => {
                const response = await tmdb.gethistoricalMovie({
                    params: movieparam.current.History,
                })
                setGallarydata(gallarydata.concat(response.data.results))
            }
            data()
            movieparam.current.History.page += 1
        }
        if (mycategory.current == "sci_fic") {
            mycategory.current = "sci_fic"
            const data = async () => {
                const response = await tmdb.getScienceFictionMovie({
                    params: movieparam.current.ScienceFiction,
                })
                setGallarydata(gallarydata.concat(response.data.results))
            }
            data()
            movieparam.current.ScienceFiction.page += 1
        }
    }
    return (
        <>
            <div className='category'>
                <h2>Category</h2>
                <div className='category_collection'>
                    <button onClick={() => setcate("comedy")}>Comedy</button>
                    <button onClick={() => setcate("action")}>
                        Action film
                    </button>
                    <button onClick={() => setcate("horror")}>Horror</button>
                    <button onClick={() => setcate("thriller")}>
                        Thriller
                    </button>
                    <button onClick={() => setcate("romantic")}>
                        Romantic
                    </button>
                    <button onClick={() => setcate("fantasy")}>Fantasy</button>
                    <button onClick={() => setcate("historical")}>
                        Historical
                    </button>
                    <button onClick={() => setcate("sci_fic")}>Sci-fi</button>
                </div>
            </div>
            <div className='category__gallary container'>
                {gallarydata.map((data, id) => (
                    <>
                        <Link to={`movie/${data.id}`}>
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
                    </>
                ))}
            </div>
            <div className='seemore'>
                <OutlineButton onClick={loadmore}>See More</OutlineButton>
            </div>
        </>
    )
}

export default CardGallary
