import { forward, sample } from 'effector'
import axiosLib from 'axios'
import {
  $accessToken,
  $isAuthReady,
  authenticate,
  tokenChanged,
  initAuthState,
  resetAuthState,
  authStateReady,
  requestFx,
  readTokenFx,
  writeTokenFx,
} from './units'
import { ACCESS_TOKEN_STORAGE_KEY } from './const'

$accessToken
  .on([authenticate, tokenChanged, readTokenFx.doneData], (_, token) => token)
  .reset(resetAuthState)

$isAuthReady
  .on(sample($accessToken, authStateReady), () => true)

forward({
  from: initAuthState,
  to: readTokenFx,
})

forward({
  from: readTokenFx.done,
  to: authStateReady,
})

forward({
  from: $accessToken.updates,
  to: writeTokenFx,
})

const axios = axiosLib.create({
  baseURL: process.env.API_BASE_URL,
})

axios.interceptors.response.use(undefined, (error) => {
  if (error.response && error.response.data.code === 401) {
    resetAuthState()
  }
  throw error
})

requestFx.use((params) => {
  const defaultHeaders = params.headers || {}
  const headers = {
    ...defaultHeaders,
  }

  if (params.accessToken) {
    headers.Authorization = `Bearer ${params.accessToken}`
  }

  return axios.request({
    headers,
    method: params.method,
    url: params.url,
    params: params.query,
    data: params.body,
  })
})
readTokenFx.use(() => localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY))
writeTokenFx.use((token) => (typeof token === 'string'
  ? localStorage.setItem(ACCESS_TOKEN_STORAGE_KEY, token)
  : localStorage.removeItem(ACCESS_TOKEN_STORAGE_KEY)))
