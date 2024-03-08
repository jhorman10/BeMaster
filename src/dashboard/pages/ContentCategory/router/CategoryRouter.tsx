import { Route, Routes } from 'react-router-dom';
import { ContentCategory } from '..';
import { ContentDetails } from '../../components';

export const CategoryRouter = () => {
  return (
    <Routes>
      <Route path="*" element={<ContentCategory />} />
      <Route path="/:category/*" element={<ContentDetails />} />
      <Route path="/details" element={<ContentDetails />} />
    </Routes>
  );
};
