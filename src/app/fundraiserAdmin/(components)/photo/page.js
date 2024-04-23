"use client";
import { useState, useContext, useEffect } from "react";
import AsideBar, { TopHeader } from "@/component/fundraiser/sidebar";
import "./photo.css";
import { FundraiserContext } from "@/context/FundraiserContext";
import Image from "next/image";

export default function page() {
  const [fundraiser, setFundraiser] = useState({}); // Initialize



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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "true",
          },
        };
        const response = await axios.get(
          `https://allowing-shiner-needlessly.ngrok-free.app/fundraiser-page/${fundraiserID}`,
          config
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
      <TopHeader link="none" />
      <aside>
        <AsideBar />

        <section className="photowrapper">
          <div class="imgwrapper">
            <div class="imgcount">
              <p>
                Photos (21)
                <a href="#">
                  <button type="button" class="ctaBtn">
                    <i class="fa-solid fa-arrow-up-from-bracket"></i>Upload
                    Photo
                  </button>
                </a>
              </p>
            </div>
            <div class="row">
              {fundraiser?.gallery?.map((image, index) => (
                <div key={index} className="galleryImage">
                  <h1>{image}</h1>

                  <Image
                    src={`https://allowing-shiner-needlessly.ngrok-free.app/fundRaiser/fundraiser-page/${image}`}
                    alt={`Image ${image}`}
                    className="galleryImg"
                    height="200"
                    width="200"
                  />
                </div>
              ))}
              <div class="col">
                <button type="button" class="delete">
                  <i class="fa-solid fa-trash"></i>
                </button>
                <img src="img\logo.png" />
              </div>
            </div>
          </div>
        </section>
      </aside>
    </>
  );
}
