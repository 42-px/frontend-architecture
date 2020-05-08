import { mainTheme } from './themes/main'

export type Theme = typeof mainTheme;

export interface ThemedStyledProps {
  theme: Theme;
}
