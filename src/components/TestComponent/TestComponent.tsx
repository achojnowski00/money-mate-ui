import React, { FC } from 'react';

import ITestComponent from './ITestComponent';

const TestComponent: FC<ITestComponent> = ({ text }) => {
  return (
    <>
      {text}
      TestComponent
    </>
  );
};

export default TestComponent;
