import { throttle } from 'lodash-es'
function Register() {
    const registerHandler = async () => {}
    return (
        <>
            <label className='mb-[10px] block'>账号:</label>
            <input
                placeholder='请输入账号'
                className='w-full h-[32px] px-1 m-0 bg-inherit focus:outline-[#000] outline outline-2  outline-offset-2 rounded-lg placeholder:text-[#BCBCBC]'
            />
            <label className='mb-[10px] mt-[10px] block'>昵称:</label>
            <input
                placeholder='请输入昵称'
                className='w-full h-[32px] px-1 m-0 bg-inherit focus:outline-[#000] outline outline-2  outline-offset-2 rounded-lg placeholder:text-[#BCBCBC]'
            />
            <label className='mb-[10px] mt-[10px] block'>邮箱:</label>
            <input
                placeholder='请输入邮箱'
                className='w-full h-[32px] px-1 m-0 bg-inherit focus:outline-[#000] outline outline-2  outline-offset-2 rounded-lg placeholder:text-[#BCBCBC]'
            />
            <label className='mb-[10px] mt-[10px] block'>验证码:</label>
            <input
                placeholder='请输入验证码'
                className='w-full h-[32px] px-1 m-0 bg-inherit focus:outline-[#000] outline outline-2  outline-offset-2 rounded-lg placeholder:text-[#BCBCBC]'
            />
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