import React from 'react'

    export default function Services() {
      const services = [
        {
          title: 'Laser Treatments',
          description: 'Advanced laser technology for skin rejuvenation and hair removal',
          icon: '/images/services/laser.jpg'
        },
        {
          title: 'Injectables',
          description: 'Precision injectables for facial enhancement and wrinkle reduction',
          icon: '/images/services/injectables.jpg'
        },
        {
          title: 'Body Contouring',
          description: 'Non-invasive body sculpting and fat reduction treatments',
          icon: '/images/services/body-contouring.jpg'
        }
      ]

      return (
        <section className="py-20 bg-white/90 backdrop-blur-sm">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-12 fade-in">
              Our Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-lg shadow-lg text-center fade-in delay-1 hover:shadow-xl transition-shadow"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                    <img 
                      src={service.icon} 
                      alt={service.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-primary-800">{service.title}</h3>
                  <p className="text-primary-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )
    }
