import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/SEOHead';
import SchemaCode from '@/components/SchemaCode';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'How long does website development take?',
      answer: `The timeline for website development depends on the complexity and scope of your project. Here's a general breakdown:

• **Simple Website (5-10 pages)**: 2-4 weeks
• **E-commerce Website**: 4-8 weeks
• **Custom Web Application**: 6-12 weeks
• **Complex Enterprise Solutions**: 12+ weeks

Factors that affect timeline include:
- Number of pages and features
- Custom design requirements
- Content preparation
- Third-party integrations
- Testing and revisions

We provide a detailed project timeline during the initial consultation and keep you updated throughout the development process.`
    },
    {
      id: 2,
      question: 'What is the cost?',
      answer: `Our pricing is customized based on your specific requirements and project scope. We offer flexible pricing options:

• **Basic Website**: Custom quote based on pages and features
• **E-commerce Website**: Custom quote based on product count and functionality
• **Custom Web Application**: Custom quote based on complexity
• **Website Maintenance**: Custom quote based on support level

**Why Custom Pricing?**
Every project is unique, and we believe in providing transparent, tailored pricing that matches your needs and budget. Our quotes include:
- Detailed breakdown of services
- Timeline and milestones
- Support and maintenance options
- No hidden costs

Contact us for a free consultation and custom quote tailored to your project.`
    },
    {
      id: 3,
      question: 'Do you provide hosting?',
      answer: `Yes, we provide hosting services as part of our comprehensive web development packages. We offer:

• **Hosting Options**:
  - Shared hosting for small websites
  - VPS hosting for medium businesses
  - Dedicated servers for enterprise solutions
  - Cloud hosting for scalability

• **What's Included**:
  - Domain registration and management
  - SSL certificate (HTTPS)
  - Email hosting
  - Regular backups
  - 24/7 server monitoring
  - Technical support

• **Hosting Plans**:
  - Basic Hosting: Suitable for small websites
  - Professional Hosting: For growing businesses
  - Enterprise Hosting: For high-traffic websites

We can also help you migrate existing websites to our hosting or set up hosting with your preferred provider. All hosting packages include security features, regular updates, and performance optimization.`
    },
    {
      id: 4,
      question: 'Annual Website Support',
      answer: `Yes, we offer comprehensive annual website support packages to keep your website running smoothly. Our support includes:

• **Technical Support**:
  - 24/7 monitoring and uptime guarantee
  - Regular security updates
  - Bug fixes and troubleshooting
  - Performance optimization
  - Backup and recovery services

• **Content Updates**:
  - Monthly content updates (based on plan)
  - Image updates and optimization
  - Blog post publishing (if applicable)
  - Product/service page updates

• **Maintenance Services**:
  - Regular software updates
  - Security patches
  - Database optimization
  - Broken link checking
  - SEO monitoring

• **Support Plans**:
  - **Basic Support**: Essential maintenance and updates
  - **Professional Support**: Enhanced support with priority response
  - **Enterprise Support**: Comprehensive support with dedicated account manager

• **Additional Services**:
  - Website redesign and enhancements
  - New feature development
  - SEO optimization
  - Analytics reporting

All support packages are customizable based on your needs. Contact us to discuss the best support plan for your website.`
    },
    {
      id: 5,
      question: 'What technologies do you use for website development?',
      answer: `We use modern, industry-standard technologies to build fast, secure, and scalable websites:

• **Frontend**: React, Next.js, HTML5, CSS3, JavaScript, TailwindCSS
• **Backend**: Node.js, Express, PHP, Python
• **Databases**: MySQL, MongoDB, PostgreSQL
• **CMS**: WordPress, Custom CMS solutions
• **E-commerce**: Shopify, WooCommerce, Custom solutions
• **Cloud Platforms**: AWS, Google Cloud, Vercel, Netlify

We choose technologies based on your project requirements, ensuring optimal performance and scalability.`
    },
    {
      id: 6,
      question: 'Do you provide SEO services?',
      answer: `Yes, we offer comprehensive SEO services as part of our digital marketing packages:

• **On-Page SEO**: Content optimization, meta tags, schema markup
• **Off-Page SEO**: Link building, social signals, local SEO
• **Technical SEO**: Site speed optimization, mobile-friendliness, crawlability
• **Content Marketing**: Blog writing, content strategy
• **Local SEO**: Google My Business optimization, local citations

All our websites are built with SEO best practices in mind. We also offer ongoing SEO services to improve your search engine rankings.`
    },
    {
      id: 7,
      question: 'Can you redesign my existing website?',
      answer: `Absolutely! We specialize in website redesigns that improve both aesthetics and functionality:

• **Redesign Process**:
  - Analysis of current website
  - Design mockups and approval
  - Development and testing
  - Content migration
  - Launch and training

We can work with any existing website platform and help you migrate to a modern, responsive design that better serves your business goals.`
    },
    {
      id: 8,
      question: 'What payment methods do you accept?',
      answer: `We accept various payment methods for your convenience:

• Bank transfers
• Credit/Debit cards
• UPI payments
• Payment plans available for larger projects

Payment terms are typically:
- 50% upfront to begin project
- 50% upon completion
- For larger projects, we can arrange milestone-based payments

All payment terms are discussed and agreed upon before project commencement.`
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <SEOHead 
        title="FAQ - Frequently Asked Questions - The Tech Genius"
        description="Frequently asked questions about website development, pricing, hosting, and support services. Get answers to common questions about our digital marketing and web development services."
        keywords="FAQ, frequently asked questions, website development FAQ, hosting FAQ, web development cost, website support"
        canonical="https://www.ritvikwebsite.com/faq"
      />

      <SchemaCode
        type="FAQPage"
        name="FAQ - The Tech Genius"
        description="Frequently asked questions about our services"
        url="https://www.ritvikwebsite.com/faq"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex p-4 rounded-2xl bg-purple-500/20 mb-4">
              <HelpCircle className="w-12 h-12 text-purple-400" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Frequently Asked <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Questions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Find answers to common questions about our services, pricing, and processes. Can't find what you're looking for? Contact us!
            </p>
          </motion.div>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl backdrop-blur-sm border border-white/10 bg-white/5 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0">
                        <div className="pt-4 border-t border-white/10">
                          <div className="prose prose-invert max-w-none">
                            <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                              {faq.answer}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <div className="rounded-2xl backdrop-blur-sm border p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Can't find the answer you're looking for? Our team is here to help. Contact us and we'll get back to you as soon as possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button className="px-8 py-6 text-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                    Contact Us
                  </Button>
                </Link>
                <Link to="/pricing">
                  <Button variant="outline" className="px-8 py-6 text-lg border-white/10 text-white hover:bg-white/10">
                    View Pricing
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default FAQPage;
