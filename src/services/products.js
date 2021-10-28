// core
import axios from 'axios'

// config
import config from '../utils/config'

const baseUrl = 'https://coding-challenge-api.aerolab.co/products'
const authorization = { headers: { 'Authorization' : `${config.TOKEN}` } }

const getAll = async () => {
  const res = await axios.get(baseUrl, authorization)

  return res.data
}

const service = {
  getAll,
}
export default service