import React from 'react'
import Dollier from '../../assets/images/Dollier/Oval1.svg'
import Video from '../../assets/images/Dollier/Video.svg'
import Video1 from '../../assets/images/Dollier/Video1.svg'
import Video2 from '../../assets/images/Dollier/Video2.svg'
import Video3 from '../../assets/images/Dollier/Video3.svg'
import Video4 from '../../assets/images/Dollier/Video4.svg'
import Video5 from '../../assets/images/Dollier/Video5.svg'
import { Link } from 'react-router-dom'
import './DollieBleir.css'

export default function DollieBlair() {
    return (
        <div>
            <div className="Dollier_recomended_recomended_txt">
                <img src={Dollier} />
                <span>Dollie Blair</span>
            </div>
            <div className="row">
                <Link to="/watch">
                    <div className="column2">
                        <img src={Video} alt="" />
                    </div>
                </Link>
                <Link to="/watch">
                    <div className="column2">
                        <img src={Video1} alt="" />
                    </div>
                </Link>
                <Link to="/watch">
                    <div className="column2">
                        <img src={Video2} alt="" />
                    </div>
                </Link>
                <Link to="/watch">
                    <div className="column2">
                        <img src={Video3} alt="" />
                    </div>
                </Link>
                <Link to="/watch">
                    <div className="column2">
                        <img src={Video4} alt="" />
                    </div>
                </Link>
                <Link to="/watch">
                    <div className="column2">
                        <img src={Video3} alt="" />
                    </div>
                </Link>
            </div>
        </div>
    )
}
