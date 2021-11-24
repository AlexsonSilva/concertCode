import { RunningTimes } from "./running-times";

export interface Concert {
    name: string;
    place: string;
    genre: string;
    runningTimes: RunningTimes;
}