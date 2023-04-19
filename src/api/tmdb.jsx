import axiosClient from "./axiosClinent"

import React from "react"

const tmdb = {
    gettv: (param) => {
        console.log(param)
        return axiosClient.get("tv/popular", param)
    },
    getComedy: (param) => {
        console.log(param)
        return axiosClient.get("discover/movie", param)
    },
    getActionMovie: (param) => {
        console.log(param)
        return axiosClient.get("discover/movie", param)
    },
    getHorrorMovie: (param) => {
        console.log(param)
        return axiosClient.get("/discover/movie", param)
    },
    getThrillerMovie: (param) => {
        console.log(param)
        return axiosClient.get("/discover/movie", param)
    },
    getRomanticMovie: (param) => {
        console.log(param)
        return axiosClient.get("/discover/movie", param)
    },
    getfantasyMovie: (param) => {
        console.log(param)
        return axiosClient.get("/discover/movie", param)
    },
    gethistoricalMovie: (param) => {
        console.log(param)
        return axiosClient.get("/discover/movie", param)
    },
    getScienceFictionMovie: (param) => {
        console.log(param)
        return axiosClient.get("/discover/movie", param)
    },
    getTrendingMovies: (param) => {
        console.log(param)
        return axiosClient.get("/trending/movie/week", param)
    },
    getDetailMovie: (param) => {
        console.log(param)
        return axiosClient.get(`/movie/${param}`)
    },
    getCredits: (param) => {
        console.log(param)
        return axiosClient.get(`/movie/${param}/credits`)
    },
    getVideo: (param) => {
        console.log(param)
        return axiosClient.get(`/movie/${param}/videos`)
    },
    getrelative: (param) => {
        console.log(param)
        return axiosClient.get(`/movie/${param}/similar`)
    },
    getMovieQuery: (param) => {
        console.log(param)
        return axiosClient.get("/search/movie", param)
    },
}

export default tmdb
