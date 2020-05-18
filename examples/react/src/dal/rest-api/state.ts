import { restApi } from "./domain"


export type AccessToken = string | null
export const $accessToken = restApi.store<AccessToken>(null)