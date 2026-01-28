import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Building2, Users, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import SchemaCode from '@/components/SchemaCode';

const CitiesPage = () => {
  const cities = [
    {
      id: 1,
      name: 'Mumbai',
      state: 'Maharashtra',
      description: 'India\'s financial capital and a major hub for digital marketing services.',
      services: ['SEO', 'Social Media Marketing', 'PPC Campaigns'],
      image: 'https://images.unsplash.com/photo-1529253534310-60dcdc753aaf'
    },
    {
      id: 2,
      name: 'Delhi',
      state: 'Delhi NCR',
      description: 'The capital city with a thriving business ecosystem and growing digital presence.',
      services: ['Web Development', 'SEO', 'Content Marketing'],
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5'
    },
    {
      id: 3,
      name: 'Bangalore',
      state: 'Karnataka',
      description: 'India\'s Silicon Valley, home to tech startups and digital innovation.',
      services: ['App Development', 'Web Development', 'Digital Marketing'],
      image: 'https://images.unsplash.com/photo-1581539250439-c96689b3dd11'
    },
    {
      id: 4,
      name: 'Hyderabad',
      state: 'Telangana',
      description: 'A rapidly growing tech hub with increasing demand for digital services.',
      services: ['SEO', 'Web Development', 'E-commerce Solutions'],
      image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144'
    },
    {
      id: 5,
      name: 'Chennai',
      state: 'Tamil Nadu',
      description: 'A major business center in South India with diverse digital marketing needs.',
      services: ['Social Media Marketing', 'SEO', 'Web Design'],
      image: 'https://images.unsplash.com/photo-1582573618381-c1163e0cbb38'
    },
    {
      id: 6,
      name: 'Pune',
      state: 'Maharashtra',
      description: 'An emerging IT hub with growing opportunities for digital marketing.',
      services: ['Web Development', 'SEO', 'Content Writing'],
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96'
    },
    {
      id: 7,
      name: 'Kolkata',
      state: 'West Bengal',
      description: 'Eastern India\'s cultural and commercial capital with expanding digital market.',
      services: ['Digital Marketing', 'SEO', 'Social Media'],
      image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482'
    },
    {
      id: 8,
      name: 'Ahmedabad',
      state: 'Gujarat',
      description: 'A major business center with increasing demand for digital transformation.',
      services: ['Web Development', 'SEO', 'PPC Campaigns'],
      image: 'https://images.unsplash.com/photo-1583416750470-965b2707b355'
    },
    {
      id: 9,
      name: 'Jaipur',
      state: 'Rajasthan',
      description: 'The Pink City with growing digital marketing and e-commerce opportunities.',
      services: ['E-commerce Solutions', 'SEO', 'Social Media Marketing'],
      image: 'https://images.unsplash.com/photo-1561361513-2d0a8be04eae'
    },
    {
      id: 10,
      name: 'Satna',
      state: 'Madhya Pradesh',
      description: 'Our headquarters location, serving businesses across Central India.',
      services: ['All Digital Marketing Services', 'Web Development', 'Local SEO'],
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4'
    }
  ];

  return (
    <>
      <SEOHead 
        title="Cities We Serve - Digital Marketing Services Across India"
        description="The Tech Genius provides digital marketing services across major cities in India including Mumbai, Delhi, Bangalore, Hyderabad, Chennai, and more."
        keywords="digital marketing cities, SEO services Mumbai, web development Delhi, digital marketing Bangalore, SEO Hyderabad, Chennai digital marketing"
        canonical="https://www.ritvikwebsite.com/cities"
      />

      <SchemaCode
        type="WebPage"
        name="Cities We Serve - The Tech Genius"
        description="Digital marketing services across major cities in India"
        url="https://www.ritvikwebsite.com/cities"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Cities We <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Serve</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We provide digital marketing services across major cities in India. Whether you're in a metro or a tier-2 city, we're here to help grow your business online.
            </p>
          </motion.div>

          {/* Cities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city, index) => (
              <motion.div
                key={city.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={city.image}
                    alt={city.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <MapPin className="w-5 h-5 text-purple-400" />
                      <h2 className="text-2xl font-bold text-white">{city.name}</h2>
                    </div>
                    <p className="text-gray-300 text-sm">{city.state}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-4 leading-relaxed">{city.description}</p>
                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold text-purple-400 mb-2 flex items-center">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      Popular Services
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {city.services.map((service, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-medium"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="mt-4 inline-flex items-center text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors duration-300"
                  >
                    Get Quote for {city.name}
                    <span className="ml-2">→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <div className="rounded-2xl backdrop-blur-sm border p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-white/10">
              <Building2 className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-4">Don't See Your City?</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                We provide digital marketing services across India. Even if your city isn't listed above, we can help you grow your online presence. Contact us to discuss your requirements.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default CitiesPage;
