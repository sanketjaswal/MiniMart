import { API } from './api'

export const sendQuery = (cart, token) => {
  try {
    const response = API.post(
      'query/send',
      { cart, message: "I'm interested in these products." },
      { headers: { Authorization: token } }
    )
    return response.data
  } catch (error) {
    throw error.response?.data || 'Error sending query'
  }
}
