import './styles.css'
import './steps.css'
import { RoundButton } from '../RoundButton'
import twitterLogo from '/twitter-logo.svg'
import googleLogo from '/google-logo.svg'
import appleLogo from '/apple-logo.svg'

export function Main() {
    return (
        <>
        <main>
            <section className='leftSection'>
                <div className='leftSectionDiv'><img src={twitterLogo} alt="Twitter Logo" draggable='false' /></div>
            </section>
            <section className='rightSection'>
                <div className='rightSectionDiv'>
                    <div className='stepOne'>
                        <p className='part1' >В курсе <br /> происходящего</p>
                        <p className='part2' >Присоединяйтесь сегодня.</p>
                    </div>
                    <div className='stepTwo'>
                        <div className='part1'>
                            <RoundButton 
                            bgc={'#121212'} 
                            brc={'#343436'} 
                            txtc={'#C2CBD1'} 
                            txt={'Регистрация с помощью Google'} 
                            logo={googleLogo}
                            logoAlt={'Google Logo'} />
                            <RoundButton 
                            bgc={'#FFF'} 
                            brc={'#343436'} 
                            txtc={'#000000'} 
                            txt={'Зарегистрироваться с Apple ID'} 
                            logo={appleLogo}
                            logoAlt={'Apple Logo'}
                            isBold={true} />
                        </div>
                        <div className='part2'>
                            <p>или</p>
                        </div>
                        <div className='part3'>
                            <RoundButton 
                            bgc={'#1D9BF0'} 
                            brc={'#343436'} 
                            txtc={'#FFF'} 
                            txt={'Зарегистрироваться'} 
                            isBold={true} />
                        </div>
                        <div className='part4'>
                            <p>Регистрируясь, вы соглашаетесь с <span>Условиями предоставления услуг</span> и <span>Политикой конфиденциальности</span>, а также с <span>Политикой использования файлов cookie</span>.</p>
                        </div>
                        <div className="part5">
                            <p>Уже зарегистрированы?</p>
                            <RoundButton 
                            bgc={'#000000'} 
                            brc={'#343436'} 
                            txtc={'#1D9BF0'} 
                            txt={'Войти'} 
                            isBold={true} />
                        </div>
                    </div>
                </div>
            </section>
        </main>
        </>
    )
}