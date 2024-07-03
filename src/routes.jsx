import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home/Home'
import { Album } from './pages/Album/Album'
import { Sobre } from './pages/Sobre/Sobre';

function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/sobre' element={<Sobre/>}/>
                <Route path='/album/:id' element={<Album/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;

