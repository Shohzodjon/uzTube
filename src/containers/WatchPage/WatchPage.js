import React, { Component } from 'react'
import AppWrapper from '../AppWrapper/AppWrapper'
import './watch-page.css'
import VideoGrid from '../../components/VideoGrid/VideoGrid'
import { Link, withRouter } from 'react-router-dom'
import Dollier from '../../assets/images/Dollier/Oval.svg'
import CommentImg from '../../assets/images/Dollier/Oval1.svg'

const comments = [
    {
        avatar: './../assets/images/Dollier/Oval1.svg',
        auther: 'UzTube',
        text: 'Samarqand City In Uzbekistan',
    },
    {
        avatar: '../../assets/images/Userpic.svg',
        auther: 'UzTube',
        text: 'Samarqand City In Uzbekistan',
    },
    {
        avatar: '../../assets/images/Userpic.svg',
        auther: 'UzTube',
        text: 'Samarqand City In Uzbekistan',
    },
    {
        avatar: '../../assets/images/Userpic.svg',
        auther: 'UzTube',
        text: 'Samarqand City In Uzbekistan',
    },
    {
        avatar: '../../assets/images/Userpic.svg',
        auther: 'UzTube',
        text: 'Samarqand City In Uzbekistan',
    },
    {
        avatar: '../../assets/images/Userpic.svg',
        auther: 'UzTube',
        text: 'Samarqand City In Uzbekistan',
    },
]
class WatchPage extends Component {
    onVideoClick = () => {
        this.props.history.push('/watch')
    }
    render() {
        return (
            <AppWrapper hideSidebar={true}>
                <div className="watch_page">
                    <div className="video_container">
                        <div className="player">
                            <iframe
                                width="853"
                                height="480"
                                className="watches_iframe"
                                src={`https://www.youtube.com/embed/aqz-KE-bpKQ`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Embedded youtube"
                            />
                        </div>{' '}
                        <div className="info">
                            <div className="tags">
                                <p></p>
                            </div>{' '}
                            <h2 className="watches_videos_name">
                                {' '}
                                Dude You Re Getting A Telescope{' '}
                            </h2>
                            <p className="watch_video_show">123k views</p>
                        </div>{' '}
                        <div className="channel_details">
                            <Link to="/userProfilePage">
                                {' '}
                                <img src={Dollier} />
                            </Link>{' '}
                            <span className="foodDrink_WatcjesNAme">
                                {' '}
                                <Link to="/userProfilePage">
                                    Food & Drink
                                </Link>{' '}
                                <p className="watchesSmallText">
                                    {' '}
                                    Published on 14 Jun 2019{' '}
                                </p>
                                <p className="watchesSmallText2">
                                    A successful marketing plan relies heavily
                                    on the pulling-power of advertising copy.
                                    Writing result-oriented ad copy is
                                    difficult, as it must appeal to, entice, and
                                    convince consumers to take action. There is
                                    no magic formula to write perfect ad copy;
                                    it is based on a number of factors,
                                    including ad placement, demographic, even
                                    the consumer’s mood when they see your ad.{' '}
                                </p>{' '}
                                <br />
                                <p className="watchesSmallText">Show more</p>
                            </span>
                        </div>{' '}
                        <div className="comments">
                            {' '}
                            {comments.map((item, i) => (
                                <div className="comment" key={i}>
                                    <img
                                        className="avatar"
                                        src={CommentImg}
                                        width="224"
                                        height="224"
                                        alt="Man free icon"
                                        title="Man free icon"
                                    />
                                    <div>
                                        <p className="author">
                                            {' '}
                                            {item.auther}{' '}
                                        </p>{' '}
                                        <p className="text"> {item.text} </p>{' '}
                                    </div>
                                </div>
                            ))}
                        </div>{' '}
                    </div>{' '}
                    <div className="next_videos">
                        <VideoGrid
                            onVideoClick={this.onVideoClick}
                            headerTitle={'Up Next'}
                            isSmall={true}
                        />{' '}
                    </div>
                </div>{' '}
            </AppWrapper>
        )
    }
}

export default withRouter(WatchPage)
