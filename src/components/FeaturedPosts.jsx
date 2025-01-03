import React from 'react'

    export default function FeaturedPosts() {
      const posts = [
        {
          title: 'The Science Behind Skin Rejuvenation',
          date: '2023-08-15',
          image: 'post1.jpg'
        },
        {
          title: 'Top 5 Aesthetic Trends for 2023',
          date: '2023-08-10',
          image: 'post2.jpg'
        }
      ]

      return (
        <section className="py-20">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-12">Latest from Our Blog</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {posts.map((post, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-gray-600">{new Date(post.date).toLocaleDateString()}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )
    }
