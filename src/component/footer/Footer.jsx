import React from "react"
import "./footer.scss"

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className=' row'>
                    <h1>newsletter</h1>
                    <p>
                        join my profile and stay up date with the lasted offer
                    </p>
                    <input type='text' />
                    <button className='btn_submit'>Submit</button>
                </div>
                <div className='container__more-guyline'>
                    <ul className='content-1'>
                        <li style={{ fontWeight: "bold" }}>Movies</li>
                        <li>Comedy</li>
                        <li>Action films</li>
                        <li>Sci-fi</li>
                        <li>Romancetic</li>
                        <li>Fantascy</li>
                        <li>Horror</li>
                    </ul>
                    <ul className='content-2'>
                        <li style={{ fontWeight: "bold" }}>Movies</li>
                        <li>Comedy</li>
                        <li>Action films</li>
                        <li>Sci-fi</li>
                        <li>Romancetic</li>
                        <li>Fantascy</li>
                        <li>Horror</li>
                    </ul>
                    <ul className='guyline-3'>
                        <li style={{ fontWeight: "bold" }}>Movies</li>
                        <li>Comedy</li>
                        <li>Action films</li>
                        <li>Sci-fi</li>
                        <li>Romancetic</li>
                        <li>Fantascy</li>
                        <li>Horror</li>
                    </ul>
                    <ul className='guyline-4'>
                        <li style={{ fontWeight: "bold" }}>Movies</li>
                        <li>Comedy</li>
                        <li>Action films</li>
                        <li>Sci-fi</li>
                        <li>Romancetic</li>
                        <li>Fantascy</li>
                        <li>Horror</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer
