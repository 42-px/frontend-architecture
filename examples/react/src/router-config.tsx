import { RouterConfig } from '@/lib/declarative-routing'
import { Catalog } from './features/catalog'
import { SignIn } from './features/sign-in'


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
