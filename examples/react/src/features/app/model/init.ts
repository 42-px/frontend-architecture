import { forward } from 'effector'
import { initAuthState, resetAuthState, authStateReady } from '@/dal'
import {
  logout, appMounted, appStateReady,
} from './events'
import { $isAppStateReady } from './state'


$isAppStateReady.on(appStateReady, () => true)

forward({
  from: appMounted,
  to: initAuthState,
})

forward({
  from: authStateReady,
  to: appStateReady,
})

forward({
  from: logout,
  to: resetAuthState,
})

