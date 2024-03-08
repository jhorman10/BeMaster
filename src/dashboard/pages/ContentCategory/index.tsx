import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { MockContext } from '../../../context/mockContext';
import { DashBoardLayout } from '../../layout';
import { Card } from '../components';
import './style.css';

export const ContentCategory = () => {
  const { technology, cock, travels, fitness, science } =
    useContext(MockContext);
  const { category } = useParams();

  const selectedCategory = {
    technology,
    cock,
    travels,
    fitness,
    science,
  }[category!];

  return (
    <DashBoardLayout>
      <div className="Cards-container" id="content-category">
        {selectedCategory?.map((category) => (
          <Card key={category.title} cat={category} />
        ))}
      </div>
    </DashBoardLayout>
  );
};
