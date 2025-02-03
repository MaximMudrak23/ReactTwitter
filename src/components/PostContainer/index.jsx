import './styles.css'
import pinIcon from '/pin.svg'
import Avatar from '/avatar.jpg'
import logo from '/twitter-logo.svg';
import checkBadge from '/check-badge.svg';
import likeLogo from '/like.svg'
import saveLogo from '/save.svg'

export function PostContainer({isPinned = false}) {
    const text = 'asdasjdasldjsalkjdlasjdlkasjld';
    return (
    <>
    <div className="postContainer">
        {isPinned && <div className="postContainer__pin"><img src={pinIcon} alt="Pin" /><span>Закреплено</span></div>}
        <div className="postContainer__mainInfo">
            <div className="postContainer__mainInfo__IMG"><img src={Avatar} alt="Profile Picture" /></div>
            <div className="postContainer__mainInfo__name">
                <div className="postContainer__name"><span>Maxim "Snow"</span><img src={checkBadge} alt="Check Badge" /><img src={logo} alt="Twitter Logo" /></div>
                <div className="postContainer__options"></div>
            </div>
            <div className="postContainer__mainInfo__text">{text}</div>
        </div>
        <div className="postContainer__reactions">
            <div className="postContainer__reactions__save"><img src={saveLogo} alt="Save" />0</div>
            <div className="postContainer__reactions__like"><img src={likeLogo} alt="Like" /><span>0</span></div>
        </div>
    </div>
    </>
    )
}