import './styles.css'
import { arr } from './data.js'

export function Footer() {
    return (
        <>
        <footer>
            {
                arr.map((el, index) => {
                    if (index === arr.length-1) {
                        return <span key={index} className='lxst'>{el.data}</span>
                    }
                    return <span key={index}>{el.data}</span>
                })
            }
        </footer>
        </>
    )
}