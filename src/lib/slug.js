/**
 * Generate SEO-friendly URL slug from title
 * @param {string} title - The title to convert to slug
 * @returns {string} - SEO-friendly slug
 */
export function generateSlug(title) {
  if (!title) return '';
  
  return title
    .toLowerCase()
    .trim()
    // Replace spaces and multiple spaces with hyphens
    .replace(/\s+/g, '-')
    // Remove special characters except hyphens
    .replace(/[^\w\-]+/g, '')
    // Replace multiple consecutive hyphens with single hyphen
    .replace(/\-\-+/g, '-')
    // Remove leading and trailing hyphens
    .replace(/^-+/, '')
    .replace(/-+$/, '')
    // Limit to 100 characters for SEO
    .substring(0, 100)
    .replace(/-+$/, ''); // Remove trailing hyphen if truncated
}

/**
 * Find blog post by slug
 * @param {Array} posts - Array of blog posts
 * @param {string} slug - Slug to search for
 * @returns {Object|null} - Found post or null
 */
export function findPostBySlug(posts, slug) {
  if (!slug || !posts) return null;
  
  return posts.find(post => {
    // Check if post has slug property
    if (post.slug) {
      return post.slug === slug;
    }
    // Fallback: generate slug from title for backward compatibility
    return generateSlug(post.title) === slug;
  });
}

/**
 * Find blog post by ID (for backward compatibility)
 * @param {Array} posts - Array of blog posts
 * @param {string|number} id - ID to search for
 * @returns {Object|null} - Found post or null
 */
export function findPostById(posts, id) {
  if (!id || !posts) return null;
  
  const numericId = parseInt(id, 10);
  if (isNaN(numericId)) return null;
  
  return posts.find(p => {
    return p.id === numericId || 
           p.id === id || 
           String(p.id) === String(id) ||
           String(p.id) === String(numericId);
  });
}
