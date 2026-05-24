<svelte:head>
    <title>Contact Our Team — Autoconvey</title>
    <meta name="description" content="Get in touch with Autoconvey to discuss custom AI systems architecture for your business operations." />
</svelte:head>

<main class="py-20 px-6 max-w-4xl mx-auto">
    <div class="grid md:grid-cols-5 gap-12">
        <div class="md:col-span-2 space-y-6">
            <div>
                <p class="text-xs uppercase tracking-widest text-[#a1a19f] font-bold mb-2">Connect</p>
                <h1 class="text-3xl font-bold text-[#37352f]">Let's Build.</h1>
            </div>
            <p class="text-sm text-[#787774] leading-relaxed">
                Have an operational bottleneck, custom workflow challenge, or voice-agent automation spec to review? Send us your brief.
            </p>
            <div class="pt-4 border-t border-[#e9e9e7] space-y-2">
                <p class="text-xs font-bold text-[#a1a19f] uppercase tracking-wider">Direct Email</p>
                <a href="mailto:hello@autoconvey.com" class="text-sm font-semibold text-[#37352f] hover:underline block">hello@autoconvey.com</a>
                <p class="text-xs text-[#a1a19f]">We systematically respond within 24 business hours.</p>
            </div>
        </div>

        <div class="md:col-span-3 bg-[#fcfcfc] border border-[#e9e9e7] rounded-xl p-8">
            <form class="space-y-5">
                <div>
                    <label class="block text-xs font-bold uppercase tracking-wider text-[#787774] mb-2" for="name">Your Name</label>
                    <input type="text" id="name" required class="w-full text-sm p-3 bg-white border border-[#e9e9e7] rounded-md focus:outline-none focus:border-[#37352f] text-[#37352f]" />
                </div>
                <div>
                    <label class="block text-xs font-bold uppercase tracking-wider text-[#787774] mb-2" for="email">Work Email</label>
                    <input type="email" id="email" required class="w-full text-sm p-3 bg-white border border-[#e9e9e7] rounded-md focus:outline-none focus:border-[#37352f] text-[#37352f]" />
                </div>
                <div>
                    <label class="block text-xs font-bold uppercase tracking-wider text-[#787774] mb-2" for="message">Project Scope / Core Bottleneck</label>
                    <textarea id="message" rows="4" required class="w-full text-sm p-3 bg-white border border-[#e9e9e7] rounded-md focus:outline-none focus:border-[#37352f] text-[#37352f] resize-none"></textarea>
                </div>
                <button type="submit" class="w-full bg-[#37352f] text-white text-sm font-medium py-3 rounded-md hover:bg-[#23221f] transition-colors">
                    Send Message
                </button>
            </form>
        </div>
    </div>
</main>