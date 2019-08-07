import axios from "axios"
import {Message} from "element-ui"


const service = axios.create({
    baseURL: '/api',
    timeout: 5000
})

service.interceptors.request.use(
    config => {
        return config
    },
    error => {
        return Promise.resolve(error)
    }
)

service.interceptors.response.use(
    response => {
        return Promise.resolve(response.data)
    },
    error => {
        Message({
            message: error.desc || error || 'Error',
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.resolve(error)
    }
)

export default service

