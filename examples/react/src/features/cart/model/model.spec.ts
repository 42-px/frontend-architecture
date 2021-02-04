/* eslint-disable no-undef */
import { expect } from 'chai'
import faker from 'faker'
import { mockProduct, mockProductCollection } from '@/dal/mocks/products'
import {
  $cartItems,
  $totalCount,
  $totalPrice,
  increment,
  decrement,
  resetState,
} from './private'
import { addToCart } from './public'
import '@/features/app/model/init'
import './init'


describe('cart model', function () {
  const randomInt = (min: number, max: number) => Math.floor(faker.random.number({ max, min }))

  beforeEach(function () {
    clearJSDOM()
    setupJSDOM('')
    resetState()
  })

  it('add to cart', function () {
    const products = mockProductCollection(randomInt(1, 100))
    const totalPrice = products.reduce((total, product) => total + product.price, 0)
    for (const product of products) {
      addToCart(product)
    }
    $cartItems.getState().forEach((cartItem) => {
      expect(cartItem.product).to.be.deep.equal(cartItem.product)
      expect(cartItem.count).to.be.equal(1)
      expect(cartItem.totalPrice).to.be.equal(cartItem.product.price)
    })
    expect($totalCount.getState()).to.be.equal(products.length)
    expect($totalPrice.getState()).to.be.equal(totalPrice)
  })

  it('increment', function () {
    const price = faker.random.number(10000)
    const products = mockProductCollection(randomInt(1, 50), { price })
    const productCount = randomInt(1, 50)


    for (const product of products) {
      addToCart(product)
      for (let i = 1; i < productCount; i++) {
        increment(product.id)
      }
    }

    expect($cartItems.getState().length).to.be.equal(products.length)
    expect($totalCount.getState()).to.be.equal(products.length * productCount)
    expect($totalPrice.getState()).to.be.equal($totalCount.getState() * price)
  })

  it('decrement', function () {
    const product = mockProduct()
    const incrementCount = randomInt(60, 100)
    const decrementCount = randomInt(1, 50)

    addToCart(product)
    for (let i = 1; i <= incrementCount; i++) {
      increment(product.id)
    }

    for (let i = 1; i <= decrementCount; i++) {
      decrement(product.id)
    }

    expect($totalCount.getState()).to.be.equal(incrementCount + 1 - decrementCount)
  })
})
