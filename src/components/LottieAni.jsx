//Mounted in App.jsx

import Lottie from "lottie-react"
import bike from "../assets/animations/bike.json"


export const LottieAni = () => {
    const style = {
        height: 300
    }
    //Showing the animation. To change the style the const style was added and then pass the style object below
    return (
        <Lottie animationData={bike} style={style} />
    )
}
