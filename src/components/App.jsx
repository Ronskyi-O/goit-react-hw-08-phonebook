
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

const HomePage = lazy(() => import('../pages/home/Home'));
// const RegisterPage = lazy(() => import('../pages/Register'));
// const LoginPage = lazy(() => import('../pages/Login'));
const TasksPage = lazy(() => import('../pages/contacts/Contacts'));


export function App() {
  return (

    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='/contacts' element={<TasksPage />} />
      </Route>
    </Routes>
  );
}
