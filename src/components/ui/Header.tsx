import React from 'react';
import { memo } from 'react';
import { childrenProp } from '../../App';

/* eslint-disable react/prop-types */
const Header = memo(({ children }: childrenProp) => {
  console.log('render header');
  return <div className='main-list-header'>{children}</div>;
});

export default Header;
