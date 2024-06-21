<script lang="ts">
    import {
        isRunning,
        totalLetterCount,
        elapsedTime,
        currentLetterCount,
    } from "../../stores";
    import { Timer } from "../timer";

    let interval: number;
    let timer: Timer = new Timer();

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
        clearInterval(interval);
    }

    export function reset(): any {
        isRunning.set(false);
        timer.reset();
        elapsedTime.set(0);
        $currentLetterCount = 0;
        $totalLetterCount = 0;
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
        {$currentLetterCount} / {$totalLetterCount}
    </h1>
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
</style>
