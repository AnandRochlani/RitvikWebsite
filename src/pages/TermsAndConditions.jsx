import React from 'react';
import { motion } from 'framer-motion';
import SEOHead from '@/components/SEOHead';
import { FileText } from 'lucide-react';

const TermsAndConditions = () => {
  return (
    <>
      <SEOHead 
        title="Terms and Conditions - The Tech Genius - Digital Marketing Store"
        description="Terms and Conditions for The Tech Genius - Digital Marketing Store. Read our terms of service, payment terms, confidentiality, intellectual property, and more."
        keywords="terms and conditions, terms of service, digital marketing terms, service agreement, legal terms"
        canonical="https://www.ritvikwebsite.com/terms-and-conditions"
      />

      <div className="min-h-screen bg-slate-900 pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-lg">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-white">
                Terms and Conditions (T&C)
              </h1>
            </div>
            <p className="text-gray-400 text-lg">
              The Tech Genius - Digital Marketing Store
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 space-y-8"
          >
            {/* Scope of Services */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Scope of Services</h2>
              <p className="text-gray-300 leading-relaxed">
                The Tech Genius - Digital Marketing Store shall provide digital marketing services as agreed upon with the client. The specific services, deliverables, and timelines will be outlined in the project proposal or agreement.
              </p>
            </section>

            {/* Payment */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Payment</h2>
              <p className="text-gray-300 leading-relaxed">
                The Client agrees to pay the Agency the agreed-upon fees for the services provided. Payment terms, including the frequency of invoicing and the accepted payment methods, will be outlined in the project proposal or agreement.
              </p>
            </section>

            {/* Confidentiality */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Confidentiality</h2>
              <p className="text-gray-300 leading-relaxed">
                Both parties agree to maintain the confidentiality of any proprietary or sensitive information shared during the project. This includes business strategies, client data, marketing plans, and any other confidential information.
              </p>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h2>
              <p className="text-gray-300 leading-relaxed">
                Any intellectual property rights associated with the work provided by the Agency, including but not limited to content, designs, marketing strategies, and software tools, shall remain the property of The Tech Genius - Digital Marketing Store unless explicitly transferred to the Client in writing.
              </p>
            </section>

            {/* Client Responsibilities */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Client Responsibilities</h2>
              <p className="text-gray-300 leading-relaxed">
                The Client agrees to provide all necessary information, assets, and access required for the successful execution of the digital marketing services. The Agency shall not be held responsible for any delays or issues resulting from the Client's failure to fulfil their responsibilities.
              </p>
            </section>

            {/* Non-Compete */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Non-Compete</h2>
              <p className="text-gray-300 leading-relaxed">
                During the project and for a period specified in the project agreement or proposal, the Client agrees not to engage directly or indirectly with any competitors of The Tech Genius - Digital Marketing Store for similar digital marketing services.
              </p>
            </section>

            {/* Termination */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Termination</h2>
              <p className="text-gray-300 leading-relaxed">
                Either party may terminate the agreement by providing written notice if the other party materially breaches any of the terms and conditions. Upon termination, the Client shall pay the Agency for all services rendered up to the termination date.
              </p>
            </section>

            {/* Indemnification */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Indemnification</h2>
              <p className="text-gray-300 leading-relaxed">
                The Client agrees to indemnify and hold The Tech Genius - Digital Marketing Store harmless from any claims, losses, or damages arising from the use of the digital marketing services provided.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Limitation of Liability</h2>
              <p className="text-gray-300 leading-relaxed">
                The Tech Genius - Digital Marketing Store's liability shall be limited to the amount of fees paid by the Client for the specific services in question. The Agency shall not be liable for any consequential, indirect, or special damages.
              </p>
            </section>

            {/* Modification of Terms */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Modification of Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                The Tech Genius - Digital Marketing Store reserves the right to modify these terms and conditions at any time. The Client will be notified of any changes, and continued use of the services after such notification constitutes acceptance of the modified terms.
              </p>
            </section>

            {/* Governing Law and Jurisdiction */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Governing Law and Jurisdiction</h2>
              <p className="text-gray-300 leading-relaxed">
                These terms and conditions shall be governed by and interpreted in accordance with the laws of Government of India. Any disputes arising out of or in connection with this agreement shall be subject to the exclusive jurisdiction of the courts in Satna, Madhya Pradesh.
              </p>
            </section>

            {/* Acceptance */}
            <section className="pt-6 border-t border-white/10">
              <p className="text-gray-300 leading-relaxed mb-6">
                By engaging The Tech Genius - Digital Marketing Store's services, the Client acknowledges that they have read, understood, and agreed to these terms and conditions. If you have any questions or concerns regarding these terms, please contact us for clarification before proceeding with the project.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="space-y-2">
                  <p className="text-gray-400 text-sm">Client Signature</p>
                  <div className="h-20 border-2 border-dashed border-white/20 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Signature Required</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-400 text-sm">Company Signature</p>
                  <div className="h-20 border-2 border-dashed border-white/20 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500 text-sm">The Tech Genius - Digital Marketing Store</span>
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default TermsAndConditions;
