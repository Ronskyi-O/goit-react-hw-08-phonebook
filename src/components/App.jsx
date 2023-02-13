
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

const HomePage = lazy(() => import('../pages/home/Home'));
const RegisterPage = lazy(() => import('../pages/register/Register'));
const LoginPage = lazy(() => import('../pages/login/Login'));
const ContactsPage = lazy(() => import('../pages/contacts/Contacts'));


export function App() {
  return (

    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='/contacts' element={<ContactsPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Route>
    </Routes>
  );
}
