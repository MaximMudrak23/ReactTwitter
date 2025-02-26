import './styles.css'

export function AsideOptions({logo, alt, txt}) {
  return (
    <div className="option" onClick={()=>alert('Опции еще на стадии разработки')}>
      <img src={logo} alt={alt} />
      <div className="optionText">{txt}</div>
    </div>
  )
}
