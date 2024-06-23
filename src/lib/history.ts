export type history = {
    wpm: number;
    accuracy: number;
    time: number;
    total_key: number;
    correct_key: number;
    mode: string;
    sub_mode: string;
    timestamp: number;
}

export function getHistory(): history[] {
    let currentHistory = localStorage.getItem("history");

    if (!currentHistory) {
        return [];
    }

    const data: history[] = JSON.parse(currentHistory);

    return data;
}

export function setHistory(item: history) {
    let currentHistory = localStorage.getItem("history");

    if (!currentHistory) {
        localStorage.setItem("history", JSON.stringify([item]));
        return;
    }

    const data: history[] = JSON.parse(currentHistory);
    data.unshift(item);
    localStorage.setItem("history", JSON.stringify(data));

    return;
}
