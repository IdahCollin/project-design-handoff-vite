
import { Header } from "../src/components/Header/Header"
import { MainCont } from "../src/components/MainCont/MainCont"
import { Footer } from "../src/components/Footer/Footer"
import { LottieAni } from "../src/components/LottieAni"
import { LottieAdv } from "./components/LottieAdv";

//Glöm inte att mounta MainCont och Footer här nedan!
export const App = () => {
  return (
    <div>
      <Header />
      <MainCont />
      <Footer />
      <LottieAni />
      <LottieAdv />
    </div>
  );
};
