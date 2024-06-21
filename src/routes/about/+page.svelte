<script lang="ts">
    import { fade } from "svelte/transition";
</script>

<div class="container mb-4" in:fade={{ duration: 75 }}>
    <h1 class="text-3xl mb-3">About:</h1>
    <p>
        Laotypr is an online minimal typing game inspired by a well-liked online typing game like <a
            href="https://monkeytype.com"
            class="font-bold underline">monkeytype</a
        >. It is designed solely for the Lao language in order to promote the computer typing skills for Lao and includes multiple features for users to interact with, such as various modes and a typing tracking system for registered users, allowing them to see their typing progress. A leaderboard introduces competition between users, creating a vibrant environment for sharpening their Lao typing skills. Lastly, users can collect achievements from the game, proving their specific typing skills, such as fast and accurate typing.
    </p>
</div>
<div class="container mb-4">
    <h1 class="text-3xl mb-3">Important factors in tracking typing progress:</h1>

    <ul class="list-disc list-inside flex flex-col gap-5 pt-5">
        <li>
            Keystroke - a keyboard character that you type.
        </li>
        <li>
            Estimated time - the total amount of time that a typing test took to finish 
        </li>
        <li>
            WPM (Word per minitue) - A total number of correctly typed words. How to calculate:
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
            Accuracy - a percentage of your correct keystrokes. How to calculate:
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

<div class="container mb-4">
    <h1 class="text-3xl mb-3">Contributors:</h1>
    <ul class="list-disc list-inside">
        <li class="text-xl">
            <a
                href="https://github.com/momiji-w"
                target="_blank"
                class="underline"
                >momiji</a
            >
        </li>
    </ul>
</div>



<style>
    math {
        font-family: "Times New Roman", serif;
        font-size: 1.25rem;
    }
</style>
