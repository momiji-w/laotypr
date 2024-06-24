<script lang="ts">
    import { fade } from "svelte/transition";
</script>

<div class="container" in:fade={{ duration: 75 }}>
    <div class="mb-4">
        <h1 class="text-3xl mb-3">About:</h1>
        <p>
            Laotypr is an online minimal typing game inspired by a well-liked
            online typing game like <a
                href="https://monkeytype.com"
                class="font-bold underline">monkeytype</a
            >. it was originally my thesis project but i decided to make it
            public without all the BS that came with it.
            <a
                href="https://github.com/momiji-w/laotypr"
                class="font-bold underline">Github repository</a
            >
        </p>
    </div>
    <div class="mb-4">
        <h1 class="text-3xl mb-3">Stats:</h1>

        <ul class="list-disc list-inside flex flex-col gap-5 pt-5">
            <li>Keystrokes - a count of each character you typed.</li>
            <li>
                Estimated time - the total amount of time from start to finish
                of a test.
            </li>
            <li>
                WPM (Word per minitue) - A total number of correctly typed
                words. How to calculate:
                <math xmlns="http://www.w3.org/1998/Math/MathML">
                    <mfrac>
                        <msup>
                            <mi> correct keystrokes ÷ 5 </mi>
                        </msup>
                        <mn> estimated time(sec) ÷ 60 </mn>
                    </mfrac>
                </math>
            </li>
            <li>
                Accuracy - a percentage of your correct keystrokes. How to
                calculate:
                <math xmlns="http://www.w3.org/1998/Math/MathML">
                    <mrow>
                        <mfrac>
                            <msup>
                                <mi> corrected keystrokes </mi>
                            </msup>
                            <mn> total keystrokes </mn>
                        </mfrac>
                        <mo> &#215; 100</mo>
                    </mrow>
                </math>
            </li>
        </ul>
    </div>
</div>

<style>
    math {
        font-family: "Times New Roman", serif;
        font-size: 1.25rem;
    }
</style>
