import Image from 'next/image'
import { IoTrainOutline, IoBusOutline, IoBoatOutline } from "react-icons/io5";
import { IoIosAirplane } from "react-icons/io";
import { PiRoadHorizon, PiAirplane } from "react-icons/pi";
import LineDashedChart from '../components/charts/LineDashedChart';
import ColumnBasicChart from '../components/charts/ColumnBasicChart';
import ColumnStrackedChart from '../components/charts/ColumnStackedChart';
import LineChart from '../components/charts/LineChart';
import PanelStatCompoment from '@/components/PanelStatCompoment';



export default function Home() {
  return (
    <main className="flex flex-row min-h-screen bg-lime-100">
      
      <aside className="flex w-[25rem] bg-amber-600">
        SidebarComponent
      </aside>

      <section className="p-2 bg-slate-200">
        <div className="flex flex-wrap justify-around">
          <PanelStatCompoment IconTitle={<IoTrainOutline size={75}/>} title="passagers"
            count_glo={23445} count_in={23} label_in="Aller"
            count_out={44} label_out="Retour" 
          />

          <PanelStatCompoment IconTitle={<IoBusOutline size={75}/>} title="passagers"
            count_glo={23445} count_in={23} label_in="Aller"
            count_out={44} label_out="Retour" 
          />

          <PanelStatCompoment IconTitle={<PiRoadHorizon size={75}/>} title="passagers"
            count_glo={23445} count_in={23} label_in="Entrant"
            count_out={44} label_out="Sortant" 
          />

          <PanelStatCompoment IconTitle={<PiAirplane size={75}/>} title="passagers"
            count_glo={23445} count_in={23} label_in="Entrant"
            count_out={44} label_out="Sortant" 
          />

          <PanelStatCompoment IconTitle={<IoBoatOutline size={75}/>} title="passagers"
            count_glo={23445} count_in={23} label_in="Entrant"
            count_out={44} label_out="Sortant" 
          />

        </div>


        <div className="flex flex-wrap bg-cyan-300">
          <LineChart />
          <LineDashedChart/>
          <ColumnBasicChart/>
          <ColumnStrackedChart/>
        </div>
      </section>

    </main>
  )
}
