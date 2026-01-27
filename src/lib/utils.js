import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
	return twMerge(clsx(inputs));
}

/**
 * Optimize Unsplash image URLs for better performance
 * Adds width, quality, and format optimization parameters
 * @param {string} url - Original Unsplash image URL
 * @param {number} width - Desired image width in pixels
 * @param {number} quality - Image quality (1-100, default: 75)
 * @returns {string} - Optimized image URL
 */
export function optimizeImageUrl(url, width = 1200, quality = 75) {
	if (!url) return url;
	
	// If it's an Unsplash URL, add optimization parameters
	if (url.includes('unsplash.com')) {
		// Remove existing query parameters if any
		const baseUrl = url.split('?')[0];
		// Add optimization parameters
		return `${baseUrl}?w=${width}&q=${quality}&auto=format&fit=crop`;
	}
	
	// For other URLs, return as-is (could add more optimizations later)
	return url;
}

/**
 * Generate responsive image srcset for Unsplash images
 * @param {string} url - Original Unsplash image URL
 * @returns {string} - srcset string with multiple sizes
 */
export function generateImageSrcset(url) {
	if (!url || !url.includes('unsplash.com')) return undefined;
	
	const baseUrl = url.split('?')[0];
	const sizes = [400, 800, 1200, 1600, 2000];
	return sizes.map(size => `${baseUrl}?w=${size}&q=75&auto=format&fit=crop ${size}w`).join(', ');
}