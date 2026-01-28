import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Trash2, Tag } from 'lucide-react';
import { useSavedCourses } from '@/context/SavedCoursesContext';
import SaveButton from '@/components/SaveButton';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/SEOHead';
import { optimizeImageUrl, generateImageSrcset } from '@/lib/utils';

const SavedCoursesPage = () => {
  const { getSavedCourses, removeSavedCourse } = useSavedCourses();
  const [filter, setFilter] = useState('All');

  // Get saved services (function is stable from context)
  const savedServices = getSavedCourses();

  // Memoize categories to prevent recalculation on every render
  const categories = useMemo(() => ['All', ...new Set(savedServices.map(service => service.category))], [savedServices]);

  // Memoize filtered services to prevent recalculation
  const filteredServices = useMemo(() => {
    return filter === 'All' 
      ? savedServices 
      : savedServices.filter(service => service.category === filter);
  }, [savedServices, filter]);

  return (
    <>
      <SEOHead 
        title="My Saved Services"
        description="View and manage your saved services. Access your personal service wishlist and get quotes for the services you're interested in."
        canonical="https://www.ritvikwebsite.com/saved-courses"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h1 className="text-4xl font-bold text-white mb-4">
              My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Saved Services</span>
            </h1>
            <p className="text-xl text-gray-300">
              Your personal service wishlist
            </p>
          </motion.div>

          {savedServices.length > 0 ? (
            <>
              {/* Filters */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-8 flex flex-wrap gap-2"
              >
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setFilter(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      filter === category
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                        : 'bg-white/5 text-gray-300 hover:bg-white/10'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </motion.div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Link to={`/services/${service.slug || service.id}`}>
                      <div className="group h-full rounded-xl overflow-hidden bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={optimizeImageUrl(service.featuredImage, 250, 30)}
                            srcSet={generateImageSrcset(service.featuredImage)}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            alt={service.name}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                          <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-purple-500/80 backdrop-blur-sm text-white text-xs font-medium flex items-center">
                            <Tag className="w-3 h-3 mr-1" />
                            {service.category}
                          </span>
                          
                          {/* Save Button */}
                          <div className="absolute top-4 right-4 z-10">
                            <SaveButton 
                              courseId={service.id} 
                              className="bg-black/40 backdrop-blur-md hover:bg-black/60"
                            />
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300 line-clamp-2">
                            {service.name}
                          </h3>
                          <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                            {service.description}
                          </p>
                          {service.features && service.features.length > 0 && (
                            <div className="mb-4">
                              <ul className="text-xs text-gray-500 space-y-1">
                                {service.features.slice(0, 3).map((feature, idx) => (
                                  <li key={idx} className="flex items-center">
                                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2"></span>
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          <div className="flex items-center justify-between pt-4 border-t border-white/10">
                            <span className="text-sm text-gray-400">Get Quote</span>
                            <Button
                              onClick={(e) => {
                                e.preventDefault();
                                removeSavedCourse(service.id);
                              }}
                              variant="ghost"
                              size="sm"
                              className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                            >
                              <Trash2 className="w-4 h-4 mr-1" />
                              Remove
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center py-16 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm"
            >
              <BookOpen className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">No services saved yet</h3>
              <p className="text-gray-400 mb-6">Start exploring and save services for later!</p>
              <Link to="/services">
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500">
                  Explore Services
                </Button>
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};

export default SavedCoursesPage;