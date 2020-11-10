import React, { useState, useEffect } from 'react';
import s from './Parallax.module.scss';

import SmallPokeBallPng from './assets/PokeBall1.png';
import CloudPng from './assets/Cloud1.png';
import PokeBallPng from './assets/PokeBall2.png';
import CloudBigPng from './assets/Cloud2.png';
import PikachuPng from './assets/Pikachu.png';

const Parallax = () => {
  const [screenX, setScreenX] = useState(0);
  const [screenY, setScreenY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setScreenX(event.screenX);
      setScreenY(event.screenY);
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => removeEventListener('mousemove', handleMouseMove);
  }, [screenX, screenY]);
  return (
    <div className={s.root}>
      <div className={s.smallPokeBall}>
        <img
          src={SmallPokeBallPng}
          alt="Small PokeBall"
          style={{ transform: `translate(${screenY * 0.03}px,${screenX * 0.06}px )` }}
        />
      </div>
      <div className={s.cloud}>
        <img
          src={CloudPng}
          alt="Cloud PokeBall"
          style={{ transform: `translate(${screenY * 0.03}px,${screenX * 0.09}px )` }}
        />
      </div>
      <div className={s.cloudBig}>
        <img
          src={CloudBigPng}
          alt="Cloud Big PokeBall"
          style={{ transform: `translate(${screenY * 0.03}px,${screenX * 0.03}px )` }}
        />
      </div>

      <div className={s.pokeBall}>
        <img
          src={PokeBallPng}
          alt="Big PokeBall"
          style={{ transform: `translate(${screenY * 0.03}px,${screenX * 0.01}px )` }}
        />
      </div>
      <div className={s.pikachu}>
        <img
          src={PikachuPng}
          alt="Cloud PokeBall"
          style={{ transform: `translate(${screenY * 0.03}px,${screenX * 0.13}px )` }}
        />
      </div>
    </div>
  );
};

export default Parallax;
