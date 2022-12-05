import { login } from '@/apis/auth'
import { throttle } from 'lodash-es'
import { useNavigate } from "react-router-dom"
import { useRef } from 'react'
import { useAtom } from 'jotai'
import { userInfo, token } from '@/store'

function Login() {
    const accountTarget = useRef<HTMLInputElement>(null)
    const passwordTarget = useRef<HTMLInputElement>(null)
    const [, setUserInfo] = useAtom(userInfo)
    const [, setToken] = useAtom(token)
    const navigate = useNavigate()
    const loginHandler = async () => {
        try {
            const { data } = await login({
                account: accountTarget.current!.value,
                password: passwordTarget.current!.value
            })
            localStorage.setItem('token', data.token)
            setUserInfo(data.userInfo)
            setToken(data.token)
            navigate("/projects")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <label className='mb-[10px] block'>账号:</label>
            <input
                placeholder='请输入账号'
                className='w-full h-[32px] px-1 m-0 bg-inherit focus:outline-[#000] outline outline-2  outline-offset-2 rounded-lg placeholder:text-[#BCBCBC]'
                ref={accountTarget}
            />
            <label className='mb-[10px] mt-[10px] block'>密码:</label>
            <input
                type="password"
                placeholder='请输入密码'
                className='w-full h-[32px] px-1 m-0 bg-inherit focus:outline-[#000] outline outline-2  outline-offset-2 rounded-lg  placeholder:text-[#BCBCBC]'
                ref={passwordTarget}
            />
            <button
                className='w-full outline-0 point mt-[20px] h-14 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg text-slate-100'
                onClick={throttle(loginHandler, 1000, {
                    leading: true,
                    trailing: false,
                })}
            >
                登录
            </button>
        </>
    )
}

export default Login
