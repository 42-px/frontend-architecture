import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  verbose: true,
  moduleNameMapper: {
    '^[./a-zA-Z0-9$_-]+\\.svg$': '<rootDir>/svg.mock.ts',
  },

}
export default config
