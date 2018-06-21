declare module 'throttle-debounce-sway-fork' {
  interface ThrottleSettings {
    debounceMode?: boolean;
    getTimestamp?: () => number;
    scheduler?: Function;
  }

  interface Throttle {
    (delay: number, callback: Function, debounceMode?: boolean | ThrottleSettings): ThrottleFunction;
    (delay: number, noTrailing: boolean, callback: Function, debounceMode?: boolean | ThrottleSettings): ThrottleFunction;
  }

  type ThrottleFunction = () => void;

  type Debounce = (
    delay: number,
    atBegin: boolean,
    callback?: Function
  ) => Function;

  const throttle: Throttle;
  const debounce: Debounce;
}
