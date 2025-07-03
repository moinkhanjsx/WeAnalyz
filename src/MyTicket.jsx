import { useState } from 'react'
import { Link } from 'react-router-dom'

function MyTicket() {
  // Sample ticket data with enhanced details for modal
  const [tickets, setTickets] = useState([
    { 
      id: '1234', 
      subject: 'Login issue', 
      status: 'In Progress', 
      support: 'Tech support', 
      date: '13/08/21', 
      rating: 0,
      department: 'IT Department',
      title: 'Cannot login to the system',
      description: 'I am unable to login to the system since yesterday. I tried resetting my password but still facing issues.',
      category: 'System Access',
      type: 'Technical Issue',
      priority: 'High',
      attachment: 'screenshot.jpg',
      requester: 'John Smith'
    },
    { 
      id: '1124', 
      subject: 'New ticket issue', 
      status: 'On hold', 
      support: 'Operation Team', 
      date: '14/08/21', 
      rating: 0,
      department: 'Operations',
      title: 'Issue creating new tickets',
      description: 'When attempting to create a new ticket, the system hangs and does not submit the form.',
      category: 'System Function',
      type: 'Bug',
      priority: 'Medium',
      attachment: 'error-log.txt',
      requester: 'Sarah Johnson'
    },
    { 
      id: '1224', 
      subject: 'New request', 
      status: 'Closed', 
      support: 'Tech support', 
      date: '13/08/21', 
      rating: 4.5,
      department: 'HR Department',
      title: 'Request for new equipment',
      description: 'I need a new laptop for the upcoming project. My current device is too slow for the required tasks.',
      category: 'Hardware Request',
      type: 'Request',
      priority: 'Normal',
      attachment: 'requirements.pdf',
      requester: 'Michael Brown'
    },
    { 
      id: '1244', 
      subject: 'Ticket submission', 
      status: 'In Progress', 
      support: 'Operation Team', 
      date: '14/08/21', 
      rating: 0,
      department: 'Finance',
      title: 'Cannot submit expense reports',
      description: 'The expense report submission form is not working. I need to submit my monthly expenses by tomorrow.',
      category: 'Financial System',
      type: 'Functional Issue',
      priority: 'High',
      attachment: 'expense-screenshot.png',
      requester: 'Emma Wilson'
    },
    { 
      id: '1114', 
      subject: 'Login issue', 
      status: 'In Progress', 
      support: 'Tech support', 
      date: '3/08/21', 
      rating: 0,
      department: 'Marketing',
      title: 'Cannot access CRM system',
      description: 'I am unable to login to the CRM system after the recent update. Need urgent access for client meeting.',
      category: 'System Access',
      type: 'Technical Issue',
      priority: 'Urgent',
      attachment: 'error-message.jpg',
      requester: 'David Lee'
    },
  ])

  // Modal state
  const [showModal, setShowModal] = useState(false)
  const [selectedTicket, setSelectedTicket] = useState(null)
  
  // Function to open ticket details modal
  const openTicketDetails = (ticketId) => {
    const ticket = tickets.find(t => t.id === ticketId)
    if (ticket) {
      setSelectedTicket(ticket)
      setShowModal(true)
    }
  }
  
  // Function to close the modal
  const closeModal = () => {
    setShowModal(false)
    setSelectedTicket(null)
  }

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1)
  const [entriesPerPage, setEntriesPerPage] = useState(10)

  // Get status badge color
  const getStatusBadgeColor = (status) => {
    switch(status) {
      case 'In Progress':
        return 'bg-[#55d6c2] text-black';
      case 'On hold':
        return 'bg-[#00337C] text-white';
      case 'Closed':
        return 'bg-[#555555] text-white';
      default:
        return 'bg-gray-200 text-gray-700';
    }
  }

  // Render stars for rating
  const renderStars = (rating) => {
    const stars = [];
    const maxStars = 5;
    
    for (let i = 0; i < maxStars; i++) {
      // Full star
      if (i < Math.floor(rating)) {
        stars.push(
          <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        );
      } 
      // Half star
      else if (i < rating && rating % 1 !== 0) {
        stars.push(
          <svg key={i} className="w-5 h-5 text-yellow-400" viewBox="0 0 24 24">
            <defs>
              <linearGradient id={`half-fill-${i}`} x1="0" x2="1" y1="0" y2="0">
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="50%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <path fill={`url(#half-fill-${i})`} stroke="currentColor" strokeWidth="0.5" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            <path fill="none" stroke="currentColor" strokeWidth="0.5" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        );
      } 
      // Empty star
      else {
        stars.push(
          <svg key={i} className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        );
      }
    }
    
    return <div className="flex">{stars}</div>;
  }

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
            
            {/* My Ticket - Selected */}
            <div className="flex items-center gap-4 cursor-pointer">
              <div className="text-xl text-blue-500 font-bold">{'>'}</div>
              <div className="flex items-center gap-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 8H18V18H6V8Z" fill="black"/>
                  <path d="M5 10L7 8V18L5 16V10Z" fill="black"/>
                  <path d="M19 8L17 10V16L19 18V8Z" fill="black"/>
                </svg>
                <span className="text-2xl font-medium">My Ticket</span>
              </div>
            </div>
          </nav>
        </aside>

        {/* My Tickets Content */}
        <main className="flex-1 p-6 bg-white">
          <h2 className="text-2xl mb-8 font-medium">List of Ticket</h2>
          
          <div className="max-w-6xl mx-auto">
            {/* Search Box */}
            <div className="mb-4">
              <div className="relative w-64">
                <input 
                  type="text" 
                  placeholder="Find ticket" 
                  className="pl-3 pr-10 py-2 bg-gray-200 rounded-sm border-none w-full focus:outline-none focus:ring-1 focus:ring-[#55D6C2]"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
              
            {/* Show Entries */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm text-gray-600">Show:</span>
              <div className="flex border border-gray-400 rounded-sm overflow-hidden">
                <span className="py-1 px-3 text-sm bg-gray-200">10</span>
                <div className="bg-gray-500 text-white flex items-center px-2">
                  <span className="text-xs">▼</span>
                </div>
              </div>
              <span className="text-sm text-gray-600">Entries</span>
            </div>
            
            {/* Tickets Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-white border-b border-gray-300">
                    <th className="py-3 px-4 text-left font-medium text-sm">Ticket No.</th>
                    <th className="py-3 px-4 text-left font-medium text-sm">Subject</th>
                    <th className="py-3 px-4 text-left font-medium text-sm">Status</th>
                    <th className="py-3 px-4 text-left font-medium text-sm">Support by</th>
                    <th className="py-3 px-4 text-left font-medium text-sm">Date</th>
                    <th className="py-3 px-4 text-left font-medium text-sm">Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {tickets.map((ticket, index) => (
                    <tr key={ticket.id} className={`${index % 2 === 0 ? 'bg-gray-200' : 'bg-white'} hover:bg-gray-100 transition-colors`}>
                      <td className="py-3 px-4">
                        <button 
                          className="text-blue-600 hover:underline font-medium focus:outline-none" 
                          onClick={(e) => {
                            e.preventDefault(); 
                            openTicketDetails(ticket.id);
                          }}
                        >
                          {ticket.id}
                        </button>
                      </td>
                      <td className="py-3 px-4">{ticket.subject}</td>
                      <td className="py-3 px-4">
                        <span className={`inline-block px-3 py-1 rounded-sm text-xs font-medium ${getStatusBadgeColor(ticket.status)}`}>
                          {ticket.status}
                        </span>
                      </td>
                      <td className="py-3 px-4">{ticket.support}</td>
                      <td className="py-3 px-4">{ticket.date}</td>
                      <td className="py-3 px-4">
                        {renderStars(ticket.rating)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Pagination */}
            <div className="flex items-center justify-between mt-6">
              <div className="text-sm text-gray-600">
                Showing 1 to 5 of 5 entries
              </div>
              
              <div className="flex gap-1 items-center">
                <button className="w-8 h-8 flex items-center justify-center border border-gray-300 bg-white disabled:opacity-50 disabled:cursor-not-allowed text-sm" disabled>
                  &#x00AB;
                </button>
                <button className="w-8 h-8 flex items-center justify-center border border-gray-300 bg-white disabled:opacity-50 disabled:cursor-not-allowed text-sm" disabled>
                  &#x2039;
                </button>
                <button className="w-8 h-8 flex items-center justify-center bg-[#55D6C2] text-white font-medium">
                  1
                </button>
                <button className="w-8 h-8 flex items-center justify-center border border-gray-300 bg-white disabled:opacity-50 disabled:cursor-not-allowed text-sm" disabled>
                  &#x203A;
                </button>
                <button className="w-8 h-8 flex items-center justify-center border border-gray-300 bg-white disabled:opacity-50 disabled:cursor-not-allowed text-sm" disabled>
                  &#x00BB;
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Ticket Details Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50" onClick={closeModal}></div>
          <div className="bg-white rounded shadow-lg w-[550px] z-10">
            {/* Modal Header */}
            <div className="p-4 text-center border-b">
              <h3 className="text-2xl font-medium">Ticket Details</h3>
            </div>
            
            {/* Modal Content */}
            {selectedTicket && (
              <div className="px-8 py-6">
                <div className="grid grid-cols-1 gap-y-3">
                  <div className="flex">
                    <span className="w-32 text-left font-medium">Ticket No:</span>
                    <span>{selectedTicket.id}</span>
                  </div>
                  
                  <div className="flex">
                    <span className="w-32 text-left font-medium">Date:</span>
                    <span>{selectedTicket.date}</span>
                  </div>
                  
                  <div className="flex">
                    <span className="w-32 text-left font-medium">Name:</span>
                    <span>{selectedTicket.requester}</span>
                  </div>
                  
                  <div className="flex">
                    <span className="w-32 text-left font-medium">Dept:</span>
                    <span>{selectedTicket.department}</span>
                  </div>
                  
                  <div className="flex">
                    <span className="w-32 text-left font-medium">Title:</span>
                    <span>{selectedTicket.title}</span>
                  </div>
                  
                  <div className="flex">
                    <span className="w-32 text-left font-medium">Description:</span>
                    <span>{selectedTicket.description}</span>
                  </div>
                  
                  <div className="flex">
                    <span className="w-32 text-left font-medium">Category:</span>
                    <span>{selectedTicket.category}</span>
                  </div>
                  
                  <div className="flex">
                    <span className="w-32 text-left font-medium">Type:</span>
                    <span>{selectedTicket.type}</span>
                  </div>
                  
                  <div className="flex">
                    <span className="w-32 text-left font-medium">Priority:</span>
                    <span>{selectedTicket.priority}</span>
                  </div>
                  
                  <div className="flex">
                    <span className="w-32 text-left font-medium">Status:</span>
                    <span>{selectedTicket.status}</span>
                  </div>
                  
                  <div className="flex">
                    <span className="w-32 text-left font-medium">Attachment:</span>
                    <span>{selectedTicket.attachment}</span>
                  </div>
                </div>
              </div>
            )}
            
            {/* Modal Footer */}
            <div className="flex justify-center p-4 pb-8">
              <button 
                onClick={closeModal} 
                className="px-16 py-2 bg-[#4AE583] text-black rounded text-base"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#55D6C2] p-2 text-center text-xs">
        Footer Area
      </footer>
    </div>
  )
}

export default MyTicket
