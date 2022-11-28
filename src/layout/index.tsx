import React, { useEffect, useRef, useState } from "react"
import { Outlet } from 'react-router-dom'
import HomeLottie from '../assets/lottie/home.json'
import { useLottie } from "../hooks/hooks"
function Layout() {
    const lottieTarget = useRef<HTMLDivElement>(null)
    const [ noticeShow, setNoticeShow ] = useState<Boolean>(false)
    const [ setting, setSetting ] = useState<Boolean>(false)
    useLottie(lottieTarget.current, HomeLottie)
    const closeSetting = () => {
        setSetting(false)
    }
    const openSetting = (e: React.MouseEvent<HTMLImageElement>) => {
        setSetting(status => !status)
        e.nativeEvent.stopImmediatePropagation()
    }
    const initEvents = () => {
        window.addEventListener('click', closeSetting, false)
    }
    const disposeEvents = () => {
        window.removeEventListener('click', closeSetting, false)
    }
    useEffect(() => {
        initEvents()
        return () => {
            disposeEvents()
        }
    }, [])
    return (
        <div className="w-full h-full bg-slate-50">
            <div className="h-[60px] w-full bg-white border-y-0 border-t-0 border-b-2 border-slate-100 border-solid fixed">
                <div className="h-full w-full max-w-[1440px] m-auto flex items-center justify-between px-2">
                    <div className="h-full w-fit flex items-center gap-x-2.5">
                        <div className="h-fit w-[50px]">
                            <div className="w-[50px] h-[50px] rounded-lg overflow-hidden" ref={lottieTarget}></div>
                        </div>
                        <button
                        className="h-8 px-2 text-sm outline-0 rounded border-2 border-slate-100 border-solid text-slate-300 hover:text-slate-600"
                        >
                        项目列表
                        </button>
                    </div>
                    <div className="w-fit h-full flex items-center gap-x-2.5">
                        <div className="w-[20px] h-[20px]">
                            <img src={require('@/assets/images/notification.png')} alt="notice" className="w-[20px] h-[20px] cursor-pointer rounded-full"/>
                        </div>
                        <div className="w-[30px] h-[30px] relative">
                            <img src="http://drawcdn.liuyongzhi.cn/default-avatar.png" alt="avatar" className="w-[30px] h-[30px] cursor-pointer rounded-full active:border-2 active:border-solid active:border-slate-100 z-[2000]" onClick={openSetting} />
                            <div className={`w-[100px] h-fit absolute bg-white select-none rounded -translate-x-2/4 translate-y-6 shadow-lg ${setting ? 'block' : 'hidden'}`}>
                                <div className="w-[100px] h-[30px] text-sm leading-[30px] text-center cursor-pointer border-b border-slate-400 border-solid">个人资料</div>
                                <div className="w-[100px] h-[30px] text-sm leading-[30px] text-center cursor-pointer">退出登录</div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <main className="w-full h-full] max-w-[1440px] min-w-[1200px] m-auto flex p-2 pt-[70px]">
                <Outlet />
            </main>
        </div>
    )
}

export default Layout