import Image from 'next/image'
import { IoTrainOutline, IoBusOutline } from "react-icons/io5";
import { PiRoadHorizon } from "react-icons/pi";
import { HiOutlineArrowLongDown, HiOutlineArrowLongUp } from "react-icons/hi2";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-lime-100 p-10">
      
      <div className="div-panel-stat-trafic w-[10vw] border-2 border-black rounded-md shadow-lg p-4 flex flex-col items-center justify-center">
        <IoTrainOutline size={75}/>
        
        <p className="text-4xl my-4">23 445</p>
        
        <div className="flex items-center">
          
          <div className="p-2 flex items-center">
            <HiOutlineArrowLongDown className="text-red-600" size={20} />
            <span className="font-bold">23</span>
          </div>

          <div className="p-2 flex items-center">
            <HiOutlineArrowLongUp className="text-green-600" size={20} />
            <span className="font-bold">44</span>
          </div>

        </div>
      </div>

    </main>
  )
}
