import { attachWrapper } from '@42px/effector-extra'
import { Product } from './entities'
import { Method, authRequestFx } from './request'

export type GetProductsParams = {
  offset: number;
  limit: number;
}

export const getProductsReqFx = attachWrapper({
  effect: authRequestFx,
  mapParams: ({ limit }: GetProductsParams) => ({
    method: Method.get,
    url: '/products',
    query: {
      limit: String(limit),
    },
  }),
  mapResult: ({ result }): Product[] => result.data,
})

export const productsClient = {
  getProductsReqFx,
}
