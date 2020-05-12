import { createFetchClient } from './rest-api'

export * from './rest-api'
export * from './entities'
/**
 * Export factory to create data client
 * In a real app, this function will have an argument
 * with some auth data: effector.Store<JwtToken>, effector.Store<Session>
 */
export const createDataClient = () => ({
  fetch: createFetchClient(),
})
