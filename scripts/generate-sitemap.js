import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Import data files
const { getAllServices } = await import('../src/data/services.js');
const { getAllBlogPosts } = await import('../src/data/blogPosts.js');
const { getAllCities } = await import('../src/data/cities.js');

const SITE_URL = 'https://www.ritvikwebsite.com';
const TODAY = new Date().toISOString().split('T')[0];

// Get all services, blog posts, and cities
const services = getAllServices();
const blogPosts = getAllBlogPosts();
const cities = getAllCities();

// Generate sitemap XML
const generateSitemap = () => {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  
  <!-- Homepage -->
  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  
  <!-- Services Page -->
  <url>
    <loc>${SITE_URL}/services</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <!-- Blog Page -->
  <url>
    <loc>${SITE_URL}/blog</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  
  <!-- Cart Page (lower priority, noindex recommended) -->
  <url>
    <loc>${SITE_URL}/cart</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.3</priority>
  </url>
  
  <!-- Portfolio Page -->
  <url>
    <loc>${SITE_URL}/portfolio</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- Pricing Page -->
  <url>
    <loc>${SITE_URL}/pricing</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- Cities Page -->
  <url>
    <loc>${SITE_URL}/cities</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <!-- Contact Page -->
  <url>
    <loc>${SITE_URL}/contact</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- FAQ Page -->
  <url>
    <loc>${SITE_URL}/faq</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <!-- Terms and Conditions Page -->
  <url>
    <loc>${SITE_URL}/terms-and-conditions</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  
  <!-- Service Detail Pages -->
`;

  // Add all services (use slug if available, fallback to ID)
  services.forEach(service => {
    const serviceSlug = service.slug || service.id;
    xml += `  <url>
    <loc>${SITE_URL}/services/${serviceSlug}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
`;
  });

  xml += `  
  <!-- Blog Post Pages -->
`;

  // Add all blog posts (use slug if available, fallback to ID)
  blogPosts.forEach(post => {
    const postDate = post.date ? new Date(post.date).toISOString().split('T')[0] : TODAY;
    const postSlug = post.slug || post.id;
    xml += `  <url>
    <loc>${SITE_URL}/blog/${postSlug}</loc>
    <lastmod>${postDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`;
  });

  xml += `  
  <!-- City Detail Pages -->
`;

  // Add all cities (use slug if available, fallback to ID)
  cities.forEach(city => {
    const citySlug = city.slug || city.id;
    xml += `  <url>
    <loc>${SITE_URL}/cities/${citySlug}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
`;
  });

  xml += `  
</urlset>`;

  return xml;
};

// Write sitemap to public directory
const sitemap = generateSitemap();
const publicDir = path.join(__dirname, '../public');
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap, 'utf8');

console.log(`✅ Sitemap generated successfully!`);
console.log(`   - ${services.length} services included`);
console.log(`   - ${blogPosts.length} blog posts included`);
console.log(`   - ${cities.length} cities included`);
console.log(`   - Total URLs: ${10 + services.length + blogPosts.length + cities.length}`);
