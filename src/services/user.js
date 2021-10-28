// core
import axios from 'axios'

// config
import config from '../utils/config'

const baseUrl = 'https://coding-challenge-api.aerolab.co/user'
const authorization = { headers: { 'authorization' : `${config.TOKEN}` } }

const get = async () => {
  const res = await axios.get(`${baseUrl}/me`, authorization)

  return res.data
}

const addPoints = async amount => {
  const res = await axios.post(`${baseUrl}/points`, { amount }, authorization)

  return res.data['New Points']
}

const service = {
  get,
  addPoints,
}
export default service