import React, { useState } from "react";
import emailjs from "emailjs-com";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const ContactThree = (props) => {
  const [rnName, setRnName] = useState("");
  const [rnEmail, setRnEmail] = useState("");
  const [rnSubject, setRnSubject] = useState("");
  const [rnMessage, setRnMessage] = useState("");
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (rnName && rnEmail) {
      emailjs
        .send(
          "service_kizq2jc",
          "template_kelvz78",
          {
            rnEmail: rnEmail,
            rnSubject: rnSubject,
            message: rnMessage,
            from_name: rnName,
          },
          "user_mSOu4qc7NdtC3EkKkXIae"
        )
        .then(
          (result) => {
            handleClick();
          },
          (error) => {
            console.log(error.text);
          }
        );
      setRnName("");
      setRnEmail("");
      setRnSubject("");
      setRnMessage("");
    } else {
      alert("Please fill in the contact form before submitting");
    }
  };

  return (
    <div className="contact-form--1">
      <div className="container">
        <center>
          <div className="col-lg-8 order-2 order-lg-1">
            <div className="section-title text-left mb--50">
              <h2 className="title">{props.contactTitle}</h2>
            </div>
            <div className="form-wrapper">
              <form onSubmit={sendEmail}>
                <label style={{ float: "left", width: "48%" }} htmlFor="item01">
                  <input
                    type="text"
                    name="name"
                    id="item01"
                    value={rnName}
                    onChange={(e) => {
                      setRnName(e.target.value);
                    }}
                    placeholder="Your Name *"
                  />
                </label>

                <label
                  style={{ float: "right", width: "48%" }}
                  htmlFor="item02"
                >
                  <input
                    type="email"
                    name="email"
                    id="item02"
                    value={rnEmail}
                    onChange={(e) => {
                      setRnEmail(e.target.value);
                    }}
                    placeholder="Your email *"
                  />
                </label>

                <label htmlFor="item03">
                  <input
                    type="text"
                    name="subject"
                    id="item03"
                    value={rnSubject}
                    onChange={(e) => {
                      setRnSubject(e.target.value);
                    }}
                    placeholder="Write a Subject"
                  />
                </label>
                <label htmlFor="item04">
                  <textarea
                    type="text"
                    id="item04"
                    name="message"
                    value={rnMessage}
                    onChange={(e) => {
                      setRnMessage(e.target.value);
                    }}
                    placeholder="Your Message"
                  />
                </label>
                <button
                  className="rn-btn btn-solid"
                  type="submit"
                  value="submit"
                  name="submit"
                  id="mc-embedded-subscribe"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </center>
      </div>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Email sent!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ContactThree;
