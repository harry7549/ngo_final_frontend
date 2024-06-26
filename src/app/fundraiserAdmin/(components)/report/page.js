"use client";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./report.css";
import AsideBar, { TopHeader } from "@/component/fundraiser/sidebar";
import { Cookies } from "react-cookie";
import { FundraiserContext } from "@/context/FundraiserContext";

export default function Page() {
  const [data, setData] = useState([]);
  const [token, setToken] = useState();
  const [filters, setFilters] = useState({
    from_date: null,
    to_date: null,
    donation_id: null,
    payment_option: null,
    payment_status: null,
  });
  const cookies = new Cookies();
  const fundraiserCtx = useContext(FundraiserContext);

  useEffect(() => {
    const data = cookies.get("token");
    setToken(data);
  }, [cookies]);

  useEffect(() => {
    fetchData();
  }, [filters, token]);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://allowing-shiner-needlessly.ngrok-free.app/fundRaiser/donations",
        {
          headers: {
            "ngrok-skip-browser-warning": "true",

            Authorization: `Bearer ${token}`,
          },
          params: filters, // Pass the filters directly to params
        }
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };
  function formatDate(dateString) {
    if (!dateString) {
      return "";
    }

    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return "";
    }

    const options = { day: "numeric", month: "long", year: "numeric" };
    return date.toLocaleDateString(undefined, options);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };

  console.log(data);

  const handleDownload = async () => {
    try {
      const requestOptions = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "ngrok-skip-browser-warning": "true",
        },
      };
      const response = await fetch(
        "https://allowing-shiner-needlessly.ngrok-free.app/fundRaiser/donations/download",
        requestOptions
      );
      const blob = await response.blob();
      const downloadUrl = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = downloadUrl;
      a.download = "DonationData.xlsx";
      a.click();
      URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };
  return (
    <>
      <TopHeader link={`${fundraiserCtx.fundraiser_page?.id}`} />
      <aside>
        <AsideBar />

        <div className="rightAside">
          <h1>Donation Report</h1>
          <form onSubmit={handleSubmit}>
            <div className="upperForm">
              <span>
                <span>FromDate</span>
                <br />
                <input
                  type="date"
                  name="from_date"
                  id="from_date"
                  value={filters.from_date}
                  onChange={handleInputChange}
                />
              </span>
              <span>
                <span>To Date</span>
                <br />
                <input
                  type="date"
                  name="to_date"
                  id="to_date"
                  value={filters.to_date}
                  onChange={handleInputChange}
                />
              </span>
              <span>
                <span>Donation Id</span>
                <br />
                <input
                  type="text"
                  name="donation_id"
                  id="donation_id"
                  value={filters.donation_id}
                  onChange={handleInputChange}
                />
              </span>
              <span>
                <label htmlFor="payment_option">Payment Options</label>
                <br />
                <input
                  list="payment_option"
                  name="payment_option"
                  id="payment_option"
                  value={filters.payment_option}
                  onChange={handleInputChange}
                />
                <datalist id="payment_option">
                  <option value="Edge" />
                  <option value="Firefox" />
                  <option value="Chrome" />
                  <option value="Opera" />
                  <option value="Safari" />
                </datalist>
              </span>
            </div>
            <div className="lowerForm">
              <p>
                <label htmlFor="payment_status">Payment Status</label>
                <br />
                <input
                  list="payment_status"
                  name="payment_status"
                  id="payment_status"
                  value={filters.payment_status}
                  onChange={handleInputChange}
                />
                <datalist id="paymentStatusOptions">
                  <option value="success" />
                  <option value="Failed" />
                  <option value="pending" />
                </datalist>
              </p>

              <button type="submit" className="formsearchButton">
                <i className="fa-solid fa-magnifying-glass"></i> Search
              </button>
            </div>
          </form>

          <button
            type="button"
            onClick={handleDownload}
            className="downloadExcel"
          >
            <i className="fa-solid fa-file-excel"></i> Download Excel
          </button>
          <table>
            <thead>
              <tr>
                <th>Donation Id</th>
                <th>Donation Date</th>
                <th>Donor Details</th>
                <th>Fundraiser Details</th>
                <th>Amount</th>
                <th>Payment Option</th>
                <th>Payment Status</th>
                <th>Certificate</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item) => (
                <tr key={item.donation_id_frontend}>
                  <td>{item.donation_id_frontend}</td>
                  <td>{formatDate(item.donation_date)} </td>
                  <td>
                    {item.donor_name}
                    <br />
                    {item.donor_email}
                    <br />
                    {item.donor_phone}
                  </td>
                  <td>
                    {item.fundraiser?.firstName}
                    <br />
                    {item.fundraiser?.email}
                  </td>
                  <td>{item.amount}</td>
                  <td>{item.payment_type}</td>
                  <td>{item.payment_status}</td>
                  <td>{item.certificate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </aside>
    </>
  );
}
