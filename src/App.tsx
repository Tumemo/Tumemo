import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Cadastro from './pages/Cadastro'
import { TarefaProvider } from './context/TarefaContext'

export default function App() {
  return (
    <BrowserRouter>
      <TarefaProvider>
        <Routes>
          <Route index element={<Login/>}/>
          <Route path='/cadastro' element={<Cadastro/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </TarefaProvider>
    </BrowserRouter>
  )
}