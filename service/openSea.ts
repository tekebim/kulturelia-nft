import axios from 'axios'

export interface Asset {
  token_id: string
  image_url: string | null
  id: number
  num_sales: number
  image_preview_url: string | null
  image_thumbnail_url: string | null
  image_original_url: string | null
  name: string
}

export interface Collection {
  name: string
  slug: string
  description: string
  external_url: string
  image_url: string | null
  stats: Record<string, number>
}

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
export async function fetchLoop<T>(fn: () => Promise<T>): Promise<T> {
  try {
    const res = await fn()
    return res
  } catch (err: any) {
    if (err.response?.status !== 429) {
      throw err
    }

    await sleep(2000)
    return fetchLoop(fn)
  }
}

export async function getAssets(): Promise<Asset[]> {
  const res = await axiosOs.get('/assets', {
    params: {
      collection: 'kulturelia',
    },
  })

  return res.data.assets
}

export async function getCollection(): Promise<Collection> {
  const res = await axiosOs.get('/collection/kulturelia')

  return res.data.collection
}
