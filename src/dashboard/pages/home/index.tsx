import { useContext } from 'react';
import { MockContext } from '../../../context/mockContext';
import { DashBoardLayout } from '../../layout';
import { Card } from '../components';
import './style.css';

export const Home = () => {
  const { categories } = useContext(MockContext);
  return (
    <DashBoardLayout>
      <div className="Cards-container">
        {categories.map((category) => (
          <Card category={category} />
        ))}
      </div>
    </DashBoardLayout>
  );
};
