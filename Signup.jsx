import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    profilePic: "",
    phoneNo: "",
    password: "",
    address: "",
  });

//   const [loading, setLoading] = useState(false);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    // setLoading(true);
    try {
      const response = await axios.post("http://localhost:3500/signupUser", formData);
      console.log(response);

      if (response.data.msg === "User Created Successfully") {
        toast.success("Signup Successfull 😎");
      }
    } catch (error) {
      const errorMsg = error.response?.data?.msg || "Something Went Wrong";
      toast.error(errorMsg);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <ToastContainer position="top-right" autoClose={2500} />
      <div className="card p-4 shadow-lg" style={{ width: "600px" }}>
        <h2 className="text-center">Signup Form</h2>
        <form onSubmit={submitHandler}>
          <div className="row">
            {/* left-column */}
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="f-Name" className="form-label">
                  First Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="fName"
                  id="f-Name"
                  value={formData.fName}
                  onChange={changeHandler}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="l-Name" className="form-label">
                  Last Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="lName"
                  id="l-Name"
                  value={formData.lName}
                  onChange={changeHandler}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email:
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={changeHandler}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="profile-pic" className="form-label">
                  Profile Pic:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="profilePic"
                  id="profile-pic"
                  value={formData.profilePic}
                  onChange={changeHandler}
                />
              </div>
            </div>
            {/* Right-column */}
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone Number:
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="phoneNo"
                  id="phone"
                  value={formData.phoneNo}
                  onChange={changeHandler}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password:
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={changeHandler}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">
                  Address:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  id="address"
                  value={formData.address}
                  onChange={changeHandler}
                  required
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100 mt-1"
            // disabled={loading}
            style={{ fontSize: "25px", fontWeight: "bold" }}
          >
            {/* {loading ? "Signing Up..." : "Signup"} */}
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
