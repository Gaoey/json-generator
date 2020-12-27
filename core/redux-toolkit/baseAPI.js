import axios from 'axios'

const $name$API = {
  fetchAll: () => axios.get("baseURL"),
  fetchById: (id) => axios.get(`baseURL?id=${id}`),
  create: (body) => axios.post("baseURL", body),
  update: (id, body) => axios.put(`baseURL?id=${id}`, body),
  delete: (id) => axios.delete(`baseURL?id=${id}`),
}

export default $name$API
