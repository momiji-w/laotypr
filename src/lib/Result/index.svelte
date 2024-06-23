<script lang="ts">
    import {
        totalKeyStrokes,
        correctKeyStrokes,
        elapsedTime,
        currentMode,
        GameMode,
        currentTimeSelection,
        wordModeCount,
        typingTrackerArr,
        article_data,
        article_index,
    } from "../../stores";

    import { onMount, onDestroy } from "svelte";

    import Icon from "$lib/Icon/index.svelte";

    import { calcAcc, calcWPM, roundTo2 } from "$lib/utils";

    import { type history, setHistory } from "$lib/history";

    import { createEventDispatcher } from "svelte";

    import { tooltip } from "$lib/Tooltip/tooltip";

    const dispatch = createEventDispatcher();

    function nextTest() {
        dispatch("nextTest");
    }

    let resultChart: HTMLCanvasElement;
    let nextButton: HTMLButtonElement;

    function getSubMode(): string {
        if ($currentMode === GameMode.Time) {
            return $currentTimeSelection.toString();
        }
        
        if ($currentMode === GameMode.Word) {
            return $wordModeCount.toString();
        }

        return "";
    }

    onMount(async () => {
        const history: history = {
            wpm: calcWPM($correctKeyStrokes, $elapsedTime),
            accuracy: calcAcc($correctKeyStrokes, $totalKeyStrokes),
            time: roundTo2($elapsedTime),
            total_key: $totalKeyStrokes,
            correct_key: $correctKeyStrokes,
            timestamp: Math.floor(Date.now() / 1000),
            mode: $currentMode,
            sub_mode: getSubMode(),
        };

        setHistory(history);

        const ctx = resultChart.getContext("2d");
        const labels = [];
        const items = [];

        for (let i = 0; i < $typingTrackerArr.length; i++) {
            items[i] = $typingTrackerArr[i].wpm;
            labels[i] = $typingTrackerArr[i].time;
        }

        const data = {
            labels: labels,
            datasets: [
                {
                    label: "wpm",
                    data: items,
                    borderWidth: 2,
                    borderColor: "#04a5e5",
                    backgroundColor: "#04a5e5",
                },
            ],
        };
        //@ts-ignore
        new Chart(ctx, {
            type: "line",
            data: data,
            options: {
                animation: {
                    duration: 0,
                },
                plugins: {
                    legend: {
                        display: false,
                    },
                    title: {
                        display: false,
                    },
                    tooltip: {
                        callbacks: {
                            //@ts-ignore
                            title: function () {
                                return "";
                            },
                        },
                    },
                },
                maintainAspectRatio: false,

                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: "Word Per Minute",
                        },
                    },
                },
            },
        });
    });

    onDestroy(() => {
        $typingTrackerArr = [];
        nextTest();
    });
</script>

<div class="container flex flex-col mt-14">
    <div
        class="flex justify-around flex-wrap gap-4 max-sm:flex-col max-sm:items-center max-sm:gap-6"
    >
        <div class="w-full flex justify-center">
            <div class="w-3/4 h-72">
                <canvas bind:this={resultChart}> </canvas>
            </div>
        </div>
        <div class="flex justify-between flex-wrap w-full">
            <div class="flex flex-col">
                <span class="text-2xl">wpm</span>
                <h3 class="text-5xl font-bold">
                    {calcWPM($correctKeyStrokes, $elapsedTime)}
                </h3>
            </div>
            <div class="flex flex-col">
                <span class="text-2xl">acc</span>
                <h3 class="text-5xl font-bold">
                    {calcAcc($correctKeyStrokes, $totalKeyStrokes)}%
                </h3>
            </div>
            <div class="flex flex-col">
                <span use:tooltip={"correct/total"} class="text-2xl">char</span>
                <h3 class="text-5xl font-bold">
                    {$correctKeyStrokes}/{$totalKeyStrokes}
                </h3>
            </div>
            <div class="flex flex-col">
                <span class="text-2xl">test type</span>
                <h3 class="text-5xl font-bold">
                    {$currentMode.toString()}
                    {getSubMode()}
                </h3>
            </div>
            <div class="flex flex-col">
                <span class="text-2xl">total time</span>
                <h3 class="text-5xl font-bold">
                    {$elapsedTime}s
                </h3>
            </div>
            {#if $currentMode === GameMode.Quote}
                <div class="flex flex-col">
                    <span class="text-2xl">source</span>
                    <h3 class="text-5xl font-bold">
                        {$article_data[$article_index].reference}
                    </h3>
                </div>
            {/if}
        </div>
    </div>
    <div class="mt-20 flex justify-center">
        <button
            bind:this={nextButton}
            use:tooltip={"Next Test"}
            class="flex rounded"
            on:click={() => {
                nextButton.blur();
                nextTest();
            }}
            on:mousedown|preventDefault
        >
            <Icon name="arrow_forward" size="2rem" />
        </button>
    </div>
</div>
