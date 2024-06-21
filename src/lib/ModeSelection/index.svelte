<script lang="ts">
    import { currentMode, GameMode, isRunning } from "../../stores";
    import { createEventDispatcher, tick } from "svelte";
    import { fly } from "svelte/transition";
    import Icon from "$lib/Icon/index.svelte";
    import { setConfig } from "$lib/utits";

    let dispatch = createEventDispatcher();

    async function switchMode(mode: GameMode) {
        if ($isRunning) {
            return;
        }

        if ($currentMode === mode) {
            return;
        }

        currentMode.set(mode);
        setConfig("mode", mode.toString());

        await tick();
        dispatch("setNewMode");
    }
</script>

<div class="flex justify-end gap-2">
    <button
        class="flex items-end gap-1"
        class:active={$currentMode === GameMode.Time}
        on:click={() => switchMode(GameMode.Time)}
        on:mousedown|preventDefault
    >
        <Icon name="timer" size="1.75rem" />
        {#if $currentMode === GameMode.Time}
            <span in:fly={{ x: -15 }}>ເວລາ</span>
        {/if}
    </button>

    <button
        class="flex items-end gap-1"
        class:active={$currentMode === GameMode.Word}
        on:click={() => switchMode(GameMode.Word)}
        on:mousedown|preventDefault
    >
        <Icon name="spellcheck" size="1.75rem" />
        {#if $currentMode === GameMode.Word}
            <span in:fly={{ x: -15 }}>ຄຳສັບ</span>
        {/if}
    </button>

    <button
        class="flex items-end gap-1"
        class:active={$currentMode === GameMode.Quote}
        on:click={() => switchMode(GameMode.Quote)}
        on:mousedown|preventDefault
    >
        <Icon name="article" size="1.75rem" />
        {#if $currentMode === GameMode.Quote}
            <span in:fly={{ x: -15 }}>ປະໂຫຍກ</span>
        {/if}
    </button>
</div>

<style>
    button {
        transition: color 300ms ease;
    }

    button.active {
        color: var(--active-color);
    }

    button:hover {
        color: var(--active-color);
    }
</style>
