import Image from 'next/image'
import { IoTrainOutline, IoBusOutline } from "react-icons/io5";
import { PiRoadHorizon } from "react-icons/pi";
import { HiOutlineArrowLongDown, HiOutlineArrowLongUp } from "react-icons/hi2";
import LineDashedChart from '../components/charts/LineDashedChart';
import ColumnBasicChart from '../components/charts/ColumnBasicChart';
import ColumnStrackedChart from '../components/charts/ColumnStackedChart';
import LineChart from '../components/charts/LineChart';
import PanelStatCompoment from '@/components/PanelStatCompoment';



export default function Home() {
  return (
    <main className="fle min-h-screen flex-col items-center justify-between bg-lime-100">
      
      <div className="flex bg-red-500">
        <PanelStatCompoment IconTitle={<IoTrainOutline size={75}/>} title="passagers"
          count_glo={23445} count_in={23} label_in="Aller"
          count_out={44} label_out="Retour" 
          IconIn={<HiOutlineArrowLongUp className="text-green-600" size={20} /> }
          IconOut={<HiOutlineArrowLongDown className="text-red-600" size={20} />}
        />

        <PanelStatCompoment IconTitle={<IoBusOutline size={75}/>} title="passagers"
          count_glo={23445} count_in={23} label_in="Aller"
          count_out={44} label_out="Retour" 
          IconIn={<HiOutlineArrowLongUp className="text-green-600" size={20} /> }
          IconOut={<HiOutlineArrowLongDown className="text-red-600" size={20} />}
        />

        <PanelStatCompoment IconTitle={<PiRoadHorizon size={75}/>} title="passagers"
          count_glo={23445} count_in={23} label_in="Entrant"
          count_out={44} label_out="Sortant" 
          IconIn={<HiOutlineArrowLongUp className="text-green-600" size={20} /> }
          IconOut={<HiOutlineArrowLongDown className="text-red-600" size={20} />}
        />
      </div>


      <LineChart />
      <LineDashedChart/>
      <ColumnBasicChart/>
      <ColumnStrackedChart/>

    </main>
  )
}
