import { restApi } from './domain'

export const initAuthState = restApi.event<void>()
export const resetAuthState = restApi.event<void>()
export const authStateReady = restApi.event<void>()
export const authenticate = restApi.event<string>()
export const tokenChanged = restApi.event<string>()
