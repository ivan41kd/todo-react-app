import { memo } from 'react';
import { childrenProp } from '../App';

import React from 'react';

const List = memo(({ children }: childrenProp) => {
  console.log('render list');
  return <div className='main-option-wrapper'>{children}</div>;
});

export default List;
