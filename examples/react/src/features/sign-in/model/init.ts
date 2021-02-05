import { forward } from 'effector'
import {
  $signInError,
  signInForm,
  signInFx,
  signIn,
  reset,
} from './private'

signIn.onCreateStore((store) => store.reset(reset))

$signInError
  .on(signInFx.failData, (_, error) => error)
  .reset([signInForm.$values.updates])

forward({
  from: signInForm.formValidated,
  to: signInFx,
})
