import { useState } from 'react'
import { Link } from 'react-router-dom'

function NewTicket() {
  const [ticketData, setTicketData] = useState({
    ticketNo: "",
    date: "",
    name: "",
    department: "",
    subject: "",
    category: "",
    description: "",
    type: "",
    priority: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setTicketData({
      ...ticketData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Submitting ticket:", ticketData)
    // Here you would typically send the data to a backend server
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-[#55D6C2] p-2 sm:p-4 flex justify-between items-center">
        <h1 className="text-white text-xl sm:text-2xl font-bold italic">Helpdesk</h1>
        <div className="flex items-center gap-2 sm:gap-5">
          {/* Toggle Switch (BM/BI) */}
          <div className="flex border-2 border-black overflow-hidden h-6 sm:h-8">
            <div className="bg-black text-white font-bold flex items-center justify-center w-8 sm:w-12 text-xs sm:text-base">BM</div>
            <div className="bg-[#55D6C2] text-black font-bold flex items-center justify-center w-8 sm:w-12 text-xs sm:text-base">BI</div>
          </div>
          
          {/* Bell/Notification Icon */}
          <div className="relative">
            <svg width="24" height="24" className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C11.172 2 10.5 2.672 10.5 3.5V4.19531C7.9131 4.86101 6 7.18264 6 10V15L4 17V18H20V17L18 15V10C18 7.18264 16.0869 4.86101 13.5 4.19531V3.5C13.5 2.672 12.828 2 12 2ZM10 19C10 20.105 10.895 21 12 21C13.105 21 14 20.105 14 19H10Z" fill="black"/>
            </svg>
          </div>
          
          {/* User Profile Icon */}
          <Link to="/user-profile" className="cursor-pointer">
            <svg width="24" height="24" className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C9.243 2 7 4.243 7 7C7 9.757 9.243 12 12 12C14.757 12 17 9.757 17 7C17 4.243 14.757 2 12 2ZM12 14C8.134 14 5 17.134 5 21V22H19V21C19 17.134 15.866 14 12 14Z" fill="black"/>
            </svg>
          </Link>
          
          {/* Logout/Sign-out Icon */}
          <div>
            <svg width="24" height="24" className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 7L15.59 8.41L18.17 11H8V13H18.17L15.59 15.58L17 17L22 12L17 7ZM4 5H12V3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H12V19H4V5Z" fill="black"/>
            </svg>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row flex-1">
        {/* Sidebar */}
        <aside className="w-full md:w-60 bg-[#D9D9D9] p-4 md:p-6">
          <nav className="flex md:block justify-around md:justify-start space-y-0 md:space-y-8">
            {/* Dashboard */}
            <div className="flex items-center gap-2 md:gap-4 cursor-pointer">
              <div className="invisible text-base md:text-xl">{'>'}</div>
              <div className="flex items-center gap-1 md:gap-3">
                <svg width="20" height="20" className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="4" width="7" height="7" fill="black"/>
                  <rect x="13" y="4" width="7" height="7" fill="black"/>
                  <rect x="4" y="13" width="7" height="7" fill="black"/>
                  <rect x="13" y="13" width="7" height="7" fill="black"/>
                </svg>
                <Link to="/dashboard" className="text-base sm:text-lg md:text-2xl font-medium">Dashboard</Link>
              </div>
            </div>
            
            {/* New Ticket */}
            <div className="flex items-center gap-2 md:gap-4 cursor-pointer">
              <div className="text-base md:text-xl text-blue-500 font-bold">{'>'}</div>
              <div className="flex items-center gap-1 md:gap-3">
                <svg width="20" height="20" className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 7H17V19H5V7Z" fill="black"/>
                  <circle cx="17" cy="7" r="4" fill="black"/>
                  <path d="M17 5V9M15 7H19" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span className="text-base sm:text-lg md:text-2xl font-medium">New Ticket</span>
              </div>
            </div>
            
            {/* My Ticket */}
            <div className="flex items-center gap-2 md:gap-4 cursor-pointer">
              <div className="invisible text-base md:text-xl">{'>'}</div>
              <div className="flex items-center gap-1 md:gap-3">
                <svg width="20" height="20" className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 8H18V18H6V8Z" fill="black"/>
                  <path d="M5 10L7 8V18L5 16V10Z" fill="black"/>
                  <path d="M19 8L17 10V16L19 18V8Z" fill="black"/>
                </svg>
                <Link to="/my-ticket" className="text-base sm:text-lg md:text-2xl font-medium">My Ticket</Link>
              </div>
            </div>
          </nav>
        </aside>

        {/* New Ticket Form Content */}
        <main className="flex-1 p-3 sm:p-6 bg-white">
          <h2 className="text-xl sm:text-2xl mb-4 sm:mb-8 font-bold text-center">Create New Ticket</h2>
          
          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 sm:gap-x-6 gap-y-3 sm:gap-y-4 mb-4 sm:mb-6">
              {/* Ticket No and Date fields */}
              <div className="flex flex-col sm:flex-row sm:items-center">
                <label className="inline-block w-full sm:w-28 mb-1 sm:mb-0 text-left">Ticket No:</label>
                <input 
                  type="text"
                  name="ticketNo"
                  value={ticketData.ticketNo}
                  onChange={handleChange}
                  className="w-full sm:flex-1 p-2 bg-[#e9e9e9] rounded border-none shadow-sm"
                  readOnly
                />
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center">
                <label className="inline-block w-full sm:w-28 mb-1 sm:mb-0 text-left">Date:</label>
                <input 
                  type="text"
                  name="date"
                  value={ticketData.date || new Date().toLocaleDateString()}
                  onChange={handleChange}
                  className="w-full sm:flex-1 p-2 bg-[#e9e9e9] rounded border-none shadow-sm"
                  readOnly
                />
              </div>
            
              {/* Name and Department fields */}
              <div className="flex flex-col sm:flex-row sm:items-center">
                <label className="inline-block w-full sm:w-28 mb-1 sm:mb-0 text-left">Name:</label>
                <input 
                  type="text"
                  name="name"
                  value={ticketData.name}
                  onChange={handleChange}
                  className="w-full sm:flex-1 p-2 bg-[#e9e9e9] rounded border-none shadow-sm"
                />
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center">
                <label className="inline-block w-full sm:w-28 mb-1 sm:mb-0 text-left">Department:</label>
                <input 
                  type="text"
                  name="department"
                  value={ticketData.department}
                  onChange={handleChange}
                  className="w-full sm:flex-1 p-2 bg-[#e9e9e9] rounded border-none shadow-sm"
                />
              </div>
            
              {/* Subject field (spans full width) */}
              <div className="col-span-1 sm:col-span-2 flex flex-col sm:flex-row sm:items-center">
                <label className="inline-block w-full sm:w-28 mb-1 sm:mb-0 text-left">Subject:</label>
                <input 
                  type="text"
                  name="subject"
                  value={ticketData.subject}
                  onChange={handleChange}
                  className="w-full sm:flex-1 p-2 bg-[#e9e9e9] rounded border-none shadow-sm"
                />
              </div>
              
              {/* Category, Description, Type, Priority section with aligned layout */}
              <div className="col-span-1 sm:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                {/* Left column: Category, Type, Priority - perfectly aligned horizontally */}
                <div className="flex flex-col h-full">
                  <div>
                    <div className="mb-1">
                      <label className="inline-block text-left mb-1 sm:mb-2">Category:</label>
                    </div>
                    <div className="mb-2 sm:mb-3">
                      <input 
                        type="text"
                        name="category"
                        value={ticketData.category}
                        onChange={handleChange}
                        className="w-full p-2 bg-[#e9e9e9] rounded border-none shadow-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="mb-1">
                      <label className="inline-block text-left mb-1 sm:mb-2">Type:</label>
                    </div>
                    <div className="mb-2 sm:mb-3">
                      <input 
                        type="text"
                        name="type"
                        value={ticketData.type}
                        onChange={handleChange}
                        className="w-full p-2 bg-[#e9e9e9] rounded border-none shadow-sm"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <div className="mb-1">
                      <label className="inline-block text-left mb-1 sm:mb-2">Priority:</label>
                    </div>
                    <div>
                      <input 
                        type="text"
                        name="priority"
                        value={ticketData.priority}
                        onChange={handleChange}
                        className="w-full p-2 bg-[#e9e9e9] rounded border-none shadow-sm"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Right column: Description with attachment button */}
                <div>
                  <div className="mb-1">
                    <label className="inline-block text-left mb-1 sm:mb-2">Description:</label>
                  </div>
                  <div className="relative">
                    <textarea 
                      name="description"
                      value={ticketData.description}
                      onChange={handleChange}
                      className="w-full h-[150px] sm:h-[210px] p-2 bg-[#e9e9e9] rounded border-none shadow-sm resize-none"
                    ></textarea>
                    <div className="absolute bottom-2 right-2">
                      <button type="button" className="bg-[#55D6C2] w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center">
                        <svg width="18" height="18" className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.5 18C4.46 18 2 15.54 2 12.5S4.46 7 7.5 7H18C20.21 7 22 8.79 22 11S20.21 15 18 15H9.5C8.12 15 7 13.88 7 12.5S8.12 10 9.5 10H17V11.5H9.5C8.95 11.5 8.5 11.95 8.5 12.5S8.95 13.5 9.5 13.5H18C19.38 13.5 20.5 12.38 20.5 11S19.38 8.5 18 8.5H7.5C5.29 8.5 3.5 10.29 3.5 12.5S5.29 16.5 7.5 16.5H17V18H7.5Z" fill="black"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-between mt-4 sm:mt-8 gap-4 sm:gap-0">
              <div className="g-recaptcha w-full sm:w-auto" data-sitekey="your_site_key">
                {/* reCAPTCHA placeholder */}
                <div className="border border-gray-200 bg-white rounded-sm w-full sm:w-80 overflow-hidden shadow-sm">
                  <div className="flex items-center px-3 sm:px-4 py-3 sm:py-4">
                    <div className="relative flex-shrink-0">
                      <div className="border border-gray-400 w-4 sm:w-5 h-4 sm:h-5 rounded-sm mr-2 sm:mr-3"></div>
                    </div>
                    <span className="text-sm sm:text-base text-gray-700 font-normal">I'm not a robot</span>
                    <div className="ml-auto">
                      <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" className="h-8 sm:h-12 w-8 sm:w-12" />
                    </div>
                  </div>
                  <div className="bg-gray-100 px-2 py-1 border-t border-gray-200">
                    <div className="flex items-center justify-end">
                      <span className="text-xs text-gray-500">Privacy - Terms</span>
                    </div>
                  </div>
                </div>
              </div>
              <button 
                type="submit" 
                className="w-full sm:w-auto bg-[#55D6C2] hover:bg-[#4AE583] text-black py-2 sm:py-2.5 px-8 sm:px-16 rounded"
              >
                Submit
              </button>
            </div>
          </form>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-[#55D6C2] p-2 text-center text-xs">
        Footer Area
      </footer>
    </div>
  )
}

export default NewTicket
