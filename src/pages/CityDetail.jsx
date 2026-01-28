import React, { useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, ArrowLeft, TrendingUp, Mail, Phone } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import SchemaCode from '@/components/SchemaCode';
import { getAllCities, findCityBySlug, findCityById } from '@/data/cities';
import { Button } from '@/components/ui/button';
import GetQuoteForm from '@/components/GetQuoteForm';

const CityDetail = () => {
  const { slug } = useParams();
  const [showQuoteForm, setShowQuoteForm] = React.useState(false);

  const cities = useMemo(() => getAllCities(), []);
  
  const city = useMemo(() => {
    if (!slug) return null;
    
    // Try to find by slug first
    let foundCity = findCityBySlug(cities, slug);
    
    // If not found by slug, try by ID (for backward compatibility)
    if (!foundCity) {
      const numericSlug = parseInt(slug, 10);
      if (!isNaN(numericSlug)) {
        foundCity = findCityById(cities, numericSlug);
        // If found by ID, redirect to slug-based URL
        if (foundCity && foundCity.slug) {
          return { ...foundCity, redirect: `/cities/${foundCity.slug}` };
        }
      }
    }
    
    return foundCity;
  }, [slug, cities]);

  // Redirect if city found by ID but has slug
  if (city && city.redirect) {
    return <Navigate to={city.redirect} replace />;
  }

  if (!city) {
    return (
      <div className="min-h-screen bg-slate-900 pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">City Not Found</h1>
          <p className="text-gray-400 mb-6">The city you're looking for doesn't exist.</p>
          <Link
            to="/cities"
            className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Cities
          </Link>
        </div>
      </div>
    );
  }

  const canonicalUrl = `https://www.ritvikwebsite.com/cities/${city.slug || city.id}`;

  return (
    <>
      <SEOHead 
        title={`Digital Marketing Services in ${city.name}, ${city.state} - The Tech Genius`}
        description={`Professional digital marketing services in ${city.name}, ${city.state}. ${city.description}`}
        keywords={`digital marketing ${city.name}, SEO services ${city.name}, web development ${city.name}, ${city.state} digital marketing`}
        canonical={canonicalUrl}
      />

      <SchemaCode
        type="WebPage"
        name={`Digital Marketing Services in ${city.name}, ${city.state}`}
        description={city.description}
        url={canonicalUrl}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            to="/cities"
            className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Cities
          </Link>

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative mb-12 rounded-2xl overflow-hidden"
          >
            <div className="relative h-96">
              <img
                src={city.image}
                alt={city.name}
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center space-x-3 mb-3">
                  <MapPin className="w-6 h-6 text-purple-400" />
                  <h1 className="text-4xl sm:text-5xl font-bold text-white">
                    {city.name}
                  </h1>
                </div>
                <p className="text-xl text-gray-300">{city.state}</p>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8"
              >
                <h2 className="text-2xl font-bold text-white mb-4">About {city.name}</h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {city.content || city.description}
                  </p>
                </div>
              </motion.div>

              {/* Services Section */}
              {city.services && city.services.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
                >
                  <div className="flex items-center space-x-2 mb-6">
                    <TrendingUp className="w-6 h-6 text-purple-400" />
                    <h2 className="text-2xl font-bold text-white">Popular Services in {city.name}</h2>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {city.services.map((service, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20"
                      >
                        <p className="text-purple-300 font-medium">{service}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 sticky top-24"
              >
                <h3 className="text-xl font-bold text-white mb-6">Get Started</h3>
                <p className="text-gray-300 mb-6">
                  Ready to grow your business in {city.name}? Contact us for a free consultation and quote.
                </p>
                <Button
                  onClick={() => setShowQuoteForm(true)}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white mb-4"
                >
                  Get Free Quote
                </Button>
                <div className="space-y-4 pt-6 border-t border-white/10">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Mail className="w-5 h-5 text-purple-400" />
                    <span>info@ritvikwebsite.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Phone className="w-5 h-5 text-purple-400" />
                    <span>+91 XXX XXX XXXX</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Form Modal */}
      {showQuoteForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="max-w-2xl w-full">
            <GetQuoteForm 
              serviceId={null}
              cityName={city.name}
              onClose={() => setShowQuoteForm(false)} 
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CityDetail;
