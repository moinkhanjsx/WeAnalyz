import { useState } from 'react'
import { Link } from 'react-router-dom'

function ForgotPassword() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Password reset request for:", email)
    // Handle password reset logic here
  }

  return (
    <div className="min-h-screen bg-[#55D6C2] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#B2E5DE] p-8 rounded border border-[#1B63F2]">
        <div className="text-center mb-6">
          <p className="text-black">Don't worry, Enter your email below and we will</p>
          <p className="text-black">send you a link to change password.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="mb-6 w-full max-w-xs">
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full p-2 border border-gray-700 rounded bg-white placeholder-gray-700"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-4 flex justify-center">
            <button 
              type="submit" 
              className="w-36 bg-[#00C714] py-2 rounded text-black"
            >
              Submit
            </button>
          </div>
          
          <div className="flex justify-center">
            <Link to="/" className="block w-36 bg-[#1B63F2] py-2 rounded text-center text-white">
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword
