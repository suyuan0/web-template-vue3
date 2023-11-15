import http from '@/api'
import { Login } from './interface'
import { UsersPort } from '@/api/config/servicePort'

/**
 * @description 登录
 * @param params
 * @returns
 */
export const loginApi = (params: Login.ReqLoginForm) => {
    return http.post(`${UsersPort}/loginByPassword`, params)
}
