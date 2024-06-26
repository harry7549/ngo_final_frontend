"use client";
import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import AsideBar, { TopHeader } from "@/component/fundraiser/sidebar";
import "./module.update.css";
import { FundraiserContext } from "@/context/FundraiserContext";
import useAuth from "@/context/auth";
import { Cookies } from "react-cookie";

export default function Update() {
  const { user } = useAuth("FUNDRAISER");
  const fundraiserCtx = useContext(FundraiserContext);

  const [token, setToken] = useState(null);
  const cookies = new Cookies();

  useEffect(() => {
    const data = cookies.get("token");
    setToken(data);
  }, [cookies]);

  const [target_amount, setTargetAmount] = useState();
  const [resolution, setResolution] = useState("");
  const [story, setMyStory] = useState("");
  const [money_raised_for, setRaisedFor] = useState("");

  useEffect(() => {
    if (fundraiserCtx.fundraiser_page) {
      const { target_amount, resolution, story, money_raised_for } =
        fundraiserCtx.fundraiser_page;
      setTargetAmount(parseInt(target_amount));
      setResolution(resolution || "");
      setMyStory(story || "");
      setRaisedFor(money_raised_for || "");
    }
  }, [fundraiserCtx.fundraiser_page]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        target_amount: parseInt(target_amount),
        resolution,
        story,
        money_raised_for,
      };
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const res = await axios.put(
        `https://allowing-shiner-needlessly.ngrok-free.app/fundraiser-page/updatePage/${fundraiserCtx.fundraiser_page?.id}`,
        data,
        config
      );
      console.log(res.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return user ? (
    <>
      <TopHeader link={`${fundraiserCtx.fundraiser_page?.id}`} />
      <aside>
        <AsideBar />

        <div className="rightAside">
          <h1>Update Fundraiser Page</h1>
          <form onSubmit={handleSubmit}>
            <div className="mainCol">
              <div className="firstCol">
                <label htmlFor="FundraisingTarget">
                  Fundraising Target (INR)*
                  <br />
                  <input
                    type="number"
                    min="1"
                    value={target_amount}
                    name="FundraisingTarget"
                    id="FundraisingTarget"
                    onChange={(e) => setTargetAmount(e.target.value)}
                  />
                </label>
                <label htmlFor="MyResolution">
                  About My Resolution *<br />
                  <textarea
                    value={resolution}
                    name="MyResolution"
                    id="MyResolution"
                    cols="30"
                    rows="10"
                    onChange={(e) => setResolution(e.target.value)}
                  ></textarea>
                </label>
              </div>
              <div className="secondCol">
                <label htmlFor="MyStory" className="aboutMe">
                  My Story *<br />
                  <textarea
                    name="MyStory"
                    value={story}
                    id="MyStory"
                    cols="30"
                    rows="16"
                    onChange={(e) => setMyStory(e.target.value)}
                  ></textarea>
                </label>
              </div>
            </div>
            <div className="thirdCol">
              <label htmlFor="MoneyRaised">
                Money Raised For *<br />
                <textarea
                  name="MoneyRaised"
                  value={money_raised_for}
                  id="MoneyRaised"
                  cols="30"
                  rows="5"
                  onChange={(e) => setRaisedFor(e.target.value)}
                ></textarea>
              </label>
            </div>
            <div className="submitButton">
              <button type="submit" className="formButton">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </aside>
    </>
  ) : (
    "null"
  );
}
