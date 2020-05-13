/**
 * Prouducts endpoints
 * In a real app this module will have http-client calls:
 * axios.$get(), fetch(), etc.
 * In this demo we mock data layer
 */
import { axios } from '@/lib/http-client'
import { createCustomError } from '@/lib/errors'
import { mockAccessToken } from '../mocks/auth'

export const InvalidCredentials = createCustomError('InvalidCredentials')

export type SignInParams = {
  username: string;
  password: string;
}

export type SignInResult = {
  token: string;
}

const signIn = ({ username, password }: SignInParams) => {
  if (username === '42px' && password === '123') {
    return Promise.resolve<SignInResult>({
      token: mockAccessToken(),
    })
  }
  return Promise.reject(new InvalidCredentials())
}

export const authClient = {
  signIn,
}
