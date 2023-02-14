import { useAuth } from 'hooks/useAuth';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/auth.thunk';
import { Layout } from './Layout/Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

const HomePage = lazy(() => import('../pages/home/Home'));
const RegisterPage = lazy(() => import('../pages/register/Register'));
const LoginPage = lazy(() => import('../pages/login/Login'));
const ContactsPage = lazy(() => import('../pages/contacts/Contacts'));

export function App() {
  const dispatch = useDispatch()
  const { isRefreshing } = useAuth()

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

  return (
    isRefreshing ? (
      <b>Be patient while we update info for you</b>
    ) : (
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/contacts' element={<PrivateRoute redirectTo='/login' component={<ContactsPage />} />} />
          <Route path='/register' element={<RestrictedRoute redirectTo='/contacts' component={<RegisterPage />} />} />
          <Route path='/login' element={<RestrictedRoute redirectTo='/contacts' component={<LoginPage />} />} />
        </Route >
      </Routes >
    )
  );
}
