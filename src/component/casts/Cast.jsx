import React from "react"
import "./cast.scss"
import apiConfig from "../../api/apiConfig"

const Cast = (props) => {
    const data = props.list

    return (
        <>
            <div className={props.className}>
                {data.map((res, id) => (
                    <div key={id}>
                        <img
                            src={apiConfig.w500Image(res.profile_path)}
                            alt=''
                        />
                    </div>
                ))}
            </div>
        </>
    )
}

export default Cast
