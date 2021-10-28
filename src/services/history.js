// core
import axios from 'axios'

// config
import config from '../utils/config'

const baseUrl = 'https://coding-challenge-api.aerolab.co'
const authorization = { headers: { 'authorization' : `${config.TOKEN}` } }

const getAll = async () => {
  const res = axios.get(`${baseUrl}/history/`, authorization)

  return res.data
}

const redeem = async productId => {
  const res = axios.post(`${baseUrl}/redeem/`, { productId }, authorization)

  return res.data
}

const service = {
  getAll,
  redeem
}
export default service