import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { RegistrationPage } from './pages/RegistrationPage'
import { ProfilePage } from './pages/ProfilePage'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/options" element={<h1>Options</h1>} />
        <Route path="/cinema" element={<h1>Cinema</h1>} />
        <Route path="/cinema/CreateRoom" element={<h1>CinemaCreateRoom</h1>} />
        <Route path="/cinema/Room" element={<h1>CinemaRoom</h1>} />
        <Route path="*" element={<Navigate to={'/register'} />} />
      </Routes>
    </Router>
  )
}
