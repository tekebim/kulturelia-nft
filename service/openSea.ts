import axios from 'axios'

const axiosOs = axios.create({
  baseURL: 'https://testnets-api.opensea.io/api/v1',
})

export async function getAssets() {
  const res = await axiosOs.get('/assets', {
    params: {
      collection: 'kulturelia',
    },
  })

  return res.data
}

export async function getCollection() {
  const res = await axiosOs.get('/collection/kulturelia')

  return res.data
}
