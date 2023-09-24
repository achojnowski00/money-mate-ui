import React, { FC } from 'react';

import useToggle from '../../hooks/useToggle/useToggle';

import ITestComponent from './ITestComponent';

const TestComponent: FC<ITestComponent> = ({ text }) => {
  const [state, { toggle, setTrue, setFalse }] = useToggle(false);

  return (
    <>
      {text}
      TestComponent
      <div>
        {state ? 'true' : 'false'}
        <button onClick={toggle}>toggle</button>
        <button onClick={setTrue}>setTrue</button>
        <button onClick={setFalse}>setFalse</button>
      </div>
    </>
  );
};

export default TestComponent;
