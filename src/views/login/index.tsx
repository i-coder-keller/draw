import React, { useRef, useState } from 'react'
import { useLottie } from '../../hooks/hooks'
import animationData from '../../assets/lottie/login.json'
import { login } from '../../apis/auth'
import { throttle } from 'lodash-es'
function Login () {
    const lottieTarget = useRef<HTMLDivElement>(null)
    const [account, setAccount] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    useLottie(lottieTarget.current, animationData)
    const loginHandler = async () => {
        try {
            const { data } = await login({
                account,
                password
            })
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='w-full h-full bg-gradient-to-b from-violet-500 to-fuchsia-500 flex'>
            <div className='h-full flex items-center justify-center flex-[2_2] bg-cover bg-center bg-[url("//drawcdn.liuyongzhi.cn/login-bg.jpg")] drop-shadow'>
            </div>
            <div className='h-full flex-1 flex items-center justify-center'>
                <div className='w-96 h-auto bg-transparent rounded-lg flex flex-col justify-center'>
                    <div
                    className='text-[24px] font-[400] font-mono not-italic leading-10 text-center text-cyan-50'
                    >
                    登录涂鸦
                    </div>
                    <label className='mb-[10px]'>账号:</label>
                    <input
                    placeholder='请输入账号'
                    className='w-full h-[32px] px-1 m-0 bg-inherit focus:outline-[#000] outline outline-2  outline-offset-2 rounded-lg placeholder:text-[#BCBCBC]'
                    onChange={e => setAccount(e.target.value)}
                    />
                    <label className='mb-[10px] mt-[10px]'>密码:</label>
                    <input
                    type="password"
                    placeholder='请输入密码'
                    className='w-full h-[32px] px-1 m-0 bg-inherit focus:outline-[#000] outline outline-2  outline-offset-2 rounded-lg  placeholder:text-[#BCBCBC]'
                    onChange={e => setPassword(e.target.value)}
                    />
                    <button
                    className='outline-0 point mt-[20px] h-14 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg text-slate-100'
                    onClick={throttle(loginHandler, 1000, {
                        leading: true,
                        trailing: false,
                    })}
                    >
                        登录
                    </button>
                    <div className='w-[200px] h-[100px] m-auto ' ref={lottieTarget} />
                </div>
            </div>
        </div>
    )
}

export default Login
