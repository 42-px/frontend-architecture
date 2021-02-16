import { root } from '@/root'
import { $accessToken } from '@/dal'

export const appPublicApi = root.domain('app-public-api')

export const $isAuth = $accessToken.map(Boolean)
export const $isAppStateReady = appPublicApi.store<boolean>(false)

export const initApp = appPublicApi.event<void>()
export const logout = appPublicApi.event<void>()
