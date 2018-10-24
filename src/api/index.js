import axios from "axios";

const baseURL = '/api'
axios.defaults.baseURL = baseURL

export const getInfo = (params) => {
  return axios.get('/v4/api/film/now-playing', params).then(res => res.data)
}



