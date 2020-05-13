import { sample, createStoreObject, forward } from 'effector'
import { authClient } from '@/dal'
import { authenticate } from '@/features/app'
import { signIn } from './domain'
import {
  $username,
  $password,
  $isUsernameValid,
  $isPasswordValid,
  $signInError,
} from './state'
import {
  usernameChanged,
  passwordChanged,
  sumbit,
  reset,
  signInProcess,
} from './events'
import { $isFormValid, $form } from './computed'

signIn.onCreateStore((store) => store.reset(reset))

$username.on(usernameChanged, (_, username) => username)
$password.on(passwordChanged, (_, password) => password)

$isUsernameValid
  .on(sample($username, sumbit), (_, username) => Boolean(username))
  .reset(usernameChanged)

$isPasswordValid
  .on(sample($password, sumbit), (_, password) => Boolean(password))
  .reset(passwordChanged)

$signInError
  .on(signInProcess.failData, (_, error) => error)
  .reset([usernameChanged, passwordChanged])

const submitWithForm = sample(
  createStoreObject({
    form: $form,
    isFormValid: $isFormValid,
  }),
  sumbit,
)

submitWithForm.watch(({ form, isFormValid }) => {
  if (isFormValid) {
    signInProcess(form)
  }
})

forward({
  from: signInProcess.doneData.map(({ token }) => token),
  to: authenticate,
})

signInProcess.use(authClient.signIn)
