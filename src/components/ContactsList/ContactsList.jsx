import ContactsItem from 'components/ContactsItem';
import { List } from './ContactsList.styled';
import { getFilteredContacts } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);
  return (
    <List>
      {contacts.map(({ name, number, id }) => (
        <ContactsItem
          key={id}
          name={name}
          number={number}
          deleteContact={() => {
            dispatch(deleteContact(id));
          }}
        />
      ))}
    </List>
  );
};

export default ContactsList;
