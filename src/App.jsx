import './App.css'
import { Footer } from './components/Footer';
import { Main } from './components/Main';
import { BackgroundPhoto } from './components/BackgroundPhoto';
import { RegistrationPopUp, LogInPopUp } from './components/PopUp'
import React, {useState} from 'react';

export default function App() {
  const [isRegVisible,setRegVisibility] = useState(false);
  const openRegPopUp = () => setRegVisibility(true);
  const closeRegPopUp = () => setRegVisibility(false);

  const [isSignVisible,setSignVisibility] = useState(false);
  const openSignPopUp = () => setSignVisibility(true);
  const closeSignPopUp = () => setSignVisibility(false);
  return (
    <>
    {isRegVisible && (
      <RegistrationPopUp closeRegPopUp={closeRegPopUp} />
    )}
    {isSignVisible && (
      <LogInPopUp closeSignPopUp={closeSignPopUp} />
    )}
    <BackgroundPhoto />
    <Main openRegPopUp={openRegPopUp} openSignPopUp={openSignPopUp} />
    <Footer />
    {/* React Router */}
    </>
  )
}
