import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { AxiosResponseTypes } from '../utils/interface'
const baseURL = process.env.NODE_ENV === "development" ? "/api" : "/api" 
const timeout = 300000

const service = axios.create({
    baseURL,
    timeout
})

service.interceptors.request.use((config : AxiosRequestConfig) => {
    config.headers = {
        ...config.headers,
        "content-type": "application/json",
        token: ""
    }
    return config
}, error => {
    Promise.reject(error)
})
service.interceptors.response.use((response: AxiosResponse) => {
    const { data } = response
    if (data.code !== 200) {
        Promise.reject(data.msg)
    }
    return data
}, error => {
    Promise.reject(error)
})

function requestHandler<T>(params: AxiosRequestConfig):Promise<AxiosResponseTypes<T>> {
    return service(params)
}
export default requestHandler