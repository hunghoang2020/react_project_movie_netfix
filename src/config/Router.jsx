import React from "react"
import { Route, Routes } from "react-router-dom"

import Home from "../page/home.jsx"
import Tvshow from "../page/tvshow"
import Blog from "../page/blog"
import Contact from "../page/contact"
import Movie from "../page/Movie.jsx"
import MovieDetail from "../page/movieDetail/MovieDetail.jsx"

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='movie/' element={<Movie />} />

            <Route path='movie/:id' element={<MovieDetail />} />
            <Route path='/tvshow' element={<Tvshow />} />
            <Route path='/Blog' element={<Blog />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
    )
}

export default Router
