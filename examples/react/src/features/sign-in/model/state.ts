import { signIn } from './domain'

export const $username = signIn.store('')
export const $password = signIn.store('')
export const $isUsernameValid = signIn.store(true)
export const $isPasswordValid = signIn.store(true)
export const $signInError = signIn.store<Error | null>(null)
