import React, {useState} from 'react';
import { RegistrationPopUp, LogInPopUp } from '../../components/registerComponents/PopUp';
import { BackgroundPhoto } from '../../components/registerComponents/BackgroundPhoto';
import { Main } from '../../components/registerComponents/Main';
import { Footer } from '../../components/registerComponents/Footer';

// В поп-ап передаем функцию смены состояния, чтобы закинуть фолс, если не должно быть видно
// {isRegVisible && (<RegistrationPopUp closeRegPopUp={setRegVisibility} />)}
// {isSignVisible && (<LogInPopUp closeSignPopUp={setSignVisibility} />)}

export function RegistrationPage() {
  const [isRegVisible,setRegVisibility] = useState(false);
  const [isSignVisible,setSignVisibility] = useState(false);
  return (
    <>
      {isRegVisible && (<RegistrationPopUp setRegVisibility={setRegVisibility} />)}
      {isSignVisible && ( <LogInPopUp setSignVisibility={setSignVisibility} />)}
      <BackgroundPhoto />
      <Main setRegVisibility={setRegVisibility} setSignVisibility={setSignVisibility} />
      <Footer />
    </>
  )
}