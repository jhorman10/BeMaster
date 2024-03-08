import { useContext } from 'react';
import { MockContext } from '../../../context/mockContext';
import { DashBoardLayout } from '../../layout';
import { Card } from '../components';
import './style.css';

export const Home = () => {
  const { categories } = useContext(MockContext);
  return (
    <DashBoardLayout>
      <div className="Cards-container" id="home">
        {categories.map((category) => (
          <Card key={category.title} cat={category} />
        ))}
      </div>
    </DashBoardLayout>
  );
};
