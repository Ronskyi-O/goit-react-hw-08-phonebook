// import { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid'
// import { ContactsAddForm } from 'components/ContactsAddForm/ContactsAddForm';
// import { ContactsFilter } from 'components/ContactsFilter/ContactsFilter';
// import { ContactsList } from 'components/ContactsList/ContactsList';
// import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

// const HomePage = lazy(() => import('../pages/Home'));
// const RegisterPage = lazy(() => import('../pages/Register'));
// const LoginPage = lazy(() => import('../pages/Login'));
// const TasksPage = lazy(() => import('../pages/Tasks'));


export function App() {
  return (

    <Routes>
      <Route path='/' element={<Layout />}>

      </Route>
    </Routes>

    /* 
    <PhonebookHeading>Phonebook</PhonebookHeading>
    <ContactsAddForm />
    <ContactsHeading>Contacs</ContactsHeading>
    <ContactsFilter />
    <ContactsList /> */
  );
}
