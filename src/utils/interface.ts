export interface AxiosResponseTypes<T> {
    code: number
    data: T
    msg: string
}
export interface UserInfo {
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

export interface SmsRequestRootObject {
    email: string
}

export interface RegisterRequestObject {
    account: string;
    email: string;
    password: string;
    nickname: string;
    code: string;
}

export interface ProjectResponseRootObject {
    projectName: string;
    projectId: string;
    projectInfo: string;
    updateTime: number;
    owner: boolean;
    participants: null|ProjectParticipantsObject[];
}

export interface ProjectParticipantsObject {
    identity: string;
    avatar: string
    name: string;
}
