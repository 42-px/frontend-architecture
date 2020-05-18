import { attach, createStoreObject } from 'effector'
import { signIn } from '@/dal'
import { $username, $password } from './state'

export const signInFx = attach({
  effect: signIn,
  source: createStoreObject({
    username: $username,
    password: $password,
  }),
  mapParams: (_: void, credentials) => credentials
})