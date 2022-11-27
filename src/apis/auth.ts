import { LoginResponseRootObject, LoginRequestRootObject } from '../utils/interface'
import requestHandler from '../utils/request'

export const login = async (data: LoginRequestRootObject) => requestHandler<LoginResponseRootObject>({
    url: "/login",
    method: 'post',
    data
})