import React from 'react'

    export default function Blog() {
      return (
        <section className="py-20">
          <div className="container">
            <h1 className="text-4xl font-bold mb-8">Our Blog</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Blog posts will be dynamically loaded here */}
            </div>
          </div>
        </section>
      )
    }
