import { createcontact } from "../../redux/features/contactSlice";
import { useDispatch, useSelector, useStore } from "react-redux";
import React, { useState,useEffect } from "react";
import styles from "./form.module.css";
import { editMember } from "../../redux/features/contactSlice";
function Form({formData}) {
  // const formData = useSelector((state)=>state.contactsList.formData)
  // console.log(formData) 
  const [formInfo, setFormInfo] = useState(formData);
  console.log(formInfo)
  const [error, setError] = useState(false);
  // const initialDisabledButton = formData.name ? false : true
  // const [disabledButton, setDisabledButton] = useState(formData.name.length>0 ? false : true)
  useEffect(() => {
    setFormInfo(formData)
  }, [])
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formInfo.name.length < 3) {
      setError(true);
      return;
    }
    if (formInfo.familyName.length < 3) {
      setError(true);
      return;
    }
    if (
      !formInfo.name.match(/^[a-zA-Z]+ [a-zA-Z]+$/ && /^[\u0600-\u06FF\s]+$/)
    ) {
      setError(true);
      return;
    }
    if (
      !formInfo.familyName.match(
        /^[a-zA-Z]+ [a-zA-Z]+$/ && /^[\u0600-\u06FF\s]+$/
      )
    ) {
      setError(true);
      return;
    }
    if (!formInfo.email.includes("@")) {
      setError(true);
      return;
    }
    if (
      formInfo.phoneNumber.length != 11 ||
      formInfo.phoneNumber[0] != 0 ||
      formInfo.phoneNumber[1] != 9
    ) {
      setError(true);
      return;
    }
    // disabledButton(false)
    if(formData.name){
              dispatch(
      editMember({
        id: formData.id,
        editedInfo: {
          name: formInfo.name,
          familyName: formInfo.familyName,
          email: formInfo.email,
          relation: formInfo.relation,
          phoneNumber: formInfo.phoneNumber,
        },
      })
    );
    }else{
      dispatch(createcontact({ id: Math.random() * 10, ...formInfo }));
    }
  };

  const dispatch = useDispatch();
// const  checkFormIsCompleted= ()=>{
//   const abledValue =Object.values(formInfo).every(value => value.length>0)
//   setDisabledButton(!abledValue)
//   console.log(abledValue)
// }
 
  return (
    <>
      <p>وب اپلیکیشن مدیریت مخاطبین</p>
      <form onSubmit={handleFormSubmit}>
        <div className={styles["form__container"]}>
          <div>
            <input
              placeholder="نام"
              type="text"
              onChange={(e) => {
                
                setError(false);
                setFormInfo((prevState) => ({
                  ...prevState,
                  name: e.target.value,
                }));
                // checkFormIsCompleted()
              }}
              defaultValue={formData.name}
            />
            {error &&
              (formInfo.name.length < 3 ||
                !formInfo.name.match(
                  /^[a-zA-Z]+ [a-zA-Z]+$/ && /^[\u0600-\u06FF\s]+$/
                )) && (
                <p className={styles["form__text-color"]}>
                  نام وارد شده معتبر نیست
                </p>
              )}
          </div>
          <div>
            <input
              placeholder="نام خانوادگی"
              type="text"
              onChange={(e) => {
               
                setError(false);
                setFormInfo((prevState) => ({
                  ...prevState,
                  familyName: e.target.value,
                }));
                // checkFormIsCompleted()
              }}
              defaultValue={formData.familyName}
            />
            {error &&
              (formInfo.familyName.length < 3 ||
                !formInfo.familyName.match(
                  /^[a-zA-Z]+ [a-zA-Z]+$/ && /^[\u0600-\u06FF\s]+$/
                )) && (
                <p className={styles["form__text-color"]}>
                  نام وارد شده معتبر نیست
                </p>
              )}
          </div>
          <div>
            <input
              placeholder="شماره تماس"
              defaultValue={formData.phoneNumber}
              onChange={(e) => {
                
                setError(false);
                setFormInfo((prevState) => ({
                  ...prevState,
                  phoneNumber: e.target.value,
                }));
                // checkFormIsCompleted()
              }}
            />
            {error &&
              (formInfo.phoneNumber.length != 11 ||
                Number(formInfo.phoneNumber[0]) != 0 ||
                Number(formInfo.phoneNumber[1]) != 9) && (
                <p className={styles["form__text-color"]}>
                  شماره تماس وارد شده نامعتبر است
                </p>
              )}
          </div>
          <div>
            <select
              onChange={(e) => {
               
                setFormInfo((prevState) => ({
                  ...prevState,
                  relation: e.target.value,
                }));
                // checkFormIsCompleted()
              }}
            >
              <option>نسبت</option>
              <option value="دوست">دوست</option>
              <option value="فامیل">فامیل</option>
              <option value="همکار">همکار</option>
            </select>
          </div>

          <div>
            <input
              placeholder="ایمیل"
              type="email"
              onChange={(e) => {
                
                setError(false);
                setFormInfo((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }));
                // checkFormIsCompleted()
              }}
              defaultValue={formData.email}
            />

            {error && !formInfo.email.includes("@") && (
              <p className={styles["form__text-color"]}>
                ایمیل وارد شده نامعتبر است
              </p>
            )}
          </div>
        </div>
        <button type="submit" 
        // disabled={ formData.name? false : true}
        // style={!formData.name ?{opacity: "0.7",
        //   cursor: "not-allowed"}:null}
        > {formData.name ? "ویرایش" : "اضافه کردن"}</button>
      </form>
    </>
  );
}

export default Form;
