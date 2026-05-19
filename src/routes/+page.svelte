<script>
    import Hero from "$lib/components/Hero.svelte";
    import Pricing from "$lib/components/Pricing.svelte";
    import FAQ from "$lib/components/FAQ.svelte";
    import Partners from "$lib/components/Partners.svelte";
    import About from "$lib/components/About.svelte";
    import Partnership from "$lib/components/Partnership.svelte";
    import AgentCategories from "$lib/components/AgentCategories.svelte";
    import Efficiency from "$lib/components/Efficiency.svelte";
    import Process from "$lib/components/Process.svelte";
    // Import the rest as you build them: Concept, Agents, Workflow, etc.

    import { onMount } from "svelte";
    import FinalCTA from "../lib/components/FinalCTA.svelte";

    // Using Svelte 4 syntax for lifecycle hooks, matching your layout file
    onMount(() => {
        const tooltips = document.querySelectorAll(".tooltip");
        tooltips.forEach((tooltip) => {
            const tooltipText = tooltip.querySelector(".tooltip-text");
            if (tooltipText) {
                tooltip.addEventListener("mouseenter", function () {
                    const rect = tooltip.getBoundingClientRect();
                    const tooltipRect = tooltipText.getBoundingClientRect();
                    tooltipText.style.left = rect.left + rect.width / 2 + "px";
                    tooltipText.style.top =
                        rect.top - tooltipRect.height - 10 + "px";

                    if (
                        parseFloat(tooltipText.style.left) +
                            tooltipRect.width / 2 >
                        window.innerWidth
                    ) {
                        tooltipText.style.left =
                            window.innerWidth - tooltipRect.width - 10 + "px";
                    }
                    if (parseFloat(tooltipText.style.left) < 10) {
                        tooltipText.style.left = "10px";
                    }
                });
            }
        });
    });
</script>

<svelte:head>
    <title>Autoconvey | Autonomous AI Voice Agents & Business Workflow Automation</title>
    <meta name="description" content="Autoconvey builds custom, autonomous AI voice receptionists and automated workflows using Retell AI and n8n. Stop letting missed calls turn into lost business revenue." />
    <meta name="keywords" content="AI voice agents, business automation, autonomous workflows, n8n agency, Retell AI receptionist, lead conversion automation, speed to lead" />
</svelte:head>

<Hero />
<main>
    <Partners />
    <About />
    <div class="divider max-w-4xl mx-auto"></div>
    <Partnership />
    <div class="divider max-w-4xl mx-auto"></div>
    <AgentCategories />
    <div class="divider max-w-4xl mx-auto"></div>
    <Process />
    <div class="divider max-w-4xl mx-auto"></div>
    <Pricing />
    <div class="divider max-w-4xl mx-auto"></div>
    <FAQ />
    <FinalCTA />
</main>
