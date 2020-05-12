import * as React from 'react'
import { ThemeProvider, NormalizeCss } from '@/ui'
import { Routes } from './routes'


export const App = () => (
  <div>
    <React.Suspense fallback="loading...">
      <NormalizeCss />
      <ThemeProvider>
        <Routes />
      </ThemeProvider>
    </React.Suspense>
  </div>
)
