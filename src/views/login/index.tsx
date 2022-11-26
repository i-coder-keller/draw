import React, { useRef } from 'react'
import { useLottie } from '../../hooks/hooks'
import animationData from '../../assets/lottie/login.json'
function Login () {
    const lottieTarget = useRef<HTMLDivElement>(null)
    useLottie(lottieTarget.current, animationData)
    return (
        <div className='w-full h-full bg-gradient-to-b from-cyan-500 to-blue-500 flex'>
            <div className='h-full flex-[2_2] bg-cover bg-center' style={{backgroundImage: `url('@assets/images/login.jpg')`}}>
                <div className='w-[500px] h-[500px] translate-y-52 translate-x-52' ref={lottieTarget} />
            </div>
            <div className='h-full flex-1'></div>
        </div>
    )
}

export default Login
