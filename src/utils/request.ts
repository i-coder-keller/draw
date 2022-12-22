import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { AxiosResponseTypes } from '@/utils/interface'
import {toast} from 'react-hot-toast'
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
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
    return config
}, error => {
    return Promise.reject(error)
})
service.interceptors.response.use((response: AxiosResponse) => {
    const { data } = response
    if (data.code !== 200) {
        toast.error(data.msg)
        return Promise.reject(data)
    }
    return data
}, error => {
    toast.error("网络错误")
    return Promise.reject(error)
})

function requestHandler<T>(params: AxiosRequestConfig):Promise<AxiosResponseTypes<T>> {
    return service(params)
}
export default requestHandler
