import React, { Component }  from 'react';
import { CloseOutline } from 'antd-mobile-icons';
import logo from '../../assets/twitter-logo.svg';

import style from './index.module.css';

export default () => (
  <div className={style.header}>
    <CloseOutline className={style.closeIcon} />
    <img src={logo} alt="twitter-logo" className={style.twitterLog} />
  </div>
);
