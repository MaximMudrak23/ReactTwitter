import './styles.css'
import { useState } from 'react';
import { RoundButton } from '../../RoundButton'
import twitterLogo from '/twitter-logo.svg'
import openEye from '/eye-open.svg';
import closedEye from '/eye-closed.svg';
import {registerSubmit, loginSubmit} from '../../../../API/POST/authRequests'

function getDaysInMonth(year, month){
  if (!year || !month) return [];
  return Array.from({ length: new Date(year, month, 0).getDate() }, (_, index) => index + 1);
}

function getDataInfo(option,info) {
  switch (option) {
    case 'month':
      return ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];
    case 'day':
      return getDaysInMonth(info[0],info[1]);
    case 'year':
      return {currentYear: new Date().getFullYear(), years: Array.from({ length: 100 }, (_, index) => new Date().getFullYear() - index)}
    default:
      alert('Такого значения не существует!')
      break;
  }
}

export function RegistrationPopUp({setRegVisibility}) {
  // Data
  const [name,setName] = useState('');
  const [password,setPassword] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  // Other
  if (selectedDay === '') setSelectedDay(1);
  // Date Logic
  const monthArr = getDataInfo('month');
  const yearObj = getDataInfo('year');
  const days = getDataInfo('day',[selectedYear,selectedMonth]);
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
            onClick={()=>{registerSubmit(name,password,selectedMonth,selectedDay,selectedYear)}}
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
            onClick={()=>{loginSubmit(name,password)}}
          />
        </div>

      </div>
    </div>
    )
}