import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, GraduationCap, Sparkles, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/SEOHead';
import SchemaCode from '@/components/SchemaCode';
import MembershipSignup from '@/components/MembershipSignup';
import NewsletterSignup from '@/components/NewsletterSignup';
import { optimizeImageUrl, generateImageSrcset } from '@/lib/utils';

const HomePage = () => {
  const [showMembershipModal, setShowMembershipModal] = useState(false);
  const heroImageUrl = "https://images.unsplash.com/photo-1504983875-d3b163aba9e6";
  // Use 200px for fastest mobile LCP (base image)
  // Desktop will use larger images from srcset (400px, 800px, 1200px, 1600px)
  // Quality increases with size: mobile=35%, desktop=50-70% for better quality
  const optimizedHeroImage = optimizeImageUrl(heroImageUrl, 200, 35);

  // Preload hero image for better LCP (immediate, not deferred)
  useEffect(() => {
    // Check if already preloaded in HTML
    const existingPreload = document.querySelector(`link[rel="preload"][href="${optimizedHeroImage}"]`);
    if (!existingPreload) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = optimizedHeroImage;
      link.fetchpriority = 'high';
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    }
  }, [optimizedHeroImage]);

  return (
    <>
      <SEOHead 
        title="The Tech Genius - The Best Digital Marketing Company in India"
        description="Welcome to The Tech Genius - The Best Digital Marketing Company in India. Premier Internet Marketing Service in India providing innovative digital marketing strategies, unmatched expertise, and ROI-focused solutions."
        keywords="digital marketing company india, internet marketing service india, digital marketing services india, digital marketing consultancy india, best digital marketing company, online marketing services"
        canonical="https://www.ritvikwebsite.com/"
      />

      <SchemaCode
        type="WebSite"
        name="The Tech Genius - The Best Digital Marketing Company in India"
        description="Premier Internet Marketing Service in India providing innovative digital marketing strategies, unmatched expertise, and ROI-focused solutions"
        url="https://www.ritvikwebsite.com"
        image="https://www.ritvikwebsite.com/og-image.jpg"
      />

      {showMembershipModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="max-w-2xl w-full">
            <MembershipSignup onClose={() => setShowMembershipModal(false)} />
          </div>
        </div>
      )}

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image with Gradient Overlay */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-slate-900/95 to-pink-900/90 z-10" />
            <img
              src={optimizedHeroImage}
              srcSet={generateImageSrcset(heroImageUrl, true)}
              sizes="100vw"
              alt="Learning Background"
              fetchpriority="high"
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback to original URL if optimized fails
                if (e.target.src !== heroImageUrl) {
                  e.target.src = heroImageUrl;
                }
              }}
            />
          </div>

          {/* Hero Content */}
          <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
              >
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-gray-200">Welcome to The Tech Genius</span>
              </motion.div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                The Best Digital Marketing
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Company in India
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
                In a world where being online is more important than ever, your digital presence can make or break your business. That's where we come in. As the premier Internet Marketing Service in India, we at The Tech Genius provide the key to unlocking your digital potential.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link to="/services">
                  <Button
                    size="lg"
                    className="group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
                  >
                    <GraduationCap className="w-5 h-5 mr-2" />
                    View Services
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>

                <Link to="/blog">
                  <Button
                    size="lg"
                    variant="outline"
                    className="group bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <BookOpen className="w-5 h-5 mr-2" />
                    View Blog
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>

                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => setShowMembershipModal(true)}
                  className="group bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border-yellow-500/30 hover:border-yellow-500/50 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <Crown className="w-5 h-5 mr-2" />
                  Become a Member
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
            >
              <motion.div className="w-1.5 h-1.5 rounded-full bg-white" />
            </motion.div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Blog Feature */}
              <Link to="/blog">
                <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-white/10 p-8 hover:border-purple-500/50 transition-all duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />
                  <BookOpen className="w-12 h-12 text-purple-400 mb-4" />
                  <h2 className="text-2xl font-bold text-white mb-3">Insightful Blog Posts</h2>
                  <p className="text-gray-300 mb-4">
                    Stay updated with the latest trends, tutorials, and best practices in technology and design. Our insightful blog posts cover cutting-edge topics in web development, UI/UX design, and data science to help you stay ahead in your career.
                  </p>
                  <span className="inline-flex items-center text-purple-400 font-medium group-hover:gap-2 transition-all duration-300">
                    View Blog Posts
                    <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </div>
              </Link>

              {/* Services Feature */}
              <Link to="/services">
                <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 p-8 hover:border-pink-500/50 transition-all duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-500/20 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />
                  <GraduationCap className="w-12 h-12 text-pink-400 mb-4" />
                  <h2 className="text-2xl font-bold text-white mb-3">Digital Marketing Services</h2>
                  <p className="text-gray-300 mb-4">
                    As the premier Internet Marketing Service in India, we provide comprehensive digital marketing solutions including SEO, social media marketing, PPC campaigns, and content marketing to help your business thrive online.
                  </p>
                  <span className="inline-flex items-center text-pink-400 font-medium group-hover:gap-2 transition-all duration-300">
                    View All Services
                    <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Why Choose Us?</h2>
              <p className="text-xl text-gray-300 mb-8">
                When it comes to Digital Marketing Services in India, we are second to none. With a proven track record, we deliver results that are not just impressive but consistently so.
              </p>
              <div className="grid md:grid-cols-3 gap-8 text-left mt-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Innovative Strategies</h3>
                  <p className="text-gray-300">
                    Stay ahead with pioneering digital marketing techniques that keep you at the forefront of your industry.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Unmatched Expertise</h3>
                  <p className="text-gray-300">
                    As a leading Digital Marketing Consultancy in India, we have the know-how to make your brand shine.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">ROI-Focused Solutions</h3>
                  <p className="text-gray-300">
                    We deliver measurable results that positively impact your bottom line.
                  </p>
                </div>
              </div>
              <div className="mt-12 text-gray-300 space-y-4 text-left">
                <p>
                  In a world where being online is more important than ever, your digital presence can make or break your business. That's where we come in. As the premier Internet Marketing Service in India, we at The Tech Genius provide the key to unlocking your digital potential.
                </p>
                <p>
                  When it comes to Digital Marketing Services in India, we are second to none. With a proven track record, we deliver results that are not just impressive but consistently so. Choose us for innovative strategies, unmatched expertise, and ROI-focused solutions that positively impact your bottom line.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup Section */}
        <section className="py-16 bg-gradient-to-br from-purple-900/20 to-pink-900/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-gray-300 mb-6">Subscribe to our newsletter for the latest updates and special offers.</p>
            <NewsletterSignup />
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;