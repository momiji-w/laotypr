import { writable, type Writable } from 'svelte/store';
import words from './lib/dataset/wordData.json';
import articles from './lib/dataset/articleData.json';

export enum GameMode {
    Time = "time",
    Word = "word",
    Quote = "quote"
}

export type article = {
    content: string;
    reference: string;
};

export const words_data: Writable<string[]> = writable(words);

export const article_index: Writable<number> = writable(0);
export const article_data: Writable<any[]> = writable(articles);

export const totalKeyStrokes: Writable<number> = writable(0);
export const correctKeyStrokes: Writable<number> = writable(0);

export const isRunning: Writable<boolean> = writable(false);
export const elapsedTime: Writable<number> = writable(0);

export const currentMode: Writable<GameMode> = writable(GameMode.Time);

export const currentTimeSelection: Writable<number> = writable(30);

export const wordModeCount: Writable<number> = writable(25);
export const currentWordProgress: Writable<number> = writable(0);

export const totalLetterCount: Writable<number> = writable(0);
export const currentLetterCount: Writable<number> = writable(0);

export type typingTracker = {
    time: number
    wpm: number
}

export const typingTrackerArr: Writable<typingTracker[]> = writable([]);
