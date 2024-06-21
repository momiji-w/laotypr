<script lang="ts">
    import { tick } from "svelte";
    import {
        currentMode,
        GameMode,
        typingTrackerArr,
        correctKeyStrokes,
        elapsedTime,
        type typingTracker,
    } from "../stores";
    import InputArea from "$lib/InputArea/index.svelte";
    import ModeSelection from "$lib/ModeSelection/index.svelte";
    import TimeMode from "$lib/TimeMode/index.svelte";
    import WordMode from "$lib/WordMode/index.svelte";
    import QuoteMode from "$lib/QuoteMode/index.svelte";
    import Result from "$lib/Result/index.svelte";
    import { fade } from "svelte/transition";
    import { calcWPM, roundTo2 } from "$lib/utits";
    import { Timer } from "$lib/timer";

    let modeSelection: ModeSelection;
    let timeMode: TimeMode;
    let wordMode: WordMode;
    let articleMode: QuoteMode;
    let textInput: InputArea;

    let dataTrackInterval: number; 
    let timer: Timer = new Timer();

    $: showResult = false;

    async function nextTest() {
        showResult = false;
        await tick();
        textInput.reset();
    }

    async function showResultScreen() {
        stopDataTrack();
        showResult = true;
        await tick();
    }

    function startDataTrack() {
        timer.reset();

        timer.start();
        dataTrackInterval = setInterval(() => {
            let currentWPM = roundTo2(
                calcWPM($correctKeyStrokes, $elapsedTime),
            );
            let currentTime = Math.round(timer.getTime() / 1000);

            let data: typingTracker = {
                time: currentTime,
                wpm: currentWPM,
            };

            $typingTrackerArr.push(data);
        }, 1000);
    }

    function stopDataTrack() {
        timer.stop();
        clearInterval(dataTrackInterval);
        let lastWPM = roundTo2(calcWPM($correctKeyStrokes, $elapsedTime));
        let lastTime = roundTo2(timer.getTime() / 1000);

        let data: typingTracker = {
            time: lastTime,
            wpm: lastWPM,
        };
        $typingTrackerArr.push(data);
    }
</script>

<div in:fade={{ duration: 75 }}>
    {#if showResult}
        <div in:fade={{ duration: 125 }}>
            <Result on:nextTest={() => nextTest()} />
        </div>
    {:else}
        <ModeSelection
            bind:this={modeSelection}
            on:setNewMode={() => textInput.reset()}
        />

        {#if $currentMode === GameMode.Time}
            <TimeMode
                bind:this={timeMode}
                on:finish={() => {
                    textInput.timeUp();
                    showResultScreen();
                }}
                on:setNewOption={() => textInput.reset()}
            />
        {:else if $currentMode === GameMode.Word}
            <WordMode
                bind:this={wordMode}
                on:finish={() => {}}
                on:setNewOption={() => textInput.reset()}
            />
        {:else}
            <QuoteMode bind:this={articleMode} />
        {/if}

        <InputArea
            bind:this={textInput}
            on:start={() => {
                startDataTrack();
                if ($currentMode === GameMode.Time) {
                    timeMode.start();
                } else if ($currentMode === GameMode.Word) {
                    wordMode.start();
                } else {
                    articleMode.start();
                }
            }}
            on:reset={() => {
                timer.stop();
                clearInterval(dataTrackInterval);
                $typingTrackerArr = [];

                if ($currentMode === GameMode.Time) {
                    timeMode.reset();
                } else if ($currentMode === GameMode.Word) {
                    wordMode.reset();
                } else {
                    articleMode.reset();
                }
            }}
            on:finishWordMode={() => {
                wordMode.finish();
                showResultScreen();
            }}
            on:finishArticleMode={() => {
                articleMode.finish();
                showResultScreen();
            }}
        />
    {/if}
</div>
