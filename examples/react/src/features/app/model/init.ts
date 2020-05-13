import { useTokenProvider, useAuthErrorHandler } from '@/dal'
import { readToken, writeToken } from '@/lib/token-storage'
import {
  authenticate, tokenChanged, logout, appMounted, appStateReady,
} from './events'
import { $token, $isAppStateReady } from './state'

$token
  .on([authenticate, tokenChanged], (_, token) => token)
  .reset(logout)

$isAppStateReady.on(appStateReady, () => true)

appMounted.watch(() => {
  const token = readToken()
  if (token) {
    authenticate(token)
  }
  appStateReady()
})

$token.updates.watch((token) => writeToken(token))

useAuthErrorHandler(() => logout())
useTokenProvider(() => $token.getState())
