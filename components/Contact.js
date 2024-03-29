"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import contact from "../app/contact.module.css";
import { useRouter } from 'next/router';
import DynamicHeader from "../components/Header/Dynamic/DynamicHeader";
import DynamicFooter from "../components/Footer/Dynamic/DynamicFooter";

import { useTranslation } from 'next-i18next'
import JsonData from './JsonData';

const ContactUs = () => {

let submitLogo;
let w;
  if (typeof window !== "undefined") {
    w = window.innerWidth;

   
    
    if (w > 800) {
      submitLogo = "Contact-Submit icon";
      
    }else{
      submitLogo = "Contact-Submit icon-blue";
    }
  }
  const { t } = useTranslation('common')

  const router = useRouter();
  const form = useRef();

  let firstname = false;
  let lastname = false;
  let email = false;
  let service = false;

  const sendEmail = (e) => {
    e.preventDefault();
    const cb1 = document.getElementById("cb1");
    const cb2 = document.getElementById("cb2");
    const cb3 = document.getElementById("cb3");
    const cb4 = document.getElementById("cb4");

    const cbArray = [cb1, cb2, cb3, cb4];
    let isChecked = false;
    cbArray.forEach((element) => {
      if (element.checked) {
        isChecked = true;
      }
    });
    if (!isChecked) {
      const error = document.getElementById("serviceError");
      error.className = "";
      error.classList.add(contact.serviceError1);

      error.nextSibling.className = "";
      error.nextSibling.classList.add(contact.errorVisible);

      return false;
    } else if (!firstname) {
      const firstname = document.getElementById("firstname");

      if (firstname.value.length == 0) {
        firstname.parentNode.nextSibling.textContent =
          "Please fill out this box.";
        firstname.parentNode.nextSibling.className = "";
        firstname.parentNode.nextSibling.classList.add(contact.errorVisible);

        firstname.nextSibling.className = "";
        firstname.nextSibling.classList.add(contact.errorLogo1);

        firstname.className = "";
        firstname.classList.add(contact.nameInputFail);
      }

      return false;
    } else if (!lastname) {
      const lastname = document.getElementById("lastname");
      if (lastname.value.length == 0) {
        lastname.parentNode.nextSibling.textContent =
          "Please fill out this box.";
        lastname.parentNode.nextSibling.className = "";
        lastname.parentNode.nextSibling.classList.add(contact.errorVisible);

        lastname.nextSibling.className = "";
        lastname.nextSibling.classList.add(contact.errorLogo1);

        lastname.className = "";
        lastname.classList.add(contact.nameInputFail);
      }

      return false;
    } else if (!email) {
      const email = document.getElementById("email");
      if (email.value.length == 0) {
        email.parentNode.nextSibling.textContent = "Please fill out this box.";
        email.parentNode.nextSibling.className = "";
        email.parentNode.nextSibling.classList.add(contact.errorVisible);

        email.nextSibling.className = "";
        email.nextSibling.classList.add(contact.errorLogo1);

        email.className = "";
        email.classList.add(contact.emailInputFail);
      }

      return false;
    }
    emailjs
      .sendForm(
        "service_l4hkkdg",
        "template_zolxbng",
        form.current,
        "8NW35UUJSwfidE7ML"
      )
      .then(
        (result) => {

          const submitBox = document.getElementById("submitBox");
          const submitScreen = document.getElementById("submitScreen");
          const submitImg = document.getElementById("submitImg");
          const submitText = document.getElementById("submitText");

          submitBox.className = "";
          submitScreen.className = "";
          submitImg.className = "";
          submitText.className = "";

          submitBox.classList.add(contact.submitScreenBox1);
          submitScreen.classList.add(contact.submitScreen1);
          submitImg.classList.add(contact.submitIcon1);
          submitText.classList.add(contact.submitText1);
        },
        (error) => {
          console.log(error.text);
          alert("message failed");
        }
      );
  };
  const regName = /^[a-zA-Z|ㄱ-ㅎ|ㅏ-ㅣ|가-힣]+$/;
  const regEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  const submitConfirm = (e) =>{
    e.preventDefault();

    if(e.target.id === "submitConfirm" || e.target.id === "submitBox"){
      

      location.reload();
      const submitBox = document.getElementById("submitBox");
      const submitScreen = document.getElementById("submitScreen");
      const submitImg = document.getElementById("submitImg");
      const submitText = document.getElementById("submitText");


        submitBox.className = "";
        submitScreen.className = "";
        submitImg.className = "";
        submitText.className = "";

        submitBox.classList.add(contact.submitScreenBox);
        submitScreen.classList.add(contact.submitScreen);
        submitImg.classList.add(contact.submitIcon);
        submitText.classList.add(contact.submitText);
    }
         

            

  };

  const submitHome = () =>{
    

    const submitBox = document.getElementById("submitBox");
    const submitScreen = document.getElementById("submitScreen");
    const submitImg = document.getElementById("submitImg");
    const submitText = document.getElementById("submitText");

    
      submitBox.className = "";
      submitScreen.className = "";
      submitImg.className = "";
      submitText.className = "";

      submitBox.classList.add(contact.submitScreenBox);
      submitScreen.classList.add(contact.submitScreen);
      submitImg.classList.add(contact.submitIcon);
      submitText.classList.add(contact.submitText);
      router.push('/');
      

  };

  const handleFocusInput = (e) => {
    e.preventDefault();
    if (e.target.name == "firstName" || e.target.name == "lastName") {
      e.target.className = "";
      e.target.classList.add(contact.nameInputType);
      if (
        e.target.parentNode.nextSibling.classList.contains(contact.errorVisible)
      ) {
        e.target.parentNode.nextSibling.classList.remove(contact.errorVisible);
        e.target.parentNode.nextSibling.classList.add(contact.errorHidden);

        e.target.nextSibling.className = "";
        e.target.nextSibling.classList.add(contact.errorLogo);
      }
    } else if (e.target.id === "email") {
      e.target.className = "";
      e.target.classList.add(contact.emailInputType);
      if (
        e.target.parentNode.nextSibling.classList.contains(contact.errorVisible)
      ) {
        e.target.parentNode.nextSibling.classList.remove(contact.errorVisible);
        e.target.parentNode.nextSibling.classList.add(contact.errorHidden);

        e.target.nextSibling.className = "";
        e.target.nextSibling.classList.add(contact.errorLogo);
      }
    }
  };

  const handleBlurInput = (e) => {
    const submit = document.getElementById("submit");

    if (e.target.name == "firstName" || e.target.name == "lastName") {
      if (e.target.value.length > 1) {
        if (!regName.test(e.target.value)) {
          e.target.parentNode.nextSibling.textContent = "Invalid information.";
          e.target.parentNode.nextSibling.className = "";
          e.target.parentNode.nextSibling.classList.add(contact.errorVisible);

          e.target.nextSibling.className = "";
          e.target.nextSibling.classList.add(contact.errorLogo1);

          e.target.className = "";
          e.target.classList.add(contact.nameInputFail);
        } else {
          if (e.target.name == "firstName") {
            firstname = true;
          } else if (e.target.name == "lastName") {
            lastname = true;
          }
          e.target.className = "";
          e.target.classList.add(contact.nameInputSuccess);

          e.target.parentNode.nextSibling.className = "";
          e.target.parentNode.nextSibling.classList.add(contact.errorHidden);

          e.target.nextSibling.className = "";
          e.target.nextSibling.classList.add(contact.errorLogo);
        }
      } else if (e.target.value.length == 1) {
        e.target.parentNode.nextSibling.textContent = "Invalid information.";
        e.target.parentNode.nextSibling.className = "";
        e.target.parentNode.nextSibling.classList.add(contact.errorVisible);

        e.target.nextSibling.className = "";
        e.target.nextSibling.classList.add(contact.errorLogo1);

        e.target.className = "";
        e.target.classList.add(contact.nameInputFail);
      } else {
        e.target.className = "";
        e.target.parentNode.nextSibling.className = "";
        e.target.parentNode.nextSibling.classList.add(contact.errorHidden);
        e.target.classList.add(contact.nameInput);

        e.target.nextSibling.className = "";
        e.target.nextSibling.classList.add(contact.errorLogo);
      }
    } else if (e.target.id === "email") {
      if (e.target.value.length == 0) {
        e.target.className = "";
        e.target.classList.add(contact.emailInput);

        e.target.parentNode.nextSibling.className = "";
        e.target.parentNode.nextSibling.classList.add(contact.errorHidden);

        e.target.nextSibling.className = "";
        e.target.nextSibling.classList.add(contact.errorLogo);
      }else if (!regEmail.test(e.target.value)) {
        e.target.parentNode.nextSibling.textContent =
          "Invalid address. Please check your email address.";
        e.target.parentNode.nextSibling.className = "";
        e.target.parentNode.nextSibling.classList.add(contact.errorVisible);

        e.target.nextSibling.className = "";
        e.target.nextSibling.classList.add(contact.errorLogo1);

        e.target.className = "";
        e.target.classList.add(contact.emailInputFail);
      } else {
        if (e.target.name == "email") {
          email = true;
        }
        e.target.className = "";
        e.target.classList.add(contact.emailInputSuccess);

        e.target.parentNode.nextSibling.className = "";
        e.target.parentNode.nextSibling.classList.add(contact.errorHidden);

        e.target.nextSibling.className = "";
        e.target.nextSibling.classList.add(contact.errorLogo);
      }
    }

    if (firstname && service && lastname && email) {
      submit.className = "";
      submit.classList.add(contact.submitBtn1);
    } else {
      submit.className = "";
      submit.classList.add(contact.submitBtn);
    }
  };
  const handleSubmitColor = () => {
    if (firstname && service && lastname && email) {
      submit.className = "";
      submit.classList.add(contact.submitBtn1);
    } else {
      submit.className = "";
      submit.classList.add(contact.submitBtn);
    }
  };

  const wordCount = () => {
    let text = document.getElementById("txtarea").value;
    let count = 0;
    let split = text.split(' ');
    for (let i = 0; i < split.length; i++) {
     if (split[i] != "") {
      count ++;
     }
    }
    document.getElementById("showCount").innerHTML = count;
  };

  const printClick = (e) => {
    const cb1 = document.getElementById("cb1");
    const cb2 = document.getElementById("cb2");
    const cb3 = document.getElementById("cb3");
    const cb4 = document.getElementById("cb4");

    const cbArray = [cb1, cb2, cb3, cb4];
    const serviceId = e.target.parentNode.previousSibling.id;
    const isChecked = e.target.parentNode.previousSibling.checked;
    const cbBgArray = [
      "/images/Contact-Service-Printing.svg",
      "/images/Contact-Service-Digital.svg",
      "/images/Contact-Service-Complex.svg",
      "/images/Contact-Service-Idk.svg",
    ];
    e.preventDefault();
    const error = document.getElementById("serviceError");
    if (error.classList.contains(contact.serviceError1)) {
      error.className = "";
      error.classList.add(contact.serviceError);

      error.nextSibling.className = "";
      error.nextSibling.classList.add(contact.errorHidden);
    }

    e.target.parentNode.previousSibling.checked = !isChecked;

    service = !isChecked;
    if (serviceId == "cb1") {
      if (!isChecked) {
        e.target.src = "/images/Contact-Service-Printing-Click.svg";
        cbArray.splice(0, 1);
        cbBgArray.splice(0, 1);
        let i = 0;
        cbArray.forEach((element) => {
          element.nextSibling.firstChild.src = cbBgArray[i++];
          element.checked = false;
        });
      } else {
        e.target.src = "/images/Contact-Service-Printing.svg";
      }
    } else if (serviceId == "cb2") {
      if (!isChecked) {
        e.target.src = "/images/Contact-Service-Digital-Click.svg";
        cbArray.splice(1, 1);
        cbBgArray.splice(1, 1);
        let i = 0;
        cbArray.forEach((element) => {
          element.nextSibling.firstChild.src = cbBgArray[i++];
          element.checked = false;
        });
      } else {
        e.target.src = "/images/Contact-Service-Digital.svg";
      }
    } else if (serviceId == "cb3") {
      if (!isChecked) {
        e.target.src = "/images/Contact-Service-Complex-Click.svg";
        cbArray.splice(2, 1);
        cbBgArray.splice(2, 1);
        let i = 0;
        cbArray.forEach((element) => {
          element.nextSibling.firstChild.src = cbBgArray[i++];
          element.checked = false;
        });
      } else {
        e.target.src = "/images/Contact-Service-Complex.svg";
      }
    } else {
      if (!isChecked) {
        e.target.src = "/images/Contact-Service-Idk-Click.svg";
        cbArray.splice(3, 1);
        cbBgArray.splice(3, 1);
        let i = 0;
        cbArray.forEach((element) => {
          element.nextSibling.firstChild.src = cbBgArray[i++];
          element.checked = false;
        });
      } else {
        e.target.src = "/images/Contact-Service-Idk.svg";
      }
    }
    handleSubmitColor();
  };

  return (
    <div>
      <DynamicHeader />
      <div  className={contact.contactBox}>
        <div className={contact.mainBox}>
          {/* lets get in touch */}
          <div className={contact.firstBox}>
            <p className={contact.firstBoxText}>{t('contact_page.banner')}</p>
          </div>
          <div className={contact.secondBox}>
            {/* general information */}
            <div className={contact.secondLeftBox}>
              <div>
                <p className={contact.secondLeftBoxText}>{t('contact_page.information')}</p>
                <p className={contact.secondLeftBoxText1}>
                  <JsonData jsonKey="email" />
                </p>
                <p className={contact.secondLeftBoxText1}>
                  <JsonData jsonKey="phone" />
                </p>
              </div>
            </div>
            {/* email */}
            <div className="email">
              <p className={contact.emailText}>{t('contact_page.question')}</p>
              <form ref={form} onSubmit={sendEmail} id="myForm">
                <div className={contact.servicelogoBox}>
                  <p className={contact.serviceText}>{t('contact_page.selection')}</p>
                  
                  <div className={contact.serviceErrorBox}><img
                    src="/images/contact-error.png"
                    alt="error logo"
                    className={contact.serviceError}
                    id="serviceError"
                  />
                  <p className={contact.errorHidden}>
                    {t('contact_page.selection2')}
                  </p></div>
                </div>
                <div className={contact.serviceBox} required>
                  <div>
                    <input
                      type="checkbox"
                      id="cb1"
                      name="service"
                      value={`printing`}
                      className="hidden"
                    />
                    <label htmlFor="cb1" onClick={printClick}>
                      <img className={contact.serviceImg} src="/images/Contact-Service-Printing.svg" />
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="cb2"
                      name="service"
                      value={`Digital`}
                      className="hidden"
                    />
                    <label htmlFor="cb2" onClick={printClick}>
                      <img className={contact.serviceImg} src="/images/Contact-Service-Digital.svg" />
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="cb3"
                      name="service"
                      value={`Complex`}
                      className="hidden"
                    />
                    <label htmlFor="cb3" onClick={printClick}>
                      <img className={contact.serviceImg} src="/images/Contact-Service-Complex.svg" />
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="cb4"
                      name="service"
                      value={`I don't know`}
                      className="hidden"
                    />
                    <label htmlFor="cb4" onClick={printClick}>
                      <img className={contact.serviceImg} src="/images/Contact-Service-Idk.svg" />
                    </label>
                  </div>
                </div>

                <div className={contact.emailFormBox}>
                  <div className={contact.nameBox}>
                    <div>
                      <label className={contact.nameText}>{t('contact_page.first_name')}</label>
                      <div className={contact.nameInputBox}>
                        <input
                          type="text"
                          name="firstName"
                          className={contact.nameInput}
                          id="firstname"
                          autoComplete="off"
                          onClick={() => (firstname = false)}
                          onFocus={handleFocusInput}
                          onBlur={handleBlurInput}
                        />
                        <img
                          src="/images/contact-error.png"
                          alt="error logo"
                          className={contact.errorLogo}
                        />
                      </div>

                      <label id="error" className={contact.errorHidden}></label>
                    </div>

                    <div className={contact.lastnameBox}>
                      <label className={contact.nameText}>{t('contact_page.last_name')}</label>
                      <div className={contact.nameInputBox}>
                        <input
                          type="text"
                          name="lastName"
                          className={contact.nameInput}
                          id="lastname"
                          autoComplete="off"
                          onClick={() => (lastname = false)}
                          onFocus={handleFocusInput}
                          onBlur={handleBlurInput}
                        />

                        <img
                          src="/images/contact-error.png"
                          alt="error logo"
                          className={contact.errorLogo}
                        />
                      </div>
                      <label id="error" className={contact.errorHidden}></label>
                    </div>
                  </div>

                  <div className={contact.emailbox}>
                    <label className={contact.nameText}>{t('contact_page.email')}</label>
                    <div className={contact.nameInputBox}>
                      <input
                        type="email"
                        name="email"
                        autoComplete="off"
                        id="email"
                        className={contact.emailInput}
                        onClick={() => (email = false)}
                        onFocus={handleFocusInput}
                        onBlur={handleBlurInput}
                      />

                      <img
                        src="/images/contact-error.png"
                        alt="error logo"
                        className={contact.errorLogo}
                      />
                    </div>
                    <label id="error" className={contact.errorHidden}></label>
                  </div>

                  <div className={contact.textBox}>
                    <div className={contact.textWordsBox}>
                    <label className={contact.nameText}>{t('contact_page.message')}</label>
                    <div className={contact.textWordsCountBox}><p id="showCount">0</p><p>{t('contact_page.words')}</p></div>
                    </div>
                    <textarea
                      name="message"
                      className={contact.textInput}
                      placeholder="Tell us about your project."
                      autoComplete="off"
                      id="txtarea"
                      onInput={wordCount}
                    />
                    <label className={contact.textLabel}>{t('contact_page.require')}</label>
                  </div>
                  <div className={contact.submitBox}>
                    <button
                      className={contact.submitBtn}
                      id="submit"
                      type="submit"
                      value="Submit"
                    >{t('contact_page.submit')}</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <DynamicFooter />
      <div id="submitBox" onClick={submitConfirm} className={contact.submitScreenBox}>
        <div id="submitScreen" className={contact.submitScreen}>
          <img
            src={`/images/${submitLogo}.png`}
            alt="error logo"
            className={contact.submitIcon}
            id="submitImg"
          />
          <p className={contact.submitText} id="submitText">
          {t('contact_page.success')}
            <br /> {t('contact_page.success2')}
          </p>
          <div className={contact.confirmBtnBox}>
            <button id="submitConfirm" onClick={submitConfirm} className={contact.confirmBtn}>{t('contact_page.confirm')}</button>
            <button id="submitHome" onClick={submitHome} className={contact.confirmBtn}>{t('contact_page.home')}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
