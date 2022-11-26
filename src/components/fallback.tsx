import { useRef } from 'react'
import { useLottie } from '../hooks/hooks'
import animationData from '../assets/lottie/fallback.json'
function Fallback() {
    const lottieTarget = useRef<HTMLDivElement>(null)
    useLottie(lottieTarget.current, animationData)
    return (
        <div className="w-full h-full">
            <div className='w-full h-full' ref={lottieTarget} />
        </div>
    )
}
export default Fallback
