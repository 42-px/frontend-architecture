import { random } from '@/lib/random'
import { Product } from '../entities'

const productsSamples = [
  {
    name: '3.5 Смартфон FinePower F1 4 ГБ белый',
    price: 1999,
    about: '4x1.2 ГГц, 512 МБ, 2 SIM, TN, 480x320, камера 2 Мп, 3G, GPS, FM, 2500 мА*ч',
    image: {
      url: '/images/1.jpg',
    },
    currency: {
      name: 'dollar',
      symbol: '$',
    },
  },
  {
    name: '6.1" Смартфон Apple iPhone 11 128 ГБ черный',
    price: 800,
    about: '6x2.65 ГГц, 4 ГБ, 1 SIM, IPS, 1792x828, камера 12+12 Мп, 3G, 4G, NFC, GPS, 3110 мА*ч',
    image: {
      url: '/images/2.jpg',
    },
    currency: {
      name: 'dollar',
      symbol: '$',
    },
  },
]

export const mockProduct = (): Product => ({
  id: random.quickUUID(),
  ...random.arrayElement(productsSamples),
})

// eslint-disable-next-line arrow-body-style
export const mockProductCollection = (count: number): Product[] => {
  return new Array(count).fill(null).map(() => mockProduct())
}
