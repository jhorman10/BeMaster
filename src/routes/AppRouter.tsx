import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginContext } from '../auth/context/loginContext';
import { Login } from '../auth/pages/login/index';
import { DashboardRoutes } from '../dashboard/routes/DashboardRoutes';

export const AppRouter = () => {
  const { isLoggedIn } = useContext(LoginContext);

  return (
    <Routes>
      {isLoggedIn ? (
        <Route path="/" element={<DashboardRoutes />} />
      ) : (
        <Route path="/login" element={<Login />} />
      )}
      <Route
        path="/*"
        element={isLoggedIn ? <Navigate to="/" /> : <Navigate to="/login" />}
      />
    </Routes>
  );
};
