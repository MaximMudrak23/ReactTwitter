import './styles.css'

export function AsideOptions({logo, alt, txt}) {
  return (
    <>
    <div className="option">
        <img src={logo} alt={alt} />
        <div className="optionText">{txt}</div>
    </div>
    </>
  )
}
