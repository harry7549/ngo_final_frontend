import Sidebar, { TopHeader } from "@/component/fundraiser/sidebar";
import "./dashboard.css";
import AsideBar from "@/component/fundraiser/sidebar";
export default function Dashboard() {
  return (
    <>
      <TopHeader />
      <aside>
        <AsideBar />
        <div className="rightAside">
          <div className="upperPortion">
            <h2>Welcome to your Support our Heroes Account!</h2>
          </div>
          <div className="lowerPortion">
            <div className="donors">
              <div className="totalRaise">
                <p>
                  <i className="fa-solid fa-coins"></i>Total Amount Raised
                </p>
                <p className="amtMoney">&#8377; 4,84,100</p>
              </div>
              <div className="totalDonors">
                <p>
                  <i className="fa-solid fa-hand-holding-heart"></i>No. of
                  Donors
                </p>
                <p className="no-donor">20</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
