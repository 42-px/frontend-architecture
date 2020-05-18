import { sample, guard } from 'effector'
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
} from './events'
import { signInFx } from './effects'
import { $isFormValid } from './computed'

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
  .on(signInFx.failData, (_, error) => error)
  .reset([usernameChanged, passwordChanged])

guard({
  source: sumbit,
  filter: $isFormValid,
  target: signInFx,
})
