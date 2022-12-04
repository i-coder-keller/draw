import {
    LoginResponseRootObject,
    LoginRequestRootObject,
    SmsRequestRootObject,
    RegisterRequestObject
} from '@/utils/interface'
import requestHandler from '../utils/request'

export const login = (data: LoginRequestRootObject) => requestHandler<LoginResponseRootObject>({
    url: "/login",
    method: 'post',
    data
})

export const sendSms = (data: SmsRequestRootObject) => requestHandler<null>({
    url: "/sendSMS",
    method: "post",
    data
})

export const register = (data: RegisterRequestObject) => requestHandler<null>({
    url: "/register",
    method: "post",
    data
})
