import React from 'react'
    import { Link } from 'react-router-dom'
    import { HiMenu } from 'react-icons/hi'

    export default function Navbar() {
      return (
        <nav className="bg-white shadow-lg">
          <div className="container flex justify-between items-center py-6">
            <Link to="/" className="text-2xl font-bold text-primary-800">
              HiTech Aesthetics
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-primary-700 hover:text-accent-500 transition-colors">Home</Link>
              <Link to="/blog" className="text-primary-700 hover:text-accent-500 transition-colors">Blog</Link>
              <Link to="/contact" className="text-primary-700 hover:text-accent-500 transition-colors">Contact</Link>
            </div>
            <button className="md:hidden text-primary-700">
              <HiMenu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      )
    }
