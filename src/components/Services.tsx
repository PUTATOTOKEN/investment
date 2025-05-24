
import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Wealth Management",
      description: "Comprehensive portfolio management and strategic financial planning tailored to your goals.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop"
    },
    {
      title: "Investment Advisory",
      description: "Expert guidance on market opportunities and risk management strategies.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop"
    },
    {
      title: "Private Banking",
      description: "Exclusive banking solutions and personalized financial services for high-net-worth individuals.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Premium</span> Services
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Discover our comprehensive suite of financial services designed to maximize your wealth potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-300 leading-relaxed">{service.description}</p>
                <button className="mt-4 text-blue-400 hover:text-blue-300 transition-colors font-semibold">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
