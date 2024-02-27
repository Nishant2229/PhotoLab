import React from "react";
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Contact Us</h2>
      <p className={classes.text}>
        For any inquiries or assistance, feel free to reach out to us via email
        or WhatsApp.
      </p>
      <p className={classes.text}>
        Email:{" "}
        <a href="mailto:nishantsahu342@gmail.com">nishantsahu342@gmail.com</a>
      </p>
      <p className={classes.text}>
        WhatsApp: <a href="tel:+918871246772">+91 8871246772</a>
      </p>
    </div>
  );
};

export default Contact;
