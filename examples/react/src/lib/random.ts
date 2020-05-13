// source: https://stackoverflow.com/a/873856
export const quickUUID = () => {
  // http://www.ietf.org/rfc/rfc4122.txt
  const s = []
  const hexDigits = '0123456789abcdef'
  for (let i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
  }
  s[14] = '4' // bits 12-15 of the time_hi_and_version field to 0010
  // bits 6-7 of the clock_seq_hi_and_reserved to 01
  // eslint-disable-next-line no-bitwise
  s[19] = hexDigits.substr((Number(s[19]) & 0x3) | 0x8, 1)
  // eslint-disable-next-line no-multi-assign
  s[8] = s[13] = s[18] = s[23] = '-'

  const uuid = s.join('')
  return uuid
}

export const arrayElement = <T>(items: T[]) => items[Math.floor(Math.random() * items.length)]

export const random = {
  quickUUID,
  arrayElement,
}
