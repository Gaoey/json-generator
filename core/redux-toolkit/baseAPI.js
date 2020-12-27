import axios from 'axios'

const $name$API = {
  //<fetchAll>
  fetchAll: () => axios.get("baseURL"),
  //</fetchAll>
  //<fetchById>
  fetchById: (id) => axios.get(`baseURL?id=${id}`),
  //</fetchById>
  //<create>
  create: (body) => axios.post("baseURL", body),
  //</create>
  //<update>
  update: (id, body) => axios.put(`baseURL?id=${id}`, body),
  //</update>
  //<delete>
  delete: (id) => axios.delete(`baseURL?id=${id}`),
  //</delete>
}

export default $name$API
