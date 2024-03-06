import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/home';

export const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};