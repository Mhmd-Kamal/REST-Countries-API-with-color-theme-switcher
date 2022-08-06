import React from 'react';
import { useRecoilValue } from 'recoil';
import { ThemeAtom } from '../utils/recoil/atoms';

function ThemeProvider(props) {
  const theme = useRecoilValue(ThemeAtom);

  return <div className={theme}>{props.children}</div>;
}

export default ThemeProvider;
