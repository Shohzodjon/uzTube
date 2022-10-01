import React, { Component } from 'react'
import Home_Imge from '../../assets/images/Combined-Home.svg'
import Home_trending from '../../assets/images/Path-957-Copy.svg'
import Home_Sub from '../../assets/images/Combined-Shape.svg'
import Home_Lib from '../../assets/images/Combined-Library.svg'
import Home_His from '../../assets/images/Combined-Hoistory.svg'
import Home_Time from '../../assets/images/Shape_Time.svg'
import Home_star from '../../assets/images/Shape_start.svg'
import Home_love from '../../assets/images/Combined-Love.svg'
import Home_Music from '../../assets/images/Combined-music.svg'
import Home_Game from '../../assets/images/Combined-Game.svg'
import Home_ShowMore from '../../assets/images/Path.svg'
import Home_Oval_Sub from '../../assets/images/Oval.svg'
import Home_Oval_Sub1 from '../../assets/images/Oval2.svg'
import Home_Oval_Sub2 from '../../assets/images/Oval3.svg'
import Home_Oval_Sub3 from '../../assets/images/Oval4.svg'
import Home_Oval_Sub4 from '../../assets/images/Oval5.svg'
import Home_Oval_Sub5 from '../../assets/images/Oval6.svg'
import Home_Seeting from '../../assets/images/Combined-Setting.svg'
import './main-sidebar.css'

export default class MainSidebar extends Component {
    render() {
        return (
            <section className="sidebar">
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
                </ul>
                <ul>
                    <li>
                        <img src={Home_Lib} alt="library" />
                        Library
                    </li>
                    <li>
                        <img src={Home_His} alt="history" />
                        History
                    </li>
                    <li>
                        <img src={Home_Time} alt="watch later" />
                        Watch later
                    </li>
                    <li>
                        <img src={Home_star} alt="liked" />
                        Favourites
                    </li>
                    <li>
                        <img src={Home_love} alt="liked" />
                        Liked videos
                    </li>
                    <li>
                        <img src={Home_Music} alt="liked" />
                        Music
                    </li>
                    <li>
                        <img src={Home_Game} alt="liked" />
                        Games
                    </li>
                    <li>
                        <img src={Home_ShowMore} alt="liked" />
                        Show more
                    </li>
                </ul>
                <span className="title">Subscriptions</span>
                <ul>
                    <li>
                        <img
                            id="img"
                            src={Home_Oval_Sub}
                            width="24"
                            height="24"
                        />
                        Gussie Singleton
                    </li>
                    <li>
                        <img
                            id="img"
                            src={Home_Oval_Sub1}
                            width="24"
                            height="24"
                        />
                        Nora Francis
                    </li>
                    <li>
                        <img
                            id="img"
                            src={Home_Oval_Sub2}
                            width="24"
                            height="24"
                        />
                        Belle Briggs
                    </li>
                    <li>
                        <img
                            id="img"
                            src={Home_Oval_Sub3}
                            width="24"
                            height="24"
                        />
                        Eunice Cortez
                    </li>
                    <li>
                        <img
                            id="img"
                            src={Home_Oval_Sub4}
                            width="24"
                            height="24"
                        />
                        Emma Hanson
                    </li>
                    <li>
                        <img
                            id="img"
                            src={Home_Oval_Sub5}
                            width="24"
                            height="24"
                        />
                        Leah Berry
                    </li>
                </ul>

                <ul>
                    <li>
                        <img src={Home_Seeting} alt="settings" />
                        Settings
                    </li>
                </ul>
            </section>
        )
    }
}
