import React from "react";
import LineChart from '@/components/charts/LineChart';
import { PiRoadHorizon, PiAirplane } from "react-icons/pi";
import PanelStatCompoment from '@/components/PanelStatCompoment';
import LineDashedChart from '@/components/charts/LineDashedChart';
import ColumnBasicChart from '@/components/charts/ColumnBasicChart';
import ColumnStrackedChart from '@/components/charts/ColumnStackedChart';
import { IoTrainOutline, IoBusOutline, IoBoatOutline } from "react-icons/io5";



export default function Home() {
  return (
      <React.Fragment>
        <div className="flex flex-wrap justify-around pb-4">
          <PanelStatCompoment IconTitle={<IoTrainOutline className="text-green-800" size={75}/>} title="passagers"
            count_glo={23445} count_in={23} label_in="Aller"
            count_out={44} label_out="Retour" 
          />

          <PanelStatCompoment IconTitle={<IoBusOutline className="text-green-800" size={75}/>} title="passagers"
            count_glo={23445} count_in={23} label_in="Aller"
            count_out={44} label_out="Retour" 
          />

          <PanelStatCompoment IconTitle={<PiRoadHorizon className="text-green-800" size={75}/>} title="passagers"
            count_glo={23445} count_in={23} label_in="Entrant"
            count_out={44} label_out="Sortant" 
          />

          <PanelStatCompoment IconTitle={<PiAirplane className="text-green-800" size={75}/>} title="passagers"
            count_glo={23445} count_in={23} label_in="Arrivé"
            count_out={44} label_out="Départ" 
          />

          <PanelStatCompoment IconTitle={<IoBoatOutline className="text-green-800" size={75}/>} title="contenaires"
            count_glo={23445} count_in={23} label_in="Quaie"
            count_out={44} label_out="Départ" 
          />
        </div>


        <div className="flex flex-wrap bg-white rounded p-4">
          <LineChart />
          <LineDashedChart/>
          <ColumnBasicChart/>
          <ColumnStrackedChart/>
        </div>

      </React.Fragment>
  )
}
