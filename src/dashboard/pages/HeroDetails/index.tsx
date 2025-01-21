import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { MockContext } from '../../../context/mockContext';
import { DashBoardLayout } from '../../layout';
import { ContentDetails } from '../components';

export const HeroDetails = () => {
  const { Hero } = useContext(MockContext);
  const { id } = useParams();
  const hero = Hero.find((hero) => hero.id === id);

  if (!hero) {
    return <h1>No hero found</h1>;
  }
  return (
    <DashBoardLayout>
      <ContentDetails cat={hero} />
    </DashBoardLayout>
  );
};
