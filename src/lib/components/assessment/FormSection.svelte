<script>
    export let step = "1";
    export let title = "";
    export let description = "";
</script>

<div class="form-section">
    <h3>
        <div class="section-icon">{step}</div>
        {title}
    </h3>
    
    {#if description}
        <p class="section-description">{description}</p>
    {/if}
    
    <slot />
</div>