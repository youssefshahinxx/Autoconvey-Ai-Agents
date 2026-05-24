<script>
    import { blogPosts } from "$lib/data/blogs.js";
</script>

<svelte:head>
    <title>Thinking Out Loud on AI, Automation, and Business Operations — Autoconvey blogs | AI Agents & Automation Insights</title>
    <meta name="description" content="Practical, hype-free insights on deploying autonomous AI voice agents and automation workflows. Discover how real businesses streamline operations and recover leaked revenue." />
    <meta name="keywords" content="AI agents, voice automation, operational efficiency, speed to lead, n8n workflows, business automation, retell ai, workflow optimization" />
</svelte:head>

<main>
    <header class="max-w-4xl mx-auto text-left pt-20">
        <p
            class="text-sm uppercase tracking-widest text-[#a1a19f] font-bold mb-3"
        >
            Thinking Out Loud
        </p>
        <h1 class="text-4xl md:text-5xl font-bold mb-4 text-[#37352f]">
            Thinking Out Loud on AI, Automation, and Business Operations
        </h1>
        <p class="text-lg text-[#787774] max-w-3xl">
            Practical thinking for business owners and operators navigating what
            AI agents can actually do — beyond the hype, in plain language.
        </p>
        <span class="text-sm text-[#a1a19f] mt-4 block"
            >we publish when we have something worth saying.</span>
        <span class="text-sm text-[#a1a19f] mt-2 block"
            >{blogPosts.length} posts</span>
    </header>

    <section class="grid gap-6 md:grid-cols-2">
        {#each blogPosts as post}
            <article
                class="notion-card rounded-2xl p-6 max-w-4xl flex flex-col justify-between"
            >
                <div>
                    <div
                        class="text-xs uppercase tracking-widest text-[#a1a19f] font-semibold mb-2"
                    >
                        {post.type}
                    </div>
                    <h2 class="text-xl font-bold mb-2 text-[#37352f]">
                        {post.title}
                    </h2>
                    <p class="text-[#787774] mb-4 text-sm leading-relaxed">
                        {post.description}
                    </p>
                </div>
                <div
                    class="flex items-center justify-between mt-4 border-t border-[#e9e9e7] pt-4"
                >
                    <span class="text-sm text-[#a1a19f]"
                        >Read time: {post.readTime}</span
                    >
                    <a
                        href="/blog/{post.slug}"
                        class="text-[#141414] font-semibold hover:text-[#37352f] inline-flex items-center gap-2 transition-colors"
                    >
                        Read <span class="material-icons text-sm"
                            >arrow_forward</span
                        >
                    </a>
                </div>
            </article>
        {/each}
        </section>
</main>
