import Image from 'next/image'
import { IoTrainOutline, IoBusOutline } from "react-icons/io5";
import { PiRoadHorizon } from "react-icons/pi";
import { HiOutlineArrowLongDown, HiOutlineArrowLongUp } from "react-icons/hi2";
import LineDashedChart from './LineDashedChart';
import ColumnBasicChart from './ColumnBasicChart';
import ColumnStrackedChart from './ColumnStackedChart';
import LineChart from './LineChart';



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-lime-100 p-10">
      
      <div className="flex">
      <div className="div-panel-stat-trafic w-[14vw] border-2 border-bla rounded-md shadow-lg p-4 flex flex-col items-center justify-center">
        <IoTrainOutline size={75}/>
        
        <p>passagers</p>
        <p className="text-4xl my-4">23 445</p>
        
        <div className="flex items-center">
          
          <div className="p-2 flex items-center">
            <HiOutlineArrowLongDown className="text-red-600" size={20} />
            <span className="font-bold">23 Aller</span>
          </div>

          <div className="p-2 flex items-center">
            <HiOutlineArrowLongUp className="text-green-600" size={20} />
            <span className="font-bold">44 Retour</span>
          </div>

        </div>
      </div>

      <div className="div-panel-stat-trafic w-[14vw] mx-10 border-2 border-bla rounded-md shadow-lg p-4 flex flex-col items-center justify-center">
        <IoBusOutline size={75}/>
        
        <p className="mt-4">passagers</p>
        <p className="text-4xl mb-4">23 445</p>
        
        <div className="flex items-center">
          
          <div className="p-2 flex items-center">
            <HiOutlineArrowLongDown className="text-red-600" size={20} />
            <span className="font-bold">23 Aller</span>
          </div>

          <div className="p-2 flex items-center">
            <HiOutlineArrowLongUp className="text-green-600" size={20} />
            <span className="font-bold">44 Retour</span>
          </div>

        </div>
      </div>


      <div className="div-panel-stat-trafic w-[14vw] border-2 border-bla rounded-md shadow-lg p-4 flex flex-col items-center justify-center">
        <PiRoadHorizon size={75}/>
        

        <p className="text-4xl mt-4">23 445</p>
        <p>vehicules</p>

        <div className="flex items-center justify-between">
          
          <div className="p-2 flex items-center ">
            <HiOutlineArrowLongDown className="text-red-600" size={20} />
            <span className="font-bold">23 Entrant</span>
          </div>

          <div className="p-2 flex items-center">
            <HiOutlineArrowLongUp className="text-green-600" size={20} />
            <span className="font-bold">44 Sortant</span>
          </div>

        </div>
      </div>

      

      </div>


      <LineChart />
      <LineDashedChart/>
      <ColumnBasicChart/>
      <ColumnStrackedChart/>

    </main>
  )
}
