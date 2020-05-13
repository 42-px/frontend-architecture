import { SignInParams, SignInResult } from '@/dal'
import { signIn } from './domain'


export const usernameChanged = signIn.event<string>()
export const passwordChanged = signIn.event<string>()
export const sumbit = signIn.event<void>()
export const reset = signIn.event<void>()
export const signInProcess = signIn.effect<SignInParams, SignInResult, Error>()
