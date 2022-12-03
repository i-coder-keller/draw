import { throttle } from 'lodash-es'
import {useState} from "react";
function Register() {
    const [btnText, setBtnText] = useState<string>("发送验证码")
    const [ currentTime, setCurrentTime ] = useState<number>(10)
    const [ timer, setTimer ] = useState<NodeJS.Timer>()
    const registerHandler = async () => {}
    const sendValidation = () => {
        setBtnText(`${currentTime} s`)
        countdown()
    }
    const countdown = () => {
        const t = setInterval(() => {
            setCurrentTime((ct) => {
                if (ct === 0) {
                    setBtnText("发送验证码")
                    clearInterval(t)
                    return 10
                } else {
                    setBtnText(`${ct - 1} s`)
                    return ct - 1
                }
            })
        }, 1000)
    }
    return (
        <>
            <label className='mb-[10px] block'>账号:</label>
            <input
                placeholder='请输入账号'
                type="text"
                className='w-full h-[32px] px-1 m-0 bg-inherit focus:outline-[#000] outline outline-2  outline-offset-2 rounded-lg placeholder:text-[#BCBCBC]'
            />
            <label className='mb-[10px] mt-[10px] block'>昵称:</label>
            <input
                placeholder='请输入昵称'
                type="text"
                className='w-full h-[32px] appearance-none hover:appearance-none focus:appearance-none px-1 m-0 bg-inherit focus:outline-[#000] outline outline-2  outline-offset-2 rounded-lg placeholder:text-[#BCBCBC]'
            />
            <label className='mb-[10px] mt-[10px] block'>邮箱:</label>
            <input
                placeholder='请输入邮箱'
                type="email"
                className='w-full h-[32px]  px-1 m-0 bg-inherit focus:outline-[#000] outline outline-2  outline-offset-2 rounded-lg placeholder:text-[#BCBCBC]'
            />
            <label className='mb-[10px] mt-[10px] block'>验证码:</label>
            <div className="w-full flex gap-x-1 items-center">
                <input
                    placeholder='请输入验证码'
                    type="number"
                    className='w-full h-[32px] flex-1 px-1 m-0 bg-inherit focus:outline-[#000] outline outline-2  outline-offset-2 rounded-lg placeholder:text-[#BCBCBC]'
                />
                <button className="w-[112px] flex-shrink-0 ml-1.5 bg-purple-600 text-white text-base font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none" onClick={sendValidation}>{btnText}</button>
            </div>
            <label className='mb-[10px] mt-[10px] block'>密码:</label>
            <input
                type="password"
                placeholder='请输入密码'
                className='w-full h-[32px] px-1 m-0 bg-inherit focus:outline-[#000] outline outline-2  outline-offset-2 rounded-lg  placeholder:text-[#BCBCBC]'
            />
            <button
                className='w-full outline-0 point mt-[20px] h-14 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg text-slate-100'
                onClick={throttle(registerHandler, 1000, {
                    leading: true,
                    trailing: false,
                })}
            >
                注册
            </button>
        </>
    )
}

export default Register
