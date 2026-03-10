import { CheckCircle, X } from "lucide-react"
import { Button } from "../ui/button"

interface BotaoProps{
    estado:string,
    onClick: ()=> void
}

function BotaoEstado({estado,onClick}:BotaoProps){
    const feito = estado == "Feito" ? true : false
    const classe = feito ? "bg-amber-500 hover:bg-amber-600" : "bg-emerald-500 text-white hover:bg-emerald-600"
    const texto = feito ? "Desmarcar" : "Marcar Como Concludo"

    return(
        <Button className={classe} onClick={onClick}>
            {texto}
            {feito ? <X/> : <CheckCircle/>}
        </Button>        
    )
}

export default BotaoEstado