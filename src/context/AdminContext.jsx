import React, { createContext, useContext } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { generateSlug } from '@/lib/slug';

const AdminContext = createContext();

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};

export const AdminProvider = ({ children }) => {
  const { toast } = useToast();

  const getArray = (key) => {
    try {
      return JSON.parse(localStorage.getItem(key) || '[]');
    } catch (e) {
      return [];
    }
  };

  const setArray = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const getMap = (key) => {
    try {
      return JSON.parse(localStorage.getItem(key) || '{}');
    } catch (e) {
      return {};
    }
  };

  const setMap = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const addCourse = (courseData) => {
    try {
      const existingCourses = getArray('customCourses');
      // Generate a random ID that doesn't conflict with existing ones (assuming < 1000 static courses)
      const newId = Date.now();
      
      const newCourse = {
        ...courseData,
        id: newId,
        featuredImage: `https://images.unsplash.com/photo-${1500000000000 + Math.floor(Math.random() * 1000000)}?auto=format&fit=crop&w=800&q=80`, // Random placeholder
        featured: false,
        modules: courseData.modules || []
      };

      const updatedCourses = [...existingCourses, newCourse];
      setArray('customCourses', updatedCourses);
      
      // Force reload of window to update static imports in other files if strictly necessary, 
      // but for SPA we usually rely on context/state. 
      // Since we can't edit CourseDetail to use context, we might rely on the user navigating or 
      // the fact that we updated localStorage which getAllCourses reads.
      
      return { success: true };
    } catch (error) {
      // Silently handle errors - return error message to caller
      return { success: false, error: error.message || 'Failed to add course' };
    }
  };

  const addBlogPost = (postData) => {
    try {
      const existingPosts = getArray('customBlogPosts');
      const newId = Date.now();

      // Generate slug from title if not provided
      let slug = postData.slug;
      if (!slug && postData.title) {
        slug = generateSlug(postData.title);
      }

      const newPost = {
        ...postData,
        id: newId,
        slug: slug || `post-${newId}`, // Fallback slug if title not available
        featuredImage: postData.featuredImage || `https://images.unsplash.com/photo-${1500000000000 + Math.floor(Math.random() * 1000000)}?auto=format&fit=crop&w=800&q=80`, // Random placeholder
        featured: false,
        readTime: `${Math.ceil((postData.content || '').length / 1000)} min read` // Estimate read time
      };

      const updatedPosts = [...existingPosts, newPost];
      setArray('customBlogPosts', updatedPosts);

      return { success: true };
    } catch (error) {
      // Silently handle errors - return error message to caller
      return { success: false, error: error.message || 'Failed to add blog post' };
    }
  };

  const updateCourse = (courseId, courseData) => {
    try {
      const id = typeof courseId === 'string' ? parseInt(courseId) : courseId;
      const customCourses = getArray('customCourses');
      const idx = customCourses.findIndex((c) => c.id === id || c.id === courseId);

      if (idx !== -1) {
        const updated = [...customCourses];
        updated[idx] = { ...updated[idx], ...courseData, id: customCourses[idx].id };
        setArray('customCourses', updated);
        return { success: true };
      }

      // Default course: store override
      const overrides = getMap('courseOverrides');
      overrides[id] = { ...(overrides[id] || {}), ...courseData, id: id };
      setMap('courseOverrides', overrides);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message || 'Failed to update course' };
    }
  };

  const deleteCourse = (courseId) => {
    try {
      const id = typeof courseId === 'string' ? parseInt(courseId) : courseId;
      const customCourses = getArray('customCourses');
      const idx = customCourses.findIndex((c) => c.id === id || c.id === courseId);

      if (idx !== -1) {
        const updated = customCourses.filter((c) => c.id !== id && c.id !== courseId);
        setArray('customCourses', updated);
      } else {
        const deletedIds = new Set(getArray('deletedCourseIds'));
        deletedIds.add(id);
        setArray('deletedCourseIds', Array.from(deletedIds));
      }

      // Also remove from saved courses if present
      const saved = new Set(getArray('savedCourses'));
      if (saved.has(id) || saved.has(courseId)) {
        saved.delete(id);
        saved.delete(courseId);
        setArray('savedCourses', Array.from(saved));
      }

      return { success: true };
    } catch (error) {
      return { success: false, error: error.message || 'Failed to delete course' };
    }
  };

  const updateBlogPost = (postId, postData) => {
    try {
      const id = typeof postId === 'string' ? parseInt(postId) : postId;
      const customPosts = getArray('customBlogPosts');
      const idx = customPosts.findIndex((p) => p.id === id || p.id === postId);

      if (idx !== -1) {
        const updated = [...customPosts];
        updated[idx] = { ...updated[idx], ...postData, id: customPosts[idx].id };
        // keep readTime roughly updated if content changes
        if (typeof postData.content === 'string') {
          updated[idx].readTime = `${Math.ceil(postData.content.length / 1000)} min read`;
        }
        setArray('customBlogPosts', updated);
        return { success: true };
      }

      // Default post: store override
      const overrides = getMap('blogOverrides');
      const nextOverride = { ...(overrides[id] || {}), ...postData, id: id };
      if (typeof postData.content === 'string') {
        nextOverride.readTime = `${Math.ceil(postData.content.length / 1000)} min read`;
      }
      overrides[id] = nextOverride;
      setMap('blogOverrides', overrides);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message || 'Failed to update blog post' };
    }
  };

  const deleteBlogPost = (postId) => {
    try {
      const id = typeof postId === 'string' ? parseInt(postId) : postId;
      const customPosts = getArray('customBlogPosts');
      const idx = customPosts.findIndex((p) => p.id === id || p.id === postId);

      if (idx !== -1) {
        const updated = customPosts.filter((p) => p.id !== id && p.id !== postId);
        setArray('customBlogPosts', updated);
      } else {
        const deletedIds = new Set(getArray('deletedBlogIds'));
        deletedIds.add(id);
        setArray('deletedBlogIds', Array.from(deletedIds));
      }

      return { success: true };
    } catch (error) {
      return { success: false, error: error.message || 'Failed to delete blog post' };
    }
  };

  const updateBlogOrder = (blogOrders) => {
    try {
      // blogOrders is an array of { id, order } objects
      const orderMap = {};
      blogOrders.forEach(({ id, order }) => {
        orderMap[id] = order;
      });
      setMap('blogOrder', orderMap);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message || 'Failed to update blog order' };
    }
  };

  // Service management functions
  const addService = (serviceData) => {
    try {
      const existingServices = getArray('customServices');
      const newId = Date.now();
      
      // Generate slug from name if not provided
      let slug = serviceData.slug;
      if (!slug && serviceData.name) {
        slug = generateSlug(serviceData.name);
      }
      
      const newService = {
        ...serviceData,
        id: newId,
        slug: slug || `service-${newId}`, // Fallback slug if name not available
        featuredImage: serviceData.featuredImage || `https://images.unsplash.com/photo-${1500000000000 + Math.floor(Math.random() * 1000000)}?auto=format&fit=crop&w=800&q=80`,
        featured: false,
        addOns: serviceData.addOns || []
      };

      const updatedServices = [...existingServices, newService];
      setArray('customServices', updatedServices);
      
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message || 'Failed to add service' };
    }
  };

  const updateService = (serviceId, serviceData) => {
    try {
      const id = typeof serviceId === 'string' ? parseInt(serviceId) : serviceId;
      const customServices = getArray('customServices');
      const idx = customServices.findIndex((s) => s.id === id || s.id === serviceId);

      // Generate slug from name if name changed and slug not provided
      let updatedData = { ...serviceData };
      if (serviceData.name && !serviceData.slug) {
        // If updating existing service, keep existing slug if name hasn't changed
        if (idx !== -1 && customServices[idx].name === serviceData.name && customServices[idx].slug) {
          updatedData.slug = customServices[idx].slug;
        } else {
          // Generate new slug from name
          updatedData.slug = generateSlug(serviceData.name);
        }
      } else if (idx !== -1 && customServices[idx].slug && !serviceData.slug) {
        // Keep existing slug if not provided in update
        updatedData.slug = customServices[idx].slug;
      }

      if (idx !== -1) {
        const updated = [...customServices];
        updated[idx] = { ...updated[idx], ...updatedData, id: customServices[idx].id };
        setArray('customServices', updated);
        return { success: true };
      }

      const overrides = getMap('serviceOverrides');
      overrides[id] = { ...(overrides[id] || {}), ...updatedData, id: id };
      setMap('serviceOverrides', overrides);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message || 'Failed to update service' };
    }
  };

  const deleteService = (serviceId) => {
    try {
      const id = typeof serviceId === 'string' ? parseInt(serviceId) : serviceId;
      const customServices = getArray('customServices');
      const idx = customServices.findIndex((s) => s.id === id || s.id === serviceId);

      if (idx !== -1) {
        const updated = customServices.filter((s) => s.id !== id && s.id !== serviceId);
        setArray('customServices', updated);
      } else {
        const deletedIds = new Set(getArray('deletedServiceIds'));
        deletedIds.add(id);
        setArray('deletedServiceIds', Array.from(deletedIds));
      }

      return { success: true };
    } catch (error) {
      return { success: false, error: error.message || 'Failed to delete service' };
    }
  };

  // Schema management functions
  const updateSchemaData = (schemaData) => {
    try {
      setMap('schemaData', schemaData);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message || 'Failed to update schema data' };
    }
  };

  const getSchemaData = () => {
    return getMap('schemaData');
  };

  // Service-specific schema management functions
  const updateServiceSchemaData = (serviceId, schemaData) => {
    try {
      const serviceSchemas = getMap('serviceSchemaData');
      serviceSchemas[serviceId] = { ...(serviceSchemas[serviceId] || {}), ...schemaData };
      setMap('serviceSchemaData', serviceSchemas);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message || 'Failed to update service schema data' };
    }
  };

  const getServiceSchemaData = (serviceId) => {
    try {
      const serviceSchemas = getMap('serviceSchemaData');
      return serviceSchemas[serviceId] || {};
    } catch (error) {
      return {};
    }
  };

  // Service ordering functions
  const updateServiceOrder = (serviceOrders) => {
    try {
      const orderMap = {};
      serviceOrders.forEach(({ id, order }) => {
        orderMap[id] = order;
      });
      setMap('serviceOrder', orderMap);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message || 'Failed to update service order' };
    }
  };

  const getServiceOrder = () => {
    return getMap('serviceOrder');
  };

  // Image alt tag management functions
  const updateImageAltTags = (imageAltTags) => {
    try {
      setMap('imageAltTags', imageAltTags);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message || 'Failed to update image alt tags' };
    }
  };

  const getImageAltTags = () => {
    return getMap('imageAltTags');
  };

  // Get all images used in the website
  const getAllImages = () => {
    try {
      const images = getMap('allImages');
      return images;
    } catch (error) {
      return {};
    }
  };

  const addImage = (imageUrl, altText = '') => {
    try {
      const images = getAllImages();
      images[imageUrl] = {
        url: imageUrl,
        alt: altText,
        lastUpdated: new Date().toISOString()
      };
      setMap('allImages', images);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message || 'Failed to add image' };
    }
  };

  // City management functions
  const addCity = (cityData) => {
    try {
      const existingCities = getArray('customCities');
      const newId = Date.now();
      
      // Generate slug from name if not provided
      let slug = cityData.slug;
      if (!slug && cityData.name) {
        slug = generateSlug(cityData.name);
      }
      
      const newCity = {
        ...cityData,
        id: newId,
        slug: slug || `city-${newId}`, // Fallback slug if name not available
        image: cityData.image || `https://images.unsplash.com/photo-${1500000000000 + Math.floor(Math.random() * 1000000)}?auto=format&fit=crop&w=800&q=80`,
        featured: cityData.featured || false,
        services: cityData.services || [],
        content: cityData.content || cityData.description || ''
      };

      const updatedCities = [...existingCities, newCity];
      setArray('customCities', updatedCities);
      
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message || 'Failed to add city' };
    }
  };

  const updateCity = (cityId, cityData) => {
    try {
      const id = typeof cityId === 'string' ? parseInt(cityId) : cityId;
      const customCities = getArray('customCities');
      const idx = customCities.findIndex((c) => c.id === id || c.id === cityId);

      // Generate slug from name if name changed and slug not provided
      let updatedData = { ...cityData };
      if (cityData.name && !cityData.slug) {
        // If updating existing city, keep existing slug if name hasn't changed
        if (idx !== -1 && customCities[idx].name === cityData.name && customCities[idx].slug) {
          updatedData.slug = customCities[idx].slug;
        } else {
          // Generate new slug from name
          updatedData.slug = generateSlug(cityData.name);
        }
      } else if (idx !== -1 && customCities[idx].slug && !cityData.slug) {
        // Keep existing slug if not provided in update
        updatedData.slug = customCities[idx].slug;
      }

      if (idx !== -1) {
        const updated = [...customCities];
        updated[idx] = { ...updated[idx], ...updatedData, id: customCities[idx].id };
        setArray('customCities', updated);
        return { success: true };
      }

      // Default city: store override (for default cities)
      const overrides = getMap('cityOverrides');
      overrides[id] = { ...(overrides[id] || {}), ...updatedData, id: id };
      setMap('cityOverrides', overrides);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message || 'Failed to update city' };
    }
  };

  const deleteCity = (cityId) => {
    try {
      const id = typeof cityId === 'string' ? parseInt(cityId) : cityId;
      const customCities = getArray('customCities');
      const idx = customCities.findIndex((c) => c.id === id || c.id === cityId);

      if (idx !== -1) {
        const updated = customCities.filter((c) => c.id !== id && c.id !== cityId);
        setArray('customCities', updated);
      } else {
        // For default cities, mark as deleted
        const deletedIds = new Set(getArray('deletedCityIds'));
        deletedIds.add(id);
        setArray('deletedCityIds', Array.from(deletedIds));
      }

      return { success: true };
    } catch (error) {
      return { success: false, error: error.message || 'Failed to delete city' };
    }
  };

  const getAllCities = () => {
    try {
      const customCities = getArray('customCities');
      const deletedIds = new Set(getArray('deletedCityIds'));
      const overrides = getMap('cityOverrides');
      
      // Import default cities dynamically to avoid circular dependency
      // For now, we'll return custom cities and let the data file handle defaults
      return customCities.filter(c => !deletedIds.has(c.id));
    } catch (error) {
      return [];
    }
  };

  return (
    <AdminContext.Provider value={{ 
      addCourse, 
      addBlogPost, 
      updateCourse, 
      deleteCourse, 
      updateBlogPost, 
      deleteBlogPost, 
      updateBlogOrder,
      addService,
      updateService,
      deleteService,
      updateSchemaData,
      getSchemaData,
      updateServiceSchemaData,
      getServiceSchemaData,
      updateServiceOrder,
      getServiceOrder,
      updateImageAltTags,
      getImageAltTags,
      getAllImages,
      addImage,
      addCity,
      updateCity,
      deleteCity,
      getAllCities
    }}>
      {children}
    </AdminContext.Provider>
  );
};