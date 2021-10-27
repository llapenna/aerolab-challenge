import axios from 'axios'

const baseUrl = 'https://coding-challenge-api.aerolab.co/products'

const getAll = async () => {
  const res = axios.get(baseUrl)

  return res.data
}

const service = {
  getAll,
}
export default service