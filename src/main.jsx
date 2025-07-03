import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import SignUp from './SignUp.jsx'
import Dashboard from './Dashboard.jsx'
import NewTicket from './NewTicket.jsx'
import MyTicket from './MyTicket.jsx'
import UserProfile from './UserProfile.jsx'
import ForgotPassword from './ForgotPassword.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/new-ticket" element={<NewTicket />} />
        <Route path="/my-ticket" element={<MyTicket />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
