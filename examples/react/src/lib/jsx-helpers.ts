import * as React from 'react'

export interface ErrorMap<V = string> {
  [key: string]: V;
  UnknownError: V;
}

type Nullable = string | null | void

export const renderError = (errorName: Nullable, errorMap: ErrorMap<React.ReactNode>) => {
  if (errorName && errorMap[errorName] !== undefined) {
    return errorMap[errorName]
  }
  return errorMap.UnknownError
}

export const renderErrorText = (errorName: Nullable, errorMap: ErrorMap<string>) => {
  if (errorName && errorMap[errorName] !== undefined) {
    return errorMap[errorName]
  }
  return errorMap.UnknownError
}
