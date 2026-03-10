import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import axios from "axios"
import { useState } from "react"

function Cadastro(){
    const [nome,setNome] = useState('')
    const [email,setEmail] = useState('')
    const [senha,setSenha] = useState('')

    async function Cadastrar(evento: React.SubmitEvent<HTMLFormElement>){
        evento.preventDefault()
        await axios.post("http://localhost:8000/src/api/cadastro.php",{
            nome:nome,
            email:email,
            senha:senha
        })
         .then(res => alert(res.data.mensagem))
         .catch(error => console.log(error))
    }
    return(
        <Card className="w-1/3 m-auto translate-y-1/2">
            <CardHeader>
                <CardTitle>Cadastrar</CardTitle>
                <CardDescription>Crie uma conta para ter acesso ao nosso conteudo!</CardDescription>
            </CardHeader>
                <CardContent>
                    <form onSubmit={Cadastrar}>
                        <div>
                            <Label htmlFor="nome">Nome:</Label>
                            <Input onChange={e => setNome(e.target.value)} type="text" placeholder="Digite seu nome" id="nome"/>
                        </div>
                        <div>
                            <Label htmlFor="email">E-mail:</Label>
                            <Input onChange={e => setEmail(e.target.value)} type="email" placeholder="Exemplo@exemplo.com" id="email"/>
                        </div>
                        <div>
                            <Label htmlFor="senha">Nome:</Label>
                            <Input onChange={e => setSenha(e.target.value)} type="password" placeholder="••••••••" id="senha"/>
                        </div>
                        <Button type="submit" className="w-full">Criar Conta</Button>
                    </form>
                </CardContent>
        </Card>
    )
}

export default Cadastro