<script>
    // Svelte 4 syntax for accepting props
    export let progress = 0;
</script>

<div class="progress-bar">
    <div class="progress-fill" style="width: {progress}%"></div>
</div>  