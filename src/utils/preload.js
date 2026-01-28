// Preload critical resources for faster initial render
export const preloadCriticalResources = () => {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  // Use requestIdleCallback for non-critical prefetching
  const schedulePrefetch = (callback) => {
    if ('requestIdleCallback' in window) {
      requestIdleCallback(callback, { timeout: 2000 });
    } else {
      setTimeout(callback, 100);
    }
  };

  // Prefetch routes on idle (non-blocking)
  schedulePrefetch(() => {
    try {
      // Core routes to prefetch
      const coreRoutes = ['/services', '/blog'];
      const routesToPrefetch = [...coreRoutes];
      
      // Prefetch top blog posts
      try {
        const localPosts = localStorage.getItem('customBlogPosts');
        const defaultPosts = [
          { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, 
          { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }
        ];
        
        let allPostIds = defaultPosts.map(p => p.id);
        if (localPosts) {
          try {
            const customPosts = JSON.parse(localPosts);
            const customIds = customPosts.map(p => p.id);
            allPostIds = [...allPostIds, ...customIds];
          } catch (e) {
            // If parsing fails, use default posts only
          }
        }
        
        // Prefetch first 3 blog post routes (most likely to be visited)
        // Import getAllBlogPosts to get slugs
        try {
          const { getAllBlogPosts } = await import('../data/blogPosts');
          const allPosts = getAllBlogPosts();
          const topPosts = allPosts.slice(0, 3);
          routesToPrefetch.push(...topPosts.map(post => `/blog/${post.slug || post.id}`));
        } catch (e) {
          // Fallback: use IDs if slug import fails
          const topPosts = allPostIds.slice(0, 3);
          routesToPrefetch.push(...topPosts.map(id => `/blog/${id}`));
        }
      } catch (e) {
        // If localStorage access fails, just prefetch first blog post slug
        routesToPrefetch.push('/blog/ultimate-guide-professional-poster-design-tips-creating-eye-catching-marketing-materials');
      }
      
      // Prefetch top services (featured services)
      try {
        const localServices = localStorage.getItem('customServices');
        const defaultServiceIds = Array.from({ length: 46 }, (_, i) => i + 1);
        
        let allServiceIds = defaultServiceIds;
        if (localServices) {
          try {
            const customServices = JSON.parse(localServices);
            const customIds = customServices.map(s => s.id);
            allServiceIds = [...allServiceIds, ...customIds];
          } catch (e) {
            // If parsing fails, use default services only
          }
        }
        
        // Prefetch first 3 featured services (most likely to be visited)
        const topServices = allServiceIds.slice(0, 3);
        routesToPrefetch.push(...topServices.map(id => `/services/${id}`));
      } catch (e) {
        // If localStorage access fails, skip service prefetching
      }
      
      // Prefetch routes with deduplication
      routesToPrefetch.forEach(route => {
        try {
          // Only prefetch if not already in cache
          // Check if sessionStorage is available (may not be in private browsing)
          if (typeof sessionStorage !== 'undefined' && !sessionStorage.getItem(`prefetched_${route}`)) {
            const link = document.createElement('link');
            link.rel = 'prefetch';
            link.href = route;
            link.as = 'document';
            document.head.appendChild(link);
            sessionStorage.setItem(`prefetched_${route}`, 'true');
          } else if (typeof sessionStorage === 'undefined') {
            // Fallback: prefetch without sessionStorage check
            const link = document.createElement('link');
            link.rel = 'prefetch';
            link.href = route;
            link.as = 'document';
            document.head.appendChild(link);
          }
        } catch (e) {
          // Silently fail for individual routes
        }
      });
    } catch (error) {
      // Silently fail - prefetching should not break the site
    }
  });
};
