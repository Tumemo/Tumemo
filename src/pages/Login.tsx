import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Login(){
    useEffect(()=>{
        document.title = "Tumemo - Login"
    },[])
    const [email,setEmail] = useState('')
    const [senha,setSenha] = useState('')
    const navegacao = useNavigate()

    async function Logar(evento:React.SubmitEvent<HTMLFormElement>){
        evento.preventDefault()
        await axios.post("http://localhost:8000/src/api/login.php",{
            email:email,
            senha:senha
        })
         .then((res)=>{
            alert(res.data.mensagem)
            sessionStorage.setItem('id_usuario',res.data.id_usuario)
            setEmail('')
            setSenha('')
            navegacao("/dashboard")
         })
         .catch(error => alert("Erro ao fazer login! "+error))
    }
    return(
        <Card className="w-1/3 translate-y-1/2 m-auto">
            <CardHeader>
                <CardTitle>Entrar</CardTitle>
                <CardDescription>Entre para ter acesso ao nosso conteúdo</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={Logar} className="mb-3">
                    <div>
                        <Label htmlFor="email">E-mail:</Label>
                        <Input onChange={e => setEmail(e.target.value)} type="email" id="email" placeholder="Exemplo@exemplo.com" required/>
                    </div>
                    <div>
                        <Label htmlFor="senha">Senha:</Label>
                        <Input onChange={e => setSenha(e.target.value)} type="password" id="senha" placeholder="••••••••" required/>
                    </div>
                    <Button type="submit" className="w-full">Entrar</Button>
                </form>
                <Link to={'/cadastro'} className="text-blue-700 underline">
                    Ainda nao tem conta? Clique aqui
                </Link>
            </CardContent>
        </Card>
    )
}

export default Login