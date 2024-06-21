let defaultConfig = {
    mode: "time",
    time: 30,
    word: 25
};

export function loadConfig() {
    let currentConfig: any = localStorage.getItem("config");

    if (!currentConfig) {
        return defaultConfig;
    }

    currentConfig = JSON.parse(currentConfig);

    return currentConfig;
}

export function setConfig(key: string, value: any) {
    let currentConfig: any = localStorage.getItem("config");

    if (!currentConfig) {
        localStorage.setItem("config", JSON.stringify(defaultConfig));
        return;
    }

    currentConfig = JSON.parse(currentConfig);
    currentConfig[key] = value;
    localStorage.setItem("config", JSON.stringify(currentConfig));
}

export function convertRemToPixels(rem: number): number {
    // got from some random stackoverflow
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

export function roundTo2(num: number): number {
    //got from monkeytype
    return Math.round((num + Number.EPSILON) * 100) / 100;
}

export function calcWPM(correctKeyStrokes: number, time: number): number {
    const rawWPM = correctKeyStrokes / 5 / (time / 60)
    return roundTo2(rawWPM)
}

export function calcAcc(correctKeyStrokes: number, totalKeyStrokes: number): number {
    return roundTo2(correctKeyStrokes / totalKeyStrokes) * 100
}
