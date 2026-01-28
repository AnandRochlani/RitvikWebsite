import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Star, Zap, Crown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/SEOHead';
import SchemaCode from '@/components/SchemaCode';
import GetQuoteForm from '@/components/GetQuoteForm';

const PricingPage = () => {
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter',
      icon: Zap,
      price: 'Custom',
      description: 'Perfect for small businesses getting started with digital marketing',
      features: [
        'Basic SEO Optimization',
        'Social Media Setup (3 platforms)',
        'Monthly Content Creation',
        'Basic Analytics Report',
        'Email Support',
        '1 Month Contract'
      ],
      popular: false
    },
    {
      id: 'professional',
      name: 'Professional',
      icon: Star,
      price: 'Custom',
      description: 'Ideal for growing businesses looking to scale their online presence',
      features: [
        'Advanced SEO Strategy',
        'Social Media Management (5 platforms)',
        'Content Marketing Campaign',
        'PPC Campaign Management',
        'Monthly Analytics & Reports',
        'Priority Support',
        '3 Month Contract',
        'Dedicated Account Manager'
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      icon: Crown,
      price: 'Custom',
      description: 'Comprehensive solution for large businesses with complex needs',
      features: [
        'Full-Service Digital Marketing',
        'All Social Media Platforms',
        'Content Strategy & Creation',
        'Advanced PPC & Display Ads',
        'SEO + Technical Optimization',
        'Web Development Services',
        'App Development (Optional)',
        '24/7 Priority Support',
        'Custom Contract Terms',
        'Dedicated Team'
      ],
      popular: false
    }
  ];

  const servicePricing = [
    {
      category: 'Web Development',
      services: [
        { name: 'Basic Website (5 pages)', price: 'Custom Quote' },
        { name: 'E-commerce Website', price: 'Custom Quote' },
        { name: 'Custom Web Application', price: 'Custom Quote' },
        { name: 'Website Maintenance', price: 'Custom Quote' }
      ]
    },
    {
      category: 'Digital Marketing',
      services: [
        { name: 'SEO Services (Monthly)', price: 'Custom Quote' },
        { name: 'Social Media Management', price: 'Custom Quote' },
        { name: 'PPC Campaign Management', price: 'Custom Quote' },
        { name: 'Content Marketing', price: 'Custom Quote' }
      ]
    },
    {
      category: 'App Development',
      services: [
        { name: 'iOS App Development', price: 'Custom Quote' },
        { name: 'Android App Development', price: 'Custom Quote' },
        { name: 'Cross-Platform App (React Native)', price: 'Custom Quote' },
        { name: 'App Maintenance', price: 'Custom Quote' }
      ]
    }
  ];

  return (
    <>
      <SEOHead 
        title="Pricing - Custom Digital Marketing Plans - The Tech Genius"
        description="Flexible pricing plans for digital marketing services. Get custom quotes tailored to your business needs. Choose from Starter, Professional, or Enterprise plans."
        keywords="pricing, digital marketing pricing, SEO pricing, web development pricing, custom quotes, affordable digital marketing"
        canonical="https://www.ritvikwebsite.com/pricing"
      />

      <SchemaCode
        type="WebPage"
        name="Pricing - The Tech Genius"
        description="Flexible pricing plans for digital marketing services"
        url="https://www.ritvikwebsite.com/pricing"
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
              Pricing <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Plans</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Flexible pricing plans tailored to your business needs. All plans include custom quotes based on your specific requirements.
            </p>
          </motion.div>

          {/* Pricing Plans */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {pricingPlans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative rounded-2xl backdrop-blur-sm border p-8 ${
                    plan.popular
                      ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/50 shadow-2xl scale-105'
                      : 'bg-white/5 border-white/10'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="px-4 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className={`inline-flex p-4 rounded-2xl mb-4 ${
                      plan.popular ? 'bg-purple-500/20' : 'bg-white/5'
                    }`}>
                      <Icon className={`w-8 h-8 ${
                        plan.popular ? 'text-purple-400' : 'text-gray-400'
                      }`} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-white mb-2">{plan.price}</div>
                    <p className="text-gray-400 text-sm">{plan.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={() => {
                      setSelectedPlan(plan.name);
                      setShowQuoteForm(true);
                    }}
                    className={`w-full py-6 text-lg ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white'
                        : 'bg-white/5 hover:bg-white/10 border border-white/10 text-white'
                    }`}
                  >
                    Get Custom Quote
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </motion.div>
              );
            })}
          </div>

          {/* Service Pricing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Service Pricing</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {servicePricing.map((category, catIndex) => (
                <div
                  key={catIndex}
                  className="rounded-xl backdrop-blur-sm border p-6 bg-white/5 border-white/10"
                >
                  <h3 className="text-xl font-bold text-white mb-4">{category.category}</h3>
                  <div className="space-y-3">
                    {category.services.map((service, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-3 rounded-lg bg-black/20"
                      >
                        <span className="text-gray-300 text-sm">{service.name}</span>
                        <span className="text-purple-400 font-semibold">{service.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Why Custom Pricing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="rounded-2xl backdrop-blur-sm border p-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-white/10"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Why Custom Pricing?</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Every business is unique, and so are their digital marketing needs. We believe in providing custom quotes that match your specific requirements, budget, and goals. Our pricing is transparent, competitive, and designed to deliver maximum ROI.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Tailored Solutions</h4>
                  <p className="text-gray-400 text-sm">Pricing based on your specific needs and goals</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">No Hidden Costs</h4>
                  <p className="text-gray-400 text-sm">Transparent pricing with no surprise charges</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Flexible Plans</h4>
                  <p className="text-gray-400 text-sm">Choose monthly, quarterly, or annual contracts</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">ROI Focused</h4>
                  <p className="text-gray-400 text-sm">Pricing designed to maximize your return on investment</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quote Form Modal */}
          {showQuoteForm && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-2xl w-full bg-slate-800 rounded-2xl p-6 border border-white/10"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">Get Custom Quote</h3>
                  <button
                    onClick={() => {
                      setShowQuoteForm(false);
                      setSelectedPlan(null);
                    }}
                    className="text-gray-400 hover:text-white"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                {selectedPlan && (
                  <p className="text-gray-300 mb-4">Selected Plan: <span className="text-purple-400 font-semibold">{selectedPlan}</span></p>
                )}
                <GetQuoteForm
                  serviceId={null}
                  serviceName={selectedPlan || 'General Inquiry'}
                  onClose={() => {
                    setShowQuoteForm(false);
                    setSelectedPlan(null);
                  }}
                />
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PricingPage;
