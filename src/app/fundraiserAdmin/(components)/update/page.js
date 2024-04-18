import AsideBar, { TopHeader } from "@/component/fundraiser/sidebar";
import "./module.update.css";
export default function update() {
  return (
    <>
      <TopHeader name="hey" />
      <aside>
        <AsideBar />

        <div className="rightAside">
          <h1>Update Fundraiser Page</h1>
          <form>
            <div className="mainCol">
              <div className="firstCol">
                <label htmlFor="FundraisingTarget">
                  Fundraising Target (INR)
                  <span>*</span>
                  <br />
                  <input
                    type="number"
                    name="FundraisingTarget"
                    id="FundraisingTarget"
                  />
                </label>
                <label htmlFor="MyStory">
                  About My Resolution <span>*</span>
                  <br />
                  <textarea
                    name="MyStory"
                    id="MyStory"
                    cols="30"
                    rows="10"
                  ></textarea>
                </label>
              </div>
              <div className="secondCol">
                <label htmlFor="MyStory" className="aboutMe">
                  My Story *<br />
                  <textarea
                    name="MyStory"
                    id="MyStory"
                    cols="30"
                    rows="16"
                  ></textarea>
                </label>
              </div>
            </div>
            <div className="thirdCol">
              <label htmlFor="MoneyRaised">
                Money Raised For *<br />
                <textarea
                  name="MoneyRaised"
                  id="MoneyRaised"
                  cols="30"
                  rows="5"
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
  );
}
