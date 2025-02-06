import './styles.css'
import React, { useEffect, useState } from 'react';
import { RoundButton } from '../../RoundButton'
import twitterLogo from '/twitter-logo.svg'
import openEye from '/eye-open.svg';
import closedEye from '/eye-closed.svg';
import { getDataInfo } from './DataInfo';
import { handleSubmit } from './submitButton';

export function RegistrationPopUp({setRegVisibility}) {
  // Data
  const [name,setName] = useState('');
  const [password,setPassword] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  // Date Logic
  const monthArr = getDataInfo('month');
  const yearObj = getDataInfo('year');
  const days = getDataInfo('day',[selectedYear,selectedMonth]);
  // Other (Нужно для того, чтобы не было бага, когда нужно было именно выбрать 1)
  useEffect(()=>{
    if (selectedMonth !== '' && selectedDay !== '' && selectedYear !== '') {
      setSelectedDay(1);
    };
  },[selectedMonth,selectedDay,selectedYear]);
  // ShowPassword
  const [isPasswordHidden,setIsPasswordHidden] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordHidden(!isPasswordHidden);
  };

  return (
    <div className="backgroundPopUp">
      <div className="popUpContainer">
        
        <div className="popUp__header">
          <div className="closeCircle" onClick={()=>{setRegVisibility(false)}}></div>
          <img src={twitterLogo} alt="Twitter Logo" />
        </div>

        <div className="popUp__main">
          <div className="regPopUp__main__welcome1">
            <p>Создайте учетную запись</p>
          </div>
          <div className="regPopUp__main__loginInputs">
            <input type="text" placeholder='Имя (только латиница)' maxLength='20' onChange={(e)=>setName(e.target.value)}/>
            <div className="regPasswordContainer">
              <input type={isPasswordHidden ? 'password' : 'text'} placeholder='Пароль' maxLength='50' onChange={(e)=>setPassword(e.target.value)}/>
              <div className="showPasswordImgContainer" onClick={togglePasswordVisibility}>
                <img
                  src={isPasswordHidden ? closedEye : openEye}
                  alt={isPasswordHidden ? 'Скрытый пароль' : 'Открытый пароль'}
                />
              </div>
            </div>
          </div>
          <div className="regPopUp__main__birth">
            <p className='birth__title'>День рождения</p>
            <p className='birth__info'>Эта информация не будет общедоступной. Подтвердите свой возраст, даже если эта учетная запись предназначена для компании, домашнего животного и т.д.</p>
          </div>
          <div className="regPopUp__main__monthSelects">
            <div className="monthSelectContainer">
              <label htmlFor="" className='monthLabel'>Месяц</label>
              <select name="monthSelect" id="monthSelect" value={selectedMonth} onChange={(e) => setSelectedMonth(Number(e.target.value))}>
                <option disabled value=''></option>
                {monthArr.map((month, index) => <option key={index} value={index + 1}>{month}</option>)}
              </select>
            </div>
            <div className="daySelectContainer">
              <label htmlFor="" className='dayLabel'>День</label>
              <select name="daySelect" id="daySelect" onChange={(e) => setSelectedDay(Number(e.target.value))}>
                {days.map(day => <option key={day} value={day}>{day}</option>)}
              </select>
            </div>
            <div className="yearSelectContainer">
              <label htmlFor="" className='yearLabel'>Год</label>
              <select name="yearSelect" id="yearSelect" value={selectedYear} onChange={(e) => setSelectedYear(Number(e.target.value))}>
                <option disabled value=''></option>
                {yearObj.years.map((el, index) => <option key={index} value={el}>{el}</option>)}
              </select>
            </div>
          </div>
        </div>

        <div className="popUp__footer">
          <RoundButton 
            bgc={'rgba(29, 155, 240, 1)'}
            txt={'Зарегистрироваться'}
            txtc={'white'}
            isBold={'true'}
            wdth='320px'
            hght='50px'
            onClick={()=>{handleSubmit(name,password,selectedMonth,selectedDay,selectedYear)}}
          />
        </div>

      </div>
    </div>
  )
}

export function LogInPopUp({setSignVisibility}) {
  // Data
  const [name,setName] = useState('');
  const [password,setPassword] = useState('');
  // ShowPassword
  const [isPasswordHidden,setIsPasswordHidden] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordHidden(!isPasswordHidden);
  };

  return (
    <div className="backgroundPopUp">
      <div className="popUpContainer">

        <div className="popUp__header">
          <div className="closeCircle" onClick={()=>{setSignVisibility(false)}}></div>
          <img src={twitterLogo} alt="Twitter Logo" />
        </div>

        <div className="popUp__main">
          <div className="regPopUp__main__welcome1">
            <p>Войти в свой аккаунт</p>
          </div>
          <div className="regPopUp__main__loginInputs">
            <input type="text" placeholder='Имя (только латиница)' onChange={(e)=>setName(e.target.value)}/>
            <div className="regPasswordContainer">
              <input type={isPasswordHidden ? 'password' : 'text'} placeholder='Пароль' onChange={(e)=>setPassword(e.target.value)}/>
              <div className="showPasswordImgContainer" onClick={togglePasswordVisibility}>
                <img
                  src={isPasswordHidden ? closedEye : openEye}
                  alt={isPasswordHidden ? 'Скрытый пароль' : 'Открытый пароль'}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="popUp__footer">
          <RoundButton 
            bgc={'rgba(29, 155, 240, 1)'}
            txt={'Войти'}
            txtc={'white'}
            isBold={'true'}
            wdth='320px'
            hght='50px'
            onClick={()=>{handleSubmit(name,password)}}
          />
        </div>

      </div>
    </div>
    )
}