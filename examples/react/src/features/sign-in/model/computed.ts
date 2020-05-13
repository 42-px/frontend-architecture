import { combine, createStoreObject } from 'effector'
import { signInProcess } from './events'
import {
  $username, $password, $isPasswordValid, $isUsernameValid,
} from './state'


export const $form = createStoreObject({
  username: $username,
  password: $password,
})

export const $formDisabled = signInProcess.pending

export const $isFormValid = combine(
  $isUsernameValid,
  $isPasswordValid,
  (isUsernameValid, isPasswordValid) => isUsernameValid && isPasswordValid,
)

export const $submitEnabled = combine(
  $isFormValid,
  signInProcess.pending,
  (isFormValid, isPending) => isFormValid && !isPending,
)
