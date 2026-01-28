import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, X, ArrowLeft, Trash2, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/components/ui/use-toast';
import SEOHead from '@/components/SEOHead';
import SchemaCode from '@/components/SchemaCode';
import GetQuoteForm from '@/components/GetQuoteForm';
import { getAllServices } from '@/data/services';

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart, getCartTotal } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState(null);
  const [selectedServiceName, setSelectedServiceName] = useState('');

  const allServices = getAllServices();

  // Get service names for cart items
  const getServiceName = (serviceId) => {
    const service = allServices.find(s => s.id === serviceId);
    return service ? service.name : 'Unknown Service';
  };

  const handleGetQuote = () => {
    if (cartItems.length === 0) {
      toast({
        title: "Cart is Empty",
        description: "Please add some add-ons to your cart first.",
        variant: "destructive"
      });
      return;
    }
    // Use the first service ID, or allow user to select
    const firstServiceId = cartItems[0]?.serviceId;
    const serviceName = getServiceName(firstServiceId);
    setSelectedServiceId(firstServiceId);
    setSelectedServiceName(serviceName);
    setShowQuoteForm(true);
  };

  const handleRemoveItem = (itemId) => {
    removeFromCart(itemId);
  };

  const handleClearCart = () => {
    if (window.confirm('Are you sure you want to clear your cart?')) {
      clearCart();
    }
  };

  return (
    <>
      <SEOHead 
        title="Shopping Cart - Your Selected Add-ons"
        description="Review your selected add-ons and request a custom quote for your project."
        canonical="https://www.ritvikwebsite.com/cart"
      />

      <SchemaCode
        type="WebPage"
        name="Shopping Cart"
        description="Review your selected add-ons and request a custom quote"
        url="https://www.ritvikwebsite.com/cart"
        image="https://www.ritvikwebsite.com/og-image.jpg"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Button
              onClick={() => navigate(-1)}
              variant="outline"
              className="bg-white/5 border-white/10 hover:bg-white/10 text-white"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Your <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Cart</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Review your selected add-ons and request a custom quote
            </p>
          </motion.div>

          {cartItems.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-16"
            >
              <ShoppingCart className="w-24 h-24 text-gray-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4">Your cart is empty</h2>
              <p className="text-gray-400 mb-8">Add add-ons from services to get started</p>
              <Link to="/services">
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-6 text-lg">
                  Browse Services
                </Button>
              </Link>
            </motion.div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-2 space-y-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white">
                    Cart Items ({cartItems.length})
                  </h2>
                  {cartItems.length > 0 && (
                    <Button
                      onClick={handleClearCart}
                      variant="outline"
                      className="border-red-500/50 text-red-400 hover:bg-red-500/10"
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Clear Cart
                    </Button>
                  )}
                </div>

                <div className="space-y-4">
                  {cartItems.map((item) => {
                    const service = allServices.find(s => s.id === item.serviceId);
                    return (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <Link
                                to={`/services/${item.serviceId}`}
                                className="text-purple-400 hover:text-purple-300 text-sm font-medium"
                              >
                                {service ? service.name : 'Service'}
                              </Link>
                            </div>
                            <h3 className="text-white font-semibold text-lg">
                              {item.addOnName}
                            </h3>
                          </div>
                          <Button
                            onClick={() => handleRemoveItem(item.id)}
                            variant="outline"
                            className="border-red-500/50 text-red-400 hover:bg-red-500/10"
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Summary & Quote Form */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-1"
              >
                <div className="sticky top-24 space-y-6">
                  {/* Cart Summary */}
                  <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-6 backdrop-blur-sm">
                    <h2 className="text-xl font-bold text-white mb-4">Cart Summary</h2>
                    <div className="space-y-3 mb-6">
                      {cartItems.map((item) => (
                        <div key={item.id} className="text-sm text-gray-300">
                          <span>{item.addOnName}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Get Quote Button */}
                  {!showQuoteForm ? (
                    <Button
                      onClick={handleGetQuote}
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-6 text-lg"
                    >
                      <MessageSquare className="w-5 h-5 mr-2" />
                      Get Quote
                    </Button>
                  ) : (
                    <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-6 backdrop-blur-sm">
                      <GetQuoteForm
                        serviceId={selectedServiceId}
                        serviceName={selectedServiceName}
                        onClose={() => setShowQuoteForm(false)}
                      />
                    </div>
                  )}

                  {/* Continue Shopping */}
                  <Link to="/services">
                    <Button
                      variant="outline"
                      className="w-full border-white/20 text-white hover:bg-white/10"
                    >
                      Continue Shopping
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartPage;
