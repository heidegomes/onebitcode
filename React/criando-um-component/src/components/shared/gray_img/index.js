import React, {Fragment} from 'react';
import './style.css'

const GrayImg = (props) => {
    return (
        <img class= "gray_img" src={props.img_url}></img>
    )
}

export default GrayImg;