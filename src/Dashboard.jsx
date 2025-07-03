import { useState } from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen">
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
              <div className="text-xl text-blue-500 font-bold">{'>'}</div>
              <div className="flex items-center gap-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="4" width="7" height="7" fill="black"/>
                  <rect x="13" y="4" width="7" height="7" fill="black"/>
                  <rect x="4" y="13" width="7" height="7" fill="black"/>
                  <rect x="13" y="13" width="7" height="7" fill="black"/>
                </svg>
                <span className="text-2xl font-medium">Dashboard</span>
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

        {/* Dashboard Content */}
        <main className="flex-1 p-6 bg-white text-black">
          <h2 className="text-2xl mb-8 font-bold text-black text-center">Dashboard</h2>
          
          <div className="grid grid-cols-4 gap-6">
            {/* Total Tickets */}
            <div className="bg-[#4080DC] text-black p-6 rounded-2xl shadow-md flex flex-col items-center justify-center h-44">
              <div className="text-base font-medium mb-3">Total Tickets</div>
              <div className="text-6xl font-bold">12</div>
            </div>
            
            {/* Total Solved */}
            <div className="bg-[#4AE583] text-black p-6 rounded-2xl shadow-md flex flex-col items-center justify-center h-44">
              <div className="text-base font-medium mb-3">Total Solved</div>
              <div className="text-6xl font-bold">8</div>
            </div>
            
            {/* Total Awaiting Approval */}
            <div className="bg-[#FF6B6B] text-black p-6 rounded-2xl shadow-md flex flex-col items-center justify-center h-44">
              <div className="text-base font-medium mb-3">Total Awaiting Approval</div>
              <div className="text-6xl font-bold">2</div>
            </div>
            
            {/* Total In Progress */}
            <div className="bg-[#FFFA65] text-black p-6 rounded-2xl shadow-md flex flex-col items-center justify-center h-44">
              <div className="text-base font-medium mb-3">Total In Progress</div>
              <div className="text-6xl font-bold">2</div>
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

export default Dashboard
