import { RouterConfig } from '@/lib/declarative-routing'
import { Catalog } from './pages/catalog'
import { SignIn } from './pages/sign-in'


export const routerConfig: RouterConfig = {
  guestFallbackPath: '/',
  privateFallbackPath: '/sign-in',
  routes: [
    {
      path: '/',
      component: Catalog,
      type: 'private',
    },
    {
      path: '/sign-in',
      component: SignIn,
      type: 'guest',
    },
  ],
}
