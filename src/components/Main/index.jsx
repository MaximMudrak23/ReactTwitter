import './styles.css'
import './rStyles.css'
import { RoundButton } from '../RoundButton'
import twitterLogo from '/twitter-logo.svg'
import googleLogo from '/google-logo.svg'
import appleLogo from '/apple-logo.svg'

export function Main({openRegPopUp, openSignPopUp}) {
    return (
        <>
        <main>
            <section className='lSection'>
                <img src={twitterLogo} alt="Twitter Logo" draggable='false' />
            </section>
            <section className='rSection'>
                <div className="rSection__pt2">
                    <div className="rSection__pt3">
                        <div className="rSection__welcome1">
                        <p>В курсе <br /> происходящего</p>
                        </div>
                        <div className="rSection__welcome2">
                            <p>Присоединяйтесь сегодня.</p>
                        </div>
                        <div className="rSection__googleButton">
                            <div className='lock'></div>
                            <RoundButton 
                            bgc={'rgba(18, 18, 18, 1)'}
                            brc={'rgba(54, 54, 54, 1)'}
                            txtc={'white'}
                            txt={'Регистрация с помощью Google'}
                            logo={googleLogo}
                            logoAlt={'Google Logo'}
                            />
                        </div>
                        <div className="rSection__appleButton">
                            <div className='lock'></div>
                            <RoundButton 
                            bgc={'white'}
                            brc={'rgba(54, 54, 54, 1)'}
                            txtc={'black'}
                            txt={'Зарегистрироваться с Apple ID'}
                            logo={appleLogo}
                            logoAlt={'Apple Logo'}
                            isBold={'true'}
                            />
                        </div>
                        <div className="rSection__or">
                            <p>или</p>
                        </div>
                        <div className="rSection__regButton">
                            <RoundButton 
                            bgc={'rgba(29, 155, 240, 1)'}
                            brc={'rgba(29, 155, 240, 1)'}
                            txtc={'white'}
                            txt={'Зарегистрироваться'}
                            logo={''}
                            logoAlt={''}
                            isBold={'true'}
                            onClick={openRegPopUp}
                            />
                        </div>
                        <div className="rSection__rules">
                            <p>Регистрируясь, вы соглашаетесь с <span>Условиями <br /> предоставления услуг</span> и <span>Политикой конфиденциальности</span>, а <br /> также с <span>Политикой использования файлов cookie</span>.</p>
                        </div>
                        <div className="rSection__loginButton">
                            <p>Уже зарегистрированы?</p>
                            <RoundButton 
                            bgc={'rgba(0, 0, 0, 0)'}
                            brc={'rgba(54, 54, 54, 1)'}
                            txtc={'rgba(29, 155, 240, 1)'}
                            txt={'Войти'}
                            logo={''}
                            logoAlt={''}
                            isBold={'true'}
                            onClick={openSignPopUp}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
        </>
    )
}