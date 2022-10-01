import React, { Component } from 'react'
import Recomended from './Recomended'

import './video-grid.css'
export default class VideoGrid extends Component {
    componentDidMount = () => {
        console.log('test')
    }

    renderVideo2 = (video2) => {
        const { isSmall } = this.props

        return (
            <div className="video2222" onClick={this.props.onVideoClick}>
                <img
                    className="thumbnail thumbnail2222"
                    src={video2.thumbnail}
                    alt=""
                />
                {!isSmall && (
                    <>
                        <p></p>
                        <p className="title">{video2.title}</p>
                        <p className="channel">{video2.channel}</p>
                        <p className="details">{video2.details}</p>
                    </>
                )}
                {!!isSmall && (
                    <div>
                        <p className="title">{video2.title}</p>
                        <p className="channel">{video2.channel}</p>
                        <p className="details">{video2.details}</p>
                    </div>
                )}
            </div>
        )
    }
    render() {
        const { headerTitle, isSmall } = this.props

        return (
            <section
                className={`videos videos2 ${isSmall ? 'small-mode' : ''}`}
            >
                <Recomended />
            </section>
        )
    }
}
