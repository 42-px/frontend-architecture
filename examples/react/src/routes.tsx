import * as React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Catalog } from './features/catalog'

const routes = [
  {
    path: '/',
    component: Catalog,
  },
]

export const Routes = () => (
  <Router>
    <Switch>
      {routes.map((route) => {
        const Component = route.component
        return (
          <Route key={route.path} path={route.path} exact>
            <Component />
          </Route>
        )
      })}
    </Switch>
  </Router>
)
