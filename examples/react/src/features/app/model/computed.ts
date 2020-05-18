import { $accessToken } from '@/dal'

export const $isAuth = $accessToken.map(Boolean)