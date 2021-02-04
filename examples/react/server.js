/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config()

const app = express()
const port = Number(process.env.MOCK_SERVER_PORT) || 3000

const mockAccessToken = () => '1234'

// source: https://stackoverflow.com/a/873856
const quickUUID = () => {
  // http://www.ietf.org/rfc/rfc4122.txt
  const s = []
  const hexDigits = '0123456789abcdef'
  for (let i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
  }
  s[14] = '4' // bits 12-15 of the time_hi_and_version field to 0010
  // bits 6-7 of the clock_seq_hi_and_reserved to 01
  // eslint-disable-next-line no-bitwise
  s[19] = hexDigits.substr((Number(s[19]) & 0x3) | 0x8, 1)
  // eslint-disable-next-line no-multi-assign
  s[8] = s[13] = s[18] = s[23] = '-'

  const uuid = s.join('')
  return uuid
}

const arrayElement = (items) => items[Math.floor(Math.random() * items.length)]

const random = {
  quickUUID,
  arrayElement,
}

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

const mockProduct = (product) => ({
  id: random.quickUUID(),
  ...random.arrayElement(productsSamples),
  ...product,
})

// eslint-disable-next-line arrow-body-style
const mockProductCollection = (count, product) => {
  return new Array(count).fill(null).map(() => mockProduct(product))
}

app.use(cors())
app.use(bodyParser.json())

const badRequest = (res) => {
  res.status(400)
  res.json({
    error: 'BadRequest',
  })
}

app.post('/login', (req, res) => {
  if (req.body && req.body.username === '42px' && req.body.password === '123') {
    return res.json({
      token: mockAccessToken(),
    })
  }
  return badRequest(res)
})

app.get('/products', (req, res) => {
  res.json(mockProductCollection(parseInt(req.query.limit, 10) || 50))
})

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Api: http://localhost:${port}`)
})
