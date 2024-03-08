import { Route, Routes } from 'react-router-dom';
import { CategoryRouter } from '../pages/ContentCategory/router/categoryRouter';
import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';

export const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/:category/*" element={<CategoryRouter />} />
    </Routes>
  );
};
