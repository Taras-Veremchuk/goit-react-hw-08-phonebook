import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectContacts,
  selectFilteredContacts,
  selectIsLoading,
  selectError,
} from 'redux/contacts/selectors';
import { ContList, ContItem, ListBtn, Span } from './ContactList.styled';
import contactsOperations from 'redux/contacts/operations';
import Loader from 'components/loader/loader';
import defaultAvatar from '../UserMenu/default-avatar.png';
import css from '../UserMenu/UserMenu.module.css';

const ContactList = () => {
  const avatar = defaultAvatar;
  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <ContList>
      {isLoading && <Loader isLoading={isLoading} />}
      {error && <p>Oops! Something went wrong.</p>}
      {contacts.length > 0 &&
        filteredContacts.map(({ id, name, number }) => {
          return (
            <ContItem key={id}>
              <Span>
                <img src={avatar} alt="" width="22" className={css.avatar} />
                {name}: {number}
              </Span>
              <ListBtn
                onClick={() => dispatch(contactsOperations.deleteContact(id))}
                id={id}
                type="button"
              >
                Delete
              </ListBtn>
            </ContItem>
          );
        })}
    </ContList>
  );
};
export default ContactList;
