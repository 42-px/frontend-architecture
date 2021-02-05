import * as React from 'react'
import { init, reset } from '../../model/private'
import { ProductsList } from '../containers'

export const Catalog = () => {
  React.useEffect(() => {
    init()
    return () => reset()
  }, [])

  return (
    <ProductsList />
  )
}
