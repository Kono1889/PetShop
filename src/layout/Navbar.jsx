import React from 'react'
import { Menu, X } from 'lucide-react'
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 select-none">
            <span className="text-3xl font-extrabold bg-white tracking-wide drop-shadow-sm">Pet Shop</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 text-yellow-400 drop-shadow"
              aria-hidden="true"
            >
              <circle cx="6.5" cy="8.5" r="2.5" />
              <circle cx="17.5" cy="8.5" r="2.5" />
              <circle cx="12" cy="5.5" r="2.5" />
              <ellipse cx="12" cy="15" rx="5" ry="7" />
            </svg>
          </div>
          {/* Navigation Links */}
          <nav className="hidden md:flex flex-1 justify-center">
            <ul className="flex space-x-10 text-lg font-medium text-gray-700">
              <li><a href="/" className="hover:text-blue-600 transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-blue-600 transition-colors">About</a></li>
              <li><a href="/petcare" className="hover:text-blue-600 transition-colors">Pet Care</a></li>
              <li><a href="/petmedical" className="hover:text-blue-600 transition-colors">Pet Medical</a></li>
              <li><a href="/petaccessories" className="hover:text-blue-600 transition-colors">Pet Accessories</a></li>
            </ul>
          </nav>

          {/* Mobile Menu Bar */}
          {isMenuOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex md:hidden" onClick={() => setIsMenuOpen(false)}>
              <div className="bg-white w-64 h-full shadow-lg p-6 flex flex-col gap-6" onClick={e => e.stopPropagation()}>
                <button className="self-end mb-4" onClick={() => setIsMenuOpen(false)}>
                  <X size={28} />
                </button>
                <ul className="flex flex-col gap-6 text-lg font-medium text-gray-700">
                  <li><a href="/" className="hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</a></li>
                  <li><a href="/about" className="hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>About</a></li>
                  <li><a href="/petcare" className="hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Pet Care</a></li>
                  <li><a href="/petmedical" className="hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Pet Medical</a></li>
                  <li><a href="/petaccessories" className="hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Pet Accessories</a></li>
                </ul>
              </div>
            </div>
          )}

        
          {/* Search Bar */}
          <div className="hidden md:flex items-center gap-2 ml-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-gray-700 min-w-[180px] shadow-sm"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
          </div>
          <button className="bg-[#b7a99a] hover:bg-[#b7a99a] text-white px-4 py-2 rounded-md font-semibold shadow transition-colors duration-200">Search</button>
              <button className='md:hidden' onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>



  )
}

export default Navbar