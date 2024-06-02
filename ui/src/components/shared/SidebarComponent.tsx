import Link from 'next/link'
import React from 'react'
import { IoHomeOutline, IoHomeSharp } from 'react-icons/io5'
import { PiUser } from 'react-icons/pi'

const tab = ["Tableau de bord", "Trafic TER", "Trafic BRT", "Trafic Peage", "Trafic AIDB", "Port Autonome", 
  "Alerting", "Parametres", "Gestion des utilisateurs"]

const SidebarComponent = () => {
  return (
    <div className="bg-green-60 w-full h-[100vh] flex flex-col items-center relative">

      <div className="w-full flex flex-col items-center my-8 pb-4 border-b-2 border-orange-600">
        <PiUser size={100} className="border-4 p-2 rounded-full border-green-600 shadow-md"/>
        <h2 className="font-bold text-lg my-2">Alpha amadou DIALLO</h2>
        <h4 className="italic">Administrateur</h4>
      </div>
      
      
      <nav className="h-[35vh]">
        <ul className="bg-red-40 w-full flex flex-col items-baseline h-full justify-between mb-8">
          { tab.map((item, ind) => <li key={ind}>
            <Link className="bg-orange-3 w-full cursor-pointer flex items-center" href="/">  
              <IoHomeOutline className='mr-4'/>
              {item}
            </Link>
          </li>)}
        </ul>

        <div className="w-full flex">
          <Link className="bg-red-600 text-center cursor-pointer text-white p-2 rounded-sm w-full" href="/">deconnexion</Link>
        </div>


        <div className="bg-green-500 absolute bottom-0 left-0 w-full p-4 italic text-base text-justify">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis laborum exercitationem libero.</p>
        </div>

      </nav>
      
    </div>
  )
}

export default SidebarComponent