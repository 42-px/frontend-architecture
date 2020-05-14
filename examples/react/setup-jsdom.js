// eslint-disable-next-line @typescript-eslint/no-var-requires
const { JSDOM } = require('jsdom')

global.setupJSDOM = (html, config = {}) => {
  const dom = new JSDOM(html, {
    url: 'http://localhost',
    ...config,
  })

  global.document = dom.window.document
  global.window = document.defaultView
  window.console = global.console


  global.navigator = {
    userAgent: 'node.js',
  }
}

global.clearJSDOM = () => {
  delete global.document
  delete global.window
  delete global.navigator
}
