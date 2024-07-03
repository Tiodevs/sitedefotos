import { Link } from 'react-router-dom';
import style from './card.module.css'
import React from 'react';

const HoverCard = ({ image, title, subTitle, id }) => {
  return (
    <div className={style.card}>
      <img src={image} alt="Card" className={style.cardImage} />
      <Link to={`/album/${id}`}>
        <div className={style.cardText}>
          <h2 className={style.cardTitle}>{title}</h2>
          <p className={style.cardSubtitle}>{subTitle}</p>
        </div>
      </Link>
    </div>
  );
};

export default HoverCard;