import Layout from "@/components/Layout/Layout"
import Modal from "@/components/Modal/Modal"
import Tabela from "@/components/Tabela/Tabela"
import { Card, CardContent} from "@/components/ui/card"
import { useTarefas } from "@/context/TarefaContext"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Dashboard() {
    const navegacao = useNavigate()
    const {tarefas} = useTarefas()
    const tarefasFeitas = tarefas.filter(tarefa => tarefa.estado === "Feito")
    const porcentagem = Math.floor((tarefasFeitas.length/tarefas.length)*100)
    useEffect(() => {
        document.title = "Tumemo - Dashboard"
        if (!sessionStorage.getItem('id_usuario')) {
            alert("Você precisa logar!")
            navegacao('/')
        }
    }, [])
    return (
        <Layout>
            <main className="w-dvw p-5">
                <section className="flex justify-around h-1/3 mb-5">
                    <Card className="border-blue-800 border w-1/4">
                        <CardContent className="flex flex-col justify-center items-center h-full gap-2">
                            <h2 className="text-3xl">{tarefas.length}</h2>
                            <p>Tarefas Pendentes</p>
                        </CardContent>
                    </Card>
                    <Card className="border-emerald-500 border w-1/4">
                        <CardContent className="flex flex-col justify-center items-center h-full">
                            <p>{porcentagem}% Completo</p>
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
            </main>
        </Layout>
    )
}

export default Dashboard