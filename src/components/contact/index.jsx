import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import styles from "./contact.module.css";
import { deleteMember, editMember } from "../../redux/features/contactSlice";
import { useState } from "react";
import { setFormData } from "../../redux/features/contactSlice";
const Contact = ({ info }) => {

  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteMember(info.id));
  };
  const handleEdit = () => {
    console.log(info)
    dispatch(setFormData(info))
    // dispatch(
    //   editMember({
    //     id: info.id,
    //     editedInfo: {
    //       name: "solmaz",
    //       familyName: "salehzadeh",
    //       email: "solmaz@yahoo.com",
    //       relation: "family",
    //       phoneNumber: "09120568201",
    //     },
    //   })
    // );
  };
  return (
    <div className={styles["phoneCardContainer"]}>
      <div className={styles["carTitle"]}>
        <div>
          {`${info.name} ${info.familyName}`}
        </div>
        <div className={styles["buttonContainer"]}>
          <button onClick={handleDelete}>X</button>
          <button onClick={handleEdit}>i</button>
        </div>
      </div>
      <div>{info.relation}</div>
      <div>{info.email}</div>
      <div>{info.phoneNumber}</div>
    </div>
  );
};

export default Contact;

// {
//   "contacts": [
//     {
//       "id": 1,
//       "name": "mahdie",
//       "familyName": "متناتلب",
//       "email": "fa@yahoo.com",
//       "relation": "فامیل",
//       "phoneNumber": "09127116833"
//     },
//     {
//       "id": 2,
//       "name": "sahar",
//       "familyName": "متناتلب",
//       "email": "fa@yahoo.com",
//       "relation": "فامیل",
//       "phoneNumber": "09127116833"
//     },
//     {
//       "id": 3,
//       "name": "rahi",
//       "familyName": "متناتلب",
//       "email": "fa@yahoo.com",
//       "relation": "فامیل",
//       "phoneNumber": "09127116833"
//     },
//     {
//       "id": 4,
//       "name": "nasim",
//       "familyName": "متناتلب",
//       "email": "fa@yahoo.com",
//       "relation": "فامیل",
//       "phoneNumber": "09127116833"
//     },
//     {
//       "id": 5,
//       "name": "fereshte",
//       "familyName": "متناتلب",
//       "email": "fa@yahoo.com",
//       "relation": "فامیل",
//       "phoneNumber": "09127116833"
//     },
//     {
//       "id": 6,
//       "name": "mohsen",
//       "familyName": "متناتلب",
//       "email": "fa@yahoo.com",
//       "relation": "فامیل",
//       "phoneNumber": "09127116833"
//     },
//     {
//       "id": 7,
//       "name": "mehdi",
//       "familyName": "متناتلب",
//       "email": "fa@yahoo.com",
//       "relation": "فامیل",
//       "phoneNumber": "09127116833"
//     },
//     {
//       "id": 8,
//       "name": "sobhan",
//       "familyName": "متناتلب",
//       "email": "fa@yahoo.com",
//       "relation": "فامیل",
//       "phoneNumber": "09127116833"
//     },
//     {
//       "id": 9,
//       "name": "shohre",
//       "familyName": "متناتلب",
//       "email": "fa@yahoo.com",
//       "relation": "فامیل",
//       "phoneNumber": "09127116833"
//     }
//   ]
// }
