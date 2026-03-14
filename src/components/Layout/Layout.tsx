import type { ReactNode } from "react"
import Navbar from "../Navbar/Navbar"
import { SidebarProvider } from "../ui/sidebar"
import { Toaster } from "sonner"

interface LayoutProps{
    children: ReactNode 
}
function Layout({children} : LayoutProps){
    return(
        <SidebarProvider>
            <Navbar/>
            {children}
            <Toaster position="bottom-right" duration={2000} expand={true} theme="dark"/>
        </SidebarProvider>
    )
}

export default Layout