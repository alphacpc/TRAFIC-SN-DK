import Image from 'next/image'
import { IoTrainOutline, IoBusOutline } from "react-icons/io5";
import { PiRoadHorizon } from "react-icons/pi";
import { HiOutlineArrowLongDown, HiOutlineArrowLongUp } from "react-icons/hi2";
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const LINE_WITH_LABELS = {
  series: [
    {
      name: "High - 2013",
      data: [28, 29, 33, 36, 32, 32, 33]
    },
    {
      name: "Low - 2013",
      data: [12, 11, 14, 18, 17, 13, 13]
    }
  ],
  options: {
    chart: {
      height: 350,
      type: 'line',
      dropShadow: {
        enabled: true,
        color: '#000',
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2
      },
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      }
    },
    colors: ['#77B6EA', '#545454'],
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: 'smooth'
    },
    title: {
      text: 'Average High & Low Temperature',
      align: 'left'
    },
    grid: {
      borderColor: '#e7e7e7',
      row: {
        colors: ['#f3f3f3', 'transparent'],
        opacity: 0.5
      },
    },
    markers: {
      size: 1
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      title: {
        text: 'Month'
      }
    },
    yaxis: {
      title: {
        text: 'Temperature'
      },
      min: 5,
      max: 40
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      floating: true,
      offsetY: -25,
      offsetX: -5
    }
  } as ApexOptions,
};


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


      <Chart 
        options={LINE_WITH_LABELS.options} 
        series={LINE_WITH_LABELS.series} 
        type="line" 
        height={350} 
      />

    </main>
  )
}
