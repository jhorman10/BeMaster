import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from '..';
import { MockContext } from '../../../../context/mockContext';
import { DashBoardLayout } from '../../../layout';
import './style.css';

export const ContentDetails = () => {
  const { technology, cock, travels, fitness, science } =
    useContext(MockContext);
  const { details } = useParams();

  const selectedCategory = {
    technology,
    cock,
    travels,
    fitness,
    science,
  }[details!];
  return (
    <DashBoardLayout>
      <div id="content-details">
        {selectedCategory?.map((category) => (
          <Card key={category.title} cat={category} />
        ))}
      </div>
    </DashBoardLayout>
  );
};
