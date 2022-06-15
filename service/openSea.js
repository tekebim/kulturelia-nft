import axios from 'axios'

const axiosOs = axios.create({
  baseURL: 'https://testnets-api.opensea.io/api/v1',
})

export async function getAssets() {
  const res = await axiosOs.get('/assets', {
    order_direction: 'dec',
    offset: 0,
    limit: 20,
    include_orders: false,
  })

  return res.data
}

export async function getCollection() {
  const res = await axiosOs.get('/collection/kulturelia')

  return res.data
}

export async function getCollectionAssets() {
  const res = await axiosOs.get('/collection/kulturelia')

  return res.data
}
