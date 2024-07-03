import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home/Home'
import { Album } from './pages/Album/Album'
import { Sobre } from './pages/Sobre/Sobre';
import { Menu } from './components/Menu/Menu';

function RoutesApp(){
    return(
        <BrowserRouter>
            <Menu/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/sobre' element={<Sobre/>}/>
                <Route path='/album/:id' element={<Album/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;

