import React from 'react'

    export default function Hero() {
      return (
        <section className="relative h-[80vh] flex items-center justify-center bg-[url('/images/backgrounds/hero.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-primary-900/50"></div>
          <div className="relative z-10 text-center text-white max-w-2xl px-4">
            <h1 className="text-5xl font-bold mb-6 fade-in">
              Redefining Aesthetic Excellence
            </h1>
            <p className="text-xl mb-8 fade-in delay-1">
              Experience cutting-edge treatments with our state-of-the-art technology
            </p>
            <button className="bg-accent-500 px-8 py-3 rounded-full font-medium hover:bg-accent-600 transition-all fade-in delay-2">
              Book Consultation
            </button>
          </div>
        </section>
      )
    }
