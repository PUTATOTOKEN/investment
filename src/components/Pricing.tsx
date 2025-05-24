
import React from 'react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$99",
      period: "month",
      description: "Perfect for individual investors getting started",
      features: [
        "Portfolio management",
        "Basic market analysis",
        "Email support",
        "Mobile app access",
        "Quarterly reports"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "month",
      description: "Advanced features for serious investors",
      features: [
        "Everything in Starter",
        "Advanced analytics",
        "Priority phone support",
        "Tax optimization",
        "Monthly strategy calls",
        "Research reports"
      ],
      popular: true
    },
    {
      name: "VIP Elite",
      price: "$599",
      period: "month",
      description: "Premium service for high-net-worth individuals",
      features: [
        "Everything in Professional",
        "Dedicated relationship manager",
        "Custom investment strategies",
        "24/7 concierge support",
        "Exclusive investment opportunities",
        "Private events access"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose Your <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Plan</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Select the perfect plan that matches your investment goals and experience level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`relative rounded-2xl p-8 border transition-all duration-300 transform hover:scale-105 ${
              plan.popular 
                ? 'bg-gradient-to-b from-blue-500/20 to-purple-500/20 border-blue-400 scale-105' 
                : 'bg-white/5 backdrop-blur-sm border-white/10 hover:border-blue-400/50'
            }`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-slate-300 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  <span className="text-slate-300 ml-2">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-slate-300">
                    <span className="text-green-400 mr-3">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                  : 'border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-300 mb-4">Need a custom solution?</p>
          <button className="text-blue-400 hover:text-blue-300 transition-colors font-semibold">
            Contact our team for enterprise pricing →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
