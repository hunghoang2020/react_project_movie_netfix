import React, { useState, useEffect, useRef } from "react"
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom"
import "./header.scss"
import tmdb from "../../api/tmdb"
import apiConfig from "../../api/apiConfig"
const Header = () => {
    const [query, setQuery] = useState("")
    const [queryResult, setQueryResult] = useState([])
    const blur = useRef(null)
    useEffect(() => {
        const blurHeader = () => {
            if (
                document.body.scrollTop > 100 ||
                document.documentElement.scrollTop > 100
            ) {
                blur.current.classList.add("blur")
            } else {
                blur.current.classList.remove("blur")
            }
        }
        window.addEventListener("scroll", blurHeader)

        return () => {
            window.removeEventListener("scroll", blurHeader)
        }
    }, [])

    const search = (data) => {
        const query = async () => {
            const response = await tmdb.getMovieQuery({
                params: { query: data },
            })
            setQueryResult(response.data.results.slice(0, 6))
        }
        query()
        console.log(queryResult)
    }
    const reset = () => {
        if (document.getElementById("search-box").innerText("") === "")
            return null
        document.getElementById("search-box").innerText("")
    }

    return (
        <div className='header' ref={blur}>
            <div className='header__wrap container'>
                <div className='logo'>
                    <img src={logo} alt='' />
                    {/* <Link to = '/'>NetFlix</Link> */}
                </div>
                <div className='menu'>
                    <ul>
                        <li>
                            <Link to='/'>HOME</Link>
                        </li>
                        <li>
                            <Link to='/movie'>MOVIE</Link>
                        </li>
                        <li>
                            <Link to='/tvshow'>TV SHOW</Link>
                        </li>
                        <li>
                            <Link to='/blog'>BLOG</Link>
                        </li>
                        <li>
                            <Link to='/contact'>CONTACT</Link>
                        </li>
                    </ul>
                </div>
                <div className='info'>
                    <div className='src-box'>
                        <input
                            id='search-box'
                            type='text'
                            placeholder='  '
                            // onChange={(e) => setQuery(e.target.value)}
                            // onBlur={search}
                            // onKeyDown={console.log("ok")}
                            onChange={(e) => {
                                search(e.target.value)
                            }}
                        />

                        <button type='reset'></button>
                    </div>
                    <div className='query__results'>
                        {queryResult.map((data, id) => (
                            <Link
                                to={`movie/${data.id}`}
                                key={id}
                                onClick={reset}
                            >
                                <img
                                    src={apiConfig.w500Image(data.poster_path)}
                                    alt=''
                                />
                                <h2>{data.title}</h2>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
