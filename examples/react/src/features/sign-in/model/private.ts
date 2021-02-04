import { createDomain, attach, createStoreObject, combine } from 'effector'
import { authClient } from '@/dal'

export const signIn = createDomain('sign-in')

export const $username = signIn.store('')
export const $password = signIn.store('')
export const $isUsernameValid = signIn.store(true)
export const $isPasswordValid = signIn.store(true)
export const $signInError = signIn.store<Error | null>(null)

export const usernameChanged = signIn.event<string>()
export const passwordChanged = signIn.event<string>()
export const submit = signIn.event<void>()
export const reset = signIn.event<void>()

export const signInFx = attach({
  effect: authClient.signInReqFx,
  source: createStoreObject({
    username: $username,
    password: $password,
  }),
  mapParams: (_: void, credentials) => credentials
})

export const $form = createStoreObject({
  username: $username,
  password: $password,
})

export const $formDisabled = signInFx.pending

export const $isFormValid = combine(
  $isUsernameValid,
  $isPasswordValid,
  (isUsernameValid, isPasswordValid) => isUsernameValid && isPasswordValid,
)

export const $submitEnabled = combine(
  $isFormValid,
  signInFx.pending,
  (isFormValid, isPending) => isFormValid && !isPending,
)

