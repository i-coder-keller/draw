import { throttle } from 'lodash-es'
import {useRef, useState} from "react"
import toast from 'react-hot-toast'
import {sendSms, register} from "@/apis/auth"
interface Iprops {
    changeLoginOrResister():void
}
function Register({changeLoginOrResister}: Iprops) {
    const [btnText, setBtnText] = useState<string>("发送验证码")
    const [ currentTime, setCurrentTime ] = useState<number>(60)
    const [enable, setEnable] = useState<Boolean>(true)
    const accountRef = useRef<HTMLInputElement>(null)
    const nicknameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const codeRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const registerHandler = async () => {
        try {
           await register({
                account: accountRef.current!.value,
                nickname: nicknameRef.current!.value,
                email: emailRef.current!.value,
                code: codeRef.current!.value,
                password: passwordRef.current!.value
            })
            toast.success("注册成功！")
            changeLoginOrResister()
        } catch (e) {
            console.warn("注册失败")
        }
    }
    const sendSMSHandler = async () => {
        try {
            await sendSms({
                email: emailRef.current!.value
            })
            toast.success("发送成功")
            sendValidation()
        }catch (e) {
            console.warn(e)
        }
    }
    const sendValidation = () => {
        setBtnText(`${currentTime} s`)
        countdown()
        if (!enable) return
        setEnable(false)
    }
    const countdown = () => {
        const t = setInterval(() => {
            setCurrentTime((ct) => {
                if (ct === 0) {
                    setBtnText("发送验证码")
                    setEnable(true)
                    clearInterval(t)
                    return 60
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
                ref={accountRef}
                className='w-full h-[32px] px-1 m-0 bg-inherit focus:outline-[#000] outline outline-2  outline-offset-2 rounded-lg placeholder:text-[#BCBCBC]'
            />
            <label className='mb-[10px] mt-[10px] block'>昵称:</label>
            <input
                placeholder='请输入昵称'
                type="text"
                ref={nicknameRef}
                className='w-full h-[32px] appearance-none hover:appearance-none focus:appearance-none px-1 m-0 bg-inherit focus:outline-[#000] outline outline-2  outline-offset-2 rounded-lg placeholder:text-[#BCBCBC]'
            />
            <label className='mb-[10px] mt-[10px] block'>邮箱:</label>
            <input
                placeholder='请输入邮箱'
                type="email"
                ref={emailRef}
                className='w-full h-[32px]  px-1 m-0 bg-inherit focus:outline-[#000] outline outline-2  outline-offset-2 rounded-lg placeholder:text-[#BCBCBC]'
            />
            <label className='mb-[10px] mt-[10px] block'>验证码:</label>
            <div className="w-full flex gap-x-1 items-center">
                <input
                    placeholder='请输入验证码'
                    type="number"
                    ref={codeRef}
                    className='w-full h-[32px] flex-1 px-1 m-0 bg-inherit focus:outline-[#000] outline outline-2  outline-offset-2 rounded-lg placeholder:text-[#BCBCBC]'
                />
                <button className="w-[112px] flex-shrink-0 ml-1.5 bg-purple-600 text-white text-base font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none" onClick={sendSMSHandler} disabled={!enable}>{btnText}</button>
            </div>
            <label className='mb-[10px] mt-[10px] block'>密码:</label>
            <input
                type="password"
                placeholder='请输入密码'
                ref={passwordRef}
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
