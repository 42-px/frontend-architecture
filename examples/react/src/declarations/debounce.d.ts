declare module 'just-debounce-it' {
  type DebounceFunc = <T extends Function>(cb: T, timeout: number, callFunc?: boolean) => T
  const debounce: DebounceFunc
  export default debounce
}
