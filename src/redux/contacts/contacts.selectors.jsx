export const selectFilteredContacts = (state) => {
    return state.contacts.contacts.filter((contact) =>
        contact.name.toLowerCase().includes(state.contacts.query.toLowerCase()))
}