import axios, { AxiosInstance, AxiosRequestConfig, InternalAxiosRequestConfig, AxiosError, AxiosResponse } from 'axios'

export interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
    noLoading?: boolean
}

const config = {
    baseURL: import.meta.env.VITE_MAP_URL as string,
    timeout: 5000 * 10,
    // 跨域时候允许携带凭证
    withCredentials: false
}

class RegionJson {
    service: AxiosInstance

    public constructor(config: AxiosRequestConfig) {
        this.service = axios.create(config)

        /**
         * @description 请求拦截器
         * @param config
         */
        this.service.interceptors.request.use(
            (config: CustomAxiosRequestConfig) => {
                return config
            },
            (error: AxiosError) => {
                return Promise.reject(error)
            }
        )

        /**
         * @description 响应拦截器
         * @param response
         */
        this.service.interceptors.response.use(
            (response: AxiosResponse) => {
                const { data } = response
                return data
            },
            (error: AxiosError) => {
                return Promise.reject(error)
            }
        )
    }

    get(url: string, params?: any) {
        return this.service.get(url, { params })
    }
}
export default new RegionJson(config)
