<script lang="ts">
    import Icon from "$lib/Icon/index.svelte";
    import History from "$lib/History/index.svelte";

    import { base } from "$app/paths";
    import { page } from "$app/stores";
    import { goto } from "$app/navigation";

    function navigateToPath(path: string) {
        if ($page.url.pathname === base + path) {
            return;
        }

        goto(base + path);
    }

    let showHistory = false;
</script>

{#if showHistory}
    <History bind:showModal={showHistory} />
{/if}

<div class="container flex align-center gap-5 mb-8">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <h1
        on:click={() => navigateToPath("/")}
        class="cursor-pointer text-4xl my-3 font-bold"
    >
        LaoTypr
    </h1>
    <div class="flex flex-1 justify-between">
        <div class="flex flex-1 gap-3 items-center">
            <button
                class="flex items-center justify-center"
                on:click={() => {
                    showHistory = true;
                }}
                on:mousedown|preventDefault
            >
                <Icon name="history" size="2.25rem" />
            </button>
            <button
                class="flex items-center justify-center"
                on:click={() => navigateToPath("/about")}
                on:mousedown|preventDefault
            >
                <Icon name="info" size="2.25rem" />
            </button>
        </div>
    </div>
</div>

<style>
    h1 {
        transition: color 300ms ease;
    }

    h1:hover {
        color: var(--active-color);
    }

    button {
        transition: color 300ms ease;
    }

    button:hover {
        color: var(--active-color);
    }
</style>
