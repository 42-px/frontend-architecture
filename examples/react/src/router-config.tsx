import { RouterConfig } from '@/lib/declarative-routing'
import { Catalog } from './pages/catalog'
import { SignIn } from './pages/sign-in'
import { Todo } from './pages/todos/view/Todo'


export const routerConfig: RouterConfig = {
  guestFallbackPath: '/',
  privateFallbackPath: '/sign-in',
  routes: [
    {
      path: '/',
      component: Todo,
      type: 'private',
    },
    {
      path: '/sign-in',
      component: SignIn,
      type: 'guest',
    },
  ],
}
