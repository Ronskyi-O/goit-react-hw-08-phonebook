// import { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid'
// import { ContactsAddForm } from 'components/ContactsAddForm/ContactsAddForm';
// import { ContactsFilter } from 'components/ContactsFilter/ContactsFilter';
// import { ContactsList } from 'components/ContactsList/ContactsList';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';



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
