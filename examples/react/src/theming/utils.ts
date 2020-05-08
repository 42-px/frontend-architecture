import { ThemedStyledProps, Theme } from './types'

export function themeVar(varName: keyof Theme) {
  return function s({ theme }: ThemedStyledProps) {
    return theme[varName]
  }
}
