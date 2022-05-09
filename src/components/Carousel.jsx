import React, { useEffect, useState } from 'react';
import './Carousel.css';

const data = [
  'https://via.placeholder.com/300x100.png?text=Image6',
  'https://via.placeholder.com/300x100.png?text=Image1',
  'https://via.placeholder.com/300x100.png?text=Image2',
  'https://via.placeholder.com/300x100.png?text=Image3',
  'https://via.placeholder.com/300x100.png?text=Image4',
  'https://via.placeholder.com/300x100.png?text=Image5',
  'https://via.placeholder.com/300x100.png?text=Image1',
];

const Carousel = () => {
  let [index, setIndex] = useState(2);
  let [next, setNext] = useState(false);
  let [flag, setFlag] = useState(false);
  //   let [prev, setPrev] = useState(false);
  const prevFunction = () => {
    // setIndex(index === data.length - 1 ? 0 : index + 1);
    setIndex((i) => {
      if (i === Math.round(data.length / 2)) {
        setFlag(true);
      } else setFlag(false);
      return i < Math.round(data.length / 2) - 1
        ? i + 1
        : Math.round(data.length / 2) - 1;
    });
    setNext(true);
    // setPrev(false);
  };

  const nextFunction = () => {
    // setIndex(index === 0 ? data.length - 1 : index - 1);
    setIndex((i) => {
      if (i === -Math.round(data.length / 2)) {
        setFlag(true);
      } else setFlag(false);
      return i >= -Math.round(data.length / 2) + 1
        ? i - 1
        : -Math.round(data.length / 2) + 1;
    });
    // setPrev(true);
    setNext(false);
  };

  useEffect(() => {
    if (index === Math.round(data.length / 2) - 1) {
      setIndex(-Math.round(data.length / 2) + 2);
    }
    if (index === -Math.round(data.length / 2) + 1) {
      setIndex(Math.round(data.length / 2) - 2);
    }
  }, [index]);

  // let srcImg = data[index];
  console.log(index);
  return (
    <>
      <div className="carousel">
        <div
          className="carouselContainer"
          style={{
            transform: `translateX(${index * 300}px)`,
            transition:
              (index === Math.round(data.length / 2) - 2 ||
                index === -Math.round(data.length / 2) + 2) &&
              flag
                ? ''
                : '1s ease-in-out',
          }}
        >
          <img className="imgSlide" src={data[0]} alt="" />
          <img className="imgSlide" src={data[1]} alt="" />
          <img className="imgSlide" src={data[2]} alt="" />
          <img className="imgSlide" src={data[3]} alt="" />
          <img className="imgSlide" src={data[4]} alt="" />
          <img className="imgSlide" src={data[5]} alt="" />
          <img className="imgSlide" src={data[6]} alt="" />
        </div>
      </div>
      <div>
        <button className="btn" onClick={prevFunction}>
          Prev
        </button>
      </div>
      <div>
        <button className="btn" onClick={nextFunction}>
          Next
        </button>
      </div>
    </>
  );
};

export default Carousel;
