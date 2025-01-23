import './styles.css'
import { RoundButton } from '../RoundButton'
import twitterLogo from '/twitter-logo.svg'
import React, { useRef, useEffect } from 'react';

export function RegistrationPopUp({closeRegPopUp}) {
  
  return (
    <>
    <div className="backgroundPopUp">
      <div className="popUpContainer">
        <div className="popUp__logo">
          <div className="closeCircle" onClick={closeRegPopUp}></div>
          <img src={twitterLogo} alt="Twitter Logo" />
        </div>
        <div className="popUp__main">
          <div className="regPopUp__main__welcome1">
            <p>Создайте учетную запись</p>
          </div>
          <div className="regPopUp__main__loginInputs">
            <input type="text" placeholder='Имя (только латиница)'/>
            <input type="text" placeholder='Пароль'/>
          </div>
          <div className="regPopUp__main__birth">
            <p className='birth__title'>День рождения</p>
            <p className='birth__info'>Эта информация не будет общедоступной. Подтвердите свой возраст, даже если эта учетная запись предназначена для компании, домашнего животного и т. д.</p>
          </div>
          <div className="regPopUp__main__monthSelects">
            <div className="monthSelect">
              <label htmlFor="" className='zxc1'>Месяц</label>
              <select name="monthSelect" id="monthSelect">
                <option value="" disabled selected></option>
              </select>
            </div>
            <div className="daySelect">
              <label htmlFor="" className='zxc2'>День</label>
              <select name="daySelect" id="daySelect">
                <option value="" disabled selected></option>
              </select>
            </div>
            <div className="yearSelect">
              <label htmlFor="" className='zxc3'>Год</label>
              <select name="yearSelect" id="yearSelect">
                <option value="" disabled selected></option>
              </select>
            </div>
          </div>
        </div>
        <div className="popUp__submit">
        <RoundButton 
          bgc={'rgba(29, 155, 240, 1)'}
          txt={'Зарегистрироваться'}
          txtc={'white'}
          isBold={'true'}
          wdth='320px'
          hght='50px'
        />
        </div>
      </div>
    </div>
    </>
  )
}

export function LogInPopUp({closeSignPopUp}) {
  return (
    <>
    <div className="backgroundPopUp">
      <div className="popUpContainer">
        <div className="popUp__logo">
          <div className="closeCircle" onClick={closeSignPopUp}></div>
          <img src={twitterLogo} alt="Twitter Logo" />
        </div>
        <div className="popUp__main">
          <div className="regPopUp__main__welcome1">
            <p>Войти в свой акканут</p>
          </div>
          <div className="regPopUp__main__loginInputs">
            <input type="text" placeholder='Имя (только латиница)'/>
            <input type="text" placeholder='Пароль'/>
          </div>
        </div>
        <div className="popUp__submit">
        <RoundButton 
          bgc={'rgba(29, 155, 240, 1)'}
          txt={'Войти'}
          txtc={'white'}
          isBold={'true'}
          wdth='320px'
          hght='50px'
        />
        </div>
      </div>
    </div>
    </>
    )
}