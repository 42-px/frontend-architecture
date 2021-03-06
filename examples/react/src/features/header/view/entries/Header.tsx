import * as React from 'react'
import { useStore } from 'effector-react'
import { $isAuth, logout } from '@/features/app/model'
import { SelectLang } from '@/features/app/view'
import { Cart } from '@/features/cart/view'
import { Icon } from '@/ui'
import { HeaderLayout, HeaderItem } from '../parts'



export const Header = () => {
  const isAuth = useStore($isAuth)

  return (
    <HeaderLayout
      right={(
        <>
          {isAuth && (
            <>
              <HeaderItem>
                <Cart />
              </HeaderItem>
            </>
          )}
          <HeaderItem>
            <SelectLang />
          </HeaderItem>
          {isAuth && (
            <>
              <HeaderItem onClick={() => logout()}>
                <Icon icon="sign-out" width={20} />
              </HeaderItem>
            </>
          )}
        </>
      )}
    />
  )
}
