import { atom } from "jotai"
import { UserInfo } from '@/utils/interface'

export const userInfo = atom<UserInfo>({
    identity: '',
    account: '',
    nickname: '',
    avatar: '',
    email: '',
    createdAt: 0,
    updatedAt: 0,
})
export const token = atom<string>('')
