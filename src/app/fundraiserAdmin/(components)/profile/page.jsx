"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Cookies } from "react-cookie";
import useAuth from "@/context/auth";
import "./module.profile.css"; // Make sure to adjust the import path

export default function Page() {
  const { user } = useAuth("FUNDRAISER");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setPincode] = useState("");
  const [token, setToken] = useState("");
  const [number, setNumber] = useState("");
  const [dob, setDOB] = useState("");
  const [pan, setPan] = useState("");
  const [showAccountDetails, setShowAccountDetails] = useState(true);
  const cookies = new Cookies();
  const [imagePreview, setImagePreview] = useState(""); // State to store image preview URL

  useEffect(() => {
    const data = cookies.get("token");
    setToken(data || "");
    cookies.set("token", data || "");
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          "ngrok-skip-browser-warning": "true",
        },
      };
      const response = await axios.put(
        "https://allowing-shiner-needlessly.ngrok-free.app/fundRaiser/update",
        {
          firstName,
          lastName,
          email,
          address,
          state,
          city,
          country,
          pincode,
          number,
          dob,
          pan,
        },
        config
      );
      console.log(response);
    } catch (err) {
      console.log(err.message || "Something went wrong.");
    }
  };
  const handleImageUpload = async (e) => {
    console.log("Event:", e); // Log the entire event object for debugging

    if (e.target && e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("file", file);

      try {
        const config = {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
            "ngrok-skip-browser-warning": "true",
          },
        };

        const response = await axios.post(
          "https://allowing-shiner-needlessly.ngrok-free.app/fundRaiser/upload",
          formData,
          config
        );

        // Assuming the API response contains the uploaded image URL
        const imageUrl = response.data.imageUrl;
        setImagePreview(imageUrl);
        console.log("Image uploaded:", imageUrl);
      } catch (err) {
        console.log(err.message || "Something went wrong.");
      }
    } else {
      console.log("No file selected.");
    }
  };

  const reset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setAddress("");
    setState("");
    setCity("");
    setCountry("");
    setPincode("");
    setNumber("");
    setDOB("");
    setPan("");
  };

  useEffect(() => {
    const imgInp = document.getElementById("imgInp");
    const blah = document.getElementById("blah");

    if (imgInp && blah) {
      imgInp.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            blah.src = e.target.result;
          };
          reader.readAsDataURL(file);
        }
      });
    }

    return () => {
      if (imgInp) {
        imgInp.removeEventListener("change");
      }
    };
  }, []);

  return user ? (
    <>
      <section className="mainSection">
        <div className="leftSection">
          <a
            href="#"
            className="sidebarLink"
            onClick={() => setShowAccountDetails(true)}
          >
            <p className={`sideBar ${showAccountDetails ? "active" : ""}`}>
              <i className="fa-solid fa-user"></i> Account Details
            </p>
          </a>
          <a
            className="sidebarLink"
            onClick={() => setShowAccountDetails(false)}
          >
            <p className={`sideBar ${!showAccountDetails ? "active" : ""}`}>
              <i className="fa-regular fa-image"></i> Upload Profile Photo
            </p>
          </a>
        </div>
        <div className="rightSection">
          <div className="accountDetails">
            <h1>
              {showAccountDetails ? "Account Details" : "Upload Profile Photo"}
            </h1>
            {showAccountDetails ? (
              <form>
                <div className="firstpersonalDetail">
                  <span>
                    <span>
                      First Name <span className="compulsory">*</span>
                    </span>
                    <br />
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Enter your first name"
                      required
                    />
                  </span>
                  <span>
                    <span>
                      Last Name <span className="compulsory">*</span>
                    </span>
                    <br />
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Enter your last name"
                    />
                  </span>
                  <span>
                    <span>
                      Email <span className="compulsory">*</span>
                    </span>
                    <br />
                    <input
                      type="email"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                      id="email"
                      placeholder="Enter your e-mail"
                      required
                    />
                  </span>
                </div>
                <div className="secondpersonalDetail">
                  <span>
                    <span>
                      Address <span className="compulsory">*</span>
                    </span>
                    <br />
                    <input
                      type="text"
                      name="address"
                      onChange={(e) => setAddress(e.target.value)}
                      id="address"
                      placeholder="Enter your address"
                    />
                  </span>
                  <span>
                    <span>City</span>
                    <br />
                    <input
                      type="text"
                      name="city"
                      id="city"
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Enter your city"
                    />
                  </span>
                  <span>
                    <span>State</span>
                    <br />
                    <input
                      type="text"
                      name="state"
                      onChange={(e) => setState(e.target.value)}
                      id="state"
                      placeholder="Enter your state"
                    />
                  </span>
                </div>
                <div className="thirdpersonalDetail">
                  <span>
                    <span>Country</span>
                    <br />
                    <input
                      type="text"
                      name="country"
                      id="country"
                      onChange={(e) => setCountry(e.target.value)}
                      placeholder="Enter your country"
                    />
                  </span>
                  <span>
                    <span>Pincode</span>
                    <br />
                    <input
                      type="text"
                      name="pincode"
                      id="pincode"
                      onChange={(e) => setPincode(e.target.value)}
                      placeholder="Enter your pincode"
                    />
                  </span>
                  <span>
                    <span>
                      Mobile Number <span className="compulsory">*</span>
                    </span>
                    <br />
                    <input
                      type="number"
                      name="mobileNumber"
                      id="mobileNumber"
                      placeholder="Enter your mobile no."
                      maxLength="10"
                      onChange={(e) => setNumber(e.target.value)}
                      pattern="[1-9]{1}[0-9]{9}]"
                      required
                    />
                  </span>
                </div>
                <div className="fourthpersonalDetail">
                  <span>
                    <span>DOB</span>
                    <br />
                    <input
                      type="date"
                      name="PANnumber"
                      id="DOB"
                      onChange={(e) => setDOB(e.target.value)}
                      placeholder="Enter your PAN number"
                    />
                  </span>
                  <span>
                    <span>PAN Number</span>
                    <br />
                    <input
                      type="text"
                      onChange={(e) => setPan(e.target.value)}
                      name="PANnumber"
                      id="PANnumber"
                      placeholder="Enter your PAN number"
                    />
                  </span>
                </div>
                <div className="formButton">
                  <a href="#">
                    <button
                      type="reset"
                      onClick={reset}
                      className="fundButton donorButton"
                    >
                      Cancel
                    </button>
                  </a>
                  <button
                    type="submit"
                    onClick={handleUpdate}
                    className="fundButton"
                  >
                    Save
                  </button>
                </div>
              </form>
            ) : (
              <div>
                <img
                  id="blah"
                  src={imagePreview || "#"} // Set image source from state
                  alt="your image"
                  width="225px"
                  height="225px"
                />
                <br />
                <input
                  accept="image/*"
                  type="file"
                  id="imgInp"
                  onChange={(e) => handleImageUpload(e)} // Call handleImageUpload with the event object
                />

                <button
                  type="submit"
                  onClick={handleImageUpload}
                  className="fundButton"
                >
                  submit
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  ) : (
    "Loading..."
  );
}
