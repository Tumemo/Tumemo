import Modal from "@/components/Modal/Modal"
import Tabela from "@/components/Tabela/Tabela"
import { Card, CardContent} from "@/components/ui/card"
import { useTarefas } from "@/context/TarefaContext"
import { BookMarked, ChartColumnIncreasing, CircleAlert } from "lucide-react"
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
        <main className="w-dvw p-5">
            <section className="flex justify-around h-[15%] mb-5">
                <Card className=" w-1/4 p-2">
                    <CardContent className="flex justify-between h-full p-2">
                        <div>
                            <p className="text-texto-secundario">Tarefas Pendentes</p>
                            <h2 className="text-3xl font-bold">{tarefas.length - tarefasFeitas.length}</h2>
                        </div>
                        <div className="bg-indigo/10 p-1 h-max rounded-md">
                            <BookMarked className="text-indigo"/>
                        </div>
                    </CardContent>
                </Card>
                <Card className=" w-1/4 p-2">
                    <CardContent className="flex justify-between h-full p-2">
                        <div>
                            <p className="text-texto-secundario">Completo</p>
                            <h2 className="text-3xl font-bold">{porcentagem}%</h2>
                        </div>
                        <div className="bg-verde/10 h-max p-1 rounded-md">
                            <ChartColumnIncreasing className="text-verde"/>
                        </div>
                    </CardContent>
                </Card>
                <Card className="border w-1/4 p-2">
                    <CardContent className="flex justify-between h-full p-2">
                        <div>
                            <p className="text-texto-secundario">Tarefas Atrasadas</p>
                            <h2 className="text-3xl font-bold">2</h2>
                        </div>
                        <div className="bg-amarelo/10 h-max p-1 rounded-md">
                            <CircleAlert className="text-amarelo"/>
                        </div>
                    </CardContent>
                </Card>
            </section>
            <section>
                <div className="flex justify-between items-center my-3">
                    <h2>Tarefas</h2>
                    <Modal />
                </div>
                <Tabela />
            </section>
        </main>
    )
}

export default Dashboard