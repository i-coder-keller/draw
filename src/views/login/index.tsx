import React, { useRef, useState } from 'react'
import { useLottie } from '../../hooks/hooks'
import animationData from '../../assets/lottie/login.json'
import Login from './login'
import Register from './register'

function Home() {
    const lottieTarget = useRef<HTMLDivElement>(null)
    useLottie(lottieTarget.current, animationData)
    const [loginShow, setLoginShow] = useState<Boolean>(true)
    const changeLoginOrResister = () => {setLoginShow(status => !status)}
    return (
        <div className='w-full h-full bg-gradient-to-b from-violet-500 to-fuchsia-500 flex'>
            <div className='h-full flex items-center justify-center flex-[2_2] bg-cover bg-center bg-[url("//drawcdn.liuyongzhi.cn/login-bg.jpg")] drop-shadow'>
            </div>
            <div className='h-full flex-1 flex justify-center'>
                <div className='w-96 h-auto bg-transparent rounded-lg pt-[100px]'>
                    <div className='w-full h-[100px]'></div>
                    <div
                        className='w-full h-fit flex w-[280px] m-auto pb-[50px]'
                    >
                        <div className={`flex-1 h-[38px] cursor-pointer text-center text-sm leading-[22px] border-solid border-b-2 ${loginShow ? 'text-rose-500 border-rose-500': 'text-violet-300 border-violet-300'}`} onClick={changeLoginOrResister}>登录</div>
                        <div className={`flex-1 h-[38px] cursor-pointer text-center text-sm leading-[22px] border-solid border-b-2 ${!loginShow ? 'text-rose-500 border-rose-500': 'text-violet-300 border-violet-300'}`} onClick={changeLoginOrResister}>注册</div>
                    </div>
                    {
                        loginShow ? <Login /> : <Register />
                    }

                    <div className='w-[200px] h-[100px] m-auto ' ref={lottieTarget} />
                </div>
            </div>
        </div>
    )
}

export default Home
