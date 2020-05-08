import * as React from 'react'
import { ThemeProvider } from '@/theming'
import { Routes } from './routes'


export const App = () => (
  <div>
    <React.Suspense fallback="loading...">
      <ThemeProvider>
        <Routes />
      </ThemeProvider>
    </React.Suspense>
  </div>
)
