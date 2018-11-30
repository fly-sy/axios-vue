import axios from "axios";

const baseURL = 'v1/'
axios.defaults.baseURL = baseURL

export const getInfo = (params) => {
  return axios.get('api/getinfo', params).then(res => res.data)
}



