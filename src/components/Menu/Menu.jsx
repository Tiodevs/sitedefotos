import style from './menu.module.css'
import logo from '../../assets/LogoFelipe.svg'
import './hamburgers.css'
import { useState } from 'react'


import LogoIntagram from '../../assets/LogoIntagram.svg'
import LogoWhatsApp from '../../assets/LogoWhatsApp.svg'
import { Link } from 'react-router-dom'




export function Menu() {

    const [isActive, setIsActive] = useState('hamburger hamburger--collapse')
    const [menuMobi, setMenuMobi] = useState(style.menuMobi)

    function handleIsActive() {
        if (isActive === "hamburger hamburger--collapse") {
            setIsActive("hamburger hamburger--collapse is-active")
        } else {
            setIsActive("hamburger hamburger--collapse")
        }

        if (menuMobi === style.menuMobi) {
            setMenuMobi(style.menuMobiOpen)
        } else {
            setMenuMobi(style.menuMobi)
        }
    }

    return (
        <nav className={style.menu} id='menuAnimation'>
            <div>

                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/sobre">Sobre</Link>
                </ul>

                <img src={logo} alt='Logo Header'/>

                <ul>
                    <a href='https://www.instagram.com/somente_ofelipe/' target='_blank'>
                        <img src={LogoWhatsApp} className={style.menuicon} />
                    </a>
                    <a href='https://www.instagram.com/somente_ofelipe/' target='_blank'>
                        <img src={LogoIntagram} className={style.menuicon} />
                    </a>

                </ul>


                <button class={isActive} type="button" onClick={handleIsActive}>
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
            </div>

            <ul className={menuMobi}>
                <Link to="/" onClick={handleIsActive}>Home</Link>
                <Link to="/sobre" onClick={handleIsActive}>Sobre</Link>
            </ul>
        </nav>



    )
}