import axios from 'axios'

const baseUrl = 'https://coding-challenge-api.aerolab.co'

const getAll = async () => {
  const res = axios.get(`${baseUrl}/history/`)

  return res.data
}

const redeem = async productId => {
  const res = axios.post(`${baseUrl}/redeem/`, productId)

  return res.data
}

const service = {
  getAll,
  redeem
}
export default service