import { ReactNode } from 'react';
import { userMocks, videoMocks } from '../mocks';
import { MockContext } from './mockContext';

type Props = {
  children: ReactNode;
};

export const MockContextProvider: React.FC<Props> = ({ children }: Props) => {
  const contextValue = { users: userMocks, categories: videoMocks };

  return (
    <MockContext.Provider value={contextValue}>{children}</MockContext.Provider>
  );
};
