import { app } from './domain'

export const $isAppStateReady = app.store<boolean>(false)
