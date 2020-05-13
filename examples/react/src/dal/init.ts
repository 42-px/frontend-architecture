import { configureHttpClient } from '@/lib/http-client'
import { getToken } from './access-token'

configureHttpClient({
  baseUrl: process.env.REST_API_BASE_URL,
  accessTokenProvider: getToken,
})
