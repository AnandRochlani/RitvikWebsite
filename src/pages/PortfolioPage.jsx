import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Filter, ExternalLink, TrendingUp, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import SchemaCode from '@/components/SchemaCode';
import { optimizeImageUrl, generateImageSrcset } from '@/lib/utils';

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const portfolioItems = [
    {
      id: 1,
      title: 'E-commerce Website Redesign',
      category: 'Web Development',
      description: 'Complete redesign and development of an e-commerce platform resulting in 40% increase in conversions.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      results: ['40% increase in conversions', '60% faster page load', 'Mobile-first responsive design'],
      client: 'Retail Brand',
      year: '2025'
    },
    {
      id: 2,
      title: 'SEO Campaign for SaaS Company',
      category: 'SEO Tips',
      description: 'Comprehensive SEO strategy that increased organic traffic by 250% in 6 months.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      results: ['250% increase in organic traffic', 'Top 3 rankings for 15+ keywords', '50% increase in leads'],
      client: 'SaaS Startup',
      year: '2025'
    },
    {
      id: 3,
      title: 'Mobile App Development',
      category: 'App Development',
      description: 'Native iOS and Android app development for a fintech startup with 100K+ downloads.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c',
      results: ['100K+ downloads', '4.8 star rating', 'Seamless user experience'],
      client: 'Fintech Company',
      year: '2024'
    },
    {
      id: 4,
      title: 'Social Media Marketing Campaign',
      category: 'Business Growth',
      description: 'Multi-platform social media campaign that increased brand awareness by 300% and engagement by 180%.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113',
      results: ['300% increase in brand awareness', '180% increase in engagement', '50K+ new followers'],
      client: 'Fashion Brand',
      year: '2024'
    },
    {
      id: 5,
      title: 'Corporate Website Development',
      category: 'Web Development',
      description: 'Modern corporate website with CMS integration and multilingual support.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
      results: ['CMS integration', 'Multilingual support', 'SEO optimized'],
      client: 'Corporate Client',
      year: '2024'
    },
    {
      id: 6,
      title: 'PPC Campaign Optimization',
      category: 'Business Growth',
      description: 'Google Ads campaign optimization that reduced cost per acquisition by 45% while increasing conversions.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      results: ['45% reduction in CPA', '120% increase in conversions', 'Improved ROI'],
      client: 'E-commerce Store',
      year: '2024'
    }
  ];

  const categories = ['All', ...new Set(portfolioItems.map(item => item.category))];

  const filteredItems = selectedCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <>
      <SEOHead 
        title="Portfolio - Our Work & Case Studies - The Tech Genius"
        description="Explore our portfolio of successful digital marketing projects, web development, SEO campaigns, and mobile app development. See how we've helped businesses grow online."
        keywords="portfolio, case studies, web development projects, SEO success stories, digital marketing portfolio, app development projects"
        canonical="https://www.ritvikwebsite.com/portfolio"
      />

      <SchemaCode
        type="WebPage"
        name="Portfolio - The Tech Genius"
        description="Our portfolio of successful digital marketing and web development projects"
        url="https://www.ritvikwebsite.com/portfolio"
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
              Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our successful projects and see how we've helped businesses achieve their digital marketing goals.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            <div className="rounded-xl backdrop-blur-sm border p-6 bg-white/5 border-white/10 text-center">
              <Briefcase className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-3xl font-bold text-white mb-1">200+</div>
              <div className="text-sm text-gray-400">Projects Completed</div>
            </div>
            <div className="rounded-xl backdrop-blur-sm border p-6 bg-white/5 border-white/10 text-center">
              <Users className="w-8 h-8 text-pink-400 mx-auto mb-2" />
              <div className="text-3xl font-bold text-white mb-1">150+</div>
              <div className="text-sm text-gray-400">Happy Clients</div>
            </div>
            <div className="rounded-xl backdrop-blur-sm border p-6 bg-white/5 border-white/10 text-center">
              <TrendingUp className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <div className="text-3xl font-bold text-white mb-1">95%</div>
              <div className="text-sm text-gray-400">Success Rate</div>
            </div>
            <div className="rounded-xl backdrop-blur-sm border p-6 bg-white/5 border-white/10 text-center">
              <Award className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <div className="text-3xl font-bold text-white mb-1">50+</div>
              <div className="text-sm text-gray-400">Awards Won</div>
            </div>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8 flex items-center space-x-2"
          >
            <Filter className="w-5 h-5 text-purple-400" />
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={optimizeImageUrl(item.image, 400, 35)}
                    srcSet={generateImageSrcset(item.image)}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-purple-500/80 backdrop-blur-sm text-white text-xs font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-400">{item.year}</span>
                    <span className="text-xs text-gray-400">{item.client}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{item.description}</p>
                  <div className="space-y-2 mb-4">
                    <h4 className="text-sm font-semibold text-purple-400">Key Results:</h4>
                    <ul className="space-y-1">
                      {item.results.map((result, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-start">
                          <span className="text-green-400 mr-2">✓</span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors duration-300"
                  >
                    View Case Study
                    <ExternalLink className="w-4 h-4 ml-2" />
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
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Let's work together to create something amazing. Contact us today to discuss your project and get a custom quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get Started
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg font-medium transition-all duration-300"
                >
                  View Services
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default PortfolioPage;
