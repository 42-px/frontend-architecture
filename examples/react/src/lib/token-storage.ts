const ACCESS_TOKEN_LC_KEY = 'access-token'

export const readToken = () => window.localStorage.getItem(ACCESS_TOKEN_LC_KEY)
export const writeToken = (token: string | null) => {
  if (token) {
    window.localStorage.setItem(ACCESS_TOKEN_LC_KEY, token)
  } else {
    window.localStorage.removeItem(ACCESS_TOKEN_LC_KEY)
  }
}
