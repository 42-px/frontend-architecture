import { combine, createStoreObject } from 'effector'
import { signInFx } from './effects'
import {
  $username, $password, $isPasswordValid, $isUsernameValid,
} from './state'


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
