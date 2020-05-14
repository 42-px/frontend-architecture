import * as React from 'react'
import { useStore } from 'effector-react'
import { ThemeProvider, NormalizeCss } from '@/ui'
import { Routes } from '@/lib/declarative-routing'
import {
  $isAppStateReady, $isAuth, appMounted, MainLayout,
} from './features/app'
import { Header } from './features/header'
import { routerConfig } from './router-config'


export const App = () => {
  const isAppStateReady = useStore($isAppStateReady)
  const isAuth = useStore($isAuth)

  React.useEffect(() => {
    appMounted()
  }, [])

  if (!isAppStateReady) {
    // you can return app global loader
    return null
  }

  return (
    <React.Suspense fallback="loading...">
      <NormalizeCss />
      <ThemeProvider>
        <MainLayout
          header={<Header />}
          main={(
            <Routes isAuth={isAuth} config={routerConfig} />
          )}
        />
      </ThemeProvider>
    </React.Suspense>
  )
}
