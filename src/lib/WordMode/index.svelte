<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import {
        isRunning,
        wordModeCount,
        currentWordProgress,
        elapsedTime,
    } from "../../stores";
    import { Timer } from "../timer";
    import { fade } from "svelte/transition";
    import { setConfig } from "$lib/utits";

    const dispatch = createEventDispatcher();

    let interval: number;
    let timer: Timer = new Timer();

    let wordModeSelection = [10, 25, 50, 100];

    export function setWordCount(newWordCount: number): any {
        setConfig("word", newWordCount);
        wordModeCount.set(newWordCount);
        dispatch("setNewOption");
    }

    export function start(): any {
        isRunning.set(true);
        timer.start();
        interval = setInterval(() => {
            elapsedTime.set(Math.round(timer.getTime() / 1000));
        }, 100);
    }

    export function finish(): any {
        isRunning.set(false);
        timer.stop();
        $currentWordProgress = 0;
        clearInterval(interval);
    }

    export function reset(): any {
        isRunning.set(false);
        timer.reset();
        elapsedTime.set(0);
        clearInterval(interval);
    }

    export function pause(): any {
        isRunning.set(false);
        clearInterval(interval);
    }
</script>

<div class="flex justify-between align-center mt-6">
    <h1
        class:active-counter={$isRunning}
        class:finish={!$isRunning && $elapsedTime > 0}
    >
        {$currentWordProgress}/{$wordModeCount}
    </h1>
    {#if !$isRunning && $elapsedTime === 0}
        <div class="flex align-bottom gap-2" transition:fade>
            {#each wordModeSelection as wordCount}
                <button
                    class:active={$wordModeCount === wordCount}
                    on:click={() => setWordCount(wordCount)}
                    on:mousedown|preventDefault
                    >{wordCount}
                </button>
            {/each}
        </div>
    {/if}
</div>

<style>
    .active-counter {
        color: var(--active-color);
    }
    h1 {
        font-size: 3rem;
        font-weight: bold;
        text-align: center;
        opacity: 1;
        transition:
            color 500ms ease,
            opacity 500ms ease;
    }

    h1.finish {
        opacity: 0.2;
    }

    button {
        font-size: 1.25rem;
        font-weight: bold;
        background-color: transparent;
        border: none;
        cursor: pointer;
        transition: color 300ms ease;
    }

    button.active {
        color: var(--active-color);
    }

    button:hover {
        color: var(--active-color);
    }
</style>
