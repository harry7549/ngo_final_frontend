"use client";
import AsideBar, { TopHeader } from "@/component/fundraiser/sidebar";
import "../report/report.css";
export default function page() {
  const thisFileUpload = () => {
    document.getElementById("file").click();
  };

  return (
    <>
      <TopHeader link="none" />
      <aside>
        <AsideBar />

        <section className="photowrapper">
          {/* start img uplodar */}
          <div className="imgwrapper">
            <div className="imgcount">
              <p>
                Photos (21)
                <a href="#">
                  <button onClick={thisFileUpload} className="ctaBtn">
                    <input
                      type="file"
                      id="file"
                      style={{ display: "none" }}
                      multiple
                    />
                    <i className="fa-solid fa-arrow-up-from-bracket"></i>Upload
                    Photo
                  </button>
                </a>
              </p>
            </div>
            <div className="row">
              <div className="col">
                <button type="button" className="delete">
                  <i className="fa-solid fa-trash"></i>
                </button>
                <img src="/images/facebook.png" alt="logo" />
              </div>
              <div className="col 1">
                <button type="button" className="delete">
                  <i className="fa-solid fa-trash"></i>
                </button>
                <img src="/images/facebook.png" alt="logo" />
              </div>
              <div className="col 2">
                <button type="button" className="delete">
                  <i className="fa-solid fa-trash"></i>
                </button>
                <img src="/images/facebook.png" alt="inform" />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <button type="button" className="delete">
                  <i className="fa-solid fa-trash"></i>
                </button>
                <img src="/images/facebook.png" alt="logo" />
              </div>
              <div className="col 1">
                <button type="button" className="delete">
                  <i className="fa-solid fa-trash"></i>
                </button>
                <img src="/images/facebook.png" alt="formimg" />
              </div>
              <div className="col 2">
                <button type="button" className="delete">
                  <i className="fa-solid fa-trash"></i>
                </button>
                <img src="/images/facebook.png" alt="logo" />
              </div>
            </div>
          </div>
        </section>
      </aside>
    </>
  );
}
