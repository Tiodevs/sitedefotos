import { Link } from 'react-router-dom';
import style from './card.module.css'
import React from 'react';

const HoverCard = ({ image }) => {
  return (
    <div className={style.card}>
        <img src={image} alt="Card" className={style.cardImage} />
    </div>
  );
};

export default HoverCard;