"use client";
import { useState, useContext } from "react";
import AsideBar, { TopHeader } from "@/component/fundraiser/sidebar";
import "./photo.css";
import { FundraiserContext } from "@/context/FundraiserContext";

export default function page() {
  const fundraiserCtx = useContext(FundraiserContext); // Assuming FundraiserContext is already imported and set up

  const [images, setImages] = useState([]);

  const thisFileUpload = (event) => {
    const files = event.target.files;
    const uploadedImages = [];

    for (let i = 0; i < files.length; i++) {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        uploadedImages.push(e.target.result);
        if (uploadedImages.length === files.length) {
          setImages([...images, ...uploadedImages]);
        }
      };
      fileReader.readAsDataURL(files[i]);
    }
  };

  return (
    <>
      <TopHeader link="none" />
      <aside>
        <AsideBar />

        <section className="photowrapper">
          <div className="imgwrapper">
            <div className="imgcount">
              <p>
                Photos ({fundraiserCtx.image?.length + images.length})
                <a href="#">
                  <button onClick={thisFileUpload} className="ctaBtn">
                    <input
                      type="file"
                      id="file"
                      style={{ display: "none" }}
                      multiple
                      accept="image/*"
                      onChange={thisFileUpload}
                    />
                    <i className="fa-solid fa-arrow-up-from-bracket"></i>Upload
                    Photo
                  </button>
                </a>
              </p>
            </div>
            <div className="row">
              {fundraiserCtx.image?.map((img, index) => (
                <div className="col" key={index}>
                  <button type="button" className="delete">
                    <i className="fa-solid fa-trash"></i>
                  </button>
                  <img src={img} alt={`Image ${index}`} />
                </div>
              ))}
              {images.map((img, index) => (
                <div className="col" key={fundraiserCtx.image.length + index}>
                  <button type="button" className="delete">
                    <i className="fa-solid fa-trash"></i>
                  </button>
                  <img src={img} alt={`Uploaded Image ${index}`} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </aside>
    </>
  );
}
