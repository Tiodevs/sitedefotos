// CSS
import style from './home.module.css'

// Capas
import Capa01 from '../../assets/Capas/Capa01.jpg'
import Capa02 from '../../assets/Capas/Capa2.jpg'
import Capa03 from '../../assets/Capas/Capa3.jpg'
import Capa04 from '../../assets/Capas/Capa4.jpg'
import Capa05 from '../../assets/Capas/Capa5.jpg'
import HoverCard from '../../components/Card/HoverCard'


//  Components


export function Home() {
    return (
        <>
            <div className={style.capas}>

                <HoverCard
                    image={Capa01}
                    title="Pré-Missão"
                    subTitle="Fotos feitas no Templo de Curitiba para registrar esse momento que é tão especial para o jovem e a família."
                />

                <HoverCard
                    image={Capa02}
                    title="Pré-Wedding"
                    subTitle="Fotos feitas no parque Tanguá e no Templo de Curitiba, registrado em um final de tarde."
                />
                <HoverCard
                    image={Capa04}
                    title="Ensaio de casal"
                    subTitle="Fotos tiradas no templo de Curitiba"
                />
                <HoverCard
                    image={Capa03}
                    title="Ensaio individual"
                    subTitle="*"
                />

            </div>
        </>
    )
}