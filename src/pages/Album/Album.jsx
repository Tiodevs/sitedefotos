import { useParams } from 'react-router-dom'

import * as React from "react";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import { DBfotos } from '../../DBfotos'

import style from './album.module.css'
import { Download, Fullscreen, Thumbnails, Zoom } from 'yet-another-react-lightbox/plugins';

export function Album() {

    const [open, setOpen] = React.useState(true);

    const { id } = useParams()
    const item = id - 1

    const album = DBfotos[item].album
    const titulo = DBfotos[item].title
    const subTitle = DBfotos[item].subTitle

    const fotosAlbum = album.map(item => (
        { src: item,
            alt: "image 1",
            width: 3840,
            height: 2560,
            srcSet: [
              { src: item, width: 320, height: 213 },
              { src: item, width: 640, height: 427 },
              { src: item, width: 1200, height: 800 },
              { src: item, width: 2048, height: 1365 },
              { src: item, width: 3840, height: 2560 },
            ]
        }
    ))

    return (
        <>
        <div className={style.texto}>
            <h1 className={style.titulo}>{titulo}</h1>
            <p className={style.subTitulo}>{subTitle}</p>

            <button className={style.btn} type="button" onClick={() => setOpen(true)}>
                Ver Álbum
            </button>
        </div>

            <Lightbox
                plugins={[Download, Fullscreen, Zoom, Thumbnails]}
                open={open}
                close={() => setOpen(false)}
                slides={fotosAlbum}
            />
        </>
    )
}