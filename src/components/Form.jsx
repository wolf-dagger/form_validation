import { useState } from "react";
import './form.css'

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [gender, setGender] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handlePhoneNumberChange = (event) => {
    const inputPhoneNumber = event.target.value;
    const numericPhoneNumber = inputPhoneNumber.replace(/\D/g, "");
    setPhone(numericPhoneNumber);
  };

  const handlePasswordChange = (event) => {
    const inputPassword = event.target.value;
    setPassword(inputPassword);

    if (inputPassword.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      firstName,
      lastName,
      email,
      dob,
      phone,
      gender,
      password,
    };
    setSubmittedData(formData);
  };

  return (
    <>
      <div className="container p-2 col-md-4">
        <form onSubmit={handleSubmit}>
          <div className="input-block mb-2">
            <label htmlFor="name" className="form-label">
              First Name
            </label>
            <input
              type="name"
              className="form-control"
              id="name"
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="input-block mb-2">
            <label htmlFor="lname" className="form-label">
              Last Name
            </label>
            <input
              type="name"
              className="form-control"
              id="lname"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="input-block mb-2">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="example@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-block mb-2">
            <label htmlFor="select">Gender</label>
            <select
              className="form-select form-select-sm w-50"
              aria-label="Small select example"
              id="select"
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div className="input-block mb-2">
            <label htmlFor="date" className="form-label">
              Date of Birth:
            </label>
            <input
              type="date"
              className="form-control"
              id="date"
              onChange={(e) => setDob(e.target.value)}
              required
            />
          </div>
          <div className="input-block mb-2">
            <label className="form-label" htmlFor="phone">
              Phone number
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={phone}
              className="form-control"
              placeholder="Phone Number"
              onChange={handlePhoneNumberChange}
              pattern="[0-9]*"
              maxLength={10}
              required
            />
          </div>
          <div className="input-block mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="password..."
              onChange={handlePasswordChange}
              required
              min={6}
            />
            {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <hr />

      {/* Displaing the dada below that has been submited */}

      {submittedData && (
        <div className="cardd">
          <div className="container p-2 col-md-4">
            <h3 className="mb-4">Submitted Data:</h3>
            <p>First Name: {submittedData.firstName}</p>
            <p>Last Name: {submittedData.lastName}</p>
            <p>Email: {submittedData.email}</p>
            <p>Gender: {submittedData.gender}</p>
            <p>Date of Birth: {submittedData.dob}</p>
            <p>Phone Number: {submittedData.phone}</p>
            <p>Password: {submittedData.password}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Form;
