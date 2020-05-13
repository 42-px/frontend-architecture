/**
 * This module provides an access token to the DAL.
 * Token is stored in a third storage (localstorage, application state, etc).
 * The app sets tokenProvider by calling useTokenProvider.
 * DAL can always get the current token by calling the getToken method
 */
export type AccessToken = string | null
export type TokenProvider = () => AccessToken

const emptyTokenProvider: TokenProvider = () => null

let tokenProvider: TokenProvider = emptyTokenProvider

export const getToken = () => tokenProvider()
export const useTokenProvider = (newProvider: TokenProvider) => {
  tokenProvider = newProvider
}
