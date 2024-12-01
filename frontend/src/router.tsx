import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Login} from "@page/login/login";
import {Register} from "@page/register/register";

export default function  MainRouter  ()  {

    return <>
        <BrowserRouter>
            <Routes>
                <Route path="/auth/login" element={<Login/>} />
                <Route path="/auth/register" element={<Register/>} />
            </Routes>
        </BrowserRouter>

    </>
}