import React from "react";

export default function Contact() {
  const formGroup = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000",
    padding: "20px",
  };
  const formInputs = {
    width: "50%",
    height: "40px",
    margin: "10px",
  };
  const formButton = {
    width: "50%",
    marginTop: "35px",
  };
  const h1 = {
    color: "white",
  };
  return (
    <form style={formGroup}>
      <h1 style={h1}>Contact Me</h1>
      <div class="form-group" style={formInputs}>
        <label for="exampleInputInput1"></label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="First Name"
          placeholder="First Name"
        ></input>
      </div>
      <div class="form-group" style={formInputs}>
        <label for="exampleInputEmail1"></label>
        <input
          type="email"
          class="form-control is-invalid"
          id="exampleInputPassword1"
          placeholder="Email"
        ></input>
      </div>
      <div class="form-group" style={formInputs}>
        <label
          class="form-check-label"
          for="exampleFormControlTextArea1"
        ></label>
        <textarea
          type="text"
          class="form-control"
          id="exampleForomTextar"
          placeholder="Type message here"
        ></textarea>
      </div>
      <br />
      <button type="submit" class="btn btn-primary" style={formButton}>
        Submit
      </button>
    </form>
  );
}
