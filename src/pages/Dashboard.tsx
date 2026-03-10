import Layout from "@/components/Layout/Layout"
import Modal from "@/components/Modal/Modal"
import Tabela from "@/components/Tabela/Tabela"
import { Button } from "@/components/ui/button"
import { Card, CardContent} from "@/components/ui/card"
import { LogOut } from "lucide-react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Dashboard() {
    const navegacao = useNavigate()

    useEffect(() => {
        document.title = "Tumemo - Dashboard"
        if (!sessionStorage.getItem('id_usuario')) {
            alert("Você precisa logar!")
            navegacao('/')
        }
    }, [])

    function Deslogar(){
        sessionStorage.removeItem('id_usuario')
        alert("Logout Concluido")
        navegacao('/')
    }
    return (
        <Layout>
            <main className="w-dvw p-5">
                <section className="flex justify-around h-1/3 mb-5">
                    <Card className="border-blue-800 border w-1/4">
                        <CardContent className="flex flex-col justify-center items-center h-full gap-2">
                            <h2 className="text-3xl">12</h2>
                            <p>Tarefas Pendentes</p>
                        </CardContent>
                    </Card>
                    <Card className="border-emerald-500 border w-1/4">
                        <CardContent className="flex flex-col justify-center items-center h-full">
                            <p>0% Completo</p>
                        </CardContent>
                    </Card>
                    <Card className="border-orange-500 border w-1/4">
                        <CardContent className="flex flex-col justify-center items-center h-full gap-2">
                            <h2 className="text-3xl">2</h2>
                            <p>Tarefas Atrasadas</p>
                        </CardContent>
                    </Card>
                </section>
                <section>
                    <div className="flex justify-between">
                        <h2>Tarefas</h2>
                        <Modal />
                    </div>
                    <Tabela />
                </section>
                <Button onClick={()=> Deslogar()}><LogOut/></Button>
            </main>
        </Layout>
    )
}

export default Dashboard