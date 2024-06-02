import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SidebarComponent from "@/components/shared/SidebarComponent";


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = { 
  title: "TRAFIC SENEGAL", 
  description: "Simulation du trafic du senegal en Next.js & Spring Boot"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <main className="flex flex-row min-h-screen bg-slate-200">
        
          <aside className="flex w-[30rem] h-[100vh] scroll-m-0 bg-white">
            <SidebarComponent/>
          </aside>

          <section className="p-2">
            {children}
          </section>
            
        </main>
      </body>
    </html>
  )
}
