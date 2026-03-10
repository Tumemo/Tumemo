import { useEffect, useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import axios from "axios"
import { Button } from "../ui/button"
import {Trash} from "lucide-react"
import BotaoEstado from "../BotaoEstado/BotaoEstado"


interface TarefaProps{
    id:number,
    nome:string,
    estado:string
}
function Tabela(){

    const [tarefas,setTarefas] = useState<TarefaProps[]>([])
    async function carregarTarefas(){
        await axios.get("http://localhost:8000/src/api/tasks.php",{
            params:{
                id_usuario:sessionStorage.getItem('id_usuario')
            }
        })
         .then(res => setTarefas(res.data.data))
         .catch(error => console.log(error))
    }
    async function apagarTarefa(id: number){
        await axios.delete("http://localhost:8000/src/api/tasks.php",{
            data:{
                id:id
            }
        })
         .then(res => alert(res.data.mensagem))
         .catch(error => console.log(error))
    }
    async function mudarEstadoTarefa(id:number,estado:string){
        if(estado == "Em Progresso"){
            estado = "Feito"
        } else{
            estado = "Em Progresso"
        }
        await axios.put("http://localhost:8000/src/api/tasks.php",{
            id:id,
            estado:estado
        })
         .then(res => alert(res.data.mensagem))
         .catch(error => console.log(error))
    }
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
                            <Button variant={'destructive'} onClick={()=> apagarTarefa}>Remover <Trash/></Button>
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    )
}

export default Tabela