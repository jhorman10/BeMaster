import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const DashBoardLayout = ({ children }: Props) => {
  return <section>{children}</section>;
};
