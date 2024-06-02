import Link from 'next/link'
import React from 'react'
import { IoHomeOutline } from 'react-icons/io5'
import { PiUser } from 'react-icons/pi'

const tab = ["Tableau de bord", "Trafic TER", "Trafic BRT", "Trafic Peage", "Trafic AIDB", "Port Autonome", 
  "Alerting", "Parametres", "Gestion des utilisateurs"]

const SidebarComponent = () => {
  return (
    <div className="bg-green-60 w-full h-[100vh] flex flex-col items-center relative">


      <div className="w-full flex flex-col items-center my-8 pb-4 border-b-4 border-slate-200">
        <PiUser size={100} className="p-2 rounded-full bg-gradient-to-tl from-green-600 to-sky-600 shadow-xl text-white"/>
        <h2 className="font-bold text-lg my-2">Alpha amadou DIALLO</h2>
        <h4 className="italic text-sm">Administrateur</h4>
      </div>
      
      
      <nav className="h-[35vh]">
        <ul className="bg-red-40 w-full flex flex-col items-baseline h-full justify-between mb-8">
          { tab.map((item, ind) => <li className="w-full " key={ind}>
            <Link className="cursor-pointer flex items-center" href="/">  
              <IoHomeOutline className='mr-4'/>
              {item}
            </Link>
          </li>)}
        </ul>


        <div className="w-full flex">
          <Link className="bg-red-600 text-center cursor-pointer text-white p-2 rounded-sm w-full" href="/">deconnexion</Link>
        </div>


        <div className="text-white font-bold
        bg-gradient-to-tl from-green-600 to-sky-600
        absolute bottom-0 left-0 w-full p-4 italic text-base text-justify">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis laborum exercitationem libero.</p>
        </div>

      </nav>
      
    </div>
  )
}

export default SidebarComponent