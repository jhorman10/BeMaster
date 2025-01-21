import { Route, Routes } from 'react-router-dom';
import { HeroDetails } from '../pages/HeroDetails';
import { Home } from '../pages/Home';

export const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/:characters/*" element={<HeroDetails />} />
    </Routes>
  );
};
