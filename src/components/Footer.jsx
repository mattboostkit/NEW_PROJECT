import React from 'react'

    export default function Footer() {
      return (
        <footer className="bg-primary text-white py-12">
          <div className="container text-center">
            <p>&copy; {new Date().getFullYear()} HiTech Aesthetics. All rights reserved.</p>
          </div>
        </footer>
      )
    }
