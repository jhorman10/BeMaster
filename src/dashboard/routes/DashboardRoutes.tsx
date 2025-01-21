import { Route, Routes } from 'react-router-dom';
import { CategoryRouter } from '../pages/ContentCategory/router/CategoryRouter';
import { Home } from '../pages/Home';

export const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/:category/*" element={<CategoryRouter />} />
    </Routes>
  );
};
