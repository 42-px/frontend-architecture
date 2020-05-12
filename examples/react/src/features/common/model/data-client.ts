import { createDataClient } from '@/dal'

/**
 * In an application with authorization,
 * effector store with a token will be passed here
 */
export const dataClient = createDataClient()
