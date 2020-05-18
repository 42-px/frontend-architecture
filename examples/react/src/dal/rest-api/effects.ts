import { attach } from 'effector'
import { AxiosError, AxiosResponse } from 'axios'
import { restApi } from './domain'
import { $accessToken } from './state'

type Request = {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE', 
  url: string;
  accessToken?: string;
  query?: {
    [key: string]: string;
  };
  body?: object;
}


export const request = restApi.effect<Request, AxiosResponse<any>, AxiosError>()
export const authRequest = attach({
  effect: request,
  source: $accessToken,
  mapParams: (data: Request, accessToken) => ({ 
    ...data,
    accessToken: accessToken || undefined
  })
})