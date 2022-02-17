import React from "react";
import "./Contact.css";
const Clicked = () => {
  alert("Hey, Thanks For Giving You Data");
};
const Contact = () => {
  return (
    <div>
      <div className="main11">
        <h3>Contact Form</h3>
        <div className="container">
          <form>
            <label htmlFor="fname">First Name</label>
            <input className="inputar" type="text" placeholder="Your name.." />
            <label htmlFor="lname">Last Name</label>
            <input
              className="inputar"
              type="text"
              placeholder="Your last name.."
            />
            <label htmlFor="country">Country</label>
            <select id="country">
              <option value="australia">Nepal</option>
              <option value="canada">India</option>
              <option value="usa">China</option>
            </select>
            <label htmlFor="subject">Subject</label>
            <textarea
              placeholder="Write something.."
              style={{ height: "200px" }}
            />
            <button
              className="btn btn-danger"
              style={{ width: "100%" }}
              onClick={Clicked}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
