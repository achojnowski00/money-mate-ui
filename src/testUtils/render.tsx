import React, { FC, ReactElement } from 'react';
import { render, renderHook, RenderHookOptions, RenderHookResult } from '@testing-library/react';
import type { RenderResult, RenderOptions } from '@testing-library/react';

type ProvidersProps = {
  children: ReactElement;
};

const MockProviders: FC<ProvidersProps> = ({ children }: ProvidersProps) => {
  return <>{children}</>;
};

type CustomRenderOptions = {
  wrapperProps?: Omit<ProvidersProps, 'children'>;
} & RenderOptions;

const customRender = (ui: React.ReactElement, options?: CustomRenderOptions): RenderResult => {
  const view = render(ui, {
    wrapper: (props) => <MockProviders {...props} {...options?.wrapperProps} />,
    ...options,
  });

  return view;
};

type CustomRenderHookOptions<P> = {
  wrapperProps?: Omit<ProvidersProps, 'children'>;
} & RenderHookOptions<P>;

const customRenderHook = <R, P>(
  render: (initialProps: P) => R,
  options: CustomRenderHookOptions<P>,
): RenderHookResult<R, P> =>
  renderHook<R, P>(render, {
    wrapper: (props) => <MockProviders {...props} {...options?.wrapperProps} />,
    ...options,
  });

export * from '@testing-library/react';
export { customRender as render };
export { customRenderHook as renderHook };
