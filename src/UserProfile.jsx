import { useState } from 'react'
import { Link } from 'react-router-dom'

function UserProfile() {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  
  // Handle star rating click
  const handleRatingClick = (value) => {
    setRating(value);
  };
  
  // Handle feedback text change
  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };
  
  // Handle submit feedback
  const handleSubmitFeedback = (e) => {
    e.preventDefault();
    console.log("Submitting feedback:", { rating, feedback });
    // Here you would typically send the data to a backend server
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header with Title */}
      {/* Header */}
      <header className="bg-[#55D6C2] p-4 flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold italic">Helpdesk</h1>
        <div className="flex items-center gap-5">
          {/* Toggle Switch (BM/BI) */}
          <div className="flex border-2 border-black overflow-hidden h-8">
            <div className="bg-black text-white font-bold flex items-center justify-center w-12">BM</div>
            <div className="bg-[#55D6C2] text-black font-bold flex items-center justify-center w-12">BI</div>
          </div>
          
          {/* Bell/Notification Icon */}
          <div className="relative">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C11.172 2 10.5 2.672 10.5 3.5V4.19531C7.9131 4.86101 6 7.18264 6 10V15L4 17V18H20V17L18 15V10C18 7.18264 16.0869 4.86101 13.5 4.19531V3.5C13.5 2.672 12.828 2 12 2ZM10 19C10 20.105 10.895 21 12 21C13.105 21 14 20.105 14 19H10Z" fill="black"/>
            </svg>
          </div>
          
          {/* User Profile Icon */}
          <Link to="/user-profile" className="cursor-pointer">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C9.243 2 7 4.243 7 7C7 9.757 9.243 12 12 12C14.757 12 17 9.757 17 7C17 4.243 14.757 2 12 2ZM12 14C8.134 14 5 17.134 5 21V22H19V21C19 17.134 15.866 14 12 14Z" fill="black"/>
            </svg>
          </Link>
          
          {/* Logout/Sign-out Icon */}
          <div>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 7L15.59 8.41L18.17 11H8V13H18.17L15.59 15.58L17 17L22 12L17 7ZM4 5H12V3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H12V19H4V5Z" fill="black"/>
            </svg>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-60 bg-[#D9D9D9] p-6">
          <nav className="space-y-8">
            {/* Dashboard */}
            <div className="flex items-center gap-4 cursor-pointer">
              <div className="invisible text-xl">{'>'}</div>
              <div className="flex items-center gap-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="4" width="7" height="7" fill="black"/>
                  <rect x="13" y="4" width="7" height="7" fill="black"/>
                  <rect x="4" y="13" width="7" height="7" fill="black"/>
                  <rect x="13" y="13" width="7" height="7" fill="black"/>
                </svg>
                <Link to="/dashboard" className="text-2xl font-medium">Dashboard</Link>
              </div>
            </div>
            
            {/* New Ticket */}
            <div className="flex items-center gap-4 cursor-pointer">
              <div className="invisible text-xl">{'>'}</div>
              <div className="flex items-center gap-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 7H17V19H5V7Z" fill="black"/>
                  <circle cx="17" cy="7" r="4" fill="black"/>
                  <path d="M17 5V9M15 7H19" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <Link to="/new-ticket" className="text-2xl font-medium">New Ticket</Link>
              </div>
            </div>
            
            {/* My Ticket */}
            <div className="flex items-center gap-4 cursor-pointer">
              <div className="invisible text-xl">{'>'}</div>
              <div className="flex items-center gap-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 8H18V18H6V8Z" fill="black"/>
                  <path d="M5 10L7 8V18L5 16V10Z" fill="black"/>
                  <path d="M19 8L17 10V16L19 18V8Z" fill="black"/>
                </svg>
                <Link to="/my-ticket" className="text-2xl font-medium">My Ticket</Link>
              </div>
            </div>
          </nav>
        </aside>

        {/* User Profile Content */}
        <main className="flex-1 bg-white p-6">
          <h2 className="text-2xl font-medium mb-6">User Profile</h2>
          
          <div className="bg-[#55D6C2]/30 p-6">
            <div className="flex flex-wrap justify-center gap-10">
              {/* User Profile Card */}
              <div className="bg-white p-6 rounded w-[300px] relative">
                {/* Edit icon */}
                <div className="absolute top-4 right-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04Z" fill="black"/>
                  </svg>
                </div>
                
                {/* Profile picture */}
                <div className="flex justify-center mb-6">
                  <div className="w-28 h-28 bg-gray-300 rounded-full flex items-center justify-center">
                    <svg width="72" height="72" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C9.243 2 7 4.243 7 7C7 9.757 9.243 12 12 12C14.757 12 17 9.757 17 7C17 4.243 14.757 2 12 2ZM12 14C8.134 14 5 17.134 5 21V22H19V21C19 17.134 15.866 14 12 14Z" fill="black"/>
                    </svg>
                  </div>
                </div>
                
                {/* User info */}
                <div className="space-y-3">
                  <div>
                    <p className="text-base">Username</p>
                  </div>
                  <div>
                    <p className="text-base">Contact Number</p>
                  </div>
                  <div>
                    <p className="text-base">Email</p>
                  </div>
                  <div>
                    <p className="text-base">Department</p>
                  </div>
                </div>
              </div>
              
              {/* Feedback Card */}
              <div className="bg-white p-6 rounded w-[300px]">
                <h3 className="text-center font-medium mb-4">Give Your Feedback</h3>
                
                {/* Feedback form */}
                <form onSubmit={handleSubmitFeedback}>
                  {/* Feedback textarea */}
                  <div className="mb-4">
                    <textarea 
                      value={feedback}
                      onChange={handleFeedbackChange}
                      className="w-full p-2 bg-gray-200 border-none rounded resize-none h-[40px]"
                      placeholder="(Lorem Ipsum)"
                    ></textarea>
                  </div>
                  
                  {/* Star rating */}
                  <div className="flex justify-center mb-5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => handleRatingClick(star)}
                        className="focus:outline-none px-1"
                      >
                        <svg 
                          width="24" 
                          height="24" 
                          viewBox="0 0 24 24" 
                          fill={rating >= star ? "currentColor" : "none"} 
                          stroke="currentColor"
                          strokeWidth="1"
                          className={`${rating >= star ? 'text-yellow-400' : 'text-gray-300'}`}
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      </button>
                    ))}
                  </div>
                  
                  {/* Submit button */}
                  <div className="flex justify-center">
                    <button 
                      type="submit" 
                      className="bg-[#55D6C2] text-black px-4 py-1.5 rounded w-full"
                    >
                      Submit Feedback
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-[#55D6C2] p-2 text-center text-xs">
        Footer Area
      </footer>
    </div>
  )
}

export default UserProfile
