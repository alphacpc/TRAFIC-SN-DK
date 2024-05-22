import Image from 'next/image'
import { IoTrainOutline, IoBusOutline } from "react-icons/io5";
import { PiRoadHorizon } from "react-icons/pi";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-red-400 p-10">
      {/* <h1>Hello world</h1> */}
      <div className="div-panel-stat-trafic border-2 border-black rounded-md shadow-lg p-4 flex flex-col items-center justify-center">
        <IoTrainOutline size={100}/>
        
        <span className="text-2xl">23445</span>
        
        <div className="bg-yellow-400 flex">
          
          <div className="p-2">
            <span>l</span>
            <span>23</span>
          </div>

          <div className="p-2">
            <span>P</span>
            <span>44</span>
          </div>

        </div>
      </div>

      <div className="flex">
        <IoTrainOutline size={100}/>
        <IoBusOutline size={100}/>
        <PiRoadHorizon size={100}/>
      </div>

    </main>
  )
}
