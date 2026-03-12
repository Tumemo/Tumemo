import { ChevronDownIcon, PlusCircle } from "lucide-react"
import { Button } from "../ui/button"
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { useState } from "react"
import { Textarea } from "../ui/textarea"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { Calendar } from "../ui/calendar"
import { useTarefas } from "@/context/TarefaContext"

function Modal(){
    const [date,setDate] = useState<Date>()
    const [nome,setNome] = useState('')
    const [open,setOpen] = useState(false)
    const {AdicionarTarefa} = useTarefas()
    async function adicionarTarefa(evento:React.SubmitEvent<HTMLFormElement>){
        evento.preventDefault()
        const sucesso = await AdicionarTarefa(nome)
        if(sucesso){
            setNome('')
            setOpen(false)
        }
    }
    return(
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild><Button><PlusCircle/>Nova Tarefa</Button></DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">Adicionar Nova Tarefa</DialogTitle>
                </DialogHeader>
                <form onSubmit={adicionarTarefa}>
                    <div>
                        <Label htmlFor="nomeTarefa">Nome:</Label>
                        <Input onChange={e => setNome(e.target.value)} type="text" id="nomeTarefa" placeholder="Estudar, Treinar, Comprar..."/>
                    </div>
                    <div>
                        <Label htmlFor="descricao">Descrição tarefa</Label>
                        <Textarea className="my-3" id="descricao" placeholder="Fazer assim...."/>
                    </div>
                    <div className="mb-3">
                        <Label className="mb-3">Prioridade</Label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Selecione uma opção.." />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Prioridade</SelectLabel>
                                    <SelectItem value="Baixa">Baixa</SelectItem>
                                    <SelectItem value="Média">Média</SelectItem>
                                    <SelectItem value="Alta">Alta</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant={'outline'} data-empty={!date}>
                                     
                                    <ChevronDownIcon/></Button>
                            </PopoverTrigger>
                            <PopoverContent>
                                <Calendar mode="single" selected={date} onSelect={setDate} defaultMonth={date}/>
                            </PopoverContent>
                        </Popover>
                    </div>
                    <div className="flex justify-between">
                        <DialogClose asChild><Button variant={'secondary'}>Cancelar</Button></DialogClose>
                        <Button type="submit">Adicionar</Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default Modal