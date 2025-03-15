import './styles.css'

export function AsideOptions({logo, alt, txt, onClick, hght='30px', left, right}) {
  return (
    <div className="option" onClick={onClick || (() => alert('Эта опция пока недоступна'))}>
      <img src={logo} alt={alt} style={{height: hght, left: left, right: right}} />
      <div className="optionText">{txt}</div>
    </div>
  )
}