import { IoTrainOutline, IoBusOutline, IoBoatOutline } from "react-icons/io5";
import { PiRoadHorizon, PiAirplane } from "react-icons/pi";
import LineDashedChart from '@/components/charts/LineDashedChart';
import ColumnBasicChart from '@/components/charts/ColumnBasicChart';
import ColumnStrackedChart from '@/components/charts/ColumnStackedChart';
import LineChart from '@/components/charts/LineChart';
import PanelStatCompoment from '@/components/PanelStatCompoment';
import SidebarComponent from "@/components/shared/SidebarComponent";


export default function Home() {
  return (
    <main className="flex flex-row min-h-screen bg-slate-200">
      
      <aside className="flex w-[30rem] h-[100vh] scroll-m-0 bg-white">
        <SidebarComponent/>
      </aside>

      <section className="p-2 bg-slate-200">
        <div className="flex flex-wrap justify-around pb-4">
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


        <div className="flex flex-wrap bg-white rounded p-4">
          <LineChart />
          <LineDashedChart/>
          <ColumnBasicChart/>
          <ColumnStrackedChart/>
        </div>
      </section>

    </main>
  )
}
