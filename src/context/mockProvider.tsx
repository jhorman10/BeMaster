import { ReactNode } from 'react';
import { userMocks, videoMocks } from '../mocks';
import {
  cock,
  fitness,
  science,
  technology,
  travels,
} from '../mocks/videoMocks/index';
import { MockContext } from './mockContext';

type Props = {
  children: ReactNode;
};

export const MockContextProvider: React.FC<Props> = ({ children }: Props) => {
  const contextValue = {
    users: userMocks,
    categories: videoMocks,
    technology,
    cock,
    travels,
    fitness,
    science,
  };

  return (
    <MockContext.Provider value={contextValue}>{children}</MockContext.Provider>
  );
};
