import React from 'react';
import Card from './Card';
import style from './ResponsiveTest.module.css';

const ResponsiveTest = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.item}>
          <div className={style.child1}>Box 1</div>
          <div className={style.child2}>1</div>
        </div>
        <div className={style.item}>
          <div className={style.child1}>Box 2</div>
          <div className={style.child2}>2</div>
        </div>
        <div className={style.item}>
          <div className={style.child1}>Box 3</div>
          <div className={style.child2}>3</div>
        </div>
        <div className={style.item}>
          <div className={style.child1}>Box 4</div>
          <div className={style.child2}>4</div>
        </div>
        <div className={style.item}>
          <div className={style.child1}>Box 5</div>
          <div className={style.child2}>5</div>
        </div>
        <div className={style.item}>
          <div className={style.child1}>Box 6</div>
          <div className={style.child2}>6</div>
        </div>
      </div>
    </>
  );
};

export default ResponsiveTest;
