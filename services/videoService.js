import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getCategories() {
    return apiClient.get('/vidoe_categories')
  },
  getVideo(id) {
    return apiClient.get('/vidoe_categories/' + id)
  },
}
