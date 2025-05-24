
import React from 'react';

const Features = () => {
  const features = [
    {
      title: "24/7 Market Access",
      description: "Trade and monitor your investments around the clock with our advanced platform.",
      icon: "🌐"
    },
    {
      title: "Personalized Strategy",
      description: "Custom investment strategies tailored to your risk profile and financial goals.",
      icon: "🎯"
    },
    {
      title: "Expert Analysis",
      description: "Access to professional market insights and research from our team of experts.",
      icon: "📊"
    },
    {
      title: "Secure Platform",
      description: "Bank-level security with multi-factor authentication and encrypted transactions.",
      icon: "🔒"
    },
    {
      title: "Global Markets",
      description: "Access to international markets and diverse investment opportunities worldwide.",
      icon: "🌍"
    },
    {
      title: "Premium Support",
      description: "Dedicated relationship manager and priority customer support services.",
      icon: "👨‍💼"
    }
  ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">YourBrand</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Experience the advantages of our premium financial platform and personalized service approach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-blue-400/20">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-slate-300 mb-6">Join thousands of satisfied clients who trust us with their financial future.</p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
