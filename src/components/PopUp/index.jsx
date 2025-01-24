import './styles.css'
import { RoundButton } from '../RoundButton'
import React, { useState } from 'react';
import twitterLogo from '/twitter-logo.svg'
import openEye from '/eye-open.svg';
import closedEye from '/eye-closed.svg';


export function RegistrationPopUp({closeRegPopUp}) {
  // Data
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [name,setName] = useState('');
  const [password,setPassword] = useState('');

  // Date Logic
  // Month
  const months = [
    'Январь','Февраль','Март',
    'Апрель','Май','Июнь',
    'Июль','Август','Сентябрь',
    'Октябрь','Ноябрь','Декабрь'
  ];
  // Year
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, index) => currentYear - index);
  // Day
  const getDaysInMonth = (year, month) => {
    if (!year || !month) return [];
    return Array.from({ length: new Date(year, month, 0).getDate() }, (_, index) => index + 1);
  };
  const days = getDaysInMonth(selectedYear, selectedMonth);

  if(selectedYear !== '' && selectedMonth !== '' && selectedDay === '') {
    setSelectedDay(1)
  }

  // ShowPassword
  const [isPasswordHidden,setIsPasswordHidden] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordHidden((prev) => !prev);
  };

  // Submit Button
  function handleSubmit() {
    if (!name || !password || !selectedMonth || !selectedYear || !selectedDay) {
      alert('Заполните все поля перед отправкой.');
      return;
    }
    if (!/^(?=(.*[a-zA-Z]){2})[a-zA-Z0-9_\-*.]+$/.test(name)) {
      alert('Имя должно содержать только латиницу либо разрешенные символы и быть без пробелов!');
      return;
    }
    const regData = {name, password, dateOfBirth: `${selectedMonth}-${selectedDay}-${selectedYear}`};
    console.log(regData);
  }
  
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
            <p className='birth__info'>Эта информация не будет общедоступной. Подтвердите свой возраст, даже если эта учетная запись предназначена для компании, домашнего животного и т. д.</p>
          </div>
          <div className="regPopUp__main__monthSelects">
            <div className="monthSelectContainer">
              <label htmlFor="" className='monthLabel'>Месяц</label>
              <select 
              name="monthSelect"
              id="monthSelect"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(Number(e.target.value))}
              >
                <option disabled value=''></option>
                {months.map((month, index) => <option key={index} value={index + 1}>{month}</option>)}
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
              <select 
              name="yearSelect"
              id="yearSelect"
              value={selectedYear}
              onChange={(e) => setSelectedYear(Number(e.target.value))}>
                <option disabled value=''></option>
                {years.map((el, index) => <option key={index} value={el}>{el}</option>)}
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
          onClick={function(){handleSubmit()}}
        />
        </div>
      </div>
    </div>
    </>
  )
}

export function LogInPopUp({closeSignPopUp}) {
  // Data
  const [name,setName] = useState('');
  const [password,setPassword] = useState('');

  // ShowPassword
  const [isPasswordHidden,setIsPasswordHidden] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordHidden((prev) => !prev);
  };

  // Submit Button
  function handleSubmit() {
    if (!name || !password) {
      alert('Заполните все поля перед отправкой!');
      return;
    }
    const regData = {name, password};
    console.log(regData);
  }

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
        <div className="popUp__submit">
        <RoundButton 
          bgc={'rgba(29, 155, 240, 1)'}
          txt={'Войти'}
          txtc={'white'}
          isBold={'true'}
          wdth='320px'
          hght='50px'
          onClick={function(){handleSubmit()}}
        />
        </div>
      </div>
    </div>
    </>
    )
}