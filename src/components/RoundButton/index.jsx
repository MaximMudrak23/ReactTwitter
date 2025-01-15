import './styles.css'

export function RoundButton({bgc, brc, txtc, txt, logo, logoAlt, isBold = false}) {
    const weightValue = isBold ? 'bold' : '500';
    return (
        <>
        <button style={{
            backgroundColor: `${bgc}`, 
            border: `1px solid ${brc}`, 
            color: `${txtc}`,
            fontWeight: `${weightValue}`}}
        >
            <img src={logo} alt={logoAlt} />{txt}</button>
        </>
    )
}