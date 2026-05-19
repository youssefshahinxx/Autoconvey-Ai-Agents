import adapter from '@sveltejs/adapter-netlify'; // Switch this line
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),
    kit: {
        // adapter-auto only works if environment variables are perfectly pre-configured.
        // adapter-netlify explicitly configures your build output for Netlify.
        adapter: adapter()
    }
};

export default config;