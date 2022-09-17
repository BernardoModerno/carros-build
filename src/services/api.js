import axios from 'axios'

export function setupAPIClient(ctx = undefined){

  const api = axios.create({
    baseURL: 'http://api-test.bhut.com.br:3000/api/cars',
  })

  return api;

}