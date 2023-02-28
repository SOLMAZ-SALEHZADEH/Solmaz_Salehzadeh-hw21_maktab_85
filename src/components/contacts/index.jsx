import React, { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchcontacts } from "../../redux/features/contactSlice";
import ContactsSpinner from "../spinner";
import Contact from "../contact";
import styles from "./contacts.module.css"

const Contacts = () => {
  const { contactsList, loading } = useSelector((state) => state.contactsList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchcontacts());
  }, [dispatch]);

  return (
    <>
    <div className={styles["cardContainer"]}>
    {loading ? (
        <ContactsSpinner />
      ) : (
        contactsList.map((contact) => <Contact key={contact.id} info={contact}/>)
      )}
    </div>

    </>
  );
};

export default Contacts;
