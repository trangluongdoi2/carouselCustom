import React from 'react';
import style from './Card.module.css';

const Card = ({ name, number }) => {
  return (
    <>
      <div className={style.container}>
        <div className={style.child1}>{name}</div>
        <div className={style.child2}>{number}</div>
      </div>
    </>
  );
};

export default Card;
