import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import '@/index.css';
import '@/static-content.css';
import { initAnalytics } from '@/utils/analytics';
import { preloadCriticalResources } from '@/utils/preload';

// Remove static content from DOM when React loads to prevent duplicate H1 tags and reduce rendering percentage
const removeStaticContent = () => {
  // Remove immediately to prevent any rendering conflicts
  // Use requestAnimationFrame to ensure DOM is ready
  if (typeof requestAnimationFrame !== 'undefined') {
    requestAnimationFrame(() => {
      const staticElements = document.querySelectorAll('#static-header, #static-content, #static-footer');
      staticElements.forEach(el => {
        if (el && el.parentNode) {
          el.style.display = 'none'; // Hide first for instant visual removal
          setTimeout(() => {
            if (el.parentNode) el.remove(); // Then remove from DOM
          }, 0);
        }
      });
    });
  } else {
    // Fallback for older browsers
    const staticElements = document.querySelectorAll('#static-header, #static-content, #static-footer');
    staticElements.forEach(el => {
      if (el && el.parentNode) {
        el.style.display = 'none';
        setTimeout(() => {
          if (el.parentNode) el.remove();
        }, 0);
      }
    });
  }
};

// Initialize analytics
initAnalytics();

// Preload critical resources
preloadCriticalResources();

// Remove static content before React renders to prevent duplicate H1 tags
removeStaticContent();

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
);