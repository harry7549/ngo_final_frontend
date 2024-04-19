"use client";
import Sidebar from "@/component/sidebar";
// export default GeneratePage;
import "./styles.css";
import { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import axios from "axios";

export default function page() {
  const cookies = new Cookies();
  const [loading, setloading] = useState(false);
  const [token, settoken] = useState(null);
  const [formData, setFormData] = useState({
    fundraiserEmail: "",
    amount: "",
    firstName: "",
    email: "",
    mobileNumber: "",
    bankDetail: "",
    donationmethod: "",
    donationDate: "",
    //
    lastName: "",
    address: "",
    city: "",
    state: "",
    county: "",
    pincode: "",
    pannumber: "",
    bankname: "",
    Bankbranchname: "",
  });
  useEffect(() => {
    const data = cookies.get("token");
    settoken(data);
  }, [cookies]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [errors, setErrors] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const newErrors = {};

    if (!formData.amount) {
      newErrors.amount = "Amount is required";
    }
    if (!formData.firstName) {
      newErrors.firstName = "First Name is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    }
    if (!formData.mobileNumber) {
      newErrors.mobileNumber = "Mobile Number is required";
    }
    if (!formData.bankDetail) {
      newErrors.bankDetail = "Reference Number is required";
    }
    if (!formData.paymentDate) {
      newErrors.paymentDate = "Donation Date is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // API Call
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.post(
        "http://localhost:3001/admin/addOfflineDonation",
        config,
        formData
      );
      if (response == 201) {
        console.log("success");
        console.log("API response:", response.data);
      }
      // Reset form after successful submission if needed

      setErrors({});
    } catch (error) {
      console.error("API error:", error);
      // Handle API error if needed
    }
  };
  return (
    <>
      {console.log(token)}
      <section className="mainSection">
        <div className="rightSection">
          <div className="rightpart">
            <h1 className="bigText">Fundraiser Information</h1>
            <form className="mainForm">
              <div className="fundraiserDetail">
                <span>
                  <span>
                    Fundraiser E-mail <span className="compulsory">*</span>
                  </span>
                  <br />
                  <input
                    type="text"
                    name="fundraiserEmail"
                    id="fundraiserEmail"
                    value={formData.fundraiserEmail}
                    onChange={handleChange}
                    placeholder="Enter your fundraiser e-mail"
                  />
                </span>
                <span>
                  <span>
                    Amount <span className="compulsory">*</span>
                  </span>
                  <br />
                  <input
                    type="number"
                    name="amount"
                    value={formData.fundraisermobileamount}
                    onChange={handleChange}
                    id="amount"
                    placeholder="Enter your amount"
                    required
                  />
                </span>
              </div>
              <h2>Personal Information</h2>
              <div className="personalDetail">
                <div className="firstpersonalDetail">
                  <span>
                    <span>
                      First Name <span className="compulsory">*</span>
                    </span>
                    <br />
                    <input
                      type="text"
                      value={formData.fundraiserfirstName}
                      onChange={handleChange}
                      name="firstName"
                      id="firstName"
                      placeholder="Enter your first name"
                      required
                    />
                  </span>
                  <span>
                    <span>Last Name</span>
                    <br />
                    <input
                      type="text"
                      name="lastName"
                      value={formData.fundraiserlastName}
                      onChange={handleChange}
                      id="lastName"
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
                      value={formData.fundraiseremail}
                      onChange={handleChange}
                      name="email"
                      id="email"
                      placeholder="Enter your e-mail"
                      required
                    />
                  </span>
                </div>
                <div className="secondpersonalDetail">
                  <span>
                    <span>Address</span>
                    <br />
                    <input
                      type="text"
                      value={formData.fundraiseraddress}
                      onChange={handleChange}
                      name="address"
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
                      value={formData.fundraisercity}
                      onChange={handleChange}
                      id="city"
                      placeholder="Enter your city"
                    />
                  </span>
                  <span>
                    <span>State</span>
                    <br />
                    <input
                      type="text"
                      value={formData.fundraiserstate}
                      onChange={handleChange}
                      name="state"
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
                      value={formData.fundraisercounty}
                      onChange={handleChange}
                      name="country"
                      id="country"
                      placeholder="Enter your country"
                    />
                  </span>
                  <span>
                    <span>Pincode</span>
                    <br />
                    <input
                      type="text"
                      value={formData.fundraiserpincode}
                      onChange={handleChange}
                      name="pincode"
                      id="pincode"
                      placeholder="Enter your pincode"
                    />
                  </span>
                  <span>
                    <span>
                      Mobile Number <span className="compulsory">*</span>
                    </span>
                    <br />
                    <input
                      type="text"
                      name="mobileNumber"
                      value={formData.fundraisermobileNumber}
                      onChange={handleChange}
                      id="mobileNumber"
                      placeholder="Enter your mobile no."
                      maxLength="10"
                      pattern="[1-9]{1}[0-9]{9}"
                      required
                    />
                  </span>
                </div>
              </div>
              <h2>Donation Information</h2>
              <div className="donationDetail">
                <div className="firstdonationDetail">
                  <span>
                    <span>PAN Number</span>
                    <br />
                    <input
                      type="text"
                      name="PANnumber"
                      value={formData.fundraiserpannumber}
                      onChange={handleChange}
                      id="PANnumber"
                      placeholder="Enter your PAN number"
                    />
                  </span>
                  <span>
                    <span>
                      Offline Payment Method
                      <span className="compulsory">*</span>
                    </span>
                    <br />
                    <input
                      type="text"
                      name="offlinePayment"
                      value={formData.fundraiserdonationmethod}
                      onChange={handleChange}
                      id="offlinePayment"
                      placeholder="Choose your payment method"
                      required
                    />
                  </span>
                  <span>
                    <span>
                      Reference Number <span className="compulsory">*</span>
                    </span>
                    <br />
                    <input
                      type="text"
                      name="bankDetail"
                      value={formData.fundraiserbankDetail}
                      onChange={handleChange}
                      id="bankDetail"
                      placeholder="Enter your Reference Number"
                      required
                    />
                  </span>
                </div>
                <div className="seconddonationDetail">
                  <span className="offlinePaymentDate">
                    <span>
                      Donation (Date) <span className="compulsory">*</span>
                    </span>
                    <br />
                    <input
                      type="date"
                      name="paymentDate"
                      id="paymentdate"
                      value={formData.fundraiserdonationDate}
                      onChange={handleChange}
                      className="paymentDate"
                      placeholder="Enter your Cheque/DD/NEFT date"
                      required
                    />
                  </span>
                  <span>
                    <span>Bank Name</span>
                    <br />
                    <input
                      type="text"
                      name="bankName"
                      id="bankName"
                      value={formData.fundraiserbankname}
                      onChange={handleChange}
                      placeholder="Enter your bank name"
                    />
                  </span>
                  <span>
                    <span>Bank Branch Name</span>
                    <br />
                    <input
                      type="text"
                      name="branchName"
                      id="branchName"
                      value={formData.fundraiserbankBranchName}
                      onChange={handleChange}
                      placeholder="Enter your branch name"
                    />
                  </span>
                </div>
              </div>
              <div className="formButton">
                <button type="reset" className="fundButton donorButton">
                  Cancel
                </button>
                <button type="submit" onClick={handleSubmit}>
                  {loading ? "Loading..." : "Submit"}
                </button>
                {Object.keys(errors).length > 0 && (
                  <div className="errorMessages">
                    {Object.values(errors).map((error, index) => (
                      <p key={index} style={{ color: "red" }}>
                        {error}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
