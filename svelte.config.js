import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

let adapter;
try {
	// dynamically import adapter if it's installed
	const mod = await import('@sveltejs/adapter-netlify');
	adapter = mod.default;
} catch (e) {
	// adapter not installed — fall back to no-op so the editor doesn't fail
	adapter = undefined;
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		// Use adapter if available
		adapter: adapter ? adapter() : undefined
	}
};

export default config;