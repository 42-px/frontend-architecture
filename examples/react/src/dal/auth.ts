import { forward } from 'effector'
import { restApi, authenticate, request, authRequest } from './rest-api'
import { createCustomError } from '@/lib/errors'
import { mockAccessToken } from './mocks/auth'

export const InvalidCredentials = createCustomError('InvalidCredentials')

export type SignInParams = {
  username: string;
  password: string;
}

export type SignInResult = {
  token: string;
}

export const signIn = restApi.effect<SignInParams, SignInResult, Error>()
signIn.use(({ username, password }) => {
  /**
   * In a real app this module will have request calls:
   * await request({ ... }) or await authRequest({ ... })
   * In this demo we mock data layer
  */
  if (username === '42px' && password === '123') {
    return Promise.resolve<SignInResult>({
      token: mockAccessToken(),
    })
  }
  return Promise.reject(new InvalidCredentials())
})


export const authClient = {
  signIn,
}

forward({
  from: signIn.doneData.map(({ token }) => token),
  to: authenticate
})