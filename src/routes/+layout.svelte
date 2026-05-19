<script>
	import "../app.css";

	// Svelte state for the mobile menu toggle
	let isNavOpen = false;
	function toggleNav() {
		isNavOpen = !isNavOpen;
	}
</script>

<nav
	class="sticky top-0 z-50 backdrop-blur-md border-b border-[#e9e9e7] px-6 py-4"
>
	<div
		class="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
	>
		<div class="flex items-center justify-between w-full md:w-auto">
			<div class="flex items-center gap-3">
				<img
					src="/assets/Untitled design (31).png"
					alt="Autoconvey Logo"
					class="w-10 object-contain"
				/>
				<span class="font-bold tracking-tight text-xl">Autoconvey</span>
			</div>
			<button
				on:click={toggleNav}
				class="nav-toggle md:hidden"
				aria-expanded={isNavOpen}
				aria-label="Toggle navigation"
			>
				<span class="material-icons">menu</span>
			</button>
		</div>
		<div
			class="flex flex-col md:flex-row items-start md:items-center gap-4 w-full md:w-auto"
		>
			<div
				class={"md:flex flex-col md:flex-row gap-3 md:gap-8 text-sm font-medium text-[#787774] w-full md:w-auto" +
					(isNavOpen ? " nav-open" : " hidden")}
			>
				<a href="/#about" class="hover:text-[#37352f]">How It Works</a>
				<a href="/#agents" class="hover:text-[#37352f]">Agents</a>
				<a href="/#how-it-works" class="hover:text-[#37352f]"
					>Workflow</a
				>
				<a href="/#pricing" class="hover:text-[#37352f]">Pricing</a>
				<a href="/blog" class="hover:text-[#37352f]">Blogs</a>
				<a href="/assessment" class="hover:text-[#37352f]">Assessment</a
				>
			</div>
			<button
				class="text-sm font-medium px-4 py-2 border border-[#e9e9e7] rounded-md hover:bg-[#f7f7f5] book-demo w-full md:w-auto"
			>
				<a href="/assessment">Book a Demo</a>
			</button>
		</div>
	</div>
</nav>

<slot />

<footer class="border-t border-[#e9e9e7] bg-[#ffffff] pt-16 pb-12 px-6">
    <div class="max-w-5xl mx-auto">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 pb-12">
            
            <div class="flex flex-col gap-4">
                <div class="flex items-center gap-2">
                    <img
					src="/assets/Untitled design (31).png"
					alt="Autoconvey Logo"
					class="w-5 object-contain"
				/>
                    <span class="font-bold text-sm tracking-tight text-[#37352f]">AUTOCONVEY</span>
                </div>
                <p class="text-sm text-[#787774] leading-relaxed max-w-[220px]">
                    AI agents built for the way your business actually works.
                </p>
                <p class="text-xs text-[#a1a19f] mt-2 hidden md:block">
                    &copy; 2026 Autoconvey. All rights reserved.
                </p>
            </div>

            <div class="flex flex-col gap-3">
                <h4 class="text-xs font-bold uppercase tracking-widest text-[#a1a19f]">Navigation</h4>
                <div class="flex flex-col gap-2.5 text-sm font-medium text-[#787774]">
                    <a href="/#how-it-works" class="hover:text-[#37352f] transition-colors w-fit">How It Works</a>
                    <a href="/#agents" class="hover:text-[#37352f] transition-colors w-fit">Agents</a>
                    <a href="/#pricing" class="hover:text-[#37352f] transition-colors w-fit">Pricing</a>
                    <a href="/assessment" class="hover:text-[#37352f] transition-colors w-fit">Early Access</a>
                    <a href="/blog" class="hover:text-[#37352f] transition-colors w-fit">Blog</a>
                </div>
            </div>

            <div class="flex flex-col gap-3">
                <h4 class="text-xs font-bold uppercase tracking-widest text-[#a1a19f]">Company</h4>
                <div class="flex flex-col gap-2.5 text-sm font-medium text-[#787774]">
                    <a href="/about" class="hover:text-[#37352f] transition-colors w-fit">About</a>
                    <a href="/contact" class="hover:text-[#37352f] transition-colors w-fit">Contact</a>
                    <a href="/privacy" class="hover:text-[#37352f] transition-colors w-fit">Privacy Policy</a>
                    <a href="/terms" class="hover:text-[#37352f] transition-colors w-fit">Terms of Service</a>
                </div>
            </div>

            <div class="flex flex-col gap-4">
                <h4 class="text-xs font-bold uppercase tracking-widest text-[#a1a19f]">Contact</h4>
                <div class="flex flex-col gap-1.5">
                    <a href="mailto:hello@autoconvey.com" class="text-sm font-semibold text-[#37352f] hover:underline w-fit">
                        hello@autoconvey.com
                    </a>
                    <p class="text-xs text-[#a1a19f] leading-relaxed">
                        We respond within 24 business hours.
                    </p>
                </div>
                <div class="flex items-center gap-4 text-[#787774] mt-1">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="hover:text-[#37352f] transition-colors flex items-center" aria-label="LinkedIn">
                        <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                        </svg>
                    </a>
                    <a href="https://x.com" target="_blank" rel="noopener noreferrer" class="hover:text-[#37352f] transition-colors flex items-center" aria-label="Twitter / X">
                        <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>

        <div class="border-t border-[#e9e9e7] pt-8 md:hidden text-center sm:text-left mb-6">
            <p class="text-xs text-[#a1a19f]">
                &copy; 2026 Autoconvey. All rights reserved.
            </p>
        </div>

        <div class="border-t border-[#e9e9e7] pt-6">
            <p class="text-[11px] text-[#a1a19f] leading-relaxed max-w-4xl text-left">
                Autoconvey is an independent AI automation service provider. We are not affiliated with, endorsed by, or partnered with Retell AI, n8n, ClickUp, or any other platform or framework we use to engineer custom enterprise layouts for clients.
            </p>
        </div>
    </div>
</footer>