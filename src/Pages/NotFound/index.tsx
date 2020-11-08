import React from 'react';
import s from './NotFound.module.scss';
import { ReactComponent as R } from './assets/R.svg';
import { ReactComponent as Error } from './assets/404.svg';

const NotFound = () => {
  return (
    <div className={s.root}>
      <div className={s.images}>
        <div className={s.error}>
          <Error />
        </div>
        <div className={s.r}>
          <R />
        </div>
      </div>

      <p className={s.title}>The rocket team has won this time.</p>
    </div>
  );
};

export default NotFound;
