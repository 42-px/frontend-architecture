import { sample } from 'effector'
import { root } from '@/root'
import { Theme, mainTheme } from './themes'

type ThemeItem = {
  name: string;
  variables: Theme;
}

const defaultTheme = (): ThemeItem => ({
  name: 'main',
  variables: mainTheme,
})

const theming = root.domain('theming')

export const changeTheme = theming.event<string>()
export const registerTheme = theming.event<ThemeItem>()
export const resetThemingState = theming.event<void>()
export const resetTheme = theming.event<void>()

export const $availableThemes = theming.store<ThemeItem[]>([defaultTheme()])
export const $currentTheme = theming.store<ThemeItem>(defaultTheme())

theming.onCreateStore((store) => store.reset(resetThemingState))

const changeThemeWithThemes = sample(
  $availableThemes,
  changeTheme,
  (themes, newThemeName) => ({ themes, newThemeName }),
)

$currentTheme.on(
  changeThemeWithThemes,
  (currentTheme, { themes, newThemeName }) => {
    const newTheme = themes.find(({ name }) => name === newThemeName)
    return newTheme || currentTheme
  },
).reset(resetTheme)

$availableThemes.on(registerTheme, (themes, newTheme) => {
  // prevent re-registering
  if (!themes.find(({ name }) => name === newTheme.name)) {
    return [...themes, newTheme]
  }
  return themes
})
