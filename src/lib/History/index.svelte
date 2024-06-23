<script lang="ts">
    import { fade } from "svelte/transition";
    import { getDisplayTimestampFromUnix } from "$lib/utils";

    import { type history, getHistory } from "$lib/history";

    import { onMount } from "svelte";

    import Loader from "$lib/Loader/index.svelte";

    export let showModal = false;

    let dialog: HTMLDialogElement;

    $: if (dialog && showModal) dialog.showModal();

    let loading = true;
    let data: history[];

    onMount(() => {
        data = getHistory();
        loading = false;
    });
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<dialog
    in:fade={{ duration: 75 }}
    out:fade={{ duration: 75 }}
    class="rounded fixed top-0 left-0 right-0 bottom-0 w-10/12 h-full"
    bind:this={dialog}
    on:close={() => (showModal = false)}
    on:click|self={() => dialog.close()}
>
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
        class="relative w-full h-full p-4 overflow-auto bg-[var(--background-color)]"
        on:click|stopPropagation
    >
        <h1 class="text-center m-4 text-4xl">History</h1>
        <table class="w-full overflow-x-auto">
            <thead>
                <tr>
                    <th>wpm</th>
                    <th>accuracy</th>
                    <th>char (correct/total)</th>
                    <th>mode</th>
                    <th>time</th>
                    <th>date</th>
                </tr>
            </thead>
            {#if loading}
                <td colspan="100" class="text-center">
                    <div class="flex flex-grow justify-center">
                        <Loader />
                    </div>
                </td>
            {:else}
                <tbody>
                    {#if data.length === 0}
                        <tr>
                            <td colspan="100" class="text-center">
                                There's no data yet, start typing!
                            </td>
                        </tr>
                    {/if}

                    {#each data as item}
                        <tr>
                            <td class="text-center">{item.wpm}</td>
                            <td class="text-center">{item.accuracy}%</td>
                            <td class="text-center"
                                >{item.correct_key}/{item.total_key}</td
                            >
                            <td class="text-center"
                                >{item.mode} {item.sub_mode}</td
                            >
                            <td class="text-center">{item.time}s</td>
                            <td class="text-center"
                                >{getDisplayTimestampFromUnix(
                                    item.timestamp,
                                )}</td
                            >
                        </tr>
                    {/each}
                </tbody>
            {/if}
        </table>
    </div>
</dialog>

<style>
    dialog {
        outline: none;
    }

    td,
    th {
        padding: 1rem;
    }
    tbody > tr:nth-child(odd) > td {
        background-color: var(--input-bg-color);
    }

    tbody > tr:nth-child(odd) > td:first-child {
        border-radius: 0.25rem 0 0 0.25rem;
    }

    tbody > tr:nth-child(odd) > td:last-child {
        border-radius: 0 0.25rem 0.25rem 0;
    }

    tbody > tr:nth-child(odd) > td:only-child {
        border-radius: 0.25rem;
    }
</style>
