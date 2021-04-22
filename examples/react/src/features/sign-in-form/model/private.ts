import { attach } from 'effector'
import { createForm } from 'effector-forms'
import { root } from '@/root'
import { authClient, SignInParams } from '@/dal'
import { required } from '@/lib/validation-rules'

export const signIn = root.domain('sign-in')

export const $signInError = signIn.store<Error | null>(null)
export const reset = signIn.event<void>()

export const signInForm = createForm({
  filter: $signInError.map((error) => error === null),
  fields: {
    username: {
      init: '',
      rules: [
        required(),
      ],
    },
    password: {
      init: '',
      rules: [
        required(),
      ],
    },
  },
})

export const signInFx = attach({
  effect: authClient.signInReqFx,
  mapParams: (params: SignInParams) => params,
})

export const $formDisabled = signInFx.pending
