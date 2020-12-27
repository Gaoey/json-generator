import axios from 'axios'

const baseAPI = {
  //<fetchAll>
  fetchAll: () => axios.get(`baseURL`),
  //</fetchAll>
  //<fetchById>
  fetchById: (id) => axios.get(`baseURL`),
  //</fetchById>
  //<create>
  create: (body) => axios.post(`baseURL`, body),
  //</create>
  //<update>
  update: (id, body) => axios.put(`baseURL`, body),
  //</update>
  //<delete>
  delete: (id) => axios.delete(`baseURL`),
  //</delete>
}

export default baseAPI
