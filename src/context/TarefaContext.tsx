import axios from "axios";
import { createContext, useContext, useState, type ReactNode } from "react";
import { toast } from "sonner";

interface TarefaContextProps{
    tarefas: TarefaProps[],
    carregarTarefas: ()=>void
    apagarTarefa: (id:number)=>void
    mudarEstadoTarefa: (id:number,estado:string) => void
    AdicionarTarefa: (nome:string) => Promise<boolean>
}
const TarefaContext = createContext<TarefaContextProps>({} as TarefaContextProps)
type filho = {
    children: ReactNode
}
interface TarefaProps{
    id:number,
    nome:string,
    estado:string
}

export function TarefaProvider({children}:filho){
    const [tarefas,setTarefas] = useState<TarefaProps[]>([])

    async function carregarTarefas(){
        await axios.get(import.meta.env.VITE_API_TASKS,{
            params:{
                id_usuario:sessionStorage.getItem('id_usuario')
            }
        })
         .then(res => setTarefas(res.data.data))
         .catch(error => console.log(error))
    }
    async function apagarTarefa(id: number){
        await axios.delete(import.meta.env.VITE_API_TASKS,{
            data:{
                id:id
            }
        })
         .then(res => {
            toast.success(res.data.mensagem)
            setTarefas(prev => prev.filter(t => t.id !== id))
        })
         .catch(error => console.log(error))
    }
    async function mudarEstadoTarefa(id:number,estado:string){
        if(estado == "Em Progresso"){
            estado = "Feito"
        } else{
            estado = "Em Progresso"
        }
        await axios.put(import.meta.env.VITE_API_TASKS,{
            id:id,
            estado:estado
        })
        .then(res => {
            toast.success(res.data.mensagem)
            setTarefas(prev => prev.map(t => t.id == id ? {...t, estado:estado} : t))
        })
         .catch(error => console.log(error))
    }
    async function AdicionarTarefa(nome:string){
        try{
            const res = await axios.post(import.meta.env.VITE_API_TASKS,{
                nome: nome,
                id_usuario: sessionStorage.getItem('id_usuario')
            })
            toast.success(res.data.mensagem)
            setTarefas(prev => [...prev,res.data.nome])
            return true
        }catch(error){
            alert("Falha ao adicionar tarefa "+error)
            return false
        }
    }
    return(
        <TarefaContext.Provider value={{carregarTarefas,apagarTarefa,tarefas,mudarEstadoTarefa,AdicionarTarefa}}>
            {children}
        </TarefaContext.Provider>
    )
}

export function useTarefas(){
    return useContext(TarefaContext)
}