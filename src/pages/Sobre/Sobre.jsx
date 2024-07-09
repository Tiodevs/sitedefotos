import style from './sobre.module.css'
import foto from '../../assets/fotosobre.png'

export function Sobre() {
    return (
        <>
            <div className={style.texto}>
                <img src={foto} className={style.foto} alt="" />
                <h1 className={style.titulo}>Sobre mim</h1>
                <p className={style.subTitulo}>Olá, meu nome é Felipe já tenho mais de 2 anos de experiência com fotografias, sou cristão e apaixonado por eternizar os momentos importantes das pessoas atravez da fotografia</p>

                <a className={style.btn} href='https://wa.me/+5541987208843' >
                    Entre em contato
                </a>
            </div>
        </>
    )
}