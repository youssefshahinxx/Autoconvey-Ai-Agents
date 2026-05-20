import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'; // 1. Add this import

export default defineConfig({
  plugins: [
    tailwindcss(), // 2. Place this BEFORE sveltekit()
    sveltekit()
  ]
});
	