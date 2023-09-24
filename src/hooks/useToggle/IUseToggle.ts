export type IUseToggleReturn = [
  boolean,
  {
    setTrue: VoidFunction;
    setFalse: VoidFunction;
    toggle: VoidFunction;
  },
];
