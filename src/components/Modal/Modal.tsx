import { PlusCircle } from "lucide-react"
import { Button } from "../ui/button"
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import axios from "axios"
import { useState } from "react"

function Modal(){
    const [nome,setNome] = useState('')
    const [open,setOpen] = useState(false)
    async function AdicionarTarefa(evento:React.SubmitEvent<HTMLFormElement>){
        evento.preventDefault()
        await axios.post("http://localhost:8000/src/api/tasks.php",{
            nome: nome,
            id_usuario: sessionStorage.getItem('id_usuario')
        })
         .then(res => alert(res.data.mensagem))
         .catch(error => alert("Falha ao adicionar tarefa "+error))
    }
    return(
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild><Button><PlusCircle/>Nova Tarefa</Button></DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">Adicionar Nova Tarefa</DialogTitle>
                </DialogHeader>
                <form onSubmit={AdicionarTarefa}>
                    <Label htmlFor="nomeTarefa">Nome:</Label>
                    <Input onChange={e => setNome(e.target.value)} type="text" id="nomeTarefa" placeholder="Estudar, Treinar, Comprar..."/>
                    <div className="flex justify-end gap-3">
                        <DialogClose asChild><Button variant={'secondary'}>Cancelar</Button></DialogClose>
                        <Button type="submit">Adicionar</Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default Modal