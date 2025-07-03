import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function App() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Login attempt with:", { username, password })
    // Simulate successful login and redirect to dashboard
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen bg-[#55D6C2] flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-[#B2E5DE] p-8 rounded shadow-md">
        <h1 className="text-center text-2xl font-bold italic mb-8">Helpdesk System</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex justify-center">
            <input 
              type="text" 
              placeholder="Username" 
              className="w-56 p-1.5 border border-gray-700 rounded bg-white placeholder-gray-700"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          
          <div className="mb-6 flex justify-center">
            <input 
              type="password" 
              placeholder="Password" 
              className="w-56 p-1.5 border border-gray-700 rounded bg-white placeholder-gray-700"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <div className="mb-4 flex justify-center">
            <button 
              type="submit" 
              className="w-40 bg-green-500 hover:bg-green-600 text-white py-2 rounded-md transition-colors"
            >
              Sign In
            </button>
          </div>
        </form>
        
        <div className="flex justify-between items-center">
          <Link to="/forgot-password" className="text-red-600 hover:underline text-sm">Forgot password</Link>
          <Link to="/signup" className="text-black hover:underline">Sign Up</Link>
        </div>
      </div>
    </div>
  )
}

export default App
