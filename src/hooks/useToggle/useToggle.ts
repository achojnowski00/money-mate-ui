import { useCallback, useState } from 'react';

import { IUseToggleReturn } from './IUseToggle';

export default function useToggle(initialState: boolean): IUseToggleReturn {
  const [state, setState] = useState<boolean>(initialState);

  const setTrue = useCallback(() => setState(true), []);
  const setFalse = useCallback(() => setState(false), []);
  const toggle = useCallback(() => setState((value) => !value), []);

  return [state, { setTrue, setFalse, toggle }];
}
