export interface AxiosResponseTypes<T> {
    code: number
    data: T
    msg: string
}
interface UserInfo {
    identity: string;
    account: string;
    nickname: string;
    avatar: string;
    email: string;
    createdAt: number;
    updatedAt: number;
}

export interface LoginResponseRootObject {
    token: string;
    userInfo: UserInfo;
}

export interface LoginRequestRootObject {
    account: string
    password: string
}