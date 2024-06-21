import Tooltip from './index.svelte';
import { type Action } from "svelte/action";

export const tooltip: Action<HTMLElement, string> = (el, message) => {

    let tooltipComponent: Tooltip;

    const addTooltip = () => {
        tooltipComponent = new Tooltip({
            target: document.body,
            props: {
                message: message,
                x: 0,
                y: 0
            }
        });

        const tooltipDiv = document.querySelectorAll('.tooltip');
        let parentCoords = el.getBoundingClientRect();

        tooltipDiv.forEach((elem) => {
            let item = elem as HTMLDivElement

            let bottom = parentCoords.bottom + window.scrollY + 10;
            let left = parentCoords.left + window.scrollX;
            let right = parentCoords.right + window.scrollX - item.offsetWidth;
            let center = parentCoords.left + window.scrollX + (el.offsetWidth - item.offsetWidth) / 2;

            tooltipComponent.$set({
                x: center,
                y: bottom
            });

            // Position Value Offset
            let tooltipOffsetTop = parentCoords.top - item.offsetHeight;
            let tooltipOffsetRight = window.innerWidth - item.offsetWidth - parentCoords.right;
            let tooltipOffsetLeft = parentCoords.left - item.offsetWidth;

            // Conditionals to align based on screen position/size
            if (tooltipOffsetTop <= 0) {
                item.classList.add('bottom');
                tooltipComponent.$set({
                    y: bottom
                })
            }

            if (tooltipOffsetRight <= 0) {
                item.classList.add('right');
                tooltipComponent.$set({
                    x: right
                })
            }

            if (tooltipOffsetLeft <= 0) {
                item.classList.add('left');
                tooltipComponent.$set({
                    x: left
                })
            }
        });

    }

    const removeTooltip = () => {
        tooltipComponent.$destroy();
    }

    el.addEventListener('mouseover', addTooltip);
    el.addEventListener('mouseout', removeTooltip);

    el.addEventListener('focusin', addTooltip);
    el.addEventListener('focusout', removeTooltip);

    return {
        destroy() {
            el.removeEventListener('mouseover', addTooltip);
            el.removeEventListener('mouseout', removeTooltip);

            el.removeEventListener('focusin', addTooltip);
            el.removeEventListener('focusout', removeTooltip);
        }
    }
}
