import './styles.css'

export function ProfilePageHeader(headerVideoSrc) {
    return (
      <header>
        <video autoPlay loop muted playsInline src={headerVideoSrc}></video>
      </header>
    )
}