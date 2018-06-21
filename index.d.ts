declare module 'throttle-debounce' {
  interface ThrottleSettings {
    debounceMode?: boolean;
    getTimeout?: () => number;
    scheduler?: Function;
  }

  interface ThrottleFunction {
    (delay: number, callback: Function, debounceMode?: boolean | ThrottleSettings): Function;
    (delay: number, noTrailing: boolean, callback: Function, debounceMode?: boolean | ThrottleSettings): Function;
  }

  type DebounceFunction = (
    delay: number,
    atBegin: boolean,
    callback?: Function
  ) => Function;

  const throttle: ThrottleFunction;
  const debounce: DebounceFunction;
}
