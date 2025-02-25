import './styles.css'

export function ProfilePageHeader({ userInfo }) {
    const isVideo = userInfo.background?.endsWith('.mp4') || userInfo.background?.endsWith('.webm');

    return (
      <header>
        {userInfo.background ? (
          isVideo ? (
            <video autoPlay loop muted playsInline src={userInfo.background}></video>
          ) : (
            <img src={userInfo.background} alt="Profile background" />
          )
        ) : null}
      </header>
    );
}
