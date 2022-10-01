import React from 'react'
import UzTubeBanner from '../../assets/images/userProfilePgae/UzTubeBanner.svg'
import ProfileImgUser from '../../assets/images/userProfilePgae/ProfileimgUse.svg'
import Profile_Notification from '../../assets/images/userProfilePgae/Combined-Shape.svg'
import Video from '../../assets/images/userProfilePgae/Video2.svg'
import Video3 from '../../assets/images/userProfilePgae/Video3.svg'
import Video4 from '../../assets/images/userProfilePgae/Video4.svg'
import Video5 from '../../assets/images/userProfilePgae/Video5.svg'
import Video6 from '../../assets/images/userProfilePgae/Video6.svg'
import Video7 from '../../assets/images/userProfilePgae/Video7.svg'
import Oval1 from '../../assets/images/userProfilePgae/Oval1.svg'
import Path_Mob from '../../assets/images/Path.svg'
import Mob_Banner from '../../assets/images/userProfilePgae/MobCover.svg'
import Marget_Phelips from '../../assets/images/userProfilePgae/Margaret Phelps.svg'
import './UserProfilePage.css'
import AppWrapper from '../../containers/AppWrapper/AppWrapper'

export default function UserProfilePage() {
    return (
        // 1.0.30001043
        <div className="Profile_Page_wrapper">
            <div className="Mobile_Profile_page">
                <AppWrapper hideSidebar={true}>
                    <div className="watch_page4">
                        <img
                            className="UzTube_Banner"
                            src={Mob_Banner}
                            alt=""
                        />
                        <img
                            className="Morgat_phile_name_mob"
                            src={Marget_Phelips}
                            alt=""
                        />{' '}
                        <br />
                        <button>Subscribe 2.3m</button> <br />
                        <ul>
                            <li className="Home_li_user_Page">Home</li>
                            <li>Videos</li>
                            <li>Playlists</li>
                            <li>
                                <img src={Path_Mob} alt="" />
                            </li>
                        </ul>{' '}
                        <br />
                        <div className="Mobile_Img_section">
                            <img src={Video3} alt="" />
                            <img src={Video4} alt="" />
                            <img src={Video5} alt="" />
                            <img src={Video6} alt="" />
                            <img src={Video7} alt="" />
                            <img src={Video5} alt="" />
                        </div>
                    </div>
                </AppWrapper>
            </div>
            <div className="profilePage">
                <AppWrapper hideSidebar={true}>
                    <div className="watch_page">
                        <div className="video_container">
                            <img
                                className="UzTube_Banner"
                                src={UzTubeBanner}
                                alt=""
                            />

                            <div className="userSection_Basic">
                                <img
                                    className="userImgInsideProfile"
                                    src={ProfileImgUser}
                                    alt=""
                                />
                                <span className="ProfileName_inside_Page">
                                    Margaret Phelps
                                </span>
                                <span className="sub_num_inside_page">
                                    245K subscribed
                                </span>

                                <span>
                                    <span className="profile_notification">
                                        <img
                                            src={Profile_Notification}
                                            alt=""
                                        />
                                    </span>
                                    <span className="SunscribeNum_nside">
                                        <button>Subscribe 2.3m</button>
                                    </span>
                                </span>
                            </div>
                            <div className="ul_first_User_profile">
                                <ul>
                                    <li className="Ul_first_li_user">Home</li>
                                    <li>Videos</li>
                                    <li>Playlists</li>
                                    <li>Channels</li>
                                    <li>Discussion</li>
                                    <li>About</li>
                                    <li>About</li>
                                    <li className="Ul_Latest_li_user">
                                        Recommended channel
                                    </li>
                                </ul>
                            </div>

                            <div className="userSection_Basic2">
                                <ul>
                                    <li className="InsideHomeLi_1">
                                        <ul>
                                            <li>
                                                <img
                                                    className="in_User_Page_video"
                                                    src={Video}
                                                    alt=""
                                                />
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="InsideHomeLi_2">
                                        <ul>
                                            <li>
                                                <img src={Oval1} alt="" />
                                                <span className="span1_user_P">
                                                    Flora Benson
                                                </span>
                                            </li>
                                            <br />
                                            <li>
                                                <img src={Oval1} alt="" />
                                                <span>Violet Cobb</span>
                                            </li>
                                            <br />
                                            <li className="latest_Ul_Li_user">
                                                <img src={Oval1} alt="" />
                                                <span>Phillip Mullins</span>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </AppWrapper>
                <div className="Dollier_recomended_recomended_txt">
                    <span>Margaret Phelps videos</span>
                </div>
                <div class="row">
                    <div class="column2">
                        <img src={Video3} alt="" />
                    </div>

                    <div class="column2">
                        <img src={Video4} alt="" />
                    </div>

                    <div class="column2">
                        <img src={Video5} alt="" />
                    </div>

                    <div class="column2">
                        <img src={Video6} alt="" />
                    </div>

                    <div class="column2">
                        <img src={Video7} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
