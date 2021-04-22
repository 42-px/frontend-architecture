import * as React from 'react'
import { useStore } from 'effector-react'
import { ThemeProvider, NormalizeCss } from '@/ui'
import { Routes } from '@/lib/declarative-routing'
import {
  $isAppStateReady, $isAuth, initApp
} from './features/app/model'
import { MainLayout } from './features/app/view'
import { Header } from './features/header/view'
import { routerConfig } from './router-config'


export const App = () => {
  const isAppStateReady = useStore($isAppStateReady)
  const isAuth = useStore($isAuth)


  React.useEffect(() => {
    initApp()
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
