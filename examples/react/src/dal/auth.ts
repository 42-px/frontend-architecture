import { forward } from 'effector'
import { authenticate, requestFx, Method } from './rest-api'
import { createCustomError } from '@/lib/errors'
import { attachWrapper } from '@/lib/effector-extra'

export const InvalidCredentials = createCustomError('InvalidCredentials')

export type SignInParams = {
  username: string;
  password: string;
}

export type SignInResult = {
  token: string;
}

export const signInReqFx = attachWrapper({
  effect: requestFx,
  mapParams: (params: SignInParams) => ({
    url: '/login',
    method: Method.post,
    body: params,
  }),
  mapResult: ({ result }): SignInResult => result.data, 
})


export const authClient = {
  signInReqFx,
}

forward({
  from: signInReqFx.doneData.map(({ token }) => token),
  to: authenticate
})