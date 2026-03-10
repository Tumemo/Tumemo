import { Home, LogOut, Settings } from "lucide-react"
import { Sidebar, SidebarContent, SidebarGroup, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarTrigger, useSidebar } from "../ui/sidebar"
import { TooltipProvider } from "../ui/tooltip"

function Navbar(){
    const itens = [
        {
            texto:'Home',
            icon: <Home/>
        },
        {
            texto:"Configurações",
            icon: <Settings/>
        }
    ]
    const {open} = useSidebar()
    return(
        <TooltipProvider>
            <Sidebar collapsible="icon">
            <SidebarHeader className="flex-row justify-between items-center">
                {open && <h2 className="text-2xl font-bold animate-menuTitle">Tumemo</h2>}
                <SidebarTrigger/>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarMenu>
                        {itens.map(item =>
                            <SidebarMenuItem key={item.texto}>
                                <SidebarMenuButton className="cursor-pointer" tooltip={item.texto}>{item.icon}{item.texto}</SidebarMenuButton>
                            </SidebarMenuItem>
                        )}
                    </SidebarMenu>
                </SidebarGroup>
                <SidebarGroup className="absolute bottom-0">
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton className="cursor-pointer"><LogOut/>Logout</SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
        </TooltipProvider>
        
    )
}

export default Navbar