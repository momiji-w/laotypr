<script lang="ts">
    import { onMount, createEventDispatcher, tick } from "svelte";
    import { writable, type Writable } from "svelte/store";

    import {
        totalKeyStrokes,
        correctKeyStrokes,
        isRunning,
        currentMode,
        wordModeCount,
        currentWordProgress,
        totalLetterCount,
        currentLetterCount,
        GameMode,
        article_index,
        type article,
    } from "../../stores";

    import Icon from "$lib/Icon/index.svelte";

    import { tooltip } from "$lib/Tooltip/tooltip";

    type displayWord = {
        id: number;
        word: string;
    };

    //import wordList from "$lib/Words/wordData.json";
    //import articleList from "$lib/Words/articleData.json";

    import { fade } from "svelte/transition";
    import {
        words_data as wordList,
        article_data as articleList,
    } from "../../stores";

    const dispatch = createEventDispatcher();

    let inputElement: HTMLInputElement;
    let inputValue: string = "";

    let inputContainerElement: HTMLDivElement;
    let inputWrapperSize: number = 0;

    let outOfFocusElement: HTMLDivElement;

    let caretTop: number;
    let caretLeft: number;
    let caretElement: HTMLDivElement;

    let currentElement: HTMLSpanElement;

    let words: Writable<displayWord[]> = writable([]);

    let activeLine: number = 0;
    let activeWord: number = 0;
    let activeLetter: number = 0;

    function getRandomWord(): string {
        let randomIndex: number = Math.floor(Math.random() * $wordList.length);
        return $wordList[randomIndex];
    }

    function getRandomWordObj(): displayWord {
        let randomIndex: number = Math.floor(Math.random() * $wordList.length);
        return {
            id: Math.random(),
            word: $wordList[randomIndex],
        };
    }

    function createTestWords(count: number): displayWord[] {
        let words: displayWord[] = [];
        for (let i = 0; i < count; i++) {
            let word: string = getRandomWord();
            let id: number = Math.random();

            let wordObj: displayWord = {
                id: id,
                word: word,
            };

            words.push(wordObj);
        }

        return words;
    }

    function getRandomQuote(): article {
        let randomIndex: number = Math.floor(
            Math.random() * $articleList.length,
        );
        $article_index = randomIndex;
        return $articleList[randomIndex];
    }

    function disectQuote(article: article): displayWord[] {
        //for some reason the reset function doesn't reset the totalLetter
        //what the fuck
        $totalLetterCount = 0;

        let articleArray: string[] = article.content.split(" ");
        let spacedQuoteArray: displayWord[] = [];

        for (let i = 0; i < articleArray.length; i++) {
            let wordObj: displayWord = {
                id: Math.random(),
                word: articleArray[i],
            };

            $totalLetterCount += articleArray[i].length;
            spacedQuoteArray.push(wordObj);

            if (i < articleArray.length - 1) {
                spacedQuoteArray.push({ id: Math.random(), word: " " });
                $totalLetterCount++;
            }
        }

        return spacedQuoteArray;
    }

    function setTestInputFromCurrentMode() {
        if ($currentMode === GameMode.Time) {
            $words = createTestWords(100);
        }

        if ($currentMode === GameMode.Word) {
            $words = createTestWords($wordModeCount);
        }

        if ($currentMode === GameMode.Quote) {
            $words = disectQuote(getRandomQuote());
        }
    }

    function onBlur() {
        outOfFocusElement.classList.add("show");
        caretElement.classList.add("hidden");
    }

    function onFocus() {
        outOfFocusElement.classList.remove("show");
        caretElement.classList.remove("hidden");
    }

    function getNewCaretPos() {
        let letterHeight = currentElement.offsetHeight;
        let diff = letterHeight - caretElement.offsetHeight;

        let newTop = currentElement.offsetTop + diff / 2;
        let newLeft = currentElement.offsetLeft - caretElement.offsetWidth / 2;

        let caretPos = {
            newTop: newTop,
            newLeft: newLeft,
        };

        return caretPos;
    }

    function setCaret() {
        let newPos = getNewCaretPos();

        caretLeft = newPos.newLeft;
        caretTop = newPos.newTop;
    }

    function setCurrentElement() {
        currentElement = inputContainerElement.children[activeWord]?.children[
            activeLetter
        ] as HTMLSpanElement;

        if (!currentElement) {
            console.error("CURRENT ELEMENT NOT FOUND");
        }
    }

    function evaluateInput() {
        $totalKeyStrokes++;
        let isCorrect: boolean =
            inputValue.toString() === $words[activeWord].word[activeLetter];

        if (isCorrect) {
            $correctKeyStrokes++;
            currentElement.classList.add("correct");
            return;
        }

        currentElement.classList.add("incorrect");
    }

    export async function reset() {
        dispatch("reset");

        await tick();

        $currentWordProgress = 0;

        activeLine = 0;
        activeWord = 0;
        activeLetter = 0;

        totalKeyStrokes.set(0);
        correctKeyStrokes.set(0);

        $words = [];
        setTestInputFromCurrentMode();

        inputElement.disabled = false;
        inputElement.focus();

        await tick();

        setCurrentElement();
        setCaret();
    }

    export function timeUp() {
        inputElement.disabled = true;
        onBlur();
    }

    export function finishWordMode() {
        inputElement.disabled = true;
        onBlur();
    }

    export function finishQuoteMode() {
        inputElement.disabled = true;
        onBlur();
    }

    function setNextElement() {
        activeLetter++;

        if ($currentMode === GameMode.Quote) {
            $currentLetterCount++;
            if ($currentLetterCount >= $totalLetterCount) {
                dispatch("finishQuoteMode");
                finishWordMode();
            }
        }

        if (activeLetter >= $words[activeWord].word.length) {
            activeWord++;
            if ($currentMode === GameMode.Time) {
                $words.push(getRandomWordObj());
                $words = $words;
            }

            if ($currentMode === GameMode.Word) {
                $currentWordProgress++;
                if ($currentWordProgress >= $wordModeCount) {
                    dispatch("finishWordMode");
                    finishWordMode();
                }
            }
            activeLetter = 0;
        }
    }

    function setPreviousElement() {
        if (activeLetter > 0) {
            activeLetter--;
        } else if (activeWord > 0) {
            if ($currentMode === GameMode.Word) {
                $currentWordProgress--;
            }

            activeWord--;
            activeLetter = $words[activeWord].word.length - 1;
        }
    }

    function detectNewLine() {
        if (!$isRunning) {
            return;
        }

        let newCaretPos = getNewCaretPos();

        if (newCaretPos.newTop > caretTop) {
            activeLine++;

            if (activeLine === 2) {
                let itemsToRemove = 0;
                let top = 0;
                for (; itemsToRemove < 50; itemsToRemove++) {
                    let item = inputContainerElement.children[itemsToRemove]
                        .children[0] as HTMLElement;
                    if (itemsToRemove === 0) {
                        top = item.offsetTop;
                        continue;
                    }

                    if (item.offsetTop !== top) {
                        break;
                    }
                }

                $words.splice(0, itemsToRemove);
                $words = $words;

                activeWord -= itemsToRemove;

                activeLine = 1;
                activeLetter = 0;
            }

            activeLetter = 0;
        }

        if (newCaretPos.newTop < caretTop) {
            activeLine--;
        }
    }

    function handleBackspace() {
        setPreviousElement();
        setCurrentElement();

        if ($currentMode === GameMode.Quote && $currentLetterCount > 0) {
            $currentLetterCount--;
        }

        if (currentElement.classList.contains("correct")) {
            $correctKeyStrokes--;
            currentElement.classList.remove("correct");
        } else if (currentElement.classList.contains("incorrect")) {
            currentElement.classList.remove("incorrect");
        }

        detectNewLine();
        setCaret();
    }

    async function letterTyped() {
        if (!$isRunning) {
            dispatch("start");
        }

        await tick();

        setCurrentElement();
        evaluateInput();
        setNextElement();

        //if Word/Quote Mode is finished
        if (!$isRunning) {
            inputValue = "";
            return;
        }

        setCurrentElement();
        detectNewLine();

        await tick();

        setCurrentElement();
        setCaret();
        inputValue = "";
    }

    function initTextInput() {
        let wordComputedStyle = window.getComputedStyle(
            inputContainerElement.children[0],
        );

        let wordTopMargin = parseInt(wordComputedStyle.marginTop);
        let wordBottomMargin = parseInt(wordComputedStyle.marginBottom);
        let word = inputContainerElement.children[0] as HTMLElement;

        inputWrapperSize =
            (word.offsetHeight + wordTopMargin + wordBottomMargin) * 3;

        setCurrentElement();
        setCaret();

        inputContainerElement.children[0].remove();
    }

    onMount(async () => {
        inputElement.focus();
        initTextInput();

        await tick();

        setTestInputFromCurrentMode();
    });
</script>

<div class="flex flex-col items-center w-full">
    <input
        type="text"
        bind:this={inputElement}
        bind:value={inputValue}
        on:input={letterTyped}
        on:keydown={(e) => {
            if (e.key === "Backspace") {
                handleBackspace();
            }
        }}
        on:focus={onFocus}
        on:blur={onBlur}
        aria-hidden="true"
        style="opacity: 0; height: 0px;"
        autofocus
    />

    <div class="container relative">
        <div
            class="flex flex-wrap overflow-hidden relative"
            style="height: {inputWrapperSize}px;"
        >
            <div
                class="input-container"
                class:px-2={$currentMode === GameMode.Quote}
                bind:this={inputContainerElement}
            >
                <!-- Dummy -->
                <div class="word padded">
                    <span class="letter">&nbsp;</span>
                </div>

                {#each $words as item (item.id)}
                    <div
                        class="word"
                        class:padded={$currentMode !== GameMode.Quote}
                        in:fade={{ duration: 100 }}
                    >
                        {#each item.word as letter}
                            {#if letter === " "}
                                <span class="letter space">_</span>
                            {:else}
                                <span class="letter">{letter}</span>
                            {/if}
                        {/each}
                    </div>
                {/each}
            </div>
            <div
                class="caret"
                class:animate={!$isRunning}
                style="left: {caretLeft}px; top: {caretTop}px;"
                bind:this={caretElement}
            />
        </div>
        <div
            class="out-of-focus"
            on:click={() => inputElement.focus()}
            on:mousedown|preventDefault
            bind:this={outOfFocusElement}
        >
            Click here to focus
        </div>
    </div>

    <button
        use:tooltip={"Restart Test"}
        class="mt-4 rounded flex"
        on:click={reset}
        on:mousedown|preventDefault
    >
        <Icon name="refresh" size="2rem" />
    </button>
</div>

<style>
    .input-container {
        font-size: var(--input-size);
        position: relative;
        display: flex;
        flex-wrap: wrap;
        height: min-content;
    }

    .word {
        display: flex;
        flex-wrap: wrap;
        padding: 0.25rem 0rem;
    }
    .word.padded {
        padding: 0.25rem 0.5rem;
    }

    .letter {
        color: var(--inactive-color);
    }

    .letter:global(.correct) {
        color: var(--normal-text-color);
    }

    .letter:global(.incorrect) {
        color: var(--error-color);
    }

    .letter.space {
        opacity: 0;
    }

    .letter.space:global(.incorrect) {
        opacity: 1;
        color: var(--error-color);
    }

    .out-of-focus {
        opacity: 0;
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: opacity 0ms ease;
    }

    .out-of-focus:global(.show) {
        opacity: 1;
        backdrop-filter: blur(3px);
        transition-delay: 1000ms;
        transition-property: opacity ease-out;
        transition-duration: 500ms;
    }

    @keyframes caretFlash {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }

    .caret {
        position: absolute;
        height: var(--caret-size);
        border-right: 3px solid var(--caret-color);
        transform-origin: top left;
        transition:
            opacity 500ms ease,
            left 100ms ease;
    }

    .caret:global(.hidden) {
        opacity: 0;
    }

    .caret.animate:not(.hidden) {
        animation-name: caretFlash;
        animation-duration: 1000ms;
        animation-iteration-count: infinite;
    }
</style>
