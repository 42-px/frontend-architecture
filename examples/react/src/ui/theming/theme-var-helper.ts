import { Theme } from './themes'
import { ThemedStyledProps } from './themed-styled-props'

export function themeVar(varName: keyof Theme) {
  return function s({ theme }: ThemedStyledProps) {
    return theme[varName]
  }
}
