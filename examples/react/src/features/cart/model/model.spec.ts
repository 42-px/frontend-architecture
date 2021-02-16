/* eslint-disable no-undef */
/* eslint-disable no-await-in-loop */
import faker from 'faker'
import { fork, allSettled, Scope } from 'effector'
import { mockEffects } from '@42px/effector-extra'
import { mockProduct, mockProductCollection } from '@/dal/mocks/products'
import { root } from '@/root'
import {
  $cartItems,
  $totalCount,
  $totalPrice,
  increment,
  decrement,
  writeCartFx,
  readCartFx,
  CartItem,
} from './private'
import { addToCart } from './public'
import './init'

const mockCartStorage = () => {
  let cartStorage: CartItem[] = []

  return mockEffects()
    .set(writeCartFx, (cart) => {
      cartStorage = cart
    })
    .set(readCartFx, () => cartStorage)
}

const randomInt = (min: number, max: number) => Math.floor(faker.random.number({ max, min }))

let scope: Scope

test('add to cart', async () => {
  scope = fork(root, {
    handlers: mockCartStorage(),
  })

  const products = mockProductCollection(randomInt(1, 100))
  const expectedTotalPrice = products.reduce((total, product) => total + product.price, 0)

  await products.map((product) => allSettled(addToCart, { scope, params: product }))

  const totalCount = scope.getState($totalCount)
  const cartItems = scope.getState($cartItems)
  const totalPrice = scope.getState($totalPrice)

  cartItems.forEach((cartItem) => {
    expect(cartItem.product).toEqual(cartItem.product)
    expect(cartItem.count).toBe(1)
    expect(cartItem.totalPrice).toEqual(cartItem.product.price)
  })
  expect(totalCount).toEqual(products.length)
  expect(totalPrice).toEqual(expectedTotalPrice)
})

test('increment', async () => {
  scope = fork(root)

  const price = faker.random.number(10000)
  const products = mockProductCollection(randomInt(1, 50), { price })
  const productCount = randomInt(1, 50)


  for (const product of products) {
    await allSettled(addToCart, { scope, params: product })
    for (let i = 1; i < productCount; i++) {
      await allSettled(increment, { scope, params: product.id })
    }
  }

  const totalCount = scope.getState($totalCount)
  const cartItems = scope.getState($cartItems)
  const totalPrice = scope.getState($totalPrice)

  expect(cartItems.length).toEqual(products.length)
  expect(totalCount).toEqual(products.length * productCount)
  expect(totalPrice).toEqual(totalCount * price)
})

test('decrement', async () => {
  scope = fork(root)

  const product = mockProduct()
  const incrementCount = randomInt(60, 100)
  const decrementCount = randomInt(1, 50)

  await allSettled(addToCart, { scope, params: product })

  for (let i = 1; i <= incrementCount; i++) {
    await allSettled(increment, { scope, params: product.id })
  }

  for (let i = 1; i <= decrementCount; i++) {
    await allSettled(decrement, { scope, params: product.id })
  }

  const totalCount = scope.getState($totalCount)

  expect(totalCount).toEqual(incrementCount + 1 - decrementCount)
})
