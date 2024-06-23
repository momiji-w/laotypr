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

export function getDisplayTimestampFromUnix(unixTimestamp: number, get_time = true) {
    const timestamp = new Date(Math.floor(unixTimestamp) * 1000)
    const day = timestamp.getUTCDate().toString().padStart(2, "0");
    const month = (timestamp.getUTCMonth() + 1).toString().padStart(2, "0");
    const year = timestamp.getUTCFullYear();

    const hours = timestamp.getHours().toString().padStart(2, "0");
    const minutes = timestamp.getUTCMinutes().toString().padStart(2, "0");
    const seconds = timestamp.getUTCSeconds().toString().padStart(2, "0");

    const date = `${day}/${month}/${year}`
    const time = `${hours}:${minutes}:${seconds}`;

    if (get_time) {
        return date + " " + time;
    }

    return date;
}
