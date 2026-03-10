import type { ReactNode } from "react"
import Navbar from "../Navbar/Navbar"
import { SidebarProvider } from "../ui/sidebar"

interface LayoutProps{
    children: ReactNode 
}
function Layout({children} : LayoutProps){
    return(
        <SidebarProvider>
            <Navbar/>
            {children}
        </SidebarProvider>
    )
}

export default Layout