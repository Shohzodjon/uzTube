import React, { Component } from 'react'
import home from '../../assets/images/home.svg'
import Home_Imge from '../../assets/images/Combined-Home.svg'

import Home_Sub from '../../assets/images/Combined-Shape.svg'
import Home_Lib from '../../assets/images/Combined-Library.svg'
import Home_trending from '../../assets/images/Path-957-Copy.svg'

import './small-sidebar.css'

export default class SmallSidebar extends Component {
    render() {
        return (
            <section className="sidebar_small">
                <ul>
                    <li>
                        <img src={Home_Imge} alt="home" />
                        Home
                    </li>
                    <li>
                        <img src={Home_trending} alt="trending" />
                        Trending
                    </li>
                    <li>
                        <img src={Home_Sub} alt="subscriptions" />
                        Subscriptions
                    </li>
                    <li>
                        <img src={Home_Lib} alt="library" />
                        Library
                    </li>
                </ul>
            </section>
        )
    }
}
