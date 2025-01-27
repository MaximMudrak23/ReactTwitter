import './styles.css'

export function RoundButton({wdth = '300px', hght = '40px', bgc, brc, txtc, txt, logo, logoAlt, isBold = false, onClick}) {
    const weightValue = isBold ? 'bold' : '500';
    return (
        <>
        <button style={{
            width: wdth,
            height: hght,
            backgroundColor: bgc,
            border: `1px solid ${brc}`,
            color: txtc,
            fontWeight: weightValue}}
            onClick={onClick}
        >
            {logo && <img src={logo} alt={logoAlt} />}{txt}</button>
        </>
    )
}