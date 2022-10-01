import React from 'react'
import { Link } from 'react-router-dom'
import Video from '../../assets/images/Recomended/Video.svg'
import Video1 from '../../assets/images/Recomended/Video1.svg'
import Video2 from '../../assets/images/Recomended/Video2.svg'
import DollieBlair from './DollieBlair'
import FoodDrink from './FoodDrink'
import './Recomended.css'

export default function Recomended() {
    return (
        <div>
            <DollieBlair /> <br />
            <h1 className="recomended_recomended_txt">Recomended</h1>
            <div className="row">
                <Link to="/watch">
                    <div className="column">
                        <img src={Video} alt="" />
                    </div>
                </Link>
                <Link to="/watch">
                    <div className="column">
                        <img src={Video1} alt="" />
                    </div>
                </Link>
                <Link to="/watch">
                    <div className="column">
                        <img src={Video2} alt="" />
                    </div>
                </Link>
            </div>
            <FoodDrink />
        </div>
    )
}
