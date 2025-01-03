import React, { useEffect, useState } from 'react'
    import { Swiper, SwiperSlide } from 'swiper/react'
    import 'swiper/css'
    import 'swiper/css/pagination'
    import { Autoplay, Pagination } from 'swiper/modules'

    export default function InstagramFeed() {
      const [posts, setPosts] = useState([])

      useEffect(() => {
        const mockPosts = [
          { id: 1, image: '/instagram1.jpg', link: '#' },
          { id: 2, image: '/instagram2.jpg', link: '#' },
          { id: 3, image: '/instagram3.jpg', link: '#' },
          { id: 4, image: '/instagram4.jpg', link: '#' },
        ]
        setPosts(mockPosts)
      }, [])

      return (
        <section className="py-20 bg-white">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-12">Follow Us</h2>
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={4}
              autoplay={{ delay: 3000 }}
              pagination={{ clickable: true }}
              breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 4 }
              }}
            >
              {posts.map(post => (
                <SwiperSlide key={post.id}>
                  <a href={post.link} target="_blank" rel="noopener noreferrer">
                    <img 
                      src={post.image} 
                      alt={`Instagram post ${post.id}`}
                      className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                    />
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      )
    }
