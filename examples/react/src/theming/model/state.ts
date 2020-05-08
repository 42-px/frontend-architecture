import { theming } from './domain'
import { mainTheme } from '../themes/main'
import { Theme } from '../types'

export const $theme = theming.store<Theme>(mainTheme)
