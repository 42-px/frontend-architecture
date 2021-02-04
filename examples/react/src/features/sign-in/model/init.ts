import { sample, guard } from 'effector'
import {
  $username,
  $password,
  $isUsernameValid,
  $isPasswordValid,
  $signInError,
  $isFormValid,
  usernameChanged,
  passwordChanged,
  submit,
  reset,
  signInFx,
  signIn,
} from './private'

signIn.onCreateStore((store) => store.reset(reset))

$username.on(usernameChanged, (_, username) => username)
$password.on(passwordChanged, (_, password) => password)

$isUsernameValid
  .on(sample($username, submit), (_, username) => Boolean(username))
  .reset(usernameChanged)

$isPasswordValid
  .on(sample($password, submit), (_, password) => Boolean(password))
  .reset(passwordChanged)

$signInError
  .on(signInFx.failData, (_, error) => error)
  .reset([usernameChanged, passwordChanged])

guard({
  source: submit,
  filter: $isFormValid,
  target: signInFx,
})
