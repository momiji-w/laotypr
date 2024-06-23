<script lang="ts">
    import { Timer } from "../timer";
    import { createEventDispatcher, onMount } from "svelte";
    import { isRunning, elapsedTime, currentTimeSelection } from "../../stores";
    import { fade } from "svelte/transition";
    import { setConfig } from "$lib/utils";

    const dispatch = createEventDispatcher();

    const timer = new Timer();
    let interval: number;

    let timeModeSelection = [15, 30, 60, 120];
    let currentCountDown: number;

    export function start(): any {
        isRunning.set(true);
        timer.start();
        interval = setInterval(() => {
            elapsedTime.set(Math.round(timer.getTime() / 1000));
            currentCountDown = $currentTimeSelection - $elapsedTime;
            if (currentCountDown <= 0) {
                clearInterval(interval);
                dispatch("finish");
            }
        }, 100);
    }

    export function reset(): any {
        isRunning.set(false);
        timer.reset();
        elapsedTime.set(0);
        clearInterval(interval);
        currentCountDown = $currentTimeSelection;
    }

    export function pause(): any {
        isRunning.set(false);
        timer.stop();
        clearInterval(interval);
    }

    function setCountDown(newCountDown: number): any {
        $currentTimeSelection = newCountDown;

        setConfig("time", newCountDown);

        $currentTimeSelection = newCountDown;
        currentCountDown = newCountDown;
        dispatch("setNewOption");
    }

    //take only time
    $: displayTime = new Date((currentCountDown || $currentTimeSelection) * 1000)
        .toISOString()
        .substring(14, 19);

    onMount(() => {
        currentCountDown = $currentTimeSelection;
    });
</script>

<div class="flex justify-between align-center mt-6">
    <h1
        class:active-timer={$isRunning}
        class:finish={!$isRunning && $elapsedTime > 0}
    >
        {displayTime}
    </h1>
    {#if !$isRunning && $elapsedTime === 0}
        <div class="flex align-bottom gap-2" transition:fade>
            {#each timeModeSelection as time}
                <button
                    class:active={$currentTimeSelection === time}
                    on:click={() => setCountDown(time)}
                    on:mousedown|preventDefault
                    >{time}
                </button>
            {/each}
        </div>
    {/if}
</div>

<style>
    .active-timer {
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
