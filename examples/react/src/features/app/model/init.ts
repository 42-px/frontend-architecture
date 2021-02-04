import { forward } from 'effector'
import { initAuthState, resetAuthState, authStateReady } from '@/dal'
import { logout, initApp, $isAppStateReady } from './public'

$isAppStateReady.on(authStateReady, () => true)

forward({
  from: initApp,
  to: initAuthState,
})

forward({
  from: logout,
  to: resetAuthState,
})

