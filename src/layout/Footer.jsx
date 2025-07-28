import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        {/* Logo and description */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-white">Pet Shop</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-400">
              <circle cx="6.5" cy="8.5" r="2.5" />
              <circle cx="17.5" cy="8.5" r="2.5" />
              <circle cx="12" cy="5.5" r="2.5" />
              <ellipse cx="12" cy="15" rx="5" ry="7" />
            </svg>
          </div>
          <p className="text-sm text-gray-400">Your one-stop shop for all pet needs.</p>
        </div>
        {/* Navigation */}
        <div className="flex flex-col items-center gap-2">
          <nav>
            <ul className="flex flex-wrap gap-6 text-base">
              <li><a href="/" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="/" className="hover:text-blue-400 transition-colors">Pet Care</a></li>
              <li><a href="/" className="hover:text-blue-400 transition-colors">Pet Medical</a></li>
              <li><a href="/" className="hover:text-blue-400 transition-colors">Pet Accessories</a></li>
            </ul>
          </nav>
        </div>
        {/* Contact or social (optional) */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <span className="text-sm text-gray-400">Contact: info@petshop.com</span>
          <div className="flex gap-3 mt-1">
            <a href="#" aria-label="Twitter" className="hover:text-blue-400"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 9.13 4.07 7.3 1.64 4.6c-.37.64-.58 1.39-.58 2.19 0 1.51.77 2.84 1.95 3.62-.72-.02-1.39-.22-1.98-.55v.06c0 2.11 1.5 3.87 3.5 4.27-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.68 2.11 2.9 3.97 2.93A8.6 8.6 0 0 1 2 19.54c-.32 0-.63-.02-.94-.06A12.13 12.13 0 0 0 8.29 21.5c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 24 4.59a8.36 8.36 0 0 1-2.54.7z"/></svg></a>
            <a href="#" aria-label="Facebook" className="hover:text-blue-400"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg></a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-6">
        <div className="max-w-7xl mx-auto px-4 py-4 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Pet Shop. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer