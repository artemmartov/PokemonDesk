import React from 'react';
import s from './NotFound.module.scss';
import Button from '../../components/Button';
import { ReactComponent as CommandR } from './assets/R.svg';
import { navigate } from 'hookrouter';

const NotFound = () => {
  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <div className={s.imageBlock}>
          <CommandR />
          <div>The rocket team has won this time</div>
          <Button onClick={() => navigate('/')}>RETURN</Button>
        </div>
        <div className={s.error}>404</div>
      </div>
    </div>
  );
};

export default NotFound;
