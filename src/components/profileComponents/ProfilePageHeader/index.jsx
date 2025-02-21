import './styles.css'

export function ProfilePageHeader({userInfo}) {
    return (
      <header>
        <video autoPlay loop muted playsInline src={userInfo.background}></video>
      </header>
    )
}