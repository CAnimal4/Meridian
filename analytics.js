/**
 * Vercel Web Analytics initialization
 * This script injects the Vercel Analytics tracker into the page
 */
import { inject } from '@vercel/analytics';

// Initialize Vercel Analytics
inject({ mode: 'auto' });
