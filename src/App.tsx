import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Cadastro from './pages/Cadastro'
import { TarefaProvider } from './context/TarefaContext'
import Layout from '@/components/Layout/Layout'
import MudarTema from './pages/MudarTema'

function LayoutProvider(){
  return(
    <Layout>
      <Outlet/>
    </Layout>
  )
}
export default function App() {
  return (
    <BrowserRouter>
      <TarefaProvider>
        <Routes>
          <Route index element={<Login/>}/>
          <Route path='/cadastro' element={<Cadastro/>}/>
          <Route element={<LayoutProvider/>}>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/mudartema' element={<MudarTema/>}/>
          </Route>
        </Routes>
      </TarefaProvider>
    </BrowserRouter>
  )
}