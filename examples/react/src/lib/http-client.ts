import axiosLib from 'axios'

type AccessTokenProvider = () => string | null
type AuthErrorHandler = () => void

type Config = {
  baseUrl?: string;
  accessTokenProvider?: AccessTokenProvider;
}

let authErrorHandler: AuthErrorHandler = () => {}

export const axios = axiosLib.create()

export const useAuthErrorHandler = (handler: AuthErrorHandler) => {
  authErrorHandler = handler
}

// eslint-disable-next-line max-len
export const configureHttpClient = ({ baseUrl, accessTokenProvider }: Config) => {
  axios.defaults.baseURL = baseUrl || '/'

  if (accessTokenProvider) {
    axios.interceptors.request.use((config) => {
      const token = accessTokenProvider()
      if (token !== null) {
        // eslint-disable-next-line no-param-reassign
        config.headers.common.Authorization = `${token}`
      }
      return config
    }, (error) => { throw error })
  }

  axios.interceptors.response.use(undefined, (error) => {
    if (error.response && error.response.data.code === 401) {
      authErrorHandler()
    }
    throw error
  })
}
