import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { RegistrationPage } from './pages/RegistrationPage'
import { ProfilePage } from './pages/ProfilePage'
import { EditProfilePage } from './pages/EditProfilePage'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/profile/:username" element={<ProfilePage />} />
        <Route path="/editprofile/:username" element={<EditProfilePage />} />
        <Route path="*" element={<Navigate to={'/register'} />} />
      </Routes>
    </Router>
  )
}