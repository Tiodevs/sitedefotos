import Capa01 from './assets/Capas/Capa01.jpg'
import Capa02 from './assets/Capas/Capa2.jpg'
import Capa03 from './assets/Capas/Capa3.jpg'
import Capa04 from './assets/Capas/Capa4.jpg'

// Album 01
import Album0101 from './assets/Ensaio01/01.jpg'
import Album0102 from './assets/Ensaio01/02.jpg'
import Album0103 from './assets/Ensaio01/03.jpg'
import Album0104 from './assets/Ensaio01/04.jpg'
import Album0105 from './assets/Ensaio01/05.jpg'
import Album0106 from './assets/Ensaio01/06.jpg'
import Album0107 from './assets/Ensaio01/07.jpg'
import Album0108 from './assets/Ensaio01/08.jpg'
import Album0109 from './assets/Ensaio01/09.jpg'
import Album0110 from './assets/Ensaio01/10.jpg'
import Album0111 from './assets/Ensaio01/11.jpg'

// Album 01
import Album0201 from './assets/Ensaio02/01.jpg'
import Album0202 from './assets/Ensaio02/02.jpg'
import Album0203 from './assets/Ensaio02/03.jpg'
import Album0204 from './assets/Ensaio02/04.jpg'
import Album0206 from './assets/Ensaio02/06.jpg'
import Album0207 from './assets/Ensaio02/07.jpg'
import Album0208 from './assets/Ensaio02/08.jpg'
import Album0209 from './assets/Ensaio02/09.jpg'
import Album0210 from './assets/Ensaio02/10.jpg'
import Album0211 from './assets/Ensaio02/11.jpg'

export const DBfotos = [
    {
        id: 1,
        foto: Capa01,
        title: "Pré-Missão",
        subTitle: "Fotos feitas no Templo de Curitiba para registrar esse momento que é tão especial para o jovem e a família.",
        album: [
            Album0101, Album0102, Album0103, Album0104, Album0105, Album0106, Album0107, Album0108, Album0109, Album0110, Album0111
        ]
    },
    {
        id: 2,
        foto: Capa02,
        title: "Pré-Wedding",
        subTitle: "Fotos feitas no parque Tanguá e no Templo de Curitiba, registrado em um final de tarde.",
        album: [
            Album0204, Album0206, Album0207, Album0208, Album0209, Album0210, Album0211,Album0201, Album0202, Album0203
        ]
    },
    {
        id: 3,
        foto: Capa04,
        title: "Ensaio de casal",
        subTitle: "Fotos tiradas no templo de Curitiba",
        album: [
            Capa04, Capa02,Capa04,Capa04,Capa04,Capa04,
        ]
    },
    {
        id: 4,
        foto: Capa03,
        title: "Ensaio individual",
        subTitle: "*",
        album: [
            Capa03, Capa03, Capa03, Capa03, Capa03,
        ]
    }
];