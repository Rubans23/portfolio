import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs  from '@emailjs/browser';
import { useSelector } from 'react-redux'; 
const Contact = () => {

    const form = useRef();
    const [submited,setSubmited] = useState(false)
    const [fail,setFail] = useState(false)
    const mode = useSelector((state) => state.mode.mode); 
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_17wv8db', 'template_lxh598l', form.current, {
          publicKey: 'mRIvmEt0Kef1y2GJl',
        })
        .then(
          () => {
            setSubmited(true)
            console.log('SUCCESS!');
            form.current.reset();
          },
          (error) => {
            console.log('FAILED...', error.text);
            setFail(error.text)
          },
        );
    };
  
  return (
    <div className="contact-form" id="contact">
      <div className="w-left">
        <div className="services-left">
          <span style={mode==="dark" ? {color:'#E2E2B6'}: {}} >Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      <div className="c-right">
        <form ref={form}  onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user"  placeholder="  Name"/>
          <input required type="email" name="user_email" className="user" placeholder="  Email"/>
          <textarea required name="message" className="user" placeholder="  Message"/>
          <input type="submit" value="Send Mail" className="button"/>
          <span>{submited && "Thanks for Contacting me 😊"}</span>
          <span>{fail && {fail}}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;