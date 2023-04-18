import {Route, Routes} from "react-router-dom"
import {Inicio_Sesion} from './components/InicioSesion/F_Inicio_Sesion'
import { F_registro } from './components/Registro/F_registro'
import { Password } from './components/Editar/Password'
import { Index } from "./components/Index/Index"
import { RegistroEmpresa } from "./components/Registro-empresa/RegistroEmpresa"
import { Dashboard } from "./components/dashboard_admin/Dashboard"
import { CardCode } from "./components/RecuperacionContrasena/CardCode/CardCode"
import { CardNewPassword } from "./components/RecuperacionContrasena/CardNew/CardNewPassword"
import { CardPassword } from "./components/RecuperacionContrasena/CardPassword/CardPassword"


export default function App() {
    return (
        <Routes>
            <Route path='/' element={<Index/>}/>
            <Route path='/login' element={<Inicio_Sesion/>}/>
            <Route path='/registro' element={<F_registro/>}/>
            <Route path='/password' element={<Password/>}/>
            <Route path='/RegistroEmpresa' element={<RegistroEmpresa/>}/>
            <Route path='/Dashboard' element={<Dashboard/>}/>
            <Route path='/CardCode' element={<CardCode/>}/>
            <Route path='/CardNew' element={<CardNewPassword/>}/>
            <Route path='/CardPassword' element={<CardPassword/>}/>


        </Routes>
    )
}
