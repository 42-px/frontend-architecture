import { createDomain, attach } from 'effector'
import { AxiosError, AxiosResponse } from 'axios'

export enum Method {
  get = 'GET',
  post = 'POST',
  put = 'PUT',
  delete = 'DELETE',
}

type Request = {
  method: Method;
  url: string;
  headers?: any;
  accessToken?: string;
  query?: {
    [key: string]: string;
  };
  fake?: boolean;
  body?: object | FormData;
}

export type AccessToken = string | null

export const restApi = createDomain('rest-api')

export const initAuthState = restApi.event<void>()
export const resetAuthState = restApi.event<void>()
export const authStateReady = restApi.event<void>()
export const authenticate = restApi.event<string>()
export const tokenChanged = restApi.event<string>()

export const $accessToken = restApi.store<AccessToken>(null)
export const $isAuthReady = restApi.store<boolean>(false)
export const $isAuth = $accessToken.map((token) => token !== null)
export const $isGuest = $accessToken.map((token) => token === null)

export const writeTokenFx = restApi.effect<AccessToken, void, Error>()
export const readTokenFx = restApi.effect<void, AccessToken, Error>()

export const requestFx = restApi.effect<Request, AxiosResponse<any>, AxiosError>()
export const authRequestFx = attach({
  effect: requestFx,
  source: $accessToken,
  mapParams: (data: Request, accessToken) => ({
    ...data,
    accessToken: accessToken || undefined,
  }),
})
