"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const cb1 = document.getElementById("cb1");
    const cb2 = document.getElementById("cb2");
    const cb3 = document.getElementById("cb3");
    const cb4 = document.getElementById("cb4");
  
    const cbArray = [cb1,cb2,cb3,cb4];
    let isChecked = false;
    cbArray.forEach((element)=>{
      if(element.checked){
        isChecked = true;
      }
    })
    if(!isChecked){
      alert("you should click at least 1 service");
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
          console.log(result.text);
          alert("message completed");
        },
        (error) => {
          console.log(error.text);
          alert("message failed");
        }
      );
  };

  const printClick = (e) =>{
    const cb1 = document.getElementById("cb1");
    const cb2 = document.getElementById("cb2");
    const cb3 = document.getElementById("cb3");
    const cb4 = document.getElementById("cb4");
  
    const cbArray = [cb1,cb2,cb3,cb4];
  const serviceId = e.target.parentNode.previousSibling.id;
  const isChecked = e.target.parentNode.previousSibling.checked;
  const cbBgArray = ["/images/contact-option-printing.jpg","/images/contact-option-digital.jpg","/images/contact-option-complex.jpg","/images/contact-option-complex-idk.jpg"]

    e.preventDefault();
    e.target.parentNode.previousSibling.checked = !isChecked;
    if(serviceId == "cb1"){
      if(!isChecked){
        e.target.src = "/images/contact-option-printing-click.jpg";
        // console.log(cb1.nextSibling.firstChild)
        // console.log(cb1.checked);
        cbArray.splice(0, 1);
        cbBgArray.splice(0, 1);
        let i = 0;
        cbArray.forEach((element) => {
          element.nextSibling.firstChild.src = cbBgArray[i++];
          element.checked = false;
        });
        
      }else{
        e.target.src = "/images/contact-option-printing.jpg";
      }
    }else if(serviceId == "cb2"){
      if(!isChecked){
        e.target.src = "/images/contact-option-digital-click.jpg";
        cbArray.splice(1, 1);
        cbBgArray.splice(1, 1);
        let i = 0;
        cbArray.forEach((element) => {
          element.nextSibling.firstChild.src = cbBgArray[i++];
          element.checked = false;
        });
      }else{
        e.target.src = "/images/contact-option-digital.jpg";
      }
    }else if(serviceId == "cb3"){
      
      if(!isChecked){
        e.target.src = "/images/contact-option-complex-click.jpg";
        cbArray.splice(2, 1);
        cbBgArray.splice(2, 1);
        let i = 0;
        cbArray.forEach((element) => {
          element.nextSibling.firstChild.src = cbBgArray[i++];
          element.checked = false;
        });
      }else{
        e.target.src = "/images/contact-option-complex.jpg";
      }
    }else {
      if(!isChecked){
        e.target.src = "/images/contact-option-idk-click.jpg";
        cbArray.splice(3, 1);
        cbBgArray.splice(3, 1);
        let i = 0;
        cbArray.forEach((element) => {
          element.nextSibling.firstChild.src = cbBgArray[i++];
          element.checked = false;
        });
      }else{
        e.target.src = "/images/contact-option-complex-idk.jpg";
      }
    }
  }

  return (
    <div className="w-screen h-screen max-w-full bg-white">
      <div className="flex flex-col">
        {/* lets get in touch */}
        <div className="w-full mb-8">
          <p className="inline-block text-3xl font-semibold border-2 border-gray-300 ml-24">
            Let's get in touch!
          </p>
        </div>
        <div className="flex">
          {/* general information */}
          <div className="flex flex-col w-2/6 ml-24">
            <div className="mb-5">
              <p className="text-lg font-medium">Genaral Inquiries</p>
              <p>info@cubedesign.ca</p>
            </div>
            <div className="mb-5">
              <p className="text-lg font-medium">General Call</p>
              <p>123-456-7890</p>
            </div>
            <div>
              <p className="text-lg font-medium">Our Office</p>
              <p>
                2800 14th Avenue Unit 7&8 <br></br> Markham, L3R 0E4
              </p>
            </div>
          </div>
          {/* email */}
          <div className="email">
            <p>Ready to take your business to the next level?</p>
            <form ref={form} onSubmit={sendEmail}>
              <p>please select service you need *</p>
              <div className="flex" required>
              <div>
                <input
                  type="checkbox"
                  id="cb1"
                  name="service"
                  value={`printing`}
                  className="hidden"
                />
                <label for="cb1" onClick={printClick}>
                  <img src="/images/contact-option-printing.jpg" />
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
                <label for="cb2" onClick={printClick}>
                  <img src="/images/contact-option-digital.jpg" />
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
                <label for="cb3" onClick={printClick}>
                  <img src="/images/contact-option-complex.jpg" />
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
                <label for="cb4" onClick={printClick}>
                  <img src="/images/contact-option-complex-idk.jpg" />
                </label>
              </div>
              </div>
              

              <br />
              <label>First Name*</label>
              <input
                type="text"
                name="firstName"
                placeholder="이름을 입력해주세요."
                className="bg-zinc-100"
                required
              />
              <label>Last Name*</label>
              <input
                type="text"
                name="lastName"
                placeholder="이름을 입력해주세요."
                className="bg-zinc-100"
                required
              />
              <br />
              <label>Email address*</label>
              <input
                type="email"
                name="email"
                placeholder="메일 주소를 입력해주세요"
                className="bg-zinc-100"
                required
              />
              <br />
              <label>Message</label>
              <textarea name="message" className="bg-zinc-100" required />
              <input type="submit" value="Send"/>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
