import {ProjectResponseRootObject} from "@/utils/interface"

function Project({projectName, projectId, projectInfo, owner, updateTime, participants}:ProjectResponseRootObject) {

    return (
        <section className="w-full h-fit min-h-[100px] p-2 shadow-md hover:shadow-2xl cursor-pointer rounded border-[1px] border-solid border-slate-200 flex items-center justify-center gap-1">
            <div className="flex-1 h-full">
                <h1 className="text-sm text-slate-800">{projectName}</h1>
                <div className="w-full h-fit">
                    <div className="flex items-center justify-start my-1">
                        <div className="relative">
                            <img src="http://drawcdn.liuyongzhi.cn/default-avatar.png" alt="avatar" className="w-[15px] h-[15px] rounded-full" />
                            <div className={`absolute w-[5px] h-[5px] rounded-full z-[100] bg-green-500 top-[1px] right-[1px]`}></div>
                        </div>
                        <div className="ml-[5px] text-xs text-slate-300">放牛娃</div>
                    </div>
                    <div className="flex items-center justify-start my-1">
                        <div className="relative">
                            <img src="http://drawcdn.liuyongzhi.cn/default-avatar.png" alt="avatar" className="w-[15px] h-[15px] rounded-full" />
                            <div className={`absolute w-[5px] h-[5px] rounded-full z-[100] bg-green-500 top-[1px] right-[1px]`}></div>
                        </div>
                        <div className="ml-[5px] text-xs text-slate-300">放牛娃</div>
                    </div>
                    <div className="flex items-center justify-start my-1">
                        <div className="relative">
                            <img src="http://drawcdn.liuyongzhi.cn/default-avatar.png" alt="avatar" className="w-[15px] h-[15px] rounded-full" />
                            <div className={`absolute w-[5px] h-[5px] rounded-full z-[100] bg-green-500 top-[1px] right-[1px]`}></div>
                        </div>
                        <div className="ml-[5px] text-xs text-slate-300">放牛娃</div>
                    </div>
                    <div className="flex items-center justify-start my-1">
                        <div className="relative">
                            <img src="http://drawcdn.liuyongzhi.cn/default-avatar.png" alt="avatar" className="w-[15px] h-[15px] rounded-full" />
                            <div className={`absolute w-[5px] h-[5px] rounded-full z-[100] bg-green-500 top-[1px] right-[1px]`}></div>
                        </div>
                        <div className="ml-[5px] text-xs text-slate-300">放牛娃</div>
                    </div>
                </div>
                <span className="text-xs text-slate-300">40 分钟前修改</span>
            </div>
            <div className="flex-1 h-full">
                <img src="http://drawcdn.liuyongzhi.cn/default-canvas.png" alt="canvas" className="w-full h-full object-cover"/>
            </div>
        </section>
    )
}

export default Project
