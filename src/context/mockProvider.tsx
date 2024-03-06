import { ReactNode } from 'react';
import { userMocks } from '../mocks';
import { MockContext } from './mockContext';

type Props = {
  children: ReactNode;
};

export const MockContextProvider: React.FC<Props> = ({ children }: Props) => {
  return (
    <MockContext.Provider value={userMocks}>{children}</MockContext.Provider>
  );
};
