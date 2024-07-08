import React, { memo } from 'react';
import { childrenProp } from '../App';
const Footer = memo(({ children }: childrenProp) => {
  console.log('render footer');
  return <div className='main-footer'>{children}</div>;
});
export default Footer;
