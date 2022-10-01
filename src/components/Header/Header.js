import React, { Component } from 'react'

import menuSVG from '../../assets/images/menu.svg'
import icon1SVG from '../../assets/images/icon1.svg'
import logoSVG from '../../assets/images/logo.svg'
import searchSVG from '../../assets/images/search.svg'
import searchBtnSVG from '../../assets/images/searchBtn.svg'
import newVideoSVG from '../../assets/images/newVideo.svg'
import appsSVG from '../../assets/images/apps.svg'
import notificationsSVG from '../../assets/images/notifications.svg'
import UserPic from '../../assets/images/Userpic.svg'
import Footer_nav from '../../assets/images/Navigation_Mobile.svg'
import './header.css'

export default class Header extends Component {
    render() {
        return (
            <header className={`top ${this.props.headerAdditionalClass}`}>
                <button
                    onClick={this.props.onSearchBtnClick}
                    className="back_btn"
                >
                    <img src={icon1SVG} alt="menu" />
                </button>
                <button onClick={this.props.onMenuClick} className="menu">
                    <img src={menuSVG} alt="menu" />
                </button>
                <button className="logo" onClick={this.props.onLogoClick}>
                    <img src={logoSVG} alt="menu" />
                </button>

                <div className="search">
                    <input type="text" name="search" placeholder="Search" />
                    <button className="search_btn">
                        <img src={searchSVG} alt="menu" />
                    </button>
                </div>

                <button
                    onClick={this.props.onSearchBtnClick}
                    className="search_btn"
                >
                    <img src={searchBtnSVG} alt="menu" />
                </button>

                <button className="new_video">
                    <img src={newVideoSVG} alt="menu" />
                </button>
                <button className="apps">
                    <img src={appsSVG} alt="menu" />
                </button>

                <button className="notifications">
                    <img src={notificationsSVG} alt="menu" />
                </button>

                <button className="user_avatar">
                    <img
                        src={UserPic}
                        width="224"
                        height="224"
                        alt="Man free icon"
                        title="Man free icon"
                    />
                </button>

                <div className="mobile_Version_Footer_nav">
                    <img src={Footer_nav} />
                </div>
            </header>
        )
    }
}
