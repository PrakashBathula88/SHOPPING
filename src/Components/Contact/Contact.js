import React, { useState } from "react";
import axios from "axios";

import "../Contact/Contact.css";
const Contact = () => {
  const [name, SetName] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, SetEmail] = useState("");
  const [number, SetNumber] = useState("");
  const [descrip, setDesc] = useState("");
  const [Details, SetDetails] = useState([]);

  const ToggleContactSubmit = () => {
    const ContactItemList = { name, email, number, lastname, descrip };
    SetDetails([...Details, ContactItemList]);
    axios
      .post(
        "https://commerce-24c08-default-rtdb.firebaseio.com/cart.json",
        ContactItemList
      )

      .then((response) => {
        console.log(response.data);
        SetName("");
        SetEmail("");
        SetNumber("");
        setlastname("");
        setDesc("");
      })

      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="All_contacts">
      <div className="wrapping">
      <div className="Contact_name">
        <h1>Contact us</h1>
        <p>
          Now to get with touch with us? Either fill ou the form With your
          Inquiry or <br />
          find the department mail You'd like to contact below
        </p>
      </div>

      <div className="Contact_page">
        <div>
          <label>First name</label>
          <input
            type="text"
            value={name}
            onChange={(event) => {
              SetName(event.target.value);
            }}
          ></input>
        </div>
        <div>
          <label>Last name</label>
          <input
            type="text"
            value={lastname}
            onChange={(event) => {
              setlastname(event.target.value);
            }}
          ></input>
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(event) => {
              SetEmail(event.target.value);
            }}
          ></input>
        </div>
        <div>
          <label>Phone Number</label>
          <input
            type="text"
            value={number}
            onChange={(event) => {
              SetNumber(event.target.value);
            }}
          ></input>
        </div>
        <div className="Email_contact">
          <div>
          <label>What can we help you with?</label>
          <input
            type="text"
            value={descrip}
            onChange={(event) => {
              setDesc(event.target.value);
            }}
          ></input>
          </div>
        </div>
      </div>
      
        <button onClick={ToggleContactSubmit} type="submit">Send</button>
        </div>

        <div className="generix">
         <h1>The Generics</h1>
        </div>
      
    </div>
  );
};

export default Contact;
