import { Book, BookCheck, Home, LogOut, Moon, Settings, UserCircle } from "lucide-react"
import { Sidebar, SidebarContent, SidebarGroup, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarTrigger, useSidebar } from "../ui/sidebar"
import { TooltipProvider } from "../ui/tooltip"
import { Link, useNavigate } from "react-router-dom"

function Navbar(){
    const navegacao = useNavigate()
    const itens = [
        {
            texto:'Home',
            icon: <Home/>,
            path: '/dashboard'
        },
        {
            texto:"Configurações",
            icon: <Settings/>,
            path:'/config'
        },
        {
            texto:"Tarefas",
            icon: <Book/>,
            path:'/tasks'
        },
        {
            texto:"Tarefas Concluidas",
            icon: <BookCheck/>,
            path:'/tasks/completas'
        }
    ]

    function Logout(){
        sessionStorage.removeItem('id_usuario')
        alert("Logout feito com sucesso!")
        navegacao('/')
    }
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
                                <Link to={item.path}>
                                    <SidebarMenuButton className="cursor-pointer" tooltip={item.texto}>{item.icon}{item.texto}</SidebarMenuButton>
                                </Link>
                            </SidebarMenuItem>
                        )}
                    </SidebarMenu>
                </SidebarGroup>
                <SidebarGroup className="absolute bottom-0">
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton className="cursor-pointer" tooltip={'Mudar Tema'}><Moon/>Mudar tema</SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <SidebarMenuButton className="cursor-pointer" tooltip={'Perfil'}><UserCircle/>Perfil</SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <SidebarMenuButton onClick={()=> Logout()} className="cursor-pointer" tooltip={'Logout'}><LogOut/>Logout</SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
        </TooltipProvider>
        
    )
}

export default Navbar