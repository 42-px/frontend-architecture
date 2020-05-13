import * as React from 'react'
import {
  BrowserRouter as Router, Switch, Route, useHistory,
} from 'react-router-dom'


export type RouteConfig = {
  path: string;
  component: React.FC | typeof React.Component;
  type: 'private' | 'public' | 'guest';
}

export type RouterConfig = {
  routes: RouteConfig[];
  guestFallbackPath?: string;
  privateFallbackPath?: string;
}

type RouteGuardProps = {
  isAuth: boolean;
  route: RouteConfig;
  guestFallbackPath?: string;
  privateFallbackPath?: string;
}

const RouteGuard = ({
  route, isAuth, guestFallbackPath, privateFallbackPath,
}: RouteGuardProps) => {
  const history = useHistory()

  React.useEffect(() => {
    if (isAuth && route.type === 'guest' && guestFallbackPath) {
      history.replace(guestFallbackPath)
    }
    if (!isAuth && route.type === 'private' && privateFallbackPath) {
      history.replace(privateFallbackPath)
    }
  }, [isAuth])

  if (isAuth && route.type === 'guest') {
    return null
  }

  if (!isAuth && route.type === 'private') {
    return null
  }

  const Component = route.component
  return <Component />
}


const renderRoutes = (config: RouterConfig, isAuth: boolean) => config.routes.map((route) => (
  <Route key={route.path} path={route.path} exact>
    <RouteGuard
      route={route}
      isAuth={isAuth}
      guestFallbackPath={config.guestFallbackPath}
      privateFallbackPath={config.privateFallbackPath}
    />
  </Route>
))

export type RoutesProps = {
  config: RouterConfig;
  isAuth: boolean;
}

export const Routes = ({ config, isAuth }: RoutesProps) => (
  <Router>
    <Switch>
      {renderRoutes(config, isAuth)}
    </Switch>
  </Router>
)
