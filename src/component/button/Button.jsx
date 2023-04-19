import React from "react"
import "./button.scss"

const Button = (props) => {
    return (
        <>
            <button className={`primari-button ${props.className}`}>
                {props.children}
            </button>
        </>
    )
}

export const OutlineButton = (props) => {
    return (
        <>
            <button
                className='outline-button'
                onClick={props.onClick ? () => props.onClick() : null}
            >
                {props.children}
            </button>
        </>
    )
}

export default Button
