import { useState } from "react";
import Footer from "./Footer";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [messege, setMessege] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState({
    notFill: false,
    invalid: false,
  });
  const [messegeError, setMessegeError] = useState(false);

  // if name field change this function going to be run
  const nameHandle = (e) => {
    e.preventDefault();
    // name field not fill error reset
    setNameError((pre) => pre && false);
    setName(e.target.value);
  };

  // if email field change this function going to be run
  const emailHandle = (e) => {
    e.preventDefault();

    // if statement for check name field have some value
    if (name.length > 0) {
      // email error reset, they have two type check, is mail field have value and is it valid.
      setEmailError((pre) => {
        const temp = { ...pre };
        if (temp.notFill) {
          temp.notFill = false;
        }

        if (temp.invalid) {
          temp.invalid = false;
        }

        return temp;
      });
      setEmail(e.target.value);
    } else {
      // set name field not filled error to true
      setNameError(true);
    }
  };

  const messegeHandle = (e) => {
    e.preventDefault();

    // if statement for check name and email fields have values
    if (name.length > 0 && email.length > 0) {
      // if statement for check email address is valid
      if (
        !email
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
      ) {
        // if not valid email address, set email invalid error to ture
        setEmailError((pre) => {
          const temp = { ...pre };
          temp.invalid = true;
          return temp;
        });
      } else {
        setMessege(e.target.value);
      }

      // messege error reset
      setMessegeError((pre) => pre && false);
    } else {
      // check name field have not a value and set error to true
      if (name.length <= 0) {
        setNameError(true);
      }

      // check email field have not a value and set error to true.
      if (email.length <= 0) {
        setEmailError((pre) => {
          const temp = { ...pre };
          if (!temp.notFill) {
            temp.notFill = true;
          }
          return temp;
        });
      }
    }
  };

  const formSubmitHandle = (e) => {
    e.preventDefault();

    if (name.length > 0 && email.length > 0 && messege.length > 0) {
      // if name, email, messege fields have values then console log those values as table view.
      console.table({
        Name: name,
        Email: email,
        Messege: messege,
      });
    } else {
      // check name field have not a value and set error to true
      if (name.length <= 0) {
        setNameError(true);
      }

      // check email field have not a value and set error to true.
      if (email.length <= 0) {
        setEmailError((pre) => {
          const temp = { ...pre };
          if (!temp.notFill) {
            temp.notFill = true;
          }
          return temp;
        });
      }

      // check messege field have not a value and set error to true
      if (messege.length <= 0) {
        setMessegeError(true);
      }
    }
  };

  return (
    <section className="contact">
      <div className="contact__left">
        <h2>Contact Me</h2>

        <form method="post">
          <div className="contact__formBoxWrapper">
            <div
              className="contact__formBox"
              style={{
                borderColor: `${nameError ? "red" : "var(--main-color)"}`,
              }}
            >
              <p style={{ color: `${nameError ? "red" : "black"}` }}>
                Your Name
              </p>
              <input
                type="text"
                placeholder="Enter Your Name"
                value={name}
                onChange={nameHandle}
              />
            </div>
            {nameError && (
              <p
                style={{
                  color: "red",
                  fontWeight: 600,
                  fontSize: "12px",
                  marginTop: "3px",
                }}
              >
                You Must Fill Your Name
              </p>
            )}
          </div>

          <div className="contact__formBoxWrapper">
            <div
              className="contact__formBox"
              style={{
                borderColor: `${
                  emailError.notFill || emailError.invalid
                    ? "red"
                    : "var(--main-color)"
                }`,
              }}
            >
              <p
                style={{
                  color: `${
                    emailError.notFill || emailError.invalid ? "red" : "black"
                  }`,
                }}
              >
                Your Email
              </p>
              <input
                type="text"
                placeholder="Enter Your Email"
                value={email}
                onChange={emailHandle}
              />
            </div>
            {emailError.notFill && (
              <p
                style={{
                  color: "red",
                  fontWeight: 600,
                  fontSize: "12px",
                  marginTop: "3px",
                }}
              >
                You Must Fill Your E-mail
              </p>
            )}
            {emailError.invalid && (
              <p
                style={{
                  color: "red",
                  fontWeight: 600,
                  fontSize: "12px",
                  marginTop: "3px",
                }}
              >
                You Must Enter Valid E-mail
              </p>
            )}
          </div>

          <div className="contact__formBoxWrapper">
            <div
              className="contact__formBox"
              style={{
                borderColor: `${messegeError ? "red" : "var(--main-color)"}`,
              }}
            >
              <p style={{ color: `${messegeError ? "red" : "black"}` }}>
                Your Messege
              </p>
              <textarea
                rows="6"
                placeholder="Enter Your Messege"
                value={messege}
                onChange={messegeHandle}
              ></textarea>
            </div>
            {messegeError && (
              <p
                style={{
                  color: "red",
                  fontWeight: 600,
                  fontSize: "12px",
                  marginTop: "3px",
                }}
              >
                You Must Fill Your Messege
              </p>
            )}
          </div>

          <button type="submit" onClick={formSubmitHandle}>
            Submit
          </button>
        </form>

        <Footer />
      </div>
      <div className="contact__right"></div>
    </section>
  );
};

export default Contact;
