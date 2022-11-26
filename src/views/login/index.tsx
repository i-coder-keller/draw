import React, { useRef } from 'react'
import { useLottie } from '../../hooks/hooks'
import animationData from '../../assets/lottie/login.json'
function Login () {
    const lottieTarget = useRef<HTMLDivElement>(null)
    useLottie(lottieTarget.current, animationData)
    return (
        <div className='w-full h-full bg-gradient-to-b from-cyan-500 to-blue-500 flex'>
            <div className='h-full flex items-center justify-center flex-[2_2] bg-cover bg-center bg-[url("//drawcdn.liuyongzhi.cn/login-bg.jpg")] drop-shadow'>
            </div>
            <div className='h-full flex-1 flex items-center justify-center'>
                <div className='shadow-2xl w-96 h-96 bg-white rounded-lg'>
                    <div className='w-[200px] h-[200px] ' ref={lottieTarget} />
                    <label>项目名称:</label>
                    <input type="text"/>
                </div>
            </div>
        </div>
    )
}

export default Login
