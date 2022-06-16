import axios from 'axios'

const axiosOs = axios.create({
  baseURL: 'https://testnets-api.opensea.io/api/v1',
})

const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms))

/**
 * repeats the execution of the function fn as long as it returns an error 429.
 * Await 2sec between each call.
 * This function is a workaround to manage rate limit of open sea test api.
 */
export async function fetchLoop<T>(fn: () => Promise<T>) {
  try {
    const res = await fn()
    return res
  } catch (err: any) {
    const errCode = err.response?.status

    if (errCode !== 429) {
      throw err
    }

    await sleep(2000)
    return fetchLoop(fn)
  }
}

// TODO: type
export async function getAssets() {
  const res = await axiosOs.get('/assets', {
    params: {
      collection: 'kulturelia',
    },
  })

  return res.data
}

// TODO: type
export async function getCollection() {
  const res = await axiosOs.get('/collection/kulturelia')

  return res.data
}

// TODO: type
export async function getCollectionStats() {
  const res = await axiosOs.get('/collection/kulturelia/stats')

  return res.data
}
