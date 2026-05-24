<script>
    import { page } from '$app/stores';
    import { blogPosts } from '$lib/data/blogs.js';

    // Look up the matching blog post dynamically based on the current URL pathname slug
    $: currentSlug = $page.params.slug;
    $: post = blogPosts.find(p => p.slug === currentSlug);
</script>

<svelte:head>
    {#if post}
        <title>{post.title} — Autoconvey Blog</title>
        <meta name="description" content={post.metaDescription} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        {:else}
        <title>Post Not Found | Autoconvey</title>
    {/if}
</svelte:head>

<main class="py-16 px-6 max-w-5xl mx-auto">
    {#if post}
        <article class="">
            <header class="mb-10 border-b border-[#e9e9e7] pb-6">
                <p class="text-sm uppercase tracking-widest text-[#a1a19f] font-bold mb-3">{post.type}</p>
                <h1 class="text-3xl md:text-3xl md:max-w-3xl font-bold mb-4 text-[#37352f] leading-tight">{post.title}</h1>
                <div class="flex items-center gap-4 text-sm text-[#a1a19f]">
                    <span>⏱️ {post.readTime} read</span>
                    <span>•</span>
                    <span>Autoconvey Insights</span>
                </div>
            </header>

            <div class="space-y-6 text-[#37352f] leading-8 text-base">
                {@html post.content}
            </div>
        </article>

        <div class="mt-12 flex flex-col sm:flex-row gap-4 items-center justify-between">
            <a href="/blog" class="text-[#141414] font-semibold hover:text-[#37352f] inline-flex items-center gap-2 transition-colors">
                <span class="material-icons">arrow_back</span> Back to Blog
            </a>
            <a href="/assessment" class="bg-[#37352f] text-white px-6 py-3 rounded-md font-semibold hover:bg-black transition-colors shadow-sm">
                Take Free Assessment &rarr;
            </a>
        </div>
    {:else}
        <div class="text-center py-20 notion-card rounded-2xl p-8 max-w-xl mx-auto">
            <h1 class="text-2xl font-bold mb-4 text-[#37352f]">Post Not Found</h1>
            <p class="text-[#787774] mb-6">We couldn't find the article you are looking for.</p>
            <a href="/blog" class="bg-[#37352f] text-white px-6 py-2 rounded-md font-semibold">Return to Directory</a>
        </div>
    {/if}
</main>