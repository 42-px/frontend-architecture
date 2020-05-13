export class CustomError<P = any> extends Error {
  public payload?: P

  constructor(message?: string, payload?: P) {
    super(message)
    // @ts-ignore
    if (typeof Error.captureStackTrace === 'function') {
      // @ts-ignore
      Error.captureStackTrace(this, this.constructor)
    } else {
      const err = new Error(message)
      this.stack = err.stack
    }

    this.payload = payload
  }
}

export const createCustomError = <P = any>(errorName: string) => {
  class MyCustomError extends CustomError<P> {
    constructor(message?: string, payload?: P) {
      super(message, payload)
      this.name = errorName
    }
  }
  return MyCustomError
}
