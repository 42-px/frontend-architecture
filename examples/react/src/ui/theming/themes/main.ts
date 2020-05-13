import { palette } from './palette'

export const mainTheme = {
  baseFont: 'Roboto',
  textColor: palette.dark,
  paleTextColor: palette.pale,
  headingTextColor: palette.dark,
  primaryButtonTextColor: palette.white,
  primaryButtonColor: palette.brand,
  inputBorderColor: palette.pale,
  inputErrorColor: palette.danger,
  errorAlertBackgroundColor: palette.dangerLigth,
  errorAlertBorderColor: palette.danger,
  errorAlertTextColor: palette.danger,
  breakpoints: {
    mobile: 0,
    tablet: 576,
    desktop: 992,
  },
}
