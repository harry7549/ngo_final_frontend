"use client";
import { usePathname } from "next/navigation";
import "./style.css";
export default function AsideBar() {
  const pathname = usePathname();

  return (
    <>
      <div className="leftAside">
        <div className="container">
          <a href="dashboard">
            <p>
              <img
                src="/images/dashboard.png"
                alt="dashboard"
                className="sidebarImg"
                height="16"
                width="16"
              />
              Dashboard
            </p>
          </a>
          <a href="update">
            <p>
              <img
                src="/images/circle.png"
                alt="fundraiser"
                className="sidebarImg"
                height="16"
                width="16"
              />
              Fundraiser
            </p>
          </a>
          <a href="photo">
            <p>
              <i className="fa-solid fa-image asideIcon"></i>Photos
            </p>
          </a>
          <a href="report">
            <p className={`tabButton ${pathname === "/photo" ? "active" : ""}`}>
              <img
                src="/images/table.png"
                alt="Report"
                className="sidebarImg"
                height="16"
                width="16"
              />
              Donations Report
            </p>
          </a>
        </div>
      </div>
    </>
  );
}
export const TopHeader = ({ link }) => {
  return (
    <>
      {" "}
      <section>
        <div className="main">
          <div className="leftSection">
            <div className="content">
              <h1>Heroes Who Shielded Us, Let's Shield Their Future.</h1>
              <p>
                Creating a society where every family of our defence
                <br /> martyrs & veterans is self-dependent and can live a<br />
                healthy life like us.
              </p>
            </div>
          </div>
          <div className="rightSection">
            <div className="imgArea">
              <img
                src="/images/FrontImage.png"
                alt="Soldiers"
                height="300"
                width="100"
              />
            </div>
          </div>
        </div>
        <div className="lowerPart">
          <p>
            Fundraising Page Link: <a href="#">{link}</a>
          </p>
        </div>
      </section>
    </>
  );
};
