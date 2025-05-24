
import React from 'react';

const Footer = () => {
  const footerLinks = {
    Services: [
      'Wealth Management',
      'Investment Advisory',
      'Private Banking',
      'Tax Planning',
      'Estate Planning'
    ],
    Company: [
      'About Us',
      'Our Team',
      'Careers',
      'News',
      'Contact'
    ],
    Resources: [
      'Market Insights',
      'Research Reports',
      'Educational Center',
      'FAQs',
      'Support'
    ],
    Legal: [
      'Privacy Policy',
      'Terms of Service',
      'Compliance',
      'Risk Disclosure',
      'Regulatory'
    ]
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">VIP</span>
              </div>
              <span className="text-white font-bold text-xl">YourBrand</span>
            </div>
            <p className="text-slate-300 mb-6 max-w-md">
              Premium financial services and investment solutions for sophisticated investors seeking excellence in wealth management.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-blue-500 transition-colors">
                <span>f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-blue-500 transition-colors">
                <span>t</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-blue-500 transition-colors">
                <span>in</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-blue-500 transition-colors">
                <span>@</span>
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white font-semibold mb-2">Stay Updated</h3>
              <p className="text-slate-300">Get the latest market insights and financial news delivered to your inbox.</p>
            </div>
            <div className="flex w-full lg:w-auto max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-l-lg text-white placeholder-slate-400 focus:border-blue-400 focus:outline-none"
              />
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-r-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-slate-700 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-slate-300 text-sm">
            © 2024 YourBrand. All rights reserved. | Licensed Financial Services Provider
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">Privacy</a>
            <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">Terms</a>
            <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
