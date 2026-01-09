import React from "react";
import './style.css'
import OurTeam from "../ourTeam";

const Team = () => {
    return (
        <div className="team">
            <div className="teamBannerContainer">
                <div className="teamHeading"><span className="redText">O</span>ur <span className="redText">I</span>nno<span className="redText">v</span>ative <span className="redText">T</span>eam</div>
                <div className='teamImg'><img src={'/team/TeamBanner.jpg'} alt="inf" /></div>
            </div>
            <OurTeam />
        </div>
    )
}

export default Team