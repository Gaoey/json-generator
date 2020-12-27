import axios from 'axios'

const $name$API = {
  fetchAll: () => axios.get("$url$"),
  fetchById: (id) => axios.get(`$url$?id=${id}`),
  create: (body) => axios.post("$url$", body),
  update: (id, body) => axios.put(`$url$?id=${id}`, body),
  delete: (id) => axios.delete(`$url$?id=${id}`),
}

export default $name$API
