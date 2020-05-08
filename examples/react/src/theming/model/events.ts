import { theming } from './domain'
import { Theme } from '../types'

export const themeChanged = theming.event<Theme>()
export const resetTheme = theming.event<void>()
