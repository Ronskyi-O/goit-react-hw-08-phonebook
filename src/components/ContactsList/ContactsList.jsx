
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { STATUS } from 'redux/contacts/contacts.status'
import { deleteContact, fetchContacts } from 'redux/contacts/contacts.thunk'
import { selectFilteredContacts } from 'redux/contacts/contacts.selectors'
import { Loader } from 'components/Loader/Loader'

import { ContsctList, ContactItem, ContactItemInfo, ContactItemButton } from './ContactsList.styled'

export const ContactsList = () => {
    const filteredContacts = useSelector(selectFilteredContacts)
    const dispatch = useDispatch()
    const { status } = useSelector(state => state.contacts)

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])
    const onDeleteContact = id => {
        dispatch(deleteContact(id))
    }

    return (
        <ContsctList>
            {(status === STATUS.idle || status === STATUS.loading) && <Loader />}
            {status === STATUS.error && <p>Вибачте, сталася помилка</p>}
            {filteredContacts?.map(({ id, name, number, }) => (
                <ContactItem key={id}>
                    <ContactItemInfo>{name}: {number}</ContactItemInfo>
                    <ContactItemButton onClick={() => onDeleteContact(id)}>Delete</ContactItemButton>
                </ContactItem>
            ))}
        </ContsctList>
    )
}