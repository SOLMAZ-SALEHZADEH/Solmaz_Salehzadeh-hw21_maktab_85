import React from "react";
import AddForm from "../components/form";
import Contacts from "../components/contacts";
import { useSelector } from "react-redux";

const Layout = () => {

  const formData = useSelector((state)=>state.contactsList.formData)
  // console.log(formData)
  return (
    <>
      <AddForm formData={formData}/>
      <Contacts/>
    </>
  );
};

export default Layout;
