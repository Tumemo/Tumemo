import { useEffect } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { Button } from "../ui/button"
import {Trash} from "lucide-react"
import BotaoEstado from "../BotaoEstado/BotaoEstado"
import { useTarefas } from "@/context/TarefaContext"



function Tabela(){

    const {carregarTarefas, tarefas,apagarTarefa , mudarEstadoTarefa} = useTarefas()
    
    
    useEffect(()=>{
        carregarTarefas()
    },[])
    return(
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Nº</TableHead>
                    <TableHead>Nome</TableHead>
                    <TableHead>Progresso</TableHead>
                    <TableHead>Ações</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {tarefas.map((tarefa,index) =>
                    <TableRow key={tarefa.id}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{tarefa.nome}</TableCell>
                        <TableCell>{tarefa.estado}</TableCell>
                        <TableCell className="flex gap-3">
                            <BotaoEstado estado={tarefa.estado} onClick={() => mudarEstadoTarefa(tarefa.id,tarefa.estado)} />
                            <Button variant={'destructive'} onClick={()=> apagarTarefa(tarefa.id)}>Remover <Trash/></Button>
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    )
}

export default Tabela