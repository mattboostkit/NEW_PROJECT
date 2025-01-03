import React from 'react'
    import Hero from '../components/Hero'
    import Services from '../components/Services'
    import InstagramFeed from '../components/InstagramFeed'
    import FeaturedPosts from '../components/FeaturedPosts'

    export default function Home() {
      return (
        <main>
          <Hero />
          <Services />
          <InstagramFeed />
          <FeaturedPosts />
        </main>
      )
    }
