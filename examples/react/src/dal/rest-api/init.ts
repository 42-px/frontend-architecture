import axiosLib, { AxiosRequestConfig } from 'axios'
import { readToken, writeToken } from '@/lib/token-storage'
import { $accessToken } from './state'
import { authenticate, tokenChanged, initAuthState, resetAuthState, authStateReady } from './events'
import { request } from './effects'

$accessToken
  .on([authenticate, tokenChanged], (_, token) => token)
  .reset(resetAuthState)

initAuthState.watch(() => {
  const token = readToken()
  if (token) {
    authenticate(token)
  }
  authStateReady()
})

$accessToken.updates.watch((token) => writeToken(token))

const axios = axiosLib.create({
  baseURL: process.env.REST_API_BASE_URL
})

axios.interceptors.response.use(undefined, (error) => {
  if (error.response && error.response.data.code === 401) {
    resetAuthState()
  }
  throw error
})

request.use((params) => {
  const headers = {
    Authorization: params.accessToken ? `Bearer ${params.accessToken}` : undefined
  }

  return axios.request({
    headers,
    url: params.url,
    params: params.query,
    data: params.body,
  })
})