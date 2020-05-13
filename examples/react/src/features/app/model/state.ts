import { app } from './domain'

export const $token = app.store<string | null>(null)
export const $isAppStateReady = app.store<boolean>(false)
export const $isAuth = $token.map(Boolean)
