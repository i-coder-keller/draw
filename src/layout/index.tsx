import { useRef } from "react"
import HomeLottie from '../assets/lottie/home.json'
import { useLottie } from "../hooks/hooks"
function Layout() {
    const lottieTarget = useRef<HTMLDivElement>(null)
    useLottie(lottieTarget.current, HomeLottie)
    return (
        <div className="w-full h-full bg-slate-50">
            <div className="h-[60px] w-full bg-white border-y-0 border-t-0 border-b-2 border-slate-100 border-solid">
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
                        <img src="http://drawcdn.liuyongzhi.cn/default-avatar.png" alt="avatar" className="w-[30px] h-[30px] cursor-pointer rounded-full " />
                    </div>
                </div>
                
            </div>
            <div className="w-full h-full max-w-[1440px] min-w-[1200px] m-auto flex">
                
                <div className="flex-1 h-full flex flex-col">
                    <div className="w-full flex-1 bg-slate-50"></div>
                </div>
            </div>
        </div>
    )
}

export default Layout