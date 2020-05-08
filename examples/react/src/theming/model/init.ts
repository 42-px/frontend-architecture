import { theming } from './domain'
import { $theme } from './state'
import { themeChanged, resetTheme } from './events'

theming.onCreateStore((store) => {
  store.reset(resetTheme)
})

$theme.on(themeChanged, (_, theme) => theme)