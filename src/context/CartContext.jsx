import React, { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const { toast } = useToast();

  // Initialize from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('cartItems');
    if (saved) {
      try {
        setCartItems(JSON.parse(saved));
      } catch (e) {
        setCartItems([]);
      }
    }
  }, []);

  // Persist to localStorage
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (serviceId, addOn, serviceSlug = null) => {
    const existingItem = cartItems.find(
      item => item.serviceId === serviceId && item.addOnId === addOn.id
    );

    if (existingItem) {
      toast({
        title: "Already in Cart",
        description: "This add-on is already in your cart.",
        variant: "warning",
      });
      return;
    }

    const newItem = {
      serviceId,
      serviceSlug: serviceSlug || serviceId, // Store slug for SEO-friendly URLs
      addOnId: addOn.id,
      addOnName: addOn.name,
      addOnPrice: addOn.price,
      id: `${serviceId}-${addOn.id}`
    };

    setCartItems(prev => [...prev, newItem]);
    toast({
      title: "Added to Cart",
      description: `${addOn.name} has been added to your cart.`,
      variant: "success",
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems(prev => prev.filter(item => item.id !== itemId));
    toast({
      title: "Removed from Cart",
      description: "Item has been removed from your cart.",
      variant: "default",
    });
  };

  const clearCart = () => {
    setCartItems([]);
    toast({
      title: "Cart Cleared",
      description: "All items have been removed from your cart.",
    });
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.addOnPrice, 0);
  };

  const getCartItemsCount = () => {
    return cartItems.length;
  };

  const isInCart = (serviceId, addOnId) => {
    return cartItems.some(
      item => item.serviceId === serviceId && item.addOnId === addOnId
    );
  };

  return (
    <CartContext.Provider value={{ 
      cartItems,
      addToCart,
      removeFromCart,
      clearCart,
      getCartTotal,
      getCartItemsCount,
      isInCart
    }}>
      {children}
    </CartContext.Provider>
  );
};
