<script lang="ts">
    import "../app.css";
    import "../theme.css";
    import TopNav from "$lib/TopNav/index.svelte";
    import Loader from "$lib/Loader/index.svelte";

    import {
        GameMode,
        currentMode,
        currentTimeSelection,
        wordModeCount,
    } from "../stores";
    import { onMount } from "svelte";

    import { loadConfig } from "$lib/utits";

    let isLoading: boolean = true;

    function getMode(mode: string) {
        switch (mode) {
            case "word":
                return GameMode.Word;
            case "quote":
                return GameMode.Quote;
            default:
                return GameMode.Time;
        }
    }

    onMount(() => {
        let getConfig = loadConfig();

        $currentMode = getMode(getConfig.mode);
        $wordModeCount = getConfig.word;
        $currentTimeSelection = getConfig.time;

        isLoading = false;
    });
</script>

<div class="w-full flex flex-col items-center">
    <div class="w-3/4 mt-10">
        {#if isLoading}
            <div
                style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);"
            >
                <Loader />
            </div>
        {:else}
            <TopNav />
            <slot />
        {/if}
    </div>
</div>

<style>
    @font-face {
        font-family: "BoonHome";
        src: url("/fonts/boonhome-400.otf");
    }

    :global(html) {
        background-color: var(--background-color);
        color: var(--normal-text-color);
    }
    :global(body) {
        font-family: "BoonHome", sans-serif;
        font-weight: 600;
    }
</style>
