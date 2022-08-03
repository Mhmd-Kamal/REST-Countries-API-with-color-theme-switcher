import React from 'react';

function ThemeProvider(props) {
  return <div className='dark'>{props.children}</div>;
}

export default ThemeProvider;
