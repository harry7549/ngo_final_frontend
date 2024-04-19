"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import "./fundraisersAdmin.css";

// import "./module.fundraiser.css";
import "../../../component/module.admin.css";
import useAuth from "@/context/auth";
import Sidebar from "../../../component/sidebar";
export default function FundraiserPage() {
  const [cookies, setCookie] = useCookies(["token"]);
  const [state, setstate] = useState();
  const { user } = useAuth("ADMIN");

  const [fundraisers, setFundraisers] = useState([]);
  const [error, setError] = useState(null);
  const [active, setactive] = useState(false);

  const [header, setheader] = useState();
  useEffect(() => {
    const token = cookies.token;
    const headers = { Authorization: `Bearer ${token}` };
    setheader(headers);
    console.log(token);

    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/admin/fundraiser",
          { headers }
        );
        setFundraisers(response.data);
        // setFundraisers((e)=>console.log(e[0].status)) // Set the response data to the state
      } catch (error) {
        setError("Error fetching fundraisers. Please try again later.");
        console.error("Error fetching fundraisers:", error);
      }
    };
    fetchData();
  }, []);

  return user ? (
    <section>
      <Sidebar />
      <div className="rightSection">
        <div className="rightsubSection">
          <h1>Fundraiser</h1>
          <table className="adminTable">
            <tr>
              <th className="tableHead">Id</th>
              <th className="tableHead">Name</th>
              <th className="tableHead">Email</th>
              <th className="tableHead">Phone Number</th>
              <th className="tableHead">URL</th>
              <th className="tableHead">Status</th>
              <th className="tableHead">Edit</th>
            </tr>
            <tbody>
              {fundraisers.map((fundraiser) => (
                <tr key={fundraiser.fundraiser_id}>
                  <td>{fundraiser.f_id}</td>
                  <td>{fundraiser.firstName}</td>
                  <td>{fundraiser.email}</td>
                  <td>{fundraiser.mobile_number}</td>
                  <td>
                    http://localhost:3000/fundraiser/{fundraiser.fundraiser_id}
                  </td>
                  <td>
                    <label className="switch">
                      <input
                        type="checkbox"
                        onChange={() => {
                          // Toggle the status locally
                          const updatedStatus = !fundraiser.status;
                          console.log(updatedStatus);
                          // Update the status in the state
                          setFundraisers((prevFundraisers) =>
                            // console.log(prevFundraisers),
                            prevFundraisers.map((item) =>
                              item.id === fundraiser.id
                                ? { ...item, status: updatedStatus }
                                : item
                            )
                          );
                          // Make API request to update status
                          console.log("aa", header);
                          axios(
                            {
                              method: "post",
                              url: `http://localhost:3001/admin/fundraiser/status/${fundraiser.fundraiser_id}`,
                              headers: header,
                            }
                            // { status: updatedStatus }
                          );
                        }}
                        defaultChecked={fundraiser.status === "active"}
                      />
                      <span className="slider round"></span>
                    </label>
                  </td>
                  <td>
                    <a href="#">
                      <i className="fa-solid fa-pen-to-square editText"></i>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  ) : (
    "loading"
  );
}
