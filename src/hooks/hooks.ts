import { useEffect, useState } from "react"
import Lottie from "lottie-web"
export function useLottie(element: HTMLDivElement | null, animationData: any) {
    const [ lottie, setLottie ] = useState<any>(null)
    useEffect(() => {
        if (lottie) {
            lottie.destroy()
        }
        const result = Lottie.loadAnimation({
            container: element as HTMLDivElement, 
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData
          })
          setLottie(result)
    }, [animationData, element])
    return lottie
}