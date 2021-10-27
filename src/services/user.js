import axios from 'axios'

const baseUrl = 'https://coding-challenge-api.aerolab.co/user'

const get = async () => {
  const res = await axios.get(`${baseUrl}/me`)

  return {
    id: res.data._id,
    name: res.data.name,
    points: res.data.points,
    createDate: res.data.createDate,
    redeemHistory: res.data.redeemHistory
  }
}

const addPoints = async amount => {
  const res = await axios.post(`${baseUrl}/points`, amount)

  return res.data
}

const service = {
  get,
  addPoints,
}
export default service