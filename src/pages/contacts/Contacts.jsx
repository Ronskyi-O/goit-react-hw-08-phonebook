import { ContactsAddForm } from 'components/ContactsAddForm/ContactsAddForm';
import { ContactsFilter } from 'components/ContactsFilter/ContactsFilter';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { ContactsHeading, Container, PhonebookHeading } from "./Contacts.styled"

const Contacts = () => {
    return (
        <Container>
            <PhonebookHeading>Phonebook</PhonebookHeading>
            <ContactsAddForm />
            <ContactsHeading>Contacs</ContactsHeading>
            <ContactsFilter />
            <ContactsList />
        </Container>

    )
}

export default Contacts