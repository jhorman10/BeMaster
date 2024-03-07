import { Route, Routes } from 'react-router-dom';
import { ContentCategory } from '../pages/ContentCategory';
import { Home } from '../pages/Home';
import { ContentDetails } from '../pages/components';

export const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/category/:id" element={<ContentCategory />} />
      <Route path="/category/:id/details/:id" element={<ContentDetails />} />
    </Routes>
  );
};
