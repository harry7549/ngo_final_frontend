import React from "react";
import "./report.css";
import AsideBar, { TopHeader } from "@/component/fundraiser/sidebar";

export default function page() {
  
  return (
    <>
      <TopHeader link="http:google.com" />
      <aside>
        <AsideBar />

        <div className="rightAside">
          <h1>Donation Report</h1>
          <form>
            <div className="upperForm">
              <span>
                <span>FromDate</span>
                <br />
                <input type="date" name="fromDate" id="fromDate" />
              </span>
              <span>
                <span>ToDate</span>
                <br />
                <input type="date" name="ToDate" id="ToDate" />
              </span>
              <span>
                <span>Donation Id</span>
                <br />
                <input type="text" name="donationId" id="donationId" />
              </span>
              <span>
                <label htmlFor="browser">Payment Options</label>
                <br />
                <input list="browsers" name="browser" id="browser" />
                <datalist id="browsers">
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
                <label htmlFor="paymentStatus">Payment Status</label>
                <br />
                <input
                  list="paymentStatusOptions"
                  name="paymentStatus"
                  id="paymentStatus"
                />
                <datalist id="paymentStatusOptions">
                  <option value="Success" />
                  <option value="Failed" />
                  <option value="Pending" />
                </datalist>
              </p>
              <button type="button" className="formsearchButton">
                <a href="#">
                  <i className="fa-solid fa-magnifying-glass"></i> Search
                </a>
              </button>
            </div>
          </form>
          <button type="button" className="downloadExcel">
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
              <tr>
                <td>1</td>
                <td>04 April 2024</td>
                <td>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nostrum sequi quidem temporibus veritatis nulla minus mollitia
                  illum saepe, adipisci a quibusdam doloribus consequuntur
                  aperiam tempore possimus assumenda quo nam dolorem!
                </td>
                <td></td>
                <td>10,000</td>
                <td>Office</td>
                <td>Success</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </aside>
    </>
  );
}
