"use client";
import { useEffect, useState } from "react";
import axios from "axios";
// import "./module.fundraiser.css";
// import "../../component/module.admin.css";
import Loading from "@/app/loading";
import useAuth from "@/context/auth";
import "./module.admin.css";

import "./adddonation/styles.css";
import Sidebar from "../../component/sidebar";
import Link from "next/link";
export default function FundraiserPage() {
  const { user } = useAuth("ADMIN");

  const [fundraisers, setFundraisers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const response = await axios.get(
    //       "https://661b896f65444945d04faf34.mockapi.io/fundrasier"
    //     );
    //     setFundraisers(response.data); // Set the response data to the state
    //   } catch (error) {
    //     setError("Error fetching fundraisers. Please try again later.");
    //     console.error("Error fetching fundraisers:", error);
    //   }
    // };
    // fetchData();
  }, []);

  return user ? (
    <>
      <section>
        <Sidebar />
        <div className="rightwrapper">
          <div className="rightmain">
            <div className="mainbox">
              <div className="box">
                <img src="/images/coins-hand.svg" width="58px" height="58px" />
                <p>
                  <span>2,00,000/-</span>
                  <span>TotalDonation</span>
                </p>
              </div>
              <div className="box secend">
                <img src="/images/Icon.svg" />
                <p>
                  <span>234</span>
                  <span>Total Fundraisers</span>
                </p>
              </div>
              <div className="box">
                <img src="/images/Icon.svg" />
                <p>
                  <span>200</span>
                  <span>Active Fundraisers</span>
                </p>
              </div>
              <div className="box secend">
                <img src="/images/coins-03.svg" />
                <p>
                  <span>35,000/-</span>
                  <span>Today’s Donation</span>
                </p>
              </div>
              <div className="box">
                <img src="/images/coins-03.svg" />
                <p>
                  <span>2,00,000/-</span>
                  <span>Last Month Donation</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  ) : (
    <Loading />
  );
}
