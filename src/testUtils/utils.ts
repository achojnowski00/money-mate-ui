import { act } from '@testing-library/react';

export const wait = (): Promise<unknown> => new Promise((res) => setTimeout(res, 0));

/***
 * asynchronous 'act' with 'wait' function inside
 */
export const waitWithAct = (): Promise<unknown> =>
  act(async () => {
    await wait();
  });
