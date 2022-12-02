import { throttle } from 'lodash-es'
function Register() {
    const registerHandler = async () => {}
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
            <div className="w-full flex gap-x-1">
                <input
                    placeholder='请输入验证码'
                    type="number"
                    className='w-full h-[32px] flex-1 px-1 m-0 bg-inherit focus:outline-[#000] outline outline-2  outline-offset-2 rounded-lg placeholder:text-[#BCBCBC]'
                />
                <button className="flex-shrink-0 bg-purple-600 text-white text-base font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200">发送验证码</button>
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
