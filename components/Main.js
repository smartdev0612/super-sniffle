import Minting from "./Minting"
import Image from "next/image"


const Main = () => {
  return (
    <div className="flex flex-col items-center">
        <div className="container max-w-screen-lg">
            <Image 
              src="/UUC_BG.gif"
              alt="UUC_city-of-shadows"
              width={1920}
              height={1200}
            />
        </div>
        <Minting />
    </div>
  )
}

export default Main