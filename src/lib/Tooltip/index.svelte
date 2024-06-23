<script lang="ts">
    import { fade } from "svelte/transition";
    export let message: string;
    export let x: number;
    export let y: number;
</script>

<div
    in:fade={{ duration: 100 }}
    out:fade={{ duration: 100 }}
    style="top: {y}px; left: {x}px;"
    class="tooltip rounded"
>
    {message}
</div>

<style>
    .tooltip {
        color: var(--background-color);
        min-width: 80px;
        max-width: 250px;
        position: absolute;
        padding: 0.7rem;
        text-align: center;
        background-color: var(--normal-text-color);
        z-index: 9999;
    }
    .tooltip:before {
        content: "";
        position: absolute;
        top: -5px;
        left: calc(50% - 5px);
        border-bottom: 5px solid var(--normal-text-color);
        border-right: 5px solid transparent;
        border-left: 5px solid transparent;
    }
    :global(.tooltip.top:before) {
        top: auto;
        bottom: -5px;
        transform: rotate(-180deg);
    }
    :global(.tooltip.right:before, .tooltip.top.right:before) {
        left: auto;
        right: 1rem;
    }
    :global(.tooltip.left:before, .tooltip.top.left:before) {
        left: 1rem;
    }
</style>
