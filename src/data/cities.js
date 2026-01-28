// Cities data structure
export const defaultCities = [
  {
    id: 1,
    slug: 'mumbai',
    name: 'Mumbai',
    state: 'Maharashtra',
    description: 'India\'s financial capital and a major hub for digital marketing services.',
    services: ['SEO', 'Social Media Marketing', 'PPC Campaigns'],
    image: 'https://images.unsplash.com/photo-1529253534310-60dcdc753aaf',
    content: 'Mumbai, the financial capital of India, is home to numerous businesses seeking to establish a strong digital presence. Our digital marketing services in Mumbai help businesses reach their target audience effectively through SEO, social media marketing, and PPC campaigns.',
    featured: true
  },
  {
    id: 2,
    slug: 'delhi',
    name: 'Delhi',
    state: 'Delhi NCR',
    description: 'The capital city with a thriving business ecosystem and growing digital presence.',
    services: ['Web Development', 'SEO', 'Content Marketing'],
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5',
    content: 'Delhi NCR is a major business hub with diverse industries. We provide comprehensive digital marketing solutions including web development, SEO, and content marketing to help businesses in Delhi grow their online presence.',
    featured: true
  },
  {
    id: 3,
    slug: 'bangalore',
    name: 'Bangalore',
    state: 'Karnataka',
    description: 'India\'s Silicon Valley, home to tech startups and digital innovation.',
    services: ['App Development', 'Web Development', 'Digital Marketing'],
    image: 'https://images.unsplash.com/photo-1581539250439-c96689b3dd11',
    content: 'Bangalore, known as India\'s Silicon Valley, is a hub for technology and innovation. Our services in Bangalore include app development, web development, and comprehensive digital marketing solutions for tech startups and established businesses.',
    featured: true
  },
  {
    id: 4,
    slug: 'hyderabad',
    name: 'Hyderabad',
    state: 'Telangana',
    description: 'A rapidly growing tech hub with increasing demand for digital services.',
    services: ['SEO', 'Web Development', 'E-commerce Solutions'],
    image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144',
    content: 'Hyderabad is rapidly emerging as a major tech hub in India. We offer SEO services, web development, and e-commerce solutions to help businesses in Hyderabad establish and grow their online presence.',
    featured: false
  },
  {
    id: 5,
    slug: 'chennai',
    name: 'Chennai',
    state: 'Tamil Nadu',
    description: 'A major business center in South India with diverse digital marketing needs.',
    services: ['Social Media Marketing', 'SEO', 'Web Design'],
    image: 'https://images.unsplash.com/photo-1582573618381-c1163e0cbb38',
    content: 'Chennai is a major business center in South India with diverse industries. Our digital marketing services in Chennai include social media marketing, SEO, and professional web design to help businesses connect with their audience.',
    featured: false
  },
  {
    id: 6,
    slug: 'pune',
    name: 'Pune',
    state: 'Maharashtra',
    description: 'An emerging IT hub with growing opportunities for digital marketing.',
    services: ['Web Development', 'SEO', 'Content Writing'],
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96',
    content: 'Pune is an emerging IT hub with a growing startup ecosystem. We provide web development, SEO, and content writing services to help businesses in Pune establish a strong digital footprint.',
    featured: false
  },
  {
    id: 7,
    slug: 'kolkata',
    name: 'Kolkata',
    state: 'West Bengal',
    description: 'Eastern India\'s cultural and commercial capital with expanding digital market.',
    services: ['Digital Marketing', 'SEO', 'Social Media'],
    image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482',
    content: 'Kolkata, the cultural capital of India, is experiencing rapid digital transformation. Our digital marketing services in Kolkata help businesses leverage SEO and social media to reach their target audience effectively.',
    featured: false
  },
  {
    id: 8,
    slug: 'ahmedabad',
    name: 'Ahmedabad',
    state: 'Gujarat',
    description: 'A major business center with increasing demand for digital transformation.',
    services: ['Web Development', 'SEO', 'PPC Campaigns'],
    image: 'https://images.unsplash.com/photo-1583416750470-965b2707b355',
    content: 'Ahmedabad is a major business center in Gujarat with growing demand for digital transformation. We offer web development, SEO, and PPC campaigns to help businesses in Ahmedabad grow online.',
    featured: false
  },
  {
    id: 9,
    slug: 'jaipur',
    name: 'Jaipur',
    state: 'Rajasthan',
    description: 'The Pink City with growing digital marketing and e-commerce opportunities.',
    services: ['E-commerce Solutions', 'SEO', 'Social Media Marketing'],
    image: 'https://images.unsplash.com/photo-1561361513-2d0a8be04eae',
    content: 'Jaipur, the Pink City, is witnessing a surge in e-commerce and digital marketing. Our services in Jaipur include e-commerce solutions, SEO, and social media marketing to help businesses thrive online.',
    featured: false
  },
  {
    id: 10,
    slug: 'satna',
    name: 'Satna',
    state: 'Madhya Pradesh',
    description: 'Our headquarters location, serving businesses across Central India.',
    services: ['All Digital Marketing Services', 'Web Development', 'Local SEO'],
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
    content: 'Satna is our headquarters location, and we serve businesses across Central India from here. We offer comprehensive digital marketing services, web development, and specialized local SEO to help businesses in Satna and surrounding areas grow their online presence.',
    featured: true
  }
];

/**
 * Get all cities (default + custom from localStorage)
 * @returns {Array} - Array of all cities
 */
export function getAllCities() {
  try {
    const customCities = JSON.parse(localStorage.getItem('customCities') || '[]');
    return [...defaultCities, ...customCities];
  } catch (e) {
    return defaultCities;
  }
}

/**
 * Find city by slug
 * @param {Array} cities - Array of cities
 * @param {string} slug - Slug to search for
 * @returns {Object|null} - Found city or null
 */
export function findCityBySlug(cities, slug) {
  if (!slug || !cities) return null;
  
  return cities.find(city => {
    if (city.slug) {
      return city.slug === slug;
    }
    // Fallback: generate slug from name
    const nameSlug = city.name.toLowerCase().replace(/\s+/g, '-');
    return nameSlug === slug;
  });
}

/**
 * Find city by ID
 * @param {Array} cities - Array of cities
 * @param {string|number} id - ID to search for
 * @returns {Object|null} - Found city or null
 */
export function findCityById(cities, id) {
  if (!id || !cities) return null;
  
  const numericId = parseInt(id, 10);
  if (isNaN(numericId)) return null;
  
  return cities.find(c => {
    return c.id === numericId || 
           c.id === id || 
           String(c.id) === String(id) ||
           String(c.id) === String(numericId);
  });
}
