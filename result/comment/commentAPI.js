import axios from 'axios'

const commentAPI = {
  create: (body) => axios.post(`/v1/social/comment`, body),
  update: (id, body) => axios.put(`/v1/social/comment`, body),
}

export default commentAPI
