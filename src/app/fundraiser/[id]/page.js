"use client";

import axios from "axios";
import "../../../component/module.fundraiser.css";

import { useEffect, useState } from "react";
// import Dashboard from "../(fundraiserAdmin)/(components)/dashboard/page";

export default function page({ params }) {
  const [fundraiser, setFundraiser] = useState({}); // Initialize fundraiser as an empty object
  const fundraiserID = params.id;
  console.log("af", fundraiserID);
  const [activeTab, setActiveTab] = useState("myStory");
  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/fundraiser-page/${fundraiserID}`
        );
        setFundraiser(response.data); // Set the response data to the state
        console.log(response); // Set the response data to the state
      } catch (error) {
        console.error("Error fetching fundraisers:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="box">
        <div className="banner">
          <div className="imgArea">
            <img
              src="/images/fundraisal.png"
              alt="Indian Military"
              className="mainImage"
              height="100%"
              width="100%"
            />
          </div>
        </div>
        <div className="hero" style={{ width: "100%" }}>
          <div className="mainGoal" style={{ width: "50%" }}>
            <div className="goal">
              <div className="subGoal">
                <p className="completeGoal">(50%)</p>
                <h2 className="currentGoal">
                  &#8377; {fundraiser.raised_amount}
                </h2>
                <p className="completeGoal">
                  of{" "}
                  <span className="totalGoal">
                    &#8377; {fundraiser.target_amount}
                  </span>{" "}
                  Goal
                </p>
              </div>
            </div>
          </div>
          <div className="resolution" style={{ width: "50%" }}>
            <h1 className="resolutionAbout">About My Resolution</h1>
            <p className="motivation">
              <br />
              {fundraiser.resolution}
            </p>
            <div className="resolutionBtn">
              <a href="#" className="resolutionLink">
                <button type="submit" className="mainbtn">
                  <i className="fa-solid fa-share-nodes"></i>Share
                </button>
              </a>
              <a href="#" className="resolutionLink">
                <button type="submit" className="mainbtn filled">
                  Contribute
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <article className="article">
        <button
          type="button"
          // className="userStory active"
          className={`userStory ${activeTab === "myStory" ? "active" : ""}`}
          onClick={() => handleTabChange("myStory")}
        >
          My Story
        </button>
        <button
          type="button"
          // className="userStory active"
          className={`userStory ${activeTab === "gallery" ? "active" : ""}`}
          onClick={() => handleTabChange("gallery")}
        >
          Gallery
        </button>
      </article>
      <aside className="mainAside">
        {activeTab === "myStory" ? (
          <div className="leftAside">
            <p className="aboutMe">
              {fundraiser.story || "No content to show"}
            </p>
            <h3 className="reason">Money Raised For</h3>
            <p className="aboutMe">{fundraiser.money_raised_for} </p>
          </div>
        ) : (
          //images
          <div className="leftAside">
            <img
              style={{ height: "200px", width: "200px" }}
              src="crawler.drawiofa39749d-f4de-4770-95f5-8aa6f737b3b0.png"
            />
          </div>
        )}
        <div className="rightAside">
          <div className="container">
            <h3 className="supporters">Our Supporters</h3>
            <div className="allSupporters">
              {fundraiser.supporters && fundraiser.supporters.length > 0 ? (
                fundraiser.supporters.map((supporter, index) => (
                  <p key={index} className="ourSupporters">
                    <i className="fa-sharp fa-solid fa-play rightTriangle"></i>
                    {supporter}
                  </p>
                ))
              ) : (
                <p>No supporters found.</p>
              )}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
