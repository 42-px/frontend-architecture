import { app } from './domain'

export const appMounted = app.event<void>()
export const appStateReady = app.event<void>()
export const authenticate = app.event<string>()
export const tokenChanged = app.event<string>()
export const logout = app.event<void>()
